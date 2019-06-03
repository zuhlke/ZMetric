import React, {useState, useEffect} from 'react'
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import PropTypes from "prop-types";
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";
import {
  mergeData,
} from "./Filters/IssueTypeAndStatus/CumulativeFlowReportService";
import {
  getColoursForNewIssues, initialSelectedIssueTypesState,
} from "./Filters/IssueTypeAndStatus/CumulativeFlowStateInitialization";

export function CumulativeFlowReport(props) {
  const [isTableVisible, toggleTableVisibility] = useState(false);
  const [selectedIssueTypes] = useState(initialSelectedIssueTypesState(props.workflow));
  const [displayedData, updateDisplayedData] = useState(mergeData(props.data, selectedIssueTypes));
  const selectedWorkflowStatuses = props.selectedStatuses;
  const [statusColours] = useState(getColoursForNewIssues(props.workflow));

  useEffect(() => {
      updateDisplayedData(mergeData(props.data, selectedIssueTypes));
  }, [props, selectedIssueTypes]);

  const renderAreaChartsForSelectedWorkflows = () => {
    return selectedWorkflowStatuses
      .map(status => <Area type="monotone" id={status} key={status} dataKey={status} stackId="1"
                          stroke={statusColours.get(status)}
                          fill={statusColours.get(status)}
                          activeDot={true}/>);
  };

  return (
  <Segment.Group basic className="report">
      <Segment basic className="chart segment" height={window.innerHeight}>
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
        <Button
          id='cumulativeFlowReportDataTableButton'
          basic
          color='green'
          content='Data Table'
          icon={isTableVisible ? 'angle up' : 'angle down'}
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
