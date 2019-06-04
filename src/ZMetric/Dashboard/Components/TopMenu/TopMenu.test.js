import {TopMenu} from "./TopMenu";
import ReactDOM from "react-dom";
import React from "react";
import moment from "moment";
import {mount} from "enzyme";
import {Button} from "semantic-ui-react";

describe("TopMenu", () =>{
  let initialSelectedIssueTypes;

  beforeEach(() => {
    initialSelectedIssueTypes = [
      { issueType: 'Story', active: true },
      { issueType: 'Task', active: true },
      { issueType: 'Epic', active: true },
      { issueType: 'Bug', active: true },
      { issueType: 'Sub-task', active: true },
      { issueType: 'Spike', active: true } ];
  });

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
                             updateSidebarVisibility={() => {}}
                             minDate={moment()} maxDate={moment()}
                             dateRangeUpdate={() => {}} projects={["ZMETRIC","ZAPP","ZTRACK"]}
                             selectedIssueTypes={initialSelectedIssueTypes}
                             updateSelectedIssueTypes={() => {}}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it("renders all buttons as active initially", () => {
    const wrapper = mount(<TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
                                  updateSidebarVisibility={() => {}}
                                  minDate={moment()} maxDate={moment()}
                                  dateRangeUpdate={() => {}} projects={["ZMETRIC","ZAPP","ZTRACK"]}
                                  selectedIssueTypes={initialSelectedIssueTypes}
                                  updateSelectedIssueTypes={() => {}}/>);
    const buttons = wrapper.find(Button);
    buttons.forEach(button => expect(button.props().active).toEqual(true))
  });

  it("calls updateSelectedIssueTypes with an updated list of issue types when a button is clicked.", () => {
    const updateSelectedIssueTypesCallback = jest.fn(() => {});
    const wrapper = mount(<TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
                                   updateSidebarVisibility={() => {}}
                                   minDate={moment()} maxDate={moment()}
                                   dateRangeUpdate={() => {}} projects={["ZMETRIC","ZAPP","ZTRACK"]}
                                   selectedIssueTypes={[...initialSelectedIssueTypes]}
                                   updateSelectedIssueTypes={updateSelectedIssueTypesCallback}/>);
    const button = wrapper.find("#issueTypeButtonEpic").hostNodes();
    button.simulate('click');
    expect(updateSelectedIssueTypesCallback.mock.calls[0][0]).toEqual([
      { issueType: 'Story', active: true },
      { issueType: 'Task', active: true },
      { issueType: 'Epic', active: false },
      { issueType: 'Bug', active: true },
      { issueType: 'Sub-task', active: true },
      { issueType: 'Spike', active: true } ]);
  });

  it("calls updateSelectedIssueTypes with an updated list of issue types when a in-active button is clicked.", () => {
    const selectedIssueTypes = [
      { issueType: 'Story', active: true },
      { issueType: 'Task', active: true },
      { issueType: 'Epic', active: false },
      { issueType: 'Bug', active: true },
      { issueType: 'Sub-task', active: true },
      { issueType: 'Spike', active: false } ];
    const updateSelectedIssueTypesCallback = jest.fn(() => {});
    const wrapper = mount(<TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
                                   updateSidebarVisibility={() => {}}
                                   minDate={moment()} maxDate={moment()}
                                   dateRangeUpdate={() => {}} projects={["ZMETRIC","ZAPP","ZTRACK"]}
                                   selectedIssueTypes={selectedIssueTypes}
                                   updateSelectedIssueTypes={updateSelectedIssueTypesCallback}/>);
    const button = wrapper.find("#issueTypeButtonEpic").hostNodes();
    button.simulate('click');
    expect(updateSelectedIssueTypesCallback.mock.calls[0][0]).toEqual([
      { issueType: 'Story', active: true },
      { issueType: 'Task', active: true },
      { issueType: 'Epic', active: true },
      { issueType: 'Bug', active: true },
      { issueType: 'Sub-task', active: true },
      { issueType: 'Spike', active: false } ]);
  });

});
