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

    const workflow = [
        {
            "id": "1",
            "name": "Bug",
            "statuses": [
                {
                    "name": "Bug To Do",
                    "id": "3",
                },
                {
                    "name": "In Progress",
                    "id": "2"
                }
            ]
        }, {
            "id": "10001",
            "name": "Story",
            "statuses": [
                {
                    "name": "To Do",
                    "id": "1",
                },
                {
                    "name": "In Progress",
                    "id": "2"
                }
            ]
        }
    ];
    it("renders without crashing", () =>{
        const div = document.createElement('div');
        ReactDOM.render(<MultipleIssueTypeSelector workflow={workflow} selectedIssueTypes={issueTypes} toggleIssueType={()=> new Map()}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
