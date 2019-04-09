import React, { Component} from 'react';
import {Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from "recharts";

export class LeadTimeLineChart extends Component {
    render(){
        return(
            <div>
                <LineChart id="lead-time-line-chart" width={1200} height={400} data={this.props.data}>
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
}
