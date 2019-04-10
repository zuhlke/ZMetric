import React from 'react';
import ReactDOM from 'react-dom';
import {act} from "react-dom/test-utils";
import App from './App';
import {mount} from 'enzyme';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {LineChart} from "recharts";

describe("App", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("updates the date range of the line graph correctly when a new date range is specified", () => {
        const wrapper = mount(<App />);
        const datesRangeInput = wrapper.find('#data-range-picker-lead').find(DatesRangeInput);
        const event = {target: {value: "01-02-2019 - 02-02-2019"}};
        act(() => {
            datesRangeInput.props().onChange(event, {name: "datesRange", value: '01-02-2019 - 02-02-2019'});
        });
        wrapper.update();
        const chartProps = wrapper.find("#lead-time-line-chart").find(LineChart).props();
        expect(chartProps.data).toEqual([
            {
                "date": "2019-02-01",
                "averageLeadTime": 0,
                "averageCycleTime": 0
            },
            {
                "date": "2019-02-02",
                "averageLeadTime": 1,
                "averageCycleTime": 0,
            }])
    })
});




