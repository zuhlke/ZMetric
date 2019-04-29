import React from 'react';
import {storiesOf} from '@storybook/react';
import Login from "./Login";
import Actions from "../Actions";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";

let onSuccessMock = () => {
};

storiesOf('Login', module)
  .add('Default', () => <Login onSuccess={onSuccessMock}/>)
  .add('Logged In', () => {
    const mock = new MockAdapter(axios);
    mock.onPost().reply(200, {
      "session":
        {
          "name": "example.cookie.name",
          "value": "6E3487971234567896704A9EB4AE501F"
        }
    });

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
    mock.onPost().reply(404, {
      "errorMessages": [
        "The user named 'username' does not exist"
      ],
      "errors": {}
    });

    Actions.type("#jiraUrl", "https://jira.zuehlke.com");
    Actions.type("#jiraUsername", "username");
    Actions.type("#jiraPassword", "password");
    Actions.click("#jiraLoginSubmit");
    return <Login onSuccess={onSuccessMock}/>;
  });
