import React from 'react';
import ReactDOM from "react-dom";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {mount} from "enzyme";
import {Table} from "semantic-ui-react";


describe("LeadTimeLineChart", () => {

  const data = [
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

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeadTimeLineChart data={data}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("initially renders report without data table ", () => {
    const wrapper = mount(<LeadTimeLineChart data={data}/>);
    expect(wrapper.exists(Table)).toBe(false);
  });

  it("renders the data table when the data table button is clicked", () => {
    const wrapper = mount(<LeadTimeLineChart data={data}/>);
    const tableButton = wrapper.find('#leadTimeReportDataTableButton').hostNodes();
    expect(wrapper.exists(Table)).toBe(false);
    tableButton.simulate('click');
    expect(wrapper.exists(Table)).toBe(true);
  })


});
