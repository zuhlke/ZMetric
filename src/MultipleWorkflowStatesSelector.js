import React from 'react'
import {Checkbox} from "semantic-ui-react";
import PropTypes from "prop-types";

export function MultipleWorkflowStatesSelector(props) {

    return (
        <div>
            {
                Array.from(props.workflowStates).map(state => {
                        return (
                            <div key={'multi-workflow-selector-inner-div-' + state[1].id}>
                                <br key={'multi-workflow-selector-inner-br-' + state[1].id}/>
                                <Checkbox key={'multi-workflow-selector-checkbox-' + state[1].id}
                                          id={'multi-workflow-selector-checkbox-' + state[1].id}
                                          name={state[0]} label={state[0]}
                                          checked={props.workflowStates.get(state[0]).selected}
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

MultipleWorkflowStatesSelector.propTypes = {
    workflowStates: PropTypes.object.isRequired,
    toggleWorkflowStatus: PropTypes.func.isRequired
};
