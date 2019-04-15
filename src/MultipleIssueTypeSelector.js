import React, {useState} from 'react'
import {Checkbox} from "semantic-ui-react";

export function MultipleIssueTypeSelector(props){
    const initialIssueTypes = {};
    props.workflow.forEach((issueType) => {
        initialIssueTypes[issueType.name] = issueType.name === "Story";
    });
    const [selectedIssueTypes, updateSelectedIssueTypes] = useState(initialIssueTypes);

    const handleInputChange = (event, data) => {
        const copy = Object.assign({},selectedIssueTypes);
        copy[data.name] = data.checked;
        updateSelectedIssueTypes(copy);
    };

    return (
        <div>
            {
                props.workflow.map((issueType) =>{
                        return(
                            <div key={'multi-issue-selector-inner-div-' + issueType.id}>
                                <br key={'multi-issue-selector-inner-br-' + issueType.id}/>
                                <Checkbox
                                    key={'multi-issue-selector-checkbox-' + issueType.id}
                                    name={issueType.name}  label={issueType.name}
                                    checked={selectedIssueTypes[issueType.name]}
                                    onChange={handleInputChange}
                                    toggle/>
                            </div>
                        )
                })
            }
        </div>
    )
}
