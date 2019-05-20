import React from 'react';
import {ThroughputReport} from "./ThroughputReport";
import {shallow} from "enzyme";
import {ReferenceLine} from "recharts";
import ReactDOM from "react-dom";

const unfilteredData = [
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
    ReactDOM.render(<ThroughputReport data={unfilteredData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders ReferenceLine at height of average throughput", () => {
    const wrapper = shallow(<ThroughputReport data={unfilteredData}/>);
    expect(wrapper.find(ReferenceLine).props().y).toEqual(2.5);
  });


});
