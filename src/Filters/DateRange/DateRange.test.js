import {DatesRangeInput} from "semantic-ui-calendar-react";
import {mount} from "enzyme";
import React from 'react';
import {act} from "react-dom/test-utils";
import {DateRange} from "./DateRange";

describe("DateRangePicker", () => {
  it("renders DatesRangeInput that correctly calls props.dateRangeUpdate fromm DateRangePicker on change", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<DateRange dateRangeUpdate={mockFn} minDate={"01-02-2019"} maxDate={"09-02-2019"}/>);
    const datesRangeInput = wrapper.find(DatesRangeInput);
    const event = {target: {value: '01-02-19 - 02-02-19'}};
    act(() => {
      datesRangeInput.props().onChange(event, {value: '01-02-19 - 02-02-19'});
    });
    expect(mockFn).toHaveBeenCalledWith('01-02-19 - 02-02-19');
  });

  it("renders DatesRangeInput that does not call props.dateRangeUpdate from DateRangePicker on change when value is only one date", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<DateRange dateRangeUpdate={mockFn} minDate={"01-02-2019"} maxDate={"09-02-2019"}/>);
    const datesRangeInput = wrapper.find(DatesRangeInput);
    const event = {target: {value: '01-02-19 - 02-02-19'}};
    act(() => {
      datesRangeInput.props().onChange(event, {value: '01-02-19'});
    });
    expect(mockFn).not.toHaveBeenCalled();
  });
});
