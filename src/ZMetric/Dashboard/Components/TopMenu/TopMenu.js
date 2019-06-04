import React from "react";
import {Menu, Dropdown, Button, Image} from "semantic-ui-react";
import logo from "../../../../logo.jpg"
import moment from "moment"
import {DateRange} from "../../../../Filters/DateRange/DateRange";
import './TopMenu.css'
export function TopMenu (props) {
const {username, selectedProject, dateRangeUpdate, minDate, maxDate, projects, selectedIssueTypes, updateSelectedIssueTypes} = props;
  const toggleButton = index => {
    const updatedArrayClone = JSON.parse(JSON.stringify(selectedIssueTypes));
    updatedArrayClone[index].active = !selectedIssueTypes[index].active;
    updateSelectedIssueTypes(updatedArrayClone);
  };
return (
  <Menu className={"topmenu"}>
    <Menu.Item id="logo">
      <Image src={logo} size={'mini'}/>
    </Menu.Item>
    <Dropdown item text={selectedProject}>
      <Dropdown.Menu>
        {projects.map((project) =>
          <Dropdown.Item key={"projectDropdownItem"+project} text={project} active={project===selectedProject}/> //TODO: replace selectedProject as string with a index for array
        )}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item header>Global Filters:</Menu.Item>
    <Menu.Item fitted={"vertically"} className={'dateRange'}>
      <DateRange id={"data-range-picker-cumulative-flow"} minDate={moment(minDate)}
                          maxDate={moment(maxDate)}
                          dateRangeUpdate={dateRangeUpdate}/>
    </Menu.Item>
      {selectedIssueTypes.map((issueType, index) => <Button key={issueType.issueType} id={"issueTypeButton"+issueType.issueType}
                                                            toggle size="mini"  style={{"background-color": (issueType.active ? '#DAF7A6' : null)}}
                                                            active={issueType.active} onClick={() => toggleButton(index)}>{issueType.issueType}</Button>)}

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
