import React from 'react';
import {storiesOf} from '@storybook/react';
import Login from "./Login";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
import Actions from "../../Actions";
import SessionMock from "../../__mocks__/Session.mock";

let onSuccessMock = () => {
};

storiesOf('Login', module)
  .add('Default', () => <Login onSuccess={onSuccessMock}/>)
  .add('Logged In', () => {
    const mock = new MockAdapter(axios);
    mock.onPost().reply(200, SessionMock.ok);

    Actions.type("#jiraUrl", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login onSuccess={onSuccessMock}/>;
  })
  .add('Submitting', () => {
    const mock = new MockAdapter(axios, {delayResponse: 100000});

    Actions.type("#jiraUrl", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login onSuccess={onSuccessMock}/>;
  })
  .add('Error', () => {
    const mock = new MockAdapter(axios);
    mock.onPost().reply(404, SessionMock.notFound);

    Actions.type("#jiraUrl", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login onSuccess={onSuccessMock}/>;
  });
