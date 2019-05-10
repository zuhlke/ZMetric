import ReactDOM from "react-dom";
import {MultipleIssueTypeSelector} from "./MultipleIssueTypeSelector";
import React from "react";

describe("MultipleIssueTypeSelector", () => {
  const issueTypes = new Map([
      ["Story",
        {
          "id": "10100",
          "selected": true
        }],
      ["Bug",
        {
          "id": "3",
          "selected": false
        }]
    ]
  );

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<MultipleIssueTypeSelector selectedIssueTypes={issueTypes}
                                               toggleIssueType={() => new Map()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
