import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowReport} from "./CumulativeFlowReport";
import {mount} from "enzyme/build";
import {Checkbox} from "semantic-ui-react";
import {Area} from "recharts";
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
  const cumulativeFlowData = [
    {
      "id": "1",
      "name": "Bug",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-04",
          "To Do": 1,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-05",
          "To Do": 0,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-06",
          "To Do": 2,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-07",
          "To Do": 2,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-08",
          "To Do": 2,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-09",
          "To Do": 2,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 2,
          "Ready For Test": 1,
          "Done": 2, "Bug To Do": 0
        },
        {
          "date": "2019-02-10",
          "To Do": 0,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 1,
          "Done": 4, "Bug To Do": 0
        },
        {
          "date": "2019-02-11",
          "To Do": 0,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 6, "Bug To Do": 0
        },
        {
          "date": "2019-02-12",
          "To Do": 0,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 2,
          "Done": 8, "Bug To Do": 0
        }
      ]
    }, {
      "id": "10000",
      "name": "Epic",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-04",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-05",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-06",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-07",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-08",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-09",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-10",
          "To Do": 6,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-11",
          "To Do": 5,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 1
        },
        {
          "date": "2019-02-12",
          "To Do": 5,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 1
        }
      ]
    }, {
      "id": "11201",
      "name": "Spike",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 2,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 1,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 1,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 1
        },
        {
          "date": "2019-02-04",
          "To Do": 0,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 1
        },
        {
          "date": "2019-02-05",
          "To Do": 2,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 1
        },
        {
          "date": "2019-02-06",
          "To Do": 1,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 2
        },
        {
          "date": "2019-02-07",
          "To Do": 0,
          "In Progress": 1,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 3
        },
        {
          "date": "2019-02-08",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 4
        },
        {
          "date": "2019-02-09",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 4
        },
        {
          "date": "2019-02-10",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 4
        },
        {
          "date": "2019-02-11",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 4
        },
        {
          "date": "2019-02-12",
          "To Do": 0,
          "In Progress": 0,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 4
        }
      ]
    }, {
      "id": "10001",
      "name": "Story",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 14,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 12,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 11,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-04",
          "To Do": 9,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 2,
          "Ready For Test": 1,
          "Done": 2
        },
        {
          "date": "2019-02-05",
          "To Do": 8,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 3
        },
        {
          "date": "2019-02-06",
          "To Do": 8,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 5
        },
        {
          "date": "2019-02-07",
          "To Do": 6,
          "In Progress": 4,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 6
        },
        {
          "date": "2019-02-08",
          "To Do": 4,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 1,
          "Done": 7
        },
        {
          "date": "2019-02-09",
          "To Do": 4,
          "In Progress": 2,
          "On Hold": 2,
          "Review": 2,
          "Ready For Test": 0,
          "Done": 7
        },
        {
          "date": "2019-02-10",
          "To Do": 3,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 2,
          "Done": 8
        },
        {
          "date": "2019-02-11",
          "To Do": 1,
          "In Progress": 3,
          "On Hold": 2,
          "Review": 3,
          "Ready For Test": 3,
          "Done": 8
        },
        {
          "date": "2019-02-12",
          "To Do": 0,
          "In Progress": 2,
          "On Hold": 4,
          "Review": 3,
          "Ready For Test": 2,
          "Done": 10
        }
      ]
    }, {
      "id": "5",
      "name": "Sub-task",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 14,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 12,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 11,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-04",
          "To Do": 9,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 2,
          "Ready For Test": 1,
          "Done": 2
        },
        {
          "date": "2019-02-05",
          "To Do": 8,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 3
        },
        {
          "date": "2019-02-06",
          "To Do": 8,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 5
        },
        {
          "date": "2019-02-07",
          "To Do": 6,
          "In Progress": 4,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 6
        },
        {
          "date": "2019-02-08",
          "To Do": 4,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 1,
          "Done": 7
        },
        {
          "date": "2019-02-09",
          "To Do": 4,
          "In Progress": 2,
          "On Hold": 2,
          "Review": 2,
          "Ready For Test": 0,
          "Done": 7
        },
        {
          "date": "2019-02-10",
          "To Do": 3,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 2,
          "Done": 8
        },
        {
          "date": "2019-02-11",
          "To Do": 1,
          "In Progress": 3,
          "On Hold": 2,
          "Review": 3,
          "Ready For Test": 3,
          "Done": 8
        },
        {
          "date": "2019-02-12",
          "To Do": 0,
          "In Progress": 2,
          "On Hold": 4,
          "Review": 3,
          "Ready For Test": 2,
          "Done": 10
        }
      ]
    }, {
      "id": "3",
      "name": "Task",
      "data": [
        {
          "date": "2019-02-01",
          "To Do": 14,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-02",
          "To Do": 12,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-03",
          "To Do": 11,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 0, "Bug To Do": 5
        },
        {
          "date": "2019-02-04",
          "To Do": 9,
          "In Progress": 2,
          "On Hold": 0,
          "Review": 2,
          "Ready For Test": 1,
          "Done": 2
        },
        {
          "date": "2019-02-05",
          "To Do": 8,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 0,
          "Done": 3
        },
        {
          "date": "2019-02-06",
          "To Do": 8,
          "In Progress": 2,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 1,
          "Done": 5
        },
        {
          "date": "2019-02-07",
          "To Do": 6,
          "In Progress": 4,
          "On Hold": 1,
          "Review": 0,
          "Ready For Test": 0,
          "Done": 6
        },
        {
          "date": "2019-02-08",
          "To Do": 4,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 1,
          "Done": 7
        },
        {
          "date": "2019-02-09",
          "To Do": 4,
          "In Progress": 2,
          "On Hold": 2,
          "Review": 2,
          "Ready For Test": 0,
          "Done": 7
        },
        {
          "date": "2019-02-10",
          "To Do": 3,
          "In Progress": 3,
          "On Hold": 1,
          "Review": 1,
          "Ready For Test": 2,
          "Done": 8
        },
        {
          "date": "2019-02-11",
          "To Do": 1,
          "In Progress": 3,
          "On Hold": 2,
          "Review": 3,
          "Ready For Test": 3,
          "Done": 8
        },
        {
          "date": "2019-02-12",
          "To Do": 0,
          "In Progress": 2,
          "On Hold": 4,
          "Review": 3,
          "Ready For Test": 2,
          "Done": 10
        }
      ]
    }
  ];

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('initialises all workflow states as selected', () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400}/>);

    expect(wrapper.find(Area).length).toBe(2);
  });

  it('initializes issue types with story as default', () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400}/>);

    expect(wrapper.find("#multi-issue-selector-checkbox-10001").hostNodes().props().checked).toBeTruthy();
  });

  it("updates graph when deselecting workflow state", () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400}/>);
    const workflowSelector = wrapper.find(MultipleWorkflowStatusesSelector);
    expect(wrapper.find(Area).length).toEqual(2);
    workflowSelector.find(Checkbox).first().simulate('change');
    expect(wrapper.find(Area).length).toEqual(1);
  });

  it("updates available workflows when selecting issues types with new workflows", () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400}/>);
    const issueTypeSelector = wrapper.find(MultipleIssueTypeSelector);

    issueTypeSelector.find(Checkbox).first().simulate('change');

    const workflowSelector = wrapper.find(MultipleWorkflowStatusesSelector);
    const workflowStates = workflowSelector.find(Checkbox);
    expect(workflowStates.length).toEqual(3);
  });
});
