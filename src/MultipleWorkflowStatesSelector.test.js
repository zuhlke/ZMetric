import React from 'react';
import {MultipleWorkflowStatesSelector} from "./MultipleWorkflowStatesSelector";
import {mount} from "enzyme";
import {getMockWorkflow} from "./MockDataFetcher";
import ReactDOM from "react-dom";

describe("MultipleWorkflowStatesSelector", () => {
    const statuses = getMockWorkflow()[3].statuses;
    const initialSelectedStatuses = {
        'To Do': true,
        'In Progress': true,
        Review: true,
        Done: true,
        'On Hold': true,
        'Ready For Test': true
    };

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()} updateWorkflowStatus={() => {}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    statuses.forEach( (status,index) => {
        it("calls props.removeWorkflowStatus with correct parameter when the " + status.name + " checkbox is unselected", () => {
            const mockFn = jest.fn();
            const source2 = {};
            source2[status.name] = false;
            const selectedStatuses = Object.assign({}, initialSelectedStatuses, source2);
            const wrapper = mount(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()}
                                                                  updateWorkflowStatus={mockFn}/>);
            const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-'+status.id).hostNodes();
            doneCheckBox.simulate('change', {target: {checked: false}});
            expect(mockFn).toHaveBeenCalledWith(selectedStatuses);
        });

        it("calls props.removeWorkflowStatus with correct parameter when the " + status.name + " checkbox is selected", () => {
            const mockFn = jest.fn();
            const wrapper = mount(<MultipleWorkflowStatesSelector workflow={getMockWorkflow()}
                                                                  updateWorkflowStatus={mockFn}/>);
            const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-'+status.id).hostNodes();
            doneCheckBox.simulate('change', {target: {checked: false}});
            doneCheckBox.simulate('change', {target: {checked: true}});
            expect(mockFn).toHaveBeenCalledWith(initialSelectedStatuses);
        });
    });
});
