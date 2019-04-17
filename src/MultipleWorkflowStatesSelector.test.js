import React from 'react';
import {MultipleWorkflowStatesSelector} from "./MultipleWorkflowStatesSelector";
import {mount} from "enzyme";
import {Checkbox} from "semantic-ui-react";
import ReactDOM from "react-dom";

describe("MultipleWorkflowStatesSelector", () => {
    const statuses = [
        {
            "name": "To Do",
            "id": "10100",
        },
        {
            "name": "In Progress",
            "id": "3"
        }
    ];

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MultipleWorkflowStatesSelector statuses={statuses}
                                                        workflowStates={new Map()}
                                                        toggleWorkflowStatus={() => new Map()}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders one checkbox per status', () => {
        const statuses = [{id: '1', name: 'To Do'}, {id: '2', name: 'In Progress'}];
        const wrapper = mount(<MultipleWorkflowStatesSelector statuses={statuses}
                                                              workflowStates={new Map()}
                                                              toggleWorkflowStatus={() => new Map()}/>);
        expect(wrapper.find(Checkbox).length).toEqual(2);
    });

    it("it updates the workflow status when toggling the checkboxes", () => {
        const mockFn = jest.fn();
        const wrapper = mount(<MultipleWorkflowStatesSelector statuses={statuses}
                                                              workflowStates={new Map()}
                                                              toggleWorkflowStatus={mockFn}/>);

        const checkBox = wrapper.find(Checkbox).first();
        checkBox.simulate('change');
        expect(mockFn).toHaveBeenCalledWith("To Do");
    });

    it('sets the correct toggle value for checkBox', () => {
        const workFlowStates = new Map([["To Do", true], ["In Progress", false]]);
        const wrapper = mount(<MultipleWorkflowStatesSelector statuses={statuses}
                                                              workflowStates={workFlowStates}
                                                              toggleWorkflowStatus={() => new Map()}/>);

        expect(wrapper.find(Checkbox).length).toEqual(2);
        expect(wrapper.find(Checkbox).first().props().checked).toBeTruthy();
        expect(wrapper.find(Checkbox).last().props().checked).toBeFalsy();
    });
});
