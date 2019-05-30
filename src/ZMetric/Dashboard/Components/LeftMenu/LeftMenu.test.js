import ReactDOM from "react-dom";
import React from "react";
import {mount} from "enzyme";
import {LeftMenu} from "./LeftMenu";

describe("CumulativeFlowLocalFilters", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeftMenu updateCurrentReport={()=>{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
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
