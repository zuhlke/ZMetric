import React from 'react';
import {MultipleWorkflowStatusesSelector} from "./MultipleWorkflowStatusesSelector";
import {mount} from "enzyme";
import ReactDOM from "react-dom";
import {Checkbox} from "semantic-ui-react";

describe("MultipleWorkflowStatusesSelector", () => {
  const statuses = new Map([
      ["To Do",
        {
          "id": "10100",
          "selected": true
        }],
      ["In Progress",
        {
          "id": "3",
          "selected": false
        }]
    ]
  );

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<MultipleWorkflowStatusesSelector workflowStatuses={statuses}
                                                      toggleWorkflowStatus={() => new Map()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders one checkbox per status', () => {
    const wrapper = mount(<MultipleWorkflowStatusesSelector workflowStatuses={statuses}
                                                            toggleWorkflowStatus={() => new Map()}/>);
    expect(wrapper.find(Checkbox).length).toEqual(2);
  });

  it("it updates the workflow status when toggling the checkboxes", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<MultipleWorkflowStatusesSelector workflowStatuses={statuses}
                                                            toggleWorkflowStatus={mockFn}/>);

    const checkBox = wrapper.find(Checkbox).first();
    checkBox.simulate('change');
    expect(mockFn).toHaveBeenCalledWith("To Do");
  });

  it('sets the correct toggle value for checkBox', () => {
    const wrapper = mount(<MultipleWorkflowStatusesSelector workflowStatuses={statuses}
                                                            toggleWorkflowStatus={() => new Map()}/>);

    expect(wrapper.find(Checkbox).length).toEqual(2);
    expect(wrapper.find(Checkbox).first().props().checked).toBeTruthy();
    expect(wrapper.find(Checkbox).last().props().checked).toBeFalsy();
  });
});
