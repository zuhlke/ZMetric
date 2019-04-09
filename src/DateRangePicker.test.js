import {DateRangePicker} from "./DateRangePicker";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {mount} from "enzyme";
import React from 'react';

describe("DateRangePicker", () =>{
    it("renders DatesRangeInput that correctly calls props.dateRangeUpdate fromm DateRangePicker on change", () => {
        const mockFn = jest.fn();
        const wrapper = mount(<DateRangePicker dateRangeUpdate={mockFn}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '01-02-2019 - 02-02-2019' } };
        datesRangeInput.props().onChange(event, {name: "datesRange", value: '01-02-2019 - 02-02-2019'});
        expect(mockFn).toHaveBeenCalledWith('01-02-2019 - 02-02-2019');
    });

    it("renders DatesRangeInput that does not call props.dateRangeUpdate fromm DateRangePicker on change when value is only one date", () => {
        const mockFn = jest.fn();
        const wrapper = mount(<DateRangePicker dateRangeUpdate={mockFn}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '01-02-2019 - 02-02-2019' } };
        datesRangeInput.props().onChange(event, {name: "datesRange", value: '01-02-2019'});
        expect(mockFn).not.toHaveBeenCalled();
    });
});
