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

        let currDate = moment(issue.fields.created, 'YYYY-MM-DD');
        let dataIndex = 0;
        filteredHistories.forEach(history => {
            const status = history.items[0].fromString;
            const transitionDate = moment(history.created, 'YYYY-MM-DD');
            while (currDate.isBefore(transitionDate)) {
                const value = Object.assign({}, sampleEntry, {[status]: 1}, {date: currDate.toISOString().split("T")[0]});
                if(!value){
                    console.log("hello");
                    throw new Error("value is undefined");
                }
                data[dataIndex] = value;
                dataIndex++;
                currDate.add(1, 'days');
            }
            currDate = transitionDate;
        });
        const lastStatus = filteredHistories[filteredHistories.length - 1].items[0].toString;
        data[dataIndex] = Object.assign({}, sampleEntry, {[lastStatus]: 1}, {date: currDate.toISOString().split("T")[0]});
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
            if(!(history.items[0].fromString in entry)){
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
    const result = [];
    const data1HasEarlierStart = moment(data1[0].date).isBefore(moment(data2[0].date));
    const data1HasLaterEnd = moment(data1[data1.length - 1].date).isAfter(moment(data2[data2.length - 1].date));
    const [dataWithEarlierStart, dataWithLaterStart] = data1HasEarlierStart ? [data1, data2] : [data2, data1];
    const [dataWithLaterEnd, dataWithEarlierEnd] = data1HasLaterEnd ? [data1, data2] : [data2, data1];

    const date = data1HasEarlierStart ? moment(data1[0].date).clone() : moment(data2[0].date).clone();
    let earlierStartIndex = 0;
    let laterStartIndex = 0;
    while (date.isBefore(dataWithLaterStart[0].date)) {
        result[earlierStartIndex] = dataWithEarlierStart[earlierStartIndex];
        earlierStartIndex++;
        date.add(1, 'days');
    }
    while (date.isSameOrBefore(dataWithEarlierEnd[dataWithEarlierEnd.length - 1].date)) {
        if(!(dataWithEarlierStart[earlierStartIndex] && dataWithLaterStart[laterStartIndex])){
            console.log("hi!");
        }
        result[earlierStartIndex] = sumEntries(dataWithEarlierStart[earlierStartIndex], dataWithLaterStart[laterStartIndex]);
        earlierStartIndex++;
        laterStartIndex++;
        date.add(1, 'days');
    }
    let laterEndIndex = (data1HasEarlierStart === data1HasLaterEnd) ? earlierStartIndex: laterStartIndex;
    while ((laterEndIndex < dataWithLaterEnd.length) && date.isSameOrBefore(dataWithLaterEnd[dataWithLaterEnd.length - 1].date)) {
        // console.log(date.toISOString());
        if(laterEndIndex === dataWithLaterEnd.length - 1){
            // console.log("Hi");
        }
        result[earlierStartIndex] = sumEntries(dataWithLaterEnd[laterEndIndex], dataWithEarlierEnd[dataWithEarlierEnd.length - 1]);
        earlierStartIndex++;
        laterEndIndex++;
        date.add(1, 'days');
    }
    return result;

    function sumEntries(entry1, entry2) {
        console.log("entry1 = " + JSON.stringify(entry1));
        console.log("entry2 = " + JSON.stringify(entry2));
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
    const objResult = {
        Suggestion: {data:undefined, id:"1000"},
        Bug: {data:undefined, id:"1"}
    };
    convertedIssues.forEach(issue => {
        if(objResult[issue.fields.issuetype.name].data){
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
