import React, {useState} from 'react'
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Label, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import moment from "moment";
import PropTypes from "prop-types";
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";
import {MultipleWorkflowStatusesSelector} from "./Filters/IssueTypeAndStatus/Selectors/MultipleWorkflowStatusesSelector";
import {MultipleIssueTypeSelector} from "./Filters/IssueTypeAndStatus/Selectors/MultipleIssueTypeSelector";
import {applyDateRangeFilter} from "../../Filters/DateRange/DateFilter";
import {
  getSelectedWorkflows,
  mergeData,
  toggleProperty,
  updateAvailableWorkflowStatusTypes
} from "./Filters/IssueTypeAndStatus/CumulativeFlowReportService";
import {
  getColoursForNewIssues, initialSelectedIssueTypesState,
  initialSelectedWorkflowState
} from "./Filters/IssueTypeAndStatus/CumulativeFlowStateInitialization";
import {DateRange} from "../../Filters/DateRange/DateRange";

export function CumulativeFlowReport(props) {
  const [isTableVisible, toggleTableVisibility] = useState(false);
  const [selectedIssueTypes, updateSelectedIssueTypes] = useState(initialSelectedIssueTypesState(props.workflow));
  const [displayedData, updateDisplayedData] = useState(mergeData(props.data, selectedIssueTypes));
  const [selectedWorkflowStatuses, updateSelectedWorkflowStatuses] = useState(initialSelectedWorkflowState(props.workflow));
  const [statusColours] = useState(getColoursForNewIssues(props.workflow));

  const renderAreaChartsForSelectedWorkflows = () => {
    return getSelectedWorkflows(selectedWorkflowStatuses)
      .map(entry => <Area type="monotone" id={entry[0]} key={entry[0]} dataKey={entry[0]} stackId="1"
                          stroke={statusColours.get(entry[0])}
                          fill={statusColours.get(entry[0])}
                          activeDot={true}/>);
  };

  const toggleIssueType = issueTypeName => {
    const issueTypes = toggleProperty(selectedIssueTypes, issueTypeName);
    updateSelectedIssueTypes(issueTypes);
    updateSelectedWorkflowStatuses(updateAvailableWorkflowStatusTypes(issueTypes, props.workflow, selectedWorkflowStatuses));
    updateDisplayedData(mergeData(props.data, issueTypes));
  };

  const toggleWorkflowStatus = statusName => {
    const workflowStatuses = toggleProperty(selectedWorkflowStatuses, statusName);
    updateSelectedWorkflowStatuses(workflowStatuses);
  };

  const filterData = dateRange => {
    const newData = applyDateRangeFilter(dateRange, props.data);
    updateDisplayedData(newData);
  };

  return (
    <Segment.Group stacked>
      <Segment.Group horizontal>
        <Segment>
          <Label size={'medium'} color='blue' attached='top left'>
            Cumulative Flow (Mock)
          </Label>
          <div className={'chart-segment'}>
            <ResponsiveContainer width={props.graphWidth} height={400}>
              <AreaChart id='cumulative-flow-area-chart' data={displayedData}>
                <XAxis dataKey="date"/>
                <YAxis
                  label={{
                    value: "No of issues",
                    angle: -90,
                    position: 'insideLeft'
                  }}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend/>
                <Tooltip/>
                {
                  renderAreaChartsForSelectedWorkflows()
                }
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Segment>
        <Segment>
          <h4>Select date range:</h4>
          {props.data.length &&
          <DateRange id={"data-range-picker-cumulative-flow"} minDate={moment(props.data[0].date)}
                     maxDate={moment(props.data[props.data.length - 1].date)}
                     dateRangeUpdate={dateRange => filterData(dateRange)}/>
          }
          <br/>
          <Segment.Group horizontal>
            <Segment>
              <h4>Select Issue types:</h4>
              <MultipleIssueTypeSelector selectedIssueTypes={selectedIssueTypes}
                                         toggleIssueType={toggleIssueType}/>
            </Segment>
            <Segment>
              <h4>Select Workflow Statuses</h4>
              <MultipleWorkflowStatusesSelector workflowStatuses={selectedWorkflowStatuses}
                                                toggleWorkflowStatus={toggleWorkflowStatus}/>
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
      {displayedData.length > 0 &&
      <Transition visible={isTableVisible} animation='fade down' duration={500}>
        <Segment>
          <DynamicTable data={displayedData}/>
        </Segment>
      </Transition>
      }
    </Segment.Group>
  )
}

CumulativeFlowReport.propTypes = {
  data: PropTypes.array.isRequired,
  workflow: PropTypes.arrayOf(PropTypes.shape({
    statuses: PropTypes.array
  })).isRequired,
  graphWidth: PropTypes.number
};



