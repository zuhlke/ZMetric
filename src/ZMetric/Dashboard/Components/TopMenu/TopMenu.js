import React, {useState} from "react";
import {Menu, Dropdown, Button} from "semantic-ui-react";
import moment from "moment"
import {DateRange} from "../../../../Filters/DateRange/DateRange";
import './TopMenu.css'
export function TopMenu (props) {
const {jiraInstance, username, selectedProject, dateRangeUpdate, minDate, maxDate, projects} = props;
const issueTypes = ["Story", "Task", "Epic", "Bug", "Sub-task", "Spike"];
  const initialSelectedButtonsArray = issueTypes.map(issueType => {return {status: issueType, active: true}});
  const [selectedButtonsArray, updateSelectedButtonsArray] = useState(initialSelectedButtonsArray);
  // const options = issueTypes.map(issueType => {
  //   return {"text":issueType, "value":issueType}
  // });
  const toggleButton = index => {
    const updatedArray = [...selectedButtonsArray];
    updatedArray[index].active = !selectedButtonsArray[index].active;
    updateSelectedButtonsArray(updatedArray);
  };
return (
  <Menu className={"topmenu"} style={{margin:0}}>
    <Menu.Item>{jiraInstance}</Menu.Item>
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

    {/*<Dropdown placeholder={"Select Issues Types"} multiple selection clearable defaultValue={issueTypes} options={options}/>*/}
    <Button.Group>
      {selectedButtonsArray.map((workflowStatus, index) => <Button toggle size="small" style={{"background-color": (workflowStatus.active ? '#2185d0' : null)}} active={workflowStatus.active} onClick={() => toggleButton(index)}>{workflowStatus.status}</Button>)}
    </Button.Group>

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
