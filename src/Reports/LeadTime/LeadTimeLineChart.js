import React, {useState} from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from 'prop-types';
import {Button, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";


export function LeadTimeLineChart(props) {
  const [isTableVisible, toggleTableVisibility] = useState(false);
  return (
    <Segment.Group style={{margin:0, border:0}}>
        <Segment>
          {/*<Label size={'medium'} color='blue' attached='top left'>*/}
          {/*  Lead Time*/}
          {/*</Label>*/}
          <div className={'chart-segment'}>
            <ResponsiveContainer>
              <LineChart id="lead-time-line-chart" data={props.data}>
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
      <Segment color='green'>
        <Button
          id='leadTimeReportDataTableButton'
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
