import moment from "moment";

function dateString(date){
    return date.toISOString(true).split("T")[0];
}

export function convertIssueChangelogToCumulativeFlow(issue, workflow, startDate, endDate) {
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
        const dummyIssueCreatedHistory = {
            created: moment(issue.fields.created, 'YYYY-MM-DD'),
            items: [{
                fromString: null,
            }]
        };
        if(filteredHistories.length > 0){
            let currDate = moment(startDate);
            [dummyIssueCreatedHistory, ...filteredHistories].forEach(history => {
                const status = history.items[0].fromString;
                const transitionDate = moment(history.created, 'YYYY-MM-DD');
                while (currDate.isBefore(transitionDate)) {
                    const entry = status ? Object.assign({}, sampleEntry, {[status]: 1}, {date: dateString(currDate)}) : Object.assign({}, sampleEntry,  {date: dateString(currDate)});
                    data.push(entry);
                    currDate.add(1, 'days');
                }
                currDate = transitionDate;
            });
            const lastStatus = filteredHistories[filteredHistories.length - 1].items[0].toString;
            while(currDate.isSameOrBefore(endDate)){
                data.push(Object.assign({}, sampleEntry, {[lastStatus]: 1}, {date: dateString(currDate)}));
                currDate.add(1, 'days');
            }

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
            if(!(entry.hasOwnProperty(history.items[0].fromString))){
                entry[history.items[0].fromString] = 0;
            }
            if(!(entry.hasOwnProperty(history.items[0].toString))){
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
    if(data1.length < 1 || data2.length < 1){
        return data1.length < 1 ? data2 : data1;
    }
    else if(data1.length !== data2.length){
        throw new Error("merging data of unequal lengths");
    }
    else{
        return data1.map((entry, index) => sumEntries(entry, data2[index]))
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
    const startDate = issues.map(issue => moment(issue.fields.created, 'YYYY-MM-DD')).sort((a, b) => a - b)[0];
    const endDate = issues.map(issue => issue.fields.resolutiondate ? moment(issue.fields.resolutiondate, 'YYYY-MM-DD') : moment()).sort((a, b) => b - a)[0];
    const convertedIssues = issues.map(issue => convertIssueChangelogToCumulativeFlow(issue, workflow, startDate, endDate));
    const objResult = createIssueTypeObjectFromWorkflow(workflow);
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
            data: entry[1].data.length > 0 ? entry[1].data : generateEmptyDataForUnusedIssueType(entry[0], workflow, startDate, endDate)
        };
    });
}

function createIssueTypeObjectFromWorkflow(workflow){
    const result = {};
    workflow.forEach(issueType =>{
        if(!result.hasOwnProperty(issueType.name)){
            result[issueType.name] = {data:[], id:issueType.id}
        }
    });
    return result;
}

function generateEmptyDataForUnusedIssueType(issueType, workflow, startDate, endDate){
    const result = [];
    const emptyEntry = createEmptyEntry(issueType, workflow);
    const date = moment(startDate, 'YYYY-MM-DD');
    const end = moment(endDate, 'YYYY-MM-DD');
    while(date.isSameOrBefore(end)){
        result.push(Object.assign({}, emptyEntry, {date: dateString(date)}));
        date.add(1, 'days');
    }
    return result;

    function createEmptyEntry(issueTypeName, workflow) {
        const entry = {};
        const issueType = workflow.filter(issueType => issueType.name === issueTypeName);
        if(!issueType || issueType.length === 0){
            throw new Error("issue type" + issueTypeName + " encountered that is not present in the valid issueType values for the project (provided by the 'GET /rest/api/2/project/{projectIdOrKey}/statuses' endpoint)")
        }
        issueType[0].statuses.forEach(status => entry[status.name] = 0);
        return entry;
    }
}
