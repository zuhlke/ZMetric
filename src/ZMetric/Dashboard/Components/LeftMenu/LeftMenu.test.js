import ReactDOM from "react-dom";
import React from "react";
import {mount} from "enzyme";
import {LeftMenu} from "./LeftMenu";
import {Icon} from "semantic-ui-react";


describe("CumulativeFlowLocalFilters", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeftMenu updateCurrentReport={()=>{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders sidebar with added text to cumulative flow menu item after the expander is clicked", () =>{
    const wrapper = mount(<LeftMenu updateCurrentReport={() => {}}/>);
    const expander = wrapper.find('#leftMenuExpander').hostNodes();
    const cumulativeFlowMenuItem = wrapper.find('#CumulativeFlowSidebarMenuItem').hostNodes();
    expect(cumulativeFlowMenuItem.text()).toEqual("");
    expander.simulate('click');
    expect(cumulativeFlowMenuItem.text()).toEqual("Cumulative Flow");
  });

  it("renders sidebar with added text to lead and cycle time menu item after the expander is clicked", () =>{
    const wrapper = mount(<LeftMenu updateCurrentReport={() => {}}/>);
    const expander = wrapper.find('#leftMenuExpander').hostNodes();
    const cumulativeFlowMenuItem = wrapper.find('#LeadTimeSidebarMenuItem').hostNodes();
    expect(cumulativeFlowMenuItem.text()).toEqual("");
    expander.simulate('click');
    expect(cumulativeFlowMenuItem.text()).toEqual("Lead & Cycle Time");
  });

  it("renders sidebar with added text to throughput menu item after the expander is clicked", () =>{
    const wrapper = mount(<LeftMenu updateCurrentReport={() => {}}/>);
    const expander = wrapper.find('#leftMenuExpander').hostNodes();
    const cumulativeFlowMenuItem = wrapper.find('#ThroughputSidebarMenuItem').hostNodes();
    expect(cumulativeFlowMenuItem.text()).toEqual("");
    expander.simulate('click');
    expect(cumulativeFlowMenuItem.text()).toEqual("Throughput");
  });

  it("renders sidebar expander pointing in different direction when the expander is clicked", () =>{
    const wrapper = mount(<LeftMenu updateCurrentReport={() => {}}/>);
    const expander = wrapper.find('#leftMenuExpander').hostNodes();
    const expanderIcon = wrapper.find('#leftMenuExpander').find(Icon);
    expect(expanderIcon.props().name).toEqual('angle right');
    expander.simulate('click');
    expect(wrapper.find('#leftMenuExpander').find(Icon).props().name).toEqual('angle left');
  });

  it("Clicking cumulative flow menu item causes updateCurrentReport to be called with the correct argument", () => {
    const mockUpdateReportCallback = jest.fn(() => {});
    const wrapper = mount(<LeftMenu updateCurrentReport={mockUpdateReportCallback}/>);
    const menuItem = wrapper.find('#CumulativeFlowSidebarMenuItem').hostNodes();
    menuItem.simulate('click');
    expect(mockUpdateReportCallback.mock.calls.length).toBe(1);
    expect(mockUpdateReportCallback.mock.calls[0][0]).toBe("CumulativeFlow");
  });

  it("Clicking lead time menu item causes updateCurrentReport to be called with the correct argument", () => {
    const mockUpdateReportCallback = jest.fn(() => {});
    const wrapper = mount(<LeftMenu updateCurrentReport={mockUpdateReportCallback}/>);
    const menuItem = wrapper.find('#LeadTimeSidebarMenuItem').hostNodes();
    menuItem.simulate('click');
    expect(mockUpdateReportCallback.mock.calls.length).toBe(1);
    expect(mockUpdateReportCallback.mock.calls[0][0]).toBe("LeadTime");
  });

  it("Clicking throughput menu item causes updateCurrentReport to be called with the correct argument", () => {
    const mockUpdateReportCallback = jest.fn(() => {});
    const wrapper = mount(<LeftMenu updateCurrentReport={mockUpdateReportCallback}/>);
    const menuItem = wrapper.find('#ThroughputSidebarMenuItem').hostNodes();
    menuItem.simulate('click');
    expect(mockUpdateReportCallback.mock.calls.length).toBe(1);
    expect(mockUpdateReportCallback.mock.calls[0][0]).toBe("Throughput");
  });

});
