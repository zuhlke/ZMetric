import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const session = {name: 'cookie', value: '123'};
const project = "MockProject";
const jiraUrl = "jira.url";
describe("Dashboard", () => {
  it('renders without crashing', () => {
    const mock = new MockAdapter(axios, 200);
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard project={project} session={session} jiraUrl={jiraUrl}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //TODO: improve test coverage of this file, inject axios
  //TODO: Fix error: (node:3140) UnhandledPromiseRejectionWarning: Error: Request failed with status code 404
  // (node:3140) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 5)
  // (node:3140) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
});




