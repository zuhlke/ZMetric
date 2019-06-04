import React from 'react';
import {Button, Divider} from "semantic-ui-react";
import './CumulativeFlowLocalFilters.css';

export function CumulativeFlowLocalFilters(props){
  const {selectedStatuses, updateSelectedStatuses} = props;

  const toggleButton = index => {
    const updatedArray = JSON.parse(JSON.stringify(selectedStatuses));
    updatedArray[index].active = !selectedStatuses[index].active;
    updateSelectedStatuses(updatedArray);
  };
  return(
    <span >
      <div id={"localFilterDiv"}>
        <h5>Select Workflow Statuses To Display:</h5>
            {selectedStatuses.map((workflowStatus, index) => <Button id={"cumulativeFlowLocalFilterWorkflowButton" + workflowStatus.status.replace(/\s+/g, '')}
                                                                         key={"cumulativeFlowLocalFilterWorkflowButton" + workflowStatus.status}
                                                                         toggle size="mini" style={{"background-color": (workflowStatus.active ? '#2185d0' : null)}}
                                                                         active={workflowStatus.active} onClick={() => toggleButton(index)}>{workflowStatus.status}</Button>)}
      </div>
      <br/>
      <Divider id={"localFilterBottom"} />
    </span>

  )
}
