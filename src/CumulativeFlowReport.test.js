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
        "In Review": 0,
        "Ready to Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-02",
        "To Do":12,
        "In Progress": 2,
        "On Hold": 1,
        "In Review": 1,
        "Ready to Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-03",
        "To Do":11,
        "In Progress": 3,
        "On Hold": 1,
        "In Review": 0,
        "Ready to Test": 1,
        "Done": 0
    },
    {
        "date": "2019-02-04",
        "To Do":9,
        "In Progress": 2,
        "On Hold": 0,
        "In Review": 2,
        "Ready to Test": 1,
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

    statuses.forEach( (status,index) => {
        it("renders without the " + status.name + " status when the " + status.name + " checkbox is unchecked!", () => {
            const expectedArray = [];
            unfilteredData.forEach((entry, index) => {
                expectedArray[index] = Object.assign({}, entry);
                delete expectedArray[index][status.name];
            });

            const wrapper = mount(<CumulativeFlowReport data={unfilteredData}/>);
            const statusCheckBox = wrapper.find('#multi-issue-selector-checkbox-' + status.id).hostNodes();

            statusCheckBox.simulate('change', { target: { checked: false } });
            const chartProps = wrapper.find(AreaChart).props();
            expect(chartProps.data).toEqual(expectedArray)
        });

        it("renders with the " + status.name + " status when the " + status.name + " checkbox is unchecked and then checked again!", () => {
            const wrapper = mount(<CumulativeFlowReport data={unfilteredData}/>);
            const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-' + status.id).hostNodes();

            doneCheckBox.simulate('change', { target: { checked: false } });
            doneCheckBox.simulate('change', { target: { checked: true } });
            const chartProps = wrapper.find(AreaChart).props();
            expect(chartProps.data).toEqual(unfilteredData)
        });

        const secondStatus = statuses[((index+1)%statuses.length)];
        it("renders without the " + status.name + " status or " + secondStatus.name + " status when the " + status.name + " checkbox and then the " + secondStatus.name + " checkbox are unchecked", () => {
            const expectedArray = [];
            unfilteredData.forEach((entry, index) => {
                expectedArray[index] = Object.assign({}, entry);
                delete expectedArray[index][status.name];
                delete expectedArray[index][secondStatus.name];
            });

            const wrapper = mount(<CumulativeFlowReport data={unfilteredData}/>);
            const doneCheckBox = wrapper.find('#multi-issue-selector-checkbox-' + status.id).hostNodes();
            const toDoCheckBox = wrapper.find('#multi-issue-selector-checkbox-' + secondStatus.id).hostNodes();

            doneCheckBox.simulate('change', { target: { checked: false } });
            toDoCheckBox.simulate('change', { target: { checked: false } });
            const chartProps = wrapper.find(AreaChart).props();
            expect(chartProps.data).toEqual(expectedArray)
        });
    });

});
