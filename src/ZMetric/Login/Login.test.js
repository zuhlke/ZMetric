import Login from './Login.js';
import React from "react";
import {mount, shallow} from "enzyme";
import MockAdapter from 'axios-mock-adapter';
import {Button, Form, Message, FormInput} from 'semantic-ui-react'
import axios from "axios";
import SessionMock from "../../__mocks__/Session.mock";

it('renders the login page on default ', () => {
  const wrapper = mount(<Login onSuccess={() => {
  }}/>);
  expect(wrapper.state().phase).toEqual('Init');
});

it('changes phase state to Submit and show loading on submit ', () => {
  const mock = new MockAdapter(axios, {delayResponse: 100000});
  const wrapper = mount(<Login onSuccess={() => {
  }}/>);
  wrapper.find('Button').simulate('submit');
  expect(wrapper.state().phase).toEqual("Submitting");
  expect(wrapper.find('Form').prop('loading')).toEqual(true);

});

it('changes phase state to Error and shows user does not exist error message on error after submit ', async () => {
  const mock = new MockAdapter(axios);
  mock.onPost().reply(404, SessionMock.notFound);

  const wrapper = mount(<Login onSuccess={() => {
  }}/>);
  wrapper.find('Button').simulate('submit');
  await tick();
  expect(wrapper.state().phase).toBe("Fail");
  expect(wrapper.find('Message').at(0).text()).toEqual("The user named 'username' does not exist");


});

it('changes phase state to Error and shows general error message on error after submit ', async () => {
  const mock = new MockAdapter(axios);
  mock.onPost().reply(404);

  const wrapper = mount(<Login onSuccess={() => {
  }}/>);
  wrapper.find('Button').simulate('submit');
  await tick();
  expect(wrapper.state().phase).toBe("Fail");
  expect(wrapper.find('Message').at(0).text()).toEqual("Can't connect to Jira");


});

it('changes phase state to Success  and props and on success after submit ', async () => {
  const mockSuccess = jest.fn();
  const mock = new MockAdapter(axios);
  mock.onPost().reply(200, SessionMock.ok);
  const wrapper = mount(<Login onSuccess={mockSuccess}/>);
  wrapper.find('Button').simulate('submit');
  await tick();

  expect(mockSuccess.mock.calls.length).toBe(1);
  expect(mockSuccess.mock.calls[0][0].name).toBe("example.cookie.name");
  expect(mockSuccess.mock.calls[0][0].value).toBe("6E3487971234567896704A9EB4AE501F");

  expect(wrapper.state().phase).toBe("Success");
});

it('should change the state of jiraUsername when changed in input', async () => {
  const wrapper = shallow(<Login onSuccess={() => {
  }}/>);
  wrapper.find('FormInput').at(1).simulate('change', {target: {value: "Test Username", name: "jiraUsername"}});
  await tick();
  expect(wrapper.state("jiraUsername")).toEqual("Test Username");

});

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
