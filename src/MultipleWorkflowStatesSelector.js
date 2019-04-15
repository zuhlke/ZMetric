import React from 'react'
import {Checkbox} from "semantic-ui-react";

export function MultipleWorkflowStatesSelector(props){
    return (
        <div>
            {
                props.workflow[0].statuses.map((status) =>{
                        return(
                            <div key={'multi-issue-selector-inner-div-' + status.id}>
                                <br key={'multi-issue-selector-inner-br-' + status.id}/>
                                <Checkbox key={'multi-issue-selector-checkbox-' + status.id} label={status.name} toggle defaultChecked/>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}
