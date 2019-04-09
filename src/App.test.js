import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";

const data = [
  {
    "date": "2019-02-01",
    "averageLeadTime": 0,
    "averageCycleTime":0
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
    "averageCycleTime":2
  },
  {
    "date": "2019-02-05",
    "averageLeadTime": 2,
    "averageCycleTime": 1
  }
  ];

describe("App", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("updates the date range of the line graph correctly when a new date range is specified", () => {
    const wrapper = mount(<App data={data}/>);
    const datesRangeInput = wrapper.find(DatesRangeInput);
    const event =  { target: { value: '01-02-2019 - 02-02-2019' } };
    datesRangeInput.props().onChange(event, {name: "datesRange", value: '01-02-2019 - 02-02-2019'});
    wrapper.update();
    const chartProps = wrapper.find(LeadAndCycleTimeTable).props();
    expect(chartProps.data).toEqual([
      {
        "date": "2019-02-01",
        "averageLeadTime": 0,
        "averageCycleTime":0
      },
      {
        "date": "2019-02-02",
        "averageLeadTime": 1,
        "averageCycleTime": 0,
      }])
  })
});




