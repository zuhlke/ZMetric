import ReactDOM from "react-dom";
import {MultipleIssueTypeSelector} from "./MultipleIssueTypeSelector";
import {getMockWorkflow} from "./MockDataFetcher";
import React from "react";

describe("MultipleIssueTypeSelector", () => {
    it("renders without crashing", () =>{
        const div = document.createElement('div');
        ReactDOM.render(<MultipleIssueTypeSelector workflow={getMockWorkflow()} selectedIssueTypes={new Map()} toggleIssueType={()=> new Map()}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
