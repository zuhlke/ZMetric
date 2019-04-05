import {WorkflowContainer} from "./WorkflowContainer";
import ReactDOM from "react-dom";
import React from "react";
import {mount} from "enzyme";

describe("WorkFlowContainer", () => {

    const workflow = {
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
        ]
    };

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<WorkflowContainer workflow={workflow.statuses} project={"ZMetric"}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("it sets the start state when a status is clicked", () => {
        const wrapper = mount(<WorkflowContainer workflow={workflow.statuses} project={"ZMetric"}/>);
        const statusButton = wrapper.find('#status-button-3').hostNodes();
        statusButton.simulate('click');
        expect(wrapper.find("#start-status").hostNodes().text()).toBe("Start status: In Progress");
    });
});
