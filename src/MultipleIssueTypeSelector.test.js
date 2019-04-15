import ReactDOM from "react-dom";
import {MultipleIssueTypeSelector} from "./MultipleIssueTypeSelector";
import {getWorkflow} from "./DataFetcher";
import React from "react";

describe("MultipleIssueTypeSelector", () => {
    it("renders without crashing", () =>{
        const div = document.createElement('div');
        ReactDOM.render(<MultipleIssueTypeSelector workflow={getWorkflow()}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
