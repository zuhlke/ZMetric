import React from 'react'
import PropTypes from "prop-types";
import {Checkbox} from "semantic-ui-react";

export function MultipleWorkflowStatusesSelector(props) {

  return (
    <div>
      {
        Array.from(props.workflowStatuses).map(state => {
            return (
              <div key={'multi-workflow-selector-inner-div-' + state[1].id}>
                <br key={'multi-workflow-selector-inner-br-' + state[1].id}/>
                <Checkbox key={'multi-workflow-selector-checkbox-' + state[1].id}
                          id={'multi-workflow-selector-checkbox-' + state[1].id}
                          name={state[0]} label={state[0]}
                          checked={props.workflowStatuses.get(state[0]).selected}
                          onChange={() => props.toggleWorkflowStatus(state[0])}
                          toggle/>
              </div>
            )
          }
        )
      }
    </div>
  );
}

MultipleWorkflowStatusesSelector.propTypes = {
  workflowStatuses: PropTypes.object.isRequired,
  toggleWorkflowStatus: PropTypes.func.isRequired
};
