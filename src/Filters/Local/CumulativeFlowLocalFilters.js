import React, {useState} from 'react';
import {Button, Divider} from "semantic-ui-react";
import './CumulativeFlowLocalFilters.css';

export function CumulativeFlowLocalFilters(props){
  const {statuses} = props;
  const initialSelectedButtonsArray = statuses.map(status => {return {status: status, active: true}});
  const [selectedButtonsArray, updateSelectedButtonsArray] = useState(initialSelectedButtonsArray);
  const toggleButton = index => {
    const updatedArray = [...selectedButtonsArray];
    updatedArray[index].active = !selectedButtonsArray[index].active;
    updateSelectedButtonsArray(updatedArray);
  };
  return(
    <span >
      <div style={{position: "relative", left:"1em"}}>
        <h5>Select Workflow Statuses To Display:</h5>
          {/*<Button.Group>*/}
            {selectedButtonsArray.map((workflowStatus, index) => <Button toggle size="mini" style={{"background-color": (workflowStatus.active ? '#2185d0' : null)}} active={workflowStatus.active} onClick={() => toggleButton(index)}>{workflowStatus.status}</Button>)}
          {/*</Button.Group>*/}
      </div>
      <br/>
      <Divider style={{margin: "1em auto 0.5em"}}/>
    </span>

  )
}
