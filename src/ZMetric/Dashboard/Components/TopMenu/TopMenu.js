import React from "react";
import {Menu, Icon, Dropdown } from "semantic-ui-react";
import moment from "moment"
import {DateRange} from "../../../../Filters/DateRange/DateRange";
export function TopMenu (props) {
const {jiraInstance, username, selectedProject, updateSidebarVisibility, dateRangeUpdate, minDate, maxDate} = props;
return (
  <Menu style={{margin:0}}>
    <Menu.Item>{jiraInstance}</Menu.Item>
    <Menu.Item onClick={() => updateSidebarVisibility()}><Icon name='sidebar'/></Menu.Item>
    <Dropdown item text={selectedProject}>
      <Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item fitted={"vertically"}>
      <DateRange id={"data-range-picker-cumulative-flow"} minDate={moment(minDate)}
                          maxDate={moment(maxDate)}
                          dateRangeUpdate={dateRangeUpdate}/>
    </Menu.Item>

    <Menu.Menu position='right'>

      <Dropdown item text={username}>
        <Dropdown.Menu>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);
}
