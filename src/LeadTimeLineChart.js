import React, { Component} from 'react';
import {Line, LineChart} from "recharts";

export class LeadTimeLineChart extends Component {
    render(){
        return(
            <div>
                <LineChart width={400} height={400} data={this.props.data}>
                    <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}
