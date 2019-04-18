import React from "react";

export const initialSelectedIssueTypesState = workflow => new Map(workflow.map(issueType => [
    issueType.name, {
        "id": issueType.id,
        "selected": issueType.name === "Story"
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

export const assignUniqueColoursToWorkflowStatuses = workflow => {
    const colours = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#17becf", "#bcbd22", "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"];
    const allPossibleStatuses = workflow.flatMap(issueType => issueType.statuses);
    const statusColours = {};
    allPossibleStatuses.forEach(status => statusColours[status.name] = "");
    Object.keys(statusColours).forEach((key, index) => statusColours[key] = colours[index % colours.length]);
    return statusColours;
};

export const toggleProperty = (data, propertyName) => {
    const mappedData = new Map(data);
    mappedData.set(propertyName, {...mappedData.get(propertyName), selected: !mappedData.get(propertyName).selected});
    return mappedData;
};