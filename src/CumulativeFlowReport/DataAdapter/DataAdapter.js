import moment from "moment";

export function convert(issue, workflow) {
    return {
        id: issue.id,
        key: issue.key,
        fields: issue.fields,
        cumulativeFlow: updateData(issue, workflow)
    };

    function updateData(issue, workflow) {
        const sampleEntry = createEmptyEntry(issue, workflow);
        const data = [];
        const filteredHistories = pruneHistories(issue);

        let currDate = moment(issue.fields.created, 'YYYY-MM-DD');
        let dataIndex = 0;
        filteredHistories.forEach(history => {
            const status = history.items[0].fromString;
            const transitionDate = moment(history.created, 'YYYY-MM-DD');
            while (currDate.isBefore(transitionDate)) {
                data[dataIndex] = Object.assign({}, sampleEntry, {[status]: 1}, {date: currDate.toISOString().split("T")[0]});
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
        //TODO: if this returns anything other than exactly one element, throw error -> more error checking elsewhere?
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

export function merge(data1, data2) {
    return data1;
}

export function mergeIssues(issues){
    return {}
    // issues.map(issue => convert(issue)).reduce(merge);
}

