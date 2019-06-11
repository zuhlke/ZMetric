import React from 'react';
import {storiesOf} from '@storybook/react';
import SelectProject from "./SelectProject";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Actions from "../../Actions";
import ProjectsMock from "../../__mocks__/Projects.mock";

const onProjectSelectedMock = () => {
};

storiesOf('Select Project', module)
  .add('Loaded', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().replyOnce(200, ProjectsMock.ok);
    return <SelectProject onProjectSelected={onProjectSelectedMock} jiraUrl='https://jira.atlassian.com/'
                          session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Loading', () => {
    new MockAdapter(axios, {delayResponse: 100000});
    return <SelectProject onProjectSelected={onProjectSelectedMock} jiraUrl='https://jira.atlassian.com/'
                          session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Failed', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().replyOnce(403);
    return <SelectProject onProjectSelected={onProjectSelectedMock} jiraUrl='https://jira.atlassian.com/'
                          session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Expanded', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, ProjectsMock.ok);
    Actions.click("#jiraSelectProject");
    return <SelectProject onProjectSelected={onProjectSelectedMock} jiraUrl='https://jira.atlassian.com/'
                          session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Selected', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().replyOnce(200, ProjectsMock.ok);

    Actions.click("#jiraSelectProject");
    Actions.click("#jiraSelectProject .item .text");

    return <SelectProject onProjectSelected={onProjectSelectedMock} jiraUrl='https://jira.atlassian.com/'
                          session={{name: 'cookie', value: '123'}}/>;
  });
