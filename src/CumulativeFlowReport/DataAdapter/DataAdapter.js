import moment from "moment";

export function convertIssueChangelogToCumulativeFlow(issue, workflow) {
    return {
        id: issue.id,
        key: issue.key,
        fields: issue.fields,
        cumulativeFlow: calculateCumulativeFlowData(issue, workflow)
    };

    function calculateCumulativeFlowData(issue, workflow) {
        const sampleEntry = createEmptyEntry(issue, workflow);
        const data = [];
        const filteredHistories = pruneHistories(issue);
        if(filteredHistories.length > 0){
            let currDate = moment(issue.fields.created, 'YYYY-MM-DD');
            let dataIndex = 0;
            filteredHistories.forEach(history => {
                const status = history.items[0].fromString;
                const transitionDate = moment(history.created, 'YYYY-MM-DD');
                while (currDate.isBefore(transitionDate)) {
                    data[dataIndex] = Object.assign({}, sampleEntry, {[status]: 1}, {date: currDate.toISOString(true).split("T")[0]});
                    dataIndex++;
                    currDate.add(1, 'days');
                }
                currDate = transitionDate;
            });
            const lastStatus = filteredHistories[filteredHistories.length - 1].items[0].toString;
            data[dataIndex] = Object.assign({}, sampleEntry, {[lastStatus]: 1}, {date: currDate.toISOString(true).split("T")[0]});
        }
        return data
    }

    function createEmptyEntry(issue, workflow) {
        const entry = {};
        const issueType = workflow.filter(issueType => issueType.name === issue.fields.issuetype.name);
        if(!issueType || issueType.length === 0){
            throw new Error("issue " + issue.key + " has issue type that is not present in the valid issueType values for the project (provided by the 'GET /rest/api/2/project/{projectIdOrKey}/statuses' endpoint)")
        }
        issueType[0].statuses.forEach(status => entry[status.name] = 0);
        pruneHistories(issue).forEach(history => {
            if(!(history.items[0].fromString in entry)){//TODO: change to has own property?
                entry[history.items[0].fromString] = 0;
            }
            if(!(history.items[0].toString in entry)){
                entry[history.items[0].toString] = 0;
            }
        });

        return entry;
    }

    function pruneHistories(issue) {
        return issue.changelog.histories
            .filter(history => history.items.some(item => item.field === "status"))
            .map(history => {
                const items = history.items;
                history.items.forEach((item, index) => {
                    if (item.field !== "status") {
                        items.splice(index, 1)
                    }
                });
                return history;
            });
    }
}


export function mergeCumulativeFlowData(data1, data2) {
    if(data1.length > 0 && data2.length > 0){
        const result = [];
        const data1HasEarlierStart = moment(data1[0].date).isBefore(moment(data2[0].date));
        const data1HasLaterEnd = moment(data1[data1.length - 1].date).isAfter(moment(data2[data2.length - 1].date));
        const [dataWithEarlierStart, dataWithLaterStart] = data1HasEarlierStart ? [data1, data2] : [data2, data1];
        const [dataWithLaterEnd, dataWithEarlierEnd] = data1HasLaterEnd ? [data1, data2] : [data2, data1];

        const date = data1HasEarlierStart ? moment(data1[0].date).clone() : moment(data2[0].date).clone();
        let earlierStartIndex = 0;
        let laterStartIndex = 0;
        let resultIndex = 0;
        while (date.isBefore(dataWithLaterStart[0].date)) {
            if(earlierStartIndex < dataWithEarlierStart.length){
                if(!(date.isSame(dataWithEarlierStart[earlierStartIndex].date))){
                    console.log("date = " + date.toISOString(true) + " dataWithEarlierStart[earlierStartIndex].date = " + dataWithEarlierStart[earlierStartIndex].date);
                    throw new Error("mismatch in date values when calculating cumulative flow data array")
                }
                result[resultIndex] = dataWithEarlierStart[earlierStartIndex];
                earlierStartIndex++;
            }
            else{
                result[resultIndex] = Object.assign({}, dataWithEarlierStart[dataWithEarlierStart.length-1], {date: date.toISOString(true).split("T")[0]});
            }
            resultIndex++;
            date.add(1, 'days');
        }
        while (date.isSameOrBefore(dataWithEarlierEnd[dataWithEarlierEnd.length - 1].date)) {
            if(!(date.isSame(dataWithEarlierStart[earlierStartIndex].date) && date.isSame(dataWithLaterStart[laterStartIndex].date))){
                console.log("date = " + date.toISOString(true) + " dataWithEarlierStart.date = " + dataWithEarlierStart[earlierStartIndex].date + " dataWithLaterStart.date = " + dataWithLaterStart[laterStartIndex].date)
                throw new Error("mismatch in date values when calculating cumulative flow data array")
            }
            result[resultIndex] = sumEntries(dataWithEarlierStart[earlierStartIndex], dataWithLaterStart[laterStartIndex]);
            earlierStartIndex++;
            laterStartIndex++;
            resultIndex++;
            date.add(1, 'days');
        }
        let laterEndIndex = (data1HasEarlierStart === data1HasLaterEnd) ? earlierStartIndex: laterStartIndex;
        while (/*(laterEndIndex < dataWithLaterEnd.length) && */date.isSameOrBefore(dataWithLaterEnd[dataWithLaterEnd.length - 1].date)) {
            if(laterEndIndex === dataWithLaterEnd.length){
                console.log("Hi");
                throw new Error("mismatch")
            }
            if(!date.isSame(dataWithLaterEnd[laterEndIndex].date)){
                console.log("date = " + date.toISOString(true) + " dataWithLaterEnd[laterEndIndex].date = " + dataWithLaterEnd[laterEndIndex].date);
                throw new Error("mismatch in date values when calculating cumulative flow data array")
            }
            result[resultIndex] = sumEntries(dataWithLaterEnd[laterEndIndex], dataWithEarlierEnd[dataWithEarlierEnd.length - 1]);
            resultIndex++;
            laterEndIndex++;
            date.add(1, 'days');
        }
        return result;
    }
    else if(data1.length > 1){
        return data1;
    }
    else if(data2.length > 1){
        return data2;
    }
    else{
        return [];
    }

    function sumEntries(entry1, entry2) {
        if(entry1 && entry2){
            const result = {};
            Object.entries(entry1).forEach(keyValuePair => {
                result[keyValuePair[0]] = (keyValuePair[0] === "date") ? keyValuePair[1] : keyValuePair[1] + entry2[keyValuePair[0]];
            });
            return result;
        }
        else{
            throw new Error("Encountered undefined entry when attempting to sum entries. \n entry1 = " + JSON.stringify(entry1) + " entry2 = " + JSON.stringify(entry2));
        }
    }
}


export function mergeIssues(issues, workflow){
    const convertedIssues = issues.map(issue => convertIssueChangelogToCumulativeFlow(issue, workflow));
    const objResult = createIssueTypeObjectFromIssues(issues);
    convertedIssues.forEach(issue => {
        if(objResult[issue.fields.issuetype.name].data && objResult[issue.fields.issuetype.name].data.length > 0){
            objResult[issue.fields.issuetype.name].data = mergeCumulativeFlowData(objResult[issue.fields.issuetype.name].data, issue.cumulativeFlow);
        }
        else{
            objResult[issue.fields.issuetype.name].data = issue.cumulativeFlow;
        }
    });
    return Object.entries(objResult).map(entry => {
        return {
            id: entry[1].id,
            name: entry[0],
            data: entry[1].data
        };
    })
}

function createIssueTypeObjectFromIssues(issues){
    const result = {};
    issues.forEach(issue => {
        if(!result.hasOwnProperty(issue.fields.issuetype.name)){
            result[issue.fields.issuetype.name] = {data:[], id:issue.fields.issuetype.id}
        }
    });
    return result;
}

function createIssueTypeObjectFromWorkflow(workflow){ //TODO: update test data to test this
    const result = {};
    workflow.forEach(issueType =>{
        if(!result.hasOwnProperty(issueType.name)){
            result[issueType.name] = {data:[], id:issueType.id}
        }
    });
    return result;
}

function generateEmptyDataForUnusedIssueType(){ //TODO: do this //Combine with case when merge issues returns []

}
