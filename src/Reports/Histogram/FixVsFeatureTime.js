import React, {useState} from 'react';
import {
	BarChart,
  Bar,
	CartesianGrid,
	ComposeChart,
	Label,
	Legend,
	Line,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import PropTypes from 'prop-types';
import {Button, Segment, Transition} from "semantic-ui-react";
import '../reports.css';
import {DynamicTable} from "../../ZMetric/Dashboard/DataTable/DynamicTable";

export function FixVsFeatureTime(props) {
	const [isTableVisible, toggleTableVisibility] = useState(false);

	return (
		<Segment.Group basic className="report">

      <ResponsiveContainer width="95%" height={400}>

        <BarChart data={props.data}
                  margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="Week"/>
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
          <Tooltip/>
          <Legend />
          <Bar yAxisId="left" dataKey="Number Of Fixed Bugs" fill="#8884d8"/>

        </BarChart>
      </ResponsiveContainer>

      <Segment>
        <Button
          id='throughputReportDataTableButton'
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

	);
};
