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

});




