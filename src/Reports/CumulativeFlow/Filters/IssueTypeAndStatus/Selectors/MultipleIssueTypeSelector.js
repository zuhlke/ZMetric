import React from 'react'
import PropTypes from "prop-types";
import {Checkbox} from "semantic-ui-react";

export function MultipleIssueTypeSelector(props) {
  return (
    <div>
      {
        Array.from(props.selectedIssueTypes).map((issueType) => {
          return (
            <div key={'multi-issue-selector-inner-div-' + issueType[1].id}>
              <br key={'multi-issue-selector-inner-br-' + issueType[1].id}/>
              <Checkbox
                id={'multi-issue-selector-checkbox-' + issueType[1].id}
                key={'multi-issue-selector-checkbox-' + issueType[1].id}
                name={issueType[0]} label={issueType[0]}
                checked={issueType[1].selected}
                onChange={() => props.toggleIssueType(issueType[0])}
                toggle/>
            </div>
          )
        })
      }
    </div>
  )
}

MultipleIssueTypeSelector.propTypes = {
  selectedIssueTypes: PropTypes.object.isRequired,
  toggleIssueType: PropTypes.func.isRequired
};
