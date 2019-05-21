import React, {useState} from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PropTypes from 'prop-types';
import {calculateAverageThroughput} from "./ThroughputDataAdapter";
import {Button, Label as SemanticLabel, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";

export function ThroughputReport(props) {
  const initialAverageThroughput = calculateAverageThroughput(props.data);
  const [averageThroughput] = useState(initialAverageThroughput);
  const [isTableVisible, toggleTableVisibility] = useState(false);

  return (
    <Segment.Group basic style={{margin:0, border:0}}>
        <Segment basic >
          {/*<SemanticLabel size={'medium'} color='blue' attached='top left'>*/}
          {/*  Throughput*/}
          {/*</SemanticLabel>*/}
          <div className={'chart-segment'}>
            <ResponsiveContainer width={props.graphWidth} height={400}>
              <ComposedChart data={props.data} margin={{right: 25}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis lavel={{value: "date", position: "bottom"}} dataKey="date"/>
                <YAxis label={{value: "Throughput (issues)", angle: -90, position: 'insideLeft'}}/>
                <Tooltip/>
                <Legend/>
                <ReferenceLine id="AverageThroughputLine" y={averageThroughput} stroke="blue" strokeDasharray="3 3">
                  <Label value="Avg" position="left"/>
                  <Label value={averageThroughput} position="right"/>
                </ReferenceLine>
                <Bar dataKey="throughput" fill="#8884d8"/>
                <Line type="monotone" dataKey="trend" stroke="#82ca9d" dot={false}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Segment>
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

ThroughputReport.propTypes = {
  graphWidth: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    throughput: PropTypes.number.isRequired
  })).isRequired
};
