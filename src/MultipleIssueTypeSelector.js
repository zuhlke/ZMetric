import React from 'react'
import {Checkbox} from "semantic-ui-react";

export function MultipleIssueTypeSelector(props){
    return (
        <div>
            {
                props.workflow.map((issueType) =>{
                        return(
                            <div key={'multi-issue-selector-inner-div-' + issueType.id}>
                                <br key={'multi-issue-selector-inner-br-' + issueType.id}/>
                                <Checkbox key={'multi-issue-selector-checkbox-' + issueType.id} label={issueType.name} toggle defaultChecked={issueType.name==="Story"}/>
                            </div>
                        )
                }
                )
            }
        </div>

    )
}
