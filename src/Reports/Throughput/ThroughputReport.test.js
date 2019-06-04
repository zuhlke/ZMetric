import React from 'react';
import {ThroughputReport} from "./ThroughputReport";
import {mount, shallow} from "enzyme";
import {ReferenceLine} from "recharts";
import ReactDOM from "react-dom";
import {Table} from "semantic-ui-react";

const data = [
  {
    "date": "2019-02-01",
    "throughput": 1
  },
  {
    "date": "2019-02-02",
    "throughput": 3
  },
  {
    "date": "2019-02-03",
    "throughput": 4
  },
  {
    "date": "2019-02-04",
    "throughput": 2
  }];

describe("ThroughputReport", () => {

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThroughputReport data={data}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders ReferenceLine at height of average throughput", () => {
    const wrapper = shallow(<ThroughputReport data={data}/>);
    expect(wrapper.find(ReferenceLine).props().y).toEqual(2.5);
  });

  it("initially renders report without data table ", () => {
    const wrapper = mount(<ThroughputReport data={data}/>);
    expect(wrapper.exists(Table)).toBe(false);
  });

  it("renders the data table when the data table button is clicked", () => {
    const wrapper = mount(<ThroughputReport data={data}/>);
    const tableButton = wrapper.find('#throughputReportDataTableButton').hostNodes();
    expect(wrapper.exists(Table)).toBe(false);
    tableButton.simulate('click');
    expect(wrapper.exists(Table)).toBe(true);
  })

});
