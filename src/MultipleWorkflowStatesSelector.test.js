import React from 'react';
import {MultipleWorkflowStatesSelector} from "./MultipleWorkflowStatesSelector";
import {mount} from "enzyme";
import {getMockWorkflow} from "./MockDataFetcher";
import ReactDOM from "react-dom";

describe("MultipleWorkflowStatesSelector", () => {

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()} updateWorkflowStatus={() => {}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("calls props.removeWorkflowStatus with correct parameter when a checkbox is unselected", () =>{
        const mockFn = jest.fn();
        const wrapper = mount(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()} updateWorkflowStatus={mockFn}/>);
        const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-11803').hostNodes();
        doneCheckBox.simulate('change', { target: { checked: false } });
        expect(mockFn).toHaveBeenCalledWith(
            { 'To Do': true,
            'In Progress': true,
            Review: true,
            Done: false,
            'On Hold': true,
            'Ready For Test': true });
    });

    it("calls props.removeWorkflowStatus with correct parameter when a checkbox is selected", () =>{
        const mockFn = jest.fn();
        const wrapper = mount(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()} updateWorkflowStatus={mockFn}/>);
        const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-11803').hostNodes();
        doneCheckBox.simulate('change', { target: { checked: false } });
        doneCheckBox.simulate('change', { target: { checked: true } });
        expect(mockFn).toHaveBeenCalledWith(
            { 'To Do': true,
            'In Progress': true,
            Review: true,
            Done: true,
            'On Hold': true,
            'Ready For Test': true });
    })
});
