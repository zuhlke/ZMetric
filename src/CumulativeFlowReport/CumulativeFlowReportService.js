export const initialSelectedIssueTypesState = workflow => new Map(workflow.map(issueType => [
    issueType.name, {
        "id": issueType.id,
        "selected": issueType.name === "Story" || issueType.name === "Bug"
    }
]));

export const getSelectedWorkflows = workflows => Array.from(workflows.entries())
    .filter(entry => entry[1].selected === true);

export const initialSelectedWorkflowState = workflow => {
    return newAvailableWorkflowStatusTypes(initialSelectedIssueTypesState(workflow), workflow);
};

export const newAvailableWorkflowStatusTypes = (updatedIssueTypes, workflow) => {
    const filteredIssuesWithStatuses = workflow.filter(issueType => updatedIssueTypes.get(issueType.name).selected);
    const graphWorkflowStates = filteredIssuesWithStatuses
        .flatMap(issueType => issueType.statuses)
        .map(status => [status.name, {"id": status.id, "selected": true}]);
    graphWorkflowStates.sort();
    return new Map(graphWorkflowStates);
};

export const getColoursForNewIssues = (workflow) => {
    const colours = new Map();
    const availableColours = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#17becf", "#bcbd22", "#1f77b4", "#ff7f0e",
        "#2ca02c", "#d62728", "#0046bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"];

    const allPossibleStatuses = workflow.flatMap(issueType => issueType.statuses);

    allPossibleStatuses.forEach((status, index) => !colours.has(status.name) &&
        colours.set(status.name, availableColours[index]));

    return colours;
};

export const toggleProperty = (data, propertyName) => {
    const mappedData = new Map(data);
    mappedData.set(propertyName, {...mappedData.get(propertyName), selected: !mappedData.get(propertyName).selected});
    return mappedData;
};

export const mergeTwoDataPoints = (...data) => {
    return data.reduce((a, b) => {
        for (let k in b) {
            if (k === "date") {
                a[k] = b[k];
            } else if (b.hasOwnProperty(k)) {
                a[k] = (a[k] || 0) + b[k];
            }
        }
        return a;
    }, {});
};

export const mergeData = (data, selectedIssueTypes) => {
    const filteredFlatData = data.filter(issueType => selectedIssueTypes.has(issueType.name) && selectedIssueTypes.get(issueType.name).selected).flatMap(issueType => issueType.data);
    const map = new Map();
    filteredFlatData.forEach(dataPoint => {
        if (map.has(dataPoint.date)) {
            map.set(dataPoint.date, mergeTwoDataPoints(dataPoint, map.get(dataPoint.date)));
        } else {
            map.set(dataPoint.date, dataPoint);
        }
    });
    return Array.from(map.values());
};

