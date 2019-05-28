import React, {useState, useEffect} from 'react'
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import PropTypes from "prop-types";
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";
import {
  getSelectedWorkflows,
  mergeData,
} from "./Filters/IssueTypeAndStatus/CumulativeFlowReportService";
import {
  getColoursForNewIssues, initialSelectedIssueTypesState,
  initialSelectedWorkflowState
} from "./Filters/IssueTypeAndStatus/CumulativeFlowStateInitialization";

export function CumulativeFlowReport(props) {
  const [isTableVisible, toggleTableVisibility] = useState(false);
  const [selectedIssueTypes] = useState(initialSelectedIssueTypesState(props.workflow));
  const [displayedData, updateDisplayedData] = useState(mergeData(props.data, selectedIssueTypes));
  const [selectedWorkflowStatuses] = useState(initialSelectedWorkflowState(props.workflow));
  const [statusColours] = useState(getColoursForNewIssues(props.workflow));

  useEffect(() => {
      updateDisplayedData(mergeData(props.data, selectedIssueTypes));
  }, [props, selectedIssueTypes]);

  const renderAreaChartsForSelectedWorkflows = () => {
    return getSelectedWorkflows(selectedWorkflowStatuses)
      .map(entry => <Area type="monotone" id={entry[0]} key={entry[0]} dataKey={entry[0]} stackId="1"
                          stroke={statusColours.get(entry[0])}
                          fill={statusColours.get(entry[0])}
                          activeDot={true}/>);
  };

  return (
    <Segment.Group basic style={{margin:0, border:0}}>
        <Segment basic height={window.innerHeight}>
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
  <Segment color='green'>
    <Button
      id='cumulativeFlowReportDataTableButton'
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
