import {getFilteredIssueStatuses} from "./CumulativeFlowReportService";

export const getColoursForNewIssues = (workflow) => {
  const colours = new Map();
  const availableColours = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#17becf", "#bcbd22", "#1f77b4", "#ff7f0e",
    "#2ca02c", "#d62728", "#0046bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"];

  const allPossibleStatuses = workflow.flatMap(issueType => issueType.statuses);

  allPossibleStatuses.forEach((status, index) => !colours.has(status.name) &&
    colours.set(status.name, availableColours[index]));

  return colours;
};

export const initialSelectedIssueTypesState = workflow => new Map(workflow.map(issueType => [
  issueType.name, {
    "id": issueType.id,
    "selected": issueType.name === "Story"
  }
]));

export const initialSelectedWorkflowState = workflow => {
  const initialIssues = initialSelectedIssueTypesState(workflow);
  return initializeAvailableWorkflowStatusTypes(initialIssues, workflow);
};

export const initializeAvailableWorkflowStatusTypes = (updatedIssueTypes, workflow) => {
  const graphWorkflowStates = getFilteredIssueStatuses(workflow, updatedIssueTypes)
    .map(status => [status.name, {
      "id": status.id,
      "selected": true
    }]);
  graphWorkflowStates.sort();
  return new Map(graphWorkflowStates);
};
