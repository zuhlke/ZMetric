import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowReport} from "./CumulativeFlowReport";
import {mount} from "enzyme/build";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {AreaChart} from "recharts";
import {getMockWorkflow} from "./MockDataFetcher";

const unfilteredData = [
    {
        "date": "2019-02-01",
        "To Do":14,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-02",
        "To Do":12,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-03",
        "To Do":11,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0
    },
    {
        "date": "2019-02-04",
        "To Do":9,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2
    }
];

describe("CumulativeFlowReport", () => {
    const statuses = getMockWorkflow()[3].statuses;

    it("renders without crashing", () =>{
        const div = document.createElement('div');
        ReactDOM.render(<CumulativeFlowReport data={unfilteredData}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders with updated data values when DateRangePicker is used to specify a date range", () =>{
        const wrapper = mount(<CumulativeFlowReport data={unfilteredData}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '02-02-2019 - 03-02-2019' } };
        act(() => {
            datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
        });
        wrapper.update();
        const chartProps = wrapper.find(AreaChart).props();
        expect(chartProps.data).toEqual(unfilteredData.slice(1,3));
    });
});
