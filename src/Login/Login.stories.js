import React from 'react';
import {storiesOf} from '@storybook/react';
import Login from "./Login";
import Actions from "../Actions";

storiesOf('Login', module)
  .add('Default', () => <Login/>)
  .add('Submitting', () => {
    Actions.type("#jiraHostURL","https://localhost");
    Actions.type("#jiraUsername","username");
    Actions.type("#jiraPassword","password");
    Actions.click("#jiraLoginSubmit");
    return <Login/>;
  })
  .add('Error', () => <Login/>);
