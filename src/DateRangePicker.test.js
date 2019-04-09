import {DateRangePicker} from "./DateRangePicker";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {mount} from "enzyme";
import React from 'react';
import {act} from "react-dom/test-utils";

describe("DateRangePicker", () =>{
    it("renders DatesRangeInput that correctly calls props.dateRangeUpdate fromm DateRangePicker on change", () => {
        const mockFn = jest.fn();
        const wrapper = mount(<DateRangePicker dateRangeUpdate={mockFn} minDate={"01-02-2019"} maxDate={"09-02-2019"}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '01-02-2019 - 02-02-2019' } };
        act(() => {
            datesRangeInput.props().onChange(event, {value: '01-02-2019 - 02-02-2019'});
        });
        expect(mockFn).toHaveBeenCalledWith('01-02-2019 - 02-02-2019');
    });

    it("renders DatesRangeInput that does not call props.dateRangeUpdate fromm DateRangePicker on change when value is only one date", () => {
        const mockFn = jest.fn();
        const wrapper = mount(<DateRangePicker dateRangeUpdate={mockFn} minDate={"01-02-2019"} maxDate={"09-02-2019"}/>);
        const datesRangeInput = wrapper.find(DatesRangeInput);
        const event =  { target: { value: '01-02-2019 - 02-02-2019' } };
        act(() => {
            datesRangeInput.props().onChange(event, {value: '01-02-2019'});
        });
        expect(mockFn).not.toHaveBeenCalled();
    });
});
