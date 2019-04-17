import React from 'react'
import {Checkbox} from "semantic-ui-react";
import PropTypes from "prop-types";

export function MultipleWorkflowStatesSelector(props) {

    return (
        <div>
            {
                props.statuses.map(status => {
                        return (
                            <div key={'multi-issue-selector-inner-div-' + status.id}>
                                <br key={'multi-issue-selector-inner-br-' + status.id}/>
                                <Checkbox key={'multi-issue-selector-checkbox-' + status.id}
                                          id={'multi-issue-selector-checkbox-' + status.id}
                                          name={status.name} label={status.name}
                                          checked={props.workflowStates.get(status.name)}
                                          onChange={() => props.toggleWorkflowStatus(status.name)}
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
    statuses: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }),
    workflowStates: PropTypes.func.isRequired,
    toggleWorkflowStatus: PropTypes.func.isRequired
};
