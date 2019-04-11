import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export function IssueTypeSelector(props) {
    return (
        <Button.Group vertical>
            <h3>Issue Type:</h3>
            {
                props.workflow.map((issueType, index) =>
                    <Button id={"issue-button-" + issueType.id} key={issueType.id + issueType.name} toggle
                            active={props.selectedIssueType === index} onClick={() => {
                        props.updateSelectedIssueType(index)
                    }} color={"grey"}>
                        {issueType.name}
                    </Button>
                )
            }
        </Button.Group>
    )
}

IssueTypeSelector.propTypes = {
    updateSelectedIssueType: PropTypes.func.isRequired,
    selectedIssueType: PropTypes.number.isRequired,
    workflow: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};
