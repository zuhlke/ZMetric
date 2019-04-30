import ZMetric from "./ZMetric";
import React from "react";
import Login from '../Login/Login.js';
import SelectProject from '../SelectProject/SelectProject.js'
import {shallow} from "enzyme";
import Dashboard from "../Dashboard/Dashboard";

describe("ZMetric", () => {
  const session = {session: {name: 'cookie', value: 'cookie'}};
  const jiraUrl = 'https://jira.url';

  it('should render login screen by default', () => {
    const wrapper = shallow(<ZMetric/>);
    expect(wrapper.state().phase).toEqual('Login');
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should render select screen after successful login', () => {
    const wrapper = shallow(<ZMetric/>);
    wrapper.instance().onLogin(session, jiraUrl);
    expect(wrapper.state().phase).toEqual('Select Project');
    expect(wrapper.state().session).toEqual(session);
    expect(wrapper.find(SelectProject)).toHaveLength(1);
  });

  it('should render dashboard once project selected', () => {
    const wrapper = shallow(<ZMetric/>);
    wrapper.instance().onLogin(session, jiraUrl);
    const testProject = "selected project";
    wrapper.instance().onProjectSelected(testProject);
    expect(wrapper.state().phase).toEqual('Dashboard');
    expect(wrapper.state().project).toEqual(testProject);
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });

});