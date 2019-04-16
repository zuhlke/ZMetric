import React, {useState} from 'react'
import {Checkbox} from "semantic-ui-react";

export function MultipleWorkflowStatesSelector(props){
    const initialWorkflowStates = {};
    props.workflow[0].statuses.forEach((status) => {
        initialWorkflowStates[status.name] = true;
    });
    const [selectedWorkflowStates, updateSelectedWorkflowStates] = useState(initialWorkflowStates);

    const handleInputChange = (event, data) => {
        const copy = Object.assign({},selectedWorkflowStates);
        copy[data.name] = data.checked;
        updateSelectedWorkflowStates(copy);
        props.updateWorkflowStatus(copy);
    };

    return (
        <div>
            {
                props.workflow[3].statuses.map((status) =>{
                        return(
                            <div key={'multi-issue-selector-inner-div-' + status.id}>
                                <br key={'multi-issue-selector-inner-br-' + status.id}/>
                                <Checkbox key={'multi-issue-selector-checkbox-' + status.id}
                                            id={'multi-issue-selector-checkbox-' + status.id}
                                            name={status.name} label={status.name}
                                            checked={(selectedWorkflowStates[status.name])}
                                            onChange={handleInputChange}
                                            toggle/>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}
