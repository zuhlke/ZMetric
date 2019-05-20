import React from 'react';
import {storiesOf} from '@storybook/react';
import {Segment,Sidebar,Menu, Icon, Header, Image,Container} from "semantic-ui-react";
import {LeftMenu} from "./Components/LeftMenu/LeftMenu";
import {TopMenu} from "./Components/TopMenu/TopMenu";
import "./Dashboard.css"
storiesOf('Dashboard', module)
  .add('Default', () => {
    return (
      <Sidebar.Pushable>
        <LeftMenu/>
        <Sidebar.Pusher>
            <TopMenu  jiraInstance={"Zuhlke"} username={"Nickson Thanda"} selectedProject={"ZMETRIC"}/>
        </Sidebar.Pusher>
      </Sidebar.Pushable>)
  });
