import React from 'react';
import {Button, Divider} from "semantic-ui-react";
import './CumulativeFlowLocalFilters.css';

export function CumulativeFlowLocalFilters(props){
  const {selectedStatuses, updateSelectedStatuses} = props;

  const toggleButton = index => {
    const updatedArray = [...selectedStatuses];
    updatedArray[index].active = !selectedStatuses[index].active;
    updateSelectedStatuses(updatedArray);
  };
  return(
    <span >
      <div style={{position: "relative", left:"1em"}}>
        <h5>Select Workflow Statuses To Display:</h5>
            {selectedStatuses.map((workflowStatus, index) => <Button id={"cumulativeFlowLocalFilterWorkflowButton" + workflowStatus.issueType.replace(/\s+/g, '')}
                                                                         key={"cumulativeFlowLocalFilterWorkflowButton" + workflowStatus.issueType}
                                                                         toggle size="mini" style={{"background-color": (workflowStatus.active ? '#2185d0' : null)}}
                                                                         active={workflowStatus.active} onClick={() => toggleButton(index)}>{workflowStatus.issueType}</Button>)}
      </div>
      <br/>
      <Divider style={{margin: "1em auto 0.5em"}}/>
    </span>

  )
}
