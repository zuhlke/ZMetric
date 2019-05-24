import React from 'react';
import {Dropdown} from "semantic-ui-react";

export function CumulativeFlowLocalFilters(props){
  const {statuses} = props;
  const options = statuses.map(issueType => {
    return {"text":issueType, "value":issueType}
  });
  return(
    <span >
      <h5>Select Workflow Statuses To Display:</h5>
        <Dropdown
          id='CumulativeFlowWorkflowFilterDropdown'
          placeholder={"Select Workflow Statuses"}
          defaultValue={statuses}
          clearable
          multiple selection options={options}
        />
    </span>
  )
}
