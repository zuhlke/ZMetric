import {mount} from "enzyme";
import React from "react";
import SelectProject from "./SelectProject";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import ProjectsMock from "../../__mocks__/Projects.mock";

const session = {name: 'cookie', value: '123'};
const onProjectSelected = jest.fn();

describe('Select Project', () => {

  describe('Loading (projects are loading)', () => {

    it('loading state by default', async () => {
      const wrapper = await loading();
      expect(wrapper.state().phase).toEqual('Loading');
    });

    it('select project button is disabled', async () => {
      const wrapper = await loading();
      expect(wrapper.find('button').first().instance().disabled).toBeTruthy();
    });

  });

  describe('Ready (projects are loaded)', () => {

    it('ready state', async () => {
      const wrapper = await loaded();
      expect(wrapper.state().phase).toEqual('Ready');
    });

    it('transforms a list of projects', async () => {
      const wrapper = await loaded();
      const projects = wrapper.state().projects;
      expect(projects[0]).toEqual({"key": "ACCESS", "text": "ACCESS - Atlassian Access", "value": "ACCESS"});
      expect(projects[projects.length - 1]).toEqual({
        "key": "SRCTREEWIN",
        "text": "SRCTREEWIN - Sourcetree for Windows",
        "value": "SRCTREEWIN"
      });
    });

    it('renders select project as default text in the dropdown', async () => {
      const wrapper = await loaded();
      expect(wrapper.find('.text').first().text()).toEqual("Select Project");
    });

    it('does not set selected project state by default', async () => {
      const wrapper = await loaded();
      expect(wrapper.state().selectedProject).toBeUndefined();
    });

    it('renders select project button', async () => {
      const wrapper = await loaded();
      expect(wrapper.find('button').text()).toEqual('Select Project');
    });

    it('select project button is disabled', async () => {
      const wrapper = await loaded();
      expect(wrapper.find('button').first().instance().disabled).toBeTruthy();
    });

  });

  describe('Actions', () => {

    it('renders list of projects when dropdown clicked', async () => {
      const wrapper = await loaded();
      expect(wrapper.find('.item').length).toEqual(0);
      wrapper.find('.menu').first().simulate('click');
      expect(wrapper.find('.item').length).toEqual(ProjectsMock.ok.length);
    });

    it('updates selected project state when project selected in the dropdown', async () => {
      const wrapper = await loaded();
      wrapper.find('.menu').first().simulate('click');
      wrapper.find('.item').last().simulate('click');
      expect(wrapper.state().selectedProject).toEqual("SRCTREEWIN");
    });

    it('executes onProjectSelected callback after submitting form', async () => {
      const wrapper = await loaded();
      wrapper.find('.menu').first().simulate('click');
      wrapper.find('.item').last().simulate('click');
      wrapper.find('form').simulate('submit');
      expect(onProjectSelected).toHaveBeenCalledWith("SRCTREEWIN");
    });

    it('renders selected project when project selected in the dropdown', async () => {
      const wrapper = await loaded();
      wrapper.find('.menu').first().simulate('click');
      wrapper.find('.item').last().simulate('click');
      expect(wrapper.find('.text').first().text()).toEqual("SRCTREEWIN - Sourcetree for Windows");
    });

    it('select project button is enabled when project selected', async () => {
      const wrapper = await loaded();
      wrapper.find('.menu').first().simulate('click');
      wrapper.find('.item').last().simulate('click');
      expect(wrapper.find('button').first().instance().disabled).toBeFalsy();
    });

    it('try again attempts to reload projects again', async () => {
      const wrapper = await failed();
      wrapper.find('button').simulate('click');
      expect(wrapper.state().phase).toEqual('Loading');
    });
  });

  describe('Failed (projects are not loaded)', () => {

    it('fail state', async () => {
      const wrapper = await failed();
      expect(wrapper.state().phase).toEqual('Failed');
    });

    it('renders error message', async () => {
      const wrapper = await failed();
      expect(wrapper.find('.error.message .content').text()).toContain('Can\'t load projects from JIRA');
    });

    it('renders response code in the error message', async () => {
      const wrapper = await failed();
      expect(wrapper.find('.error.message .content').text()).toContain('Can\'t load projects from JIRA. Error: Request failed with status code 403');
    });

    it('displays try again button', async () => {
      const wrapper = await failed();
      expect(wrapper.find('button').text()).toEqual('Try again');
    });

    it('projects are not set', async () => {
      const wrapper = await failed();
      expect(wrapper.state().projects).toBeUndefined();
    });

  });

  const tick = () => new Promise(resolve => setTimeout(resolve, 0));

  async function loaded() {
    const mock = new MockAdapter(axios);
    mock.onGet().replyOnce(200, ProjectsMock.ok);
    const wrapper = mount(<SelectProject jiraUrl='https://jira.atlassian.com/' session={session}
                                         onProjectSelected={onProjectSelected}/>);
    // TODO: what is it? not clear why it is here and what it's purpose
    await tick();
    return wrapper;
  }

  async function loading() {
    const mock = new MockAdapter(axios, {delayResponse: 5000});
    const wrapper = mount(<SelectProject jiraUrl='https://jira.atlassian.com/' session={session}
                                         onProjectSelected={onProjectSelected}/>);
    // TODO: what is it? not clear why it is here and what it's purpose
    await tick();
    return wrapper;
  }

  async function failed() {
    const mock = new MockAdapter(axios);
    mock.onGet().replyOnce(403);
    const wrapper = mount(<SelectProject jiraUrl='https://jira.atlassian.com/' session={session}
                                         onProjectSelected={onProjectSelected}/>);
    // TODO: what is it? not clear why it is here and what it's purpose
    await tick();
    return wrapper;
  }

});
