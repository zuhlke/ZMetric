import React, from 'react'
import {Checkbox} from "semantic-ui-react";
import PropTypes from "prop-types";

export function MultipleIssueTypeSelector(props){
    return (
        <div>
            {
                props.workflow.map((issueType) =>{
                        return(
                            <div key={'multi-issue-selector-inner-div-' + issueType.id}>
                                <br key={'multi-issue-selector-inner-br-' + issueType.id}/>
                                <Checkbox
                                    id={'multi-issue-selector-checkbox-' + issueType.id}
                                    key={'multi-issue-selector-checkbox-' + issueType.id}
                                    name={issueType.name}  label={issueType.name}
                                    checked={props.selectedIssueTypes.get(issueType.name)}
                                    onChange={() => props.toggleIssueType(issueType.name)}
                                    toggle/>
                            </div>
                        )
                })
            }
        </div>
    )
}

MultipleIssueTypeSelector.propTypes = {
    workflow: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    selectedIssueTypes: PropTypes.object.isRequired,
    toggleIssueType: PropTypes.func.isRequired
};
