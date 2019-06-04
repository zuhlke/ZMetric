import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowReport} from "./CumulativeFlowReport";
import {mount} from "enzyme/build";
import {Area} from "recharts";
import {Table} from "semantic-ui-react";


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
    ReactDOM.render(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} selectedStatuses={["To Do", "Done"]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('initialises all workflow states as selected', () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400} selectedStatuses={["To Do", "Done"]}/>);
    expect(wrapper.find(Area).length).toBe(2);
  });

  it("initially renders report without data table ", () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400} selectedStatuses={["To Do", "Done"]}/>);
    expect(wrapper.exists(Table)).toBe(false);
  });

  it("renders the data table when the data table button is clicked", () => {
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400} selectedStatuses={["To Do", "Done"]}/>);
    const tableButton = wrapper.find('#cumulativeFlowReportDataTableButton').hostNodes();
    expect(wrapper.exists(Table)).toBe(false);
    tableButton.simulate('click');
    expect(wrapper.exists(Table)).toBe(true);
  });

  it("renders an Area in the AreaChart for each selected WorkflowStatus in the props", ()=>{
    const wrapper = mount(<CumulativeFlowReport data={cumulativeFlowData} workflow={workflow} graphWidth={400} selectedStatuses={["To Do", "Done"]}/>);
    expect(wrapper.find(Area).exists({id:"To Do"})).toBe(true);
    expect(wrapper.find(Area).exists({id:"Done"})).toBe(true);
  })

});
