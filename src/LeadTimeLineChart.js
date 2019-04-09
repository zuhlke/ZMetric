import React from 'react';
import {Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from "recharts";
import PropTypes from 'prop-types';

export function LeadTimeLineChart(props) {
        return(
            <div>
                <LineChart id="lead-time-line-chart" width={1200} height={400} data={props.data}>
                    <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8" />
                    <Line type="monotone" dataKey="averageCycleTime" stroke="#82ca9d" />
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend/>
                    <XAxis dataKey={"date"} label={{value: "date"}}/>
                    <YAxis label={{value:"Lead Time Rolling Average (days)", angle: -90, position: 'insideBottomLeft'}}/>
                </LineChart>
            </div>
        )
}

LeadTimeLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        averageLeadTime: PropTypes.number.isRequired,
        averageCycleTime: PropTypes.number.isRequired
    })).isRequired
};
