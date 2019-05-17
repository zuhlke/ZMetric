import React from 'react';
import {storiesOf} from '@storybook/react';
import {TopMenu} from "./TopMenu";

storiesOf('TopMenu', module)
  .add('Default', () => {
    return <TopMenu jiraInstance={"Zuhlke"} username={"Nickson Thanda"} selectedProject={"ZMETRIC"}/>;
  });
