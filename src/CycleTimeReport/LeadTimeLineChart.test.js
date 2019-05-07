import React from 'react';
import ReactDOM from "react-dom";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {mount} from "enzyme";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {LineChart} from "recharts";

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
describe("LeadTimeLineChart", () => {

  const unfilteredData = [
    {
      "date": "2019-02-01",
      "averageLeadTime": 0,
      "averageCycleTime": 0
    },
    {
      "date": "2019-02-02",
      "averageLeadTime": 1,
      "averageCycleTime": 0,
    },
    {
      "date": "2019-02-03",
      "averageLeadTime": 1,
      "averageCycleTime": 1
    },
    {
      "date": "2019-02-04",
      "averageLeadTime": 3,
      "averageCycleTime": 2
    }];

  const expectedFilteredData = [
    {
      "date": "2019-02-02",
      "averageLeadTime": 1,
      "averageCycleTime": 0,
    },
    {
      "date": "2019-02-03",
      "averageLeadTime": 1,
      "averageCycleTime": 1
    }];

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeadTimeLineChart workflow={workflow} data={unfilteredData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders LineChart with updated data values when DateRangePicker is used to specify a date range", () => {
    const wrapper = mount(<LeadTimeLineChart data={unfilteredData} workflow={workflow}/>);
    const datesRangeInput = wrapper.find(DatesRangeInput);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(LineChart).props();
    expect(chartProps.data).toEqual(expectedFilteredData);
  });

});
