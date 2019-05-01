import {WorkflowContainer} from "./WorkflowContainer";
import ReactDOM from "react-dom";
import React from "react";
import {mount} from "enzyme";

describe("WorkFlowContainer", () => {

  const workflow = [
    {
      "id": "1",
      "name": "Bug",
      "statuses": [
        {
          "name": "To Do",
          "id": "10100"
        },
        {
          "name": "In Progress",
          "id": "3"
        },
        {
          "name": "Review",
          "id": "10202"
        },
        {
          "name": "Done",
          "id": "11803"
        },
        {
          "name": "On Hold",
          "id": "10804"
        },
        {
          "name": "Ready For Test",
          "id": "11903"
        }
      ],

    },
    {
      "id": "10000",
      "name": "Epic",
      "statuses": [
        {
          "name": "To Do",
          "id": "10100"
        },
        {
          "name": "In Progress",
          "id": "3"
        },
        {
          "name": "Review",
          "id": "10202"
        },
        {
          "name": "Done",
          "id": "11803"
        },
        {
          "name": "On Hold",
          "id": "10804"
        },
        {
          "name": "Ready For Review",
          "id": "12305"
        }]
    }
  ];

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("sets the start status when a status is clicked", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const statusButton = wrapper.find('#status-button-3').hostNodes();
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  In Progress");
  });

  it("sets end status when a second status is clicked", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const statusButton = wrapper.find('#status-button-10100').hostNodes();
    const secondStatusButton = wrapper.find('#status-button-11803').hostNodes();
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  To Do");
    secondStatusButton.simulate('click');
    expect(wrapper.find("#end-status").hostNodes().text()).toBe("End status:  Done");
  });

  it("clears the start status when a status is clicked twice", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const statusButton = wrapper.find('#status-button-3').hostNodes();
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  In Progress");
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  ");
  });

  it("clears the end status when a status is clicked twice", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const statusButton = wrapper.find('#status-button-3').hostNodes();
    const secondStatusButton = wrapper.find('#status-button-11803').hostNodes();
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  In Progress");
    secondStatusButton.simulate('click');
    expect(wrapper.find("#end-status").hostNodes().text()).toBe("End status:  Done");
    secondStatusButton.simulate('click');
    expect(wrapper.find("#end-status").hostNodes().text()).toBe("End status:  ");
  });

  it("changes the start status when one button is clicked twice and then a second is clicked once", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const statusButton = wrapper.find('#status-button-3').hostNodes();
    const secondStatusButton = wrapper.find('#status-button-10804').hostNodes();
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  In Progress");
    statusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  ");
    secondStatusButton.simulate('click');
    expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status:  On Hold");
    expect(wrapper.find("#end-status").hostNodes().text()).toBe("End status:  ");
  });

  it("updates the issue type correctly when an issue type button is clicked", () => {
    const wrapper = mount(<WorkflowContainer workflow={workflow} project={"ZMetric"}/>);
    const issueTypeButton = wrapper.find('#issue-button-10000').hostNodes();
    issueTypeButton.simulate('click');
    expect(wrapper.find('#status-button-11903').exists()).toEqual(false);
    expect(wrapper.find('#status-button-12305').exists()).toEqual(true);
  })
});
