import ReactDOM from "react-dom";
import React from "react";
import {IssueTypeSelector} from "./IssueTypeSelector";
import {shallow} from "enzyme";

describe("IssueTypeSelector", () => {

    const workflow = [
        {"id": "1", "name": "Bug"},
        {"id": "2", "name": "Epic"},
        {"id": "3", "name": "Story"}
    ];

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<IssueTypeSelector updateSelectedIssueType={() => {}} selectedIssueType={0} workflow={[]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("updates the issue type correctly when an issue type button is clicked", () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<IssueTypeSelector updateSelectedIssueType={mockFn} selectedIssueType={0} workflow={workflow}/>);
        const issueTypeButton = wrapper.find('#issue-button-3');
        issueTypeButton.simulate('click');
        expect(mockFn).toHaveBeenCalledWith(2);
    });
});
