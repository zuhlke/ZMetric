import React, {useState} from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from 'prop-types';
import {DateRangePicker} from "../DateRangePicker";
import moment from "moment";
import {applyDateRangeFilter} from "../DateFiltering/DateFilter";
import {Button, Label, Segment, Transition, Dropdown, Icon, List, Form, Radio} from "semantic-ui-react";
import {DynamicTable} from "../DynamicTable";
import '../global.css';

const Statuses = {
  END_STATUS: 'End Status',
  START_STATUS: 'Start Status'
}
export function LeadTimeLineChart(props) {
  const [ListOfTypesAndStatus, UpdateListOfTypesAndStatus] = useState({});
  const [displayedData, updateDisplayedData] = useState(props.data);
  const [selectedStatusChange, updateSelectedStatusChange] = useState(Statuses.END_STATUS);
  const [isTableVisible, toggleTableVisibility] = useState(false);
  const [ListOfIssueTypes] = useState(props.workflow.map(issueType =>( {value: issueType.name, text: issueType.name})));
  const [selectedIssueType, updateSelectedIssueType] = useState("");
  const filterData = dateRange => {
    const newData = applyDateRangeFilter(dateRange, props.data);
    updateDisplayedData(newData);


  };
  let testObj = {};
  for( const issueType of props.workflow)
  {
    testObj[issueType.name] = {
      startState: issueType.statuses.find(status => status.name === 'To Do' ).name,
      endState: issueType.statuses.find(status => status.name === 'Done' ).name,
    }
  }
  console.log(testObj)
  //UpdateListOfTypesAndStatus(testObj);
  function dropdownOnChange(event, data) {
    updateSelectedIssueType(data.value);

  }
  return (
    <Segment.Group stacked>
      <Segment.Group horizontal>
        <Segment>
          <Label size={'medium'} color='blue' attached='top left'>
            Cycle/Lead Time
          </Label>
          <div className={'chart-segment'}>
            <ResponsiveContainer>
              <LineChart id="lead-time-line-chart" data={displayedData}>
                <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8" dot={false}/>
                <Line type="monotone" dataKey="averageCycleTime" stroke="#82ca9d" dot={false}/>
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend/>
                <XAxis dataKey={"date"}/>
                <YAxis
                  label={{
                    value: "Cycle/Lead Time Rolling Average (days)",
                    angle: -90,
                    position: 'insideBottomLeft'
                  }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Segment>
        <Segment>
          <h4>Select date range:</h4>
          {props.data.length &&
          <DateRangePicker id={"data-range-picker-lead"} minDate={moment(props.data[0].date)}
                           maxDate={moment(props.data[props.data.length - 1].date)}
                           dateRangeUpdate={dateRange => filterData(dateRange)}/>
          }
          <Segment.Group horizontal>
            <Segment>

              <h4>Cycle time configuration: </h4>
              <Dropdown id="jiraSelectIssueType"
                        placeholder='Select Issue Type'
                        fluid
                        name={"selectedIssueType"}
                        search
                        onChange={dropdownOnChange}
                        selection
                        noResultsMessage='No issue types found for this Jira project'
                        options={ListOfIssueTypes}
                        value={selectedIssueType}/>
              {selectedIssueType && <Segment basic>
                <Button.Group>
                  <Button onClick={() => updateSelectedStatusChange(Statuses.START_STATUS)} negative={selectedStatusChange===Statuses.START_STATUS}>Start Status</Button>
                  <Button.Or />
                  <Button onClick={() => updateSelectedStatusChange(Statuses.END_STATUS)} positive={selectedStatusChange===Statuses.END_STATUS}>End Status</Button>
                </Button.Group>
              <h4>Statuses</h4>
              <Button.Group vertical>
                {props.workflow.filter(issueType => issueType.name === selectedIssueType).map(issueType =>( issueType.statuses.map( (status)=> <Button negative ={status.name==='To Do'} positive={status.name==="Done" || status.name === 'Closed' || status.name === 'Resolved '}  >{status.name}</Button>)) )}
              </Button.Group>
                <Segment vertical basic>
                <h5>Key:</h5>
                  <List>
              <List.Item><Icon color='red' name='circle' /> Start status</List.Item>
              <List.Item><Icon color='green' name='circle' /> End status</List.Item>
                  </List>
                </Segment>
              </Segment>}
            </Segment>
          </Segment.Group>
        </Segment>

      </Segment.Group>

      <Segment color='green'>
        <Button
          basic
          color='green'
          content='Data Table'
          icon={isTableVisible ? 'arrow circle up' : 'arrow circle down'}
          onClick={() => toggleTableVisibility(!isTableVisible)}
          label={{
            as: 'a',
            basic: true,
            color: 'blue',
            pointing: 'left',
            content: `${props.data.length} entries`
          }}
        />
      </Segment>
      <Transition visible={isTableVisible} animation='fade down' duration={500}>
        <Segment>
          <DynamicTable data={props.data}/>
        </Segment>
      </Transition>
    </Segment.Group>
  )
}

LeadTimeLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    averageLeadTime: PropTypes.number.isRequired,
    averageCycleTime: PropTypes.number
  })).isRequired
};
