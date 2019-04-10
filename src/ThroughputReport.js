import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts";

export function ThroughputReport(props){

    return(
        <BarChart width={1200} height={400} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis lavel={{value:"date", position: "bottom"}} dataKey="date"/>
            <YAxis label={{value:"Throughput (issues)", angle: -90, position: 'insideLeft'}}/>
            <Bar dataKey="throughput" fill="#8884d8"/>
        </BarChart>
    )
}
