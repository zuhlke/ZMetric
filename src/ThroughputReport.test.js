import React from 'react';
import {ThroughputReport} from "./ThroughputReport";
import {mount} from "enzyme";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {BarChart} from "recharts";

const unfilteredData = [
    {
        "date": "2019-02-01",
        "throughput":1
    },
    {
        "date": "2019-02-02",
        "throughput":3
    },
    {
        "date": "2019-02-03",
        "throughput":4
    },
    {
        "date": "2019-02-04",
        "throughput":2
    }];
const expectedFilteredData = [
    {
        "date": "2019-02-02",
        "throughput":3
    },
    {
        "date": "2019-02-03",
        "throughput":4
    }
];

describe("ThroughputReport", () =>{

    it("renders BarChart with updated data values when DateRangePicker is used to specify date range", () => {
        const wrapper = mount(<ThroughputReport data={unfilteredData}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '02-02-2019 - 03-02-2019' } };
        act(() => {
            datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
        });
        wrapper.update();
        const chartProps = wrapper.find(BarChart).props();
        expect(chartProps.data).toEqual(expectedFilteredData)
    })
});
