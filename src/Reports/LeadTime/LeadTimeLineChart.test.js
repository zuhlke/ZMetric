import React from 'react';
import ReactDOM from "react-dom";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {mount} from "enzyme";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {LineChart} from "recharts";


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

});
