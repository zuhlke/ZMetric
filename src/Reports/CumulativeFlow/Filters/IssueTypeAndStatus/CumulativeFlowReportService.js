export const getFilteredIssueStatuses = (workflow, updatedIssueTypes) => {
  return workflow.filter(issueType => updatedIssueTypes.get(issueType.name).selected).flatMap(issueType => issueType.statuses);
};

export const updateAvailableWorkflowStatusTypes = (updatedIssueTypes, workflow, selectedWorkflowStates) => {
  const graphWorkflowStates = getFilteredIssueStatuses(workflow, updatedIssueTypes)
    .map(status => [status.name, {
      "id": status.id,
      "selected": selectedWorkflowStates.has(status.name) ? selectedWorkflowStates.get(status.name).selected : false
    }]);
  graphWorkflowStates.sort();
  return new Map(graphWorkflowStates);
};

export const toggleProperty = (data, propertyName) => {
  const mappedData = new Map(data);
  mappedData.set(propertyName, {...mappedData.get(propertyName), selected: !mappedData.get(propertyName).selected});
  return mappedData;
};

export const mergeData = (data, selectedIssueTypes) => {
  const mergeTwoDataPoints = (...data) => { //TODO: Change to function and move to bottom
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

  const filteredFlatData = data.filter(issueType => selectedIssueTypes.has(issueType.name) &&
    selectedIssueTypes.get(issueType.name).selected).flatMap(issueType => issueType.data);
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

