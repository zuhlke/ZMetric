import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowReport} from "./CumulativeFlowReport";
import {mount} from "enzyme/build";
import {DatesRangeInput} from "semantic-ui-calendar-react/dist/commonjs/index";
import {Checkbox} from "semantic-ui-react";
import {act} from "react-dom/test-utils";
import {Area, AreaChart} from "recharts";
import {MultipleWorkflowStatusesSelector} from "./Filters/IssueTypeAndStatus/Selectors/MultipleWorkflowStatusesSelector";
import {MultipleIssueTypeSelector} from "./Filters/IssueTypeAndStatus/Selectors/MultipleIssueTypeSelector";

describe("CumulativeFlowReport", () => {
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
      "id": "11201",
      "name": "Epic",
      "statuses": [
        {
          "name": "In Progress",
          "id": "2"
        }
      ]
    }, {
      "id": "11204",
      "name": "Spike",
      "statuses": [
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
  const data = [
    {
      "date": "2019-02-01",
      "To Do": 14,
      "In Progress": 2,
      "On Hold": 0,
      "Review": 0,
      "Ready For Test": 0,
      "Done": 0
    },
    {
      "date": "2019-02-02",
      "To Do": 12,
      "In Progress": 2,
      "On Hold": 1,
      "Review": 1,
      "Ready For Test": 0,
      "Done": 0
    },
    {
      "date": "2019-02-03",
      "To Do": 11,
      "In Progress": 3,
      "On Hold": 1,
      "Review": 0,
      "Ready For Test": 1,
      "Done": 0
    },
    {
      "date": "2019-02-04",
      "To Do": 9,
      "In Progress": 2,
      "On Hold": 0,
      "Review": 2,
      "Ready For Test": 1,
      "Done": 2
    }
  ];

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<CumulativeFlowReport data={data} workflow={workflow}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("updates data when selecting new date range", () => {
    const wrapper = mount(<CumulativeFlowReport data={data} workflow={workflow}/>);
    const datesRangeInput = wrapper.find(DatesRangeInput);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(AreaChart).props();
    expect(chartProps.data).toEqual(data.slice(1, 3));
  });

  it('initialises all workflow states as selected', () => {
    const wrapper = mount(<CumulativeFlowReport data={data} workflow={workflow} graphWidth={400}/>);

    expect(wrapper.find(Area).length).toBe(2);
  });

  it('initializes issue types with story as default', () => {
    const wrapper = mount(<CumulativeFlowReport data={data} workflow={workflow} graphWidth={400}/>);

    expect(wrapper.find("#multi-issue-selector-checkbox-10001").hostNodes().props().checked).toBeTruthy();
  });

  it("updates graph when deselecting workflow state", () => {
    const wrapper = mount(<CumulativeFlowReport data={data} workflow={workflow} graphWidth={400}/>);
    const workflowSelector = wrapper.find(MultipleWorkflowStatusesSelector);

    expect(wrapper.find(Area).length).toEqual(2);

    workflowSelector.find(Checkbox).first().simulate('change');

    expect(wrapper.find(Area).length).toEqual(1);
  });

  it("updates available workflows when selecting issues types with new workflows", () => {
    const wrapper = mount(<CumulativeFlowReport data={data} workflow={workflow} graphWidth={400}/>);
    const issueTypeSelector = wrapper.find(MultipleIssueTypeSelector);

    issueTypeSelector.find(Checkbox).first().simulate('change');

    const workflowSelector = wrapper.find(MultipleWorkflowStatusesSelector);
    const workflowStates = workflowSelector.find(Checkbox);
    expect(workflowStates.length).toEqual(3);
  });
});
