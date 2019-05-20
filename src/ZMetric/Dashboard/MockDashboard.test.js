import React from 'react';
import ReactDOM from 'react-dom';
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MockDashboard from "./MockDashBoard";
import {mount} from "enzyme/build";
import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {AreaChart, ComposedChart, LineChart, ReferenceLine} from "recharts";

const session = {name: 'cookie', value: '123'};
const project = "MockProject";
const jiraUrl = "jira.url";
describe("Dashboard", () => {
  it('renders without crashing', () => {
    const mock = new MockAdapter(axios, 200);
    const div = document.createElement('div');
    ReactDOM.render(<MockDashboard project={project} session={session} jiraUrl={jiraUrl}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders LeadTimeChart when the eadTimeMenuItem is selected from the sidebar menu", () => {
    const wrapper = mount(<MockDashboard />);
    const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
    expect(wrapper.exists(LeadTimeLineChart)).toBe(false);
    leadTimeMenuItem.simulate('click');
    expect(wrapper.exists(LeadTimeLineChart)).toBe(true);
  });

  it("renders CumulativeFlowReport when the CumulativeFlowReportMenuItem is selected from the sidebar menu", () => {
    const wrapper = mount(<MockDashboard />);
    expect(wrapper.exists(CumulativeFlowReport)).toBe(false);
    const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
    cumulativeFlowMenuItem.simulate('click');
    expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
  });

  it("renders ThroughputReport when the ThroughputMenuItem is selected from the sidebar menu", () => {
    const wrapper = mount(<MockDashboard />);
    const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
    const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
    cumulativeFlowMenuItem.simulate('click');
    expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
    expect(wrapper.exists(ThroughputReport)).toBe(false);
    throughputMenuItem.simulate('click');
    expect(wrapper.exists(ThroughputReport)).toBe(true);
  });

  it("renders LeadTimeChart with updated data values when DateRangePicker is used to specify a date range", () => {
    const wrapper = mount(<MockDashboard />);
    const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
    leadTimeMenuItem.simulate('click');
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(LineChart).props();
    expect(chartProps.data.length).toEqual(2);
    expect(chartProps.data[0].date).toEqual("2019-02-02");
    expect(chartProps.data[1].date).toEqual("2019-02-03")
  });

  it("renders CumulativeFlowReport with updated props.data when DateRangePicker is used to specify a date range", () => {
    const wrapper = mount(<MockDashboard />);
    const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
    cumulativeFlowMenuItem.simulate('click');
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(CumulativeFlowReport).props();
    chartProps.data.forEach(issueType => {
      expect(issueType.data.length).toEqual(2);
      expect(issueType.data[0].date).toEqual("2019-02-02");
      expect(issueType.data[1].date).toEqual("2019-02-03")
    });
  });

  it("renders CumulativeFlowReport AreaChart with updated data values when DateRangePicker is used to specify a date range", () => {
    const wrapper = mount(<MockDashboard />);
    const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
    cumulativeFlowMenuItem.simulate('click');
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(AreaChart).props();
    expect(chartProps.data.length).toEqual(2);
    expect(chartProps.data[0].date).toEqual("2019-02-02");
    expect(chartProps.data[1].date).toEqual("2019-02-03")
  });

  it("renders ThroughputReport with updated data values when DateRangePicker is used to specify a date range", () => {
    const wrapper = mount(<MockDashboard />);
    const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
    throughputMenuItem.simulate('click');
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    const chartProps = wrapper.find(ComposedChart).props();
    expect(chartProps.data.length).toEqual(2);
    expect(chartProps.data[0].date).toEqual("2019-02-02");
    expect(chartProps.data[1].date).toEqual("2019-02-03")
  });


  xit("re-renders throughput report's ReferenceLine at height of average throughput during a date range specified with the DateRangePicker", () => {
    const wrapper = mount(<MockDashboard />);
    const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
    const event = {target: {value: '02-02-2019 - 03-02-2019'}};
    const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
    throughputMenuItem.simulate('click');
    const chartProps = wrapper.find(ThroughputReport);
    expect(wrapper.find(ReferenceLine).props().y).toEqual(2.5);
    act(() => {
      datesRangeInput.props().onChange(event, {value: '02-02-2019 - 03-02-2019'});
    });
    wrapper.update();
    expect(wrapper.find("#AverageThroughputLine").props().y).toEqual(3.5);
  });

});




