import React from "react";
import {Menu, Header, Icon, Dropdown,Image, Container} from "semantic-ui-react";
import logo from "../../../../logo.jpg"
export function TopMenu (props) {
const {jiraInstance, username, selectedProject } = props;
return (
  <Menu>
    <Menu.Item>{jiraInstance}</Menu.Item>
    <Dropdown item text={selectedProject}>
      <Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Menu position='right'>

      <Dropdown item text={username}>
        <Dropdown.Menu>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);
};
