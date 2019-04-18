import React from 'react';
import {storiesOf} from '@storybook/react';
import Login from "./Login";
import Actions from "../Actions";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";

storiesOf('Login', module)
  .add('Default', () => <Login/>)
  .add('Logged In', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200);

    Actions.type("#jiraHostURL", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login/>;
  })
  .add('Submitting', () => {
    const mock = new MockAdapter(axios, {delayResponse: 100000});

    Actions.type("#jiraHostURL", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login/>;
  })
  .add('Error', () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(404, {
      "errorMessages": [
        "The user named 'username' does not exist"
      ],
      "errors": {}
    });

    Actions.type("#jiraHostURL", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login/>;
  });