import React, {useState} from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from 'prop-types';
import moment from "moment";
import {Button, Label, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";
import {applyDateRangeFilter} from "../../Filters/DateRange/DateFilter";
import {DateRange} from "../../Filters/DateRange/DateRange";

export function LeadTimeLineChart(props) {
  const [displayedData, updateDisplayedData] = useState(props.data);
  const [isTableVisible, toggleTableVisibility] = useState(false);

  const filterData = dateRange => {
    const newData = applyDateRangeFilter(dateRange, props.data);
    updateDisplayedData(newData)
  };
  return (
    <Segment.Group stacked>
      <Segment.Group horizontal>
        <Segment>
          <Label size={'medium'} color='blue' attached='top left'>
            Lead Time
          </Label>
          <div className={'chart-segment'}>
            <ResponsiveContainer>
              <LineChart id="lead-time-line-chart" data={displayedData}>
                <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8"/>
                <Line type="monotone" dataKey="averageCycleTime" stroke="#82ca9d"/>
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend/>
                <XAxis dataKey={"date"}/>
                <YAxis
                  label={{
                    value: "Lead Time Rolling Average (days)",
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
          <DateRange id={"data-range-picker-lead"} minDate={moment(props.data[0].date)}
                           maxDate={moment(props.data[props.data.length - 1].date)}
                           dateRangeUpdate={dateRange => filterData(dateRange)}/>
          }
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
