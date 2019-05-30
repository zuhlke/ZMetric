import React, {useState} from "react";
import {Menu, Dropdown, Button, Image} from "semantic-ui-react";
import logo from "../../../../logo.jpg"
import moment from "moment"
import {DateRange} from "../../../../Filters/DateRange/DateRange";
import './TopMenu.css'
export function TopMenu (props) {
const {username, selectedProject, dateRangeUpdate, minDate, maxDate, projects} = props;
const issueTypes = ["Story", "Task", "Epic", "Bug", "Sub-task", "Spike"];
  const initialSelectedButtonsArray = issueTypes.map(issueType => {return {status: issueType, active: true}});
  const [selectedButtonsArray, updateSelectedButtonsArray] = useState(initialSelectedButtonsArray);
  const toggleButton = index => {
    const updatedArray = [...selectedButtonsArray];
    updatedArray[index].active = !selectedButtonsArray[index].active;
    updateSelectedButtonsArray(updatedArray);
  };
return (
  <Menu className={"topmenu"} style={{margin:0}}>
    <Menu.Item style={{"min-width":0, padding: 0}}>
      <Image src={logo} size={'mini'}/>
    </Menu.Item>
    <Dropdown item text={selectedProject}>
      <Dropdown.Menu>
        {projects.map((project) =>
          <Dropdown.Item text={project} active={project===selectedProject}/> //TODO: replace selectedProject as string with a index for array
        )}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item header>Global Filters:</Menu.Item>
    <Menu.Item fitted={"vertically"} className={'dateRange'}>
      <DateRange id={"data-range-picker-cumulative-flow"} minDate={moment(minDate)}
                          maxDate={moment(maxDate)}
                          dateRangeUpdate={dateRangeUpdate}/>
    </Menu.Item>

      {selectedButtonsArray.map((issueType, index) => <Button toggle size="mini"  style={{"background-color": (issueType.active ? '#DAF7A6' : null)}}  active={issueType.active} onClick={() => toggleButton(index)}>{issueType.status}</Button>)}

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
