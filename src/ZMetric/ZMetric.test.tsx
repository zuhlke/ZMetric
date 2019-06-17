import {act} from "react-dom/test-utils";
import MockDashboard from "./Dashboard/MockDashBoard";
import ZMetric from "./ZMetric";
import React from "react";
import {shallow} from "enzyme";
import SelectProject from "./SelectProject/SelectProject";
import Login from "./Login/Login";

describe("ZMetric", () => {

  const session = {session: {name: 'cookie', value: 'cookie'}};
  const jiraUrl = 'https://jira.url';
  const testProject = "selected project";

  it('should render login screen by default', () => {
    const wrapper = shallow(<ZMetric/>);
    expect(wrapper.exists(Login)).toBe(true);
  });

  it('should render select screen after successful login', () => {
    const wrapper = shallow(<ZMetric/>);
    act(() => wrapper.find(Login).props().onSuccess(session, jiraUrl));
    expect(wrapper.exists(SelectProject)).toBe(true);
  });

  it('should render dashboard once project selected', () => {
    const wrapper = shallow(<ZMetric/>);
    act(() => wrapper.find(Login).props().onSuccess(session, jiraUrl));
    act(() => wrapper.find(SelectProject).props().onProjectSelected(testProject));
    expect(wrapper.exists(MockDashboard)).toBe(true);
  });

});
