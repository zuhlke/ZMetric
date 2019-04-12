import React, {useState} from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Label,
    Legend, Line,
    ReferenceLine,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import PropTypes from 'prop-types';
import {calculateAverageThroughput} from "./ThroughputReport/ThroughputDataAdapter";
import {Label as SemanticLabel, Segment} from "semantic-ui-react";
import {generateTrendLineData} from "./TrendLine/TrendLine";

export function ThroughputReport(props) {
    const initialAverageThroughput = calculateAverageThroughput(props.data);
    const [displayedData, updateDisplayedData] = useState(props.data);
    const [averageThroughput, updateAverageThroughput] = useState(initialAverageThroughput);
    const [trendLineData, updateTrendLineData] = useState(generateTrendLineData(props.data, "throughput"));

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData);
        updateAverageThroughput(calculateAverageThroughput(newData));
        updateTrendLineData(generateTrendLineData(newData, "throughput"));
    };
    return (
        <Segment.Group horizontal stacked>
            <Segment>
                <SemanticLabel size={'medium'} color='blue' attached='top left'>
                    Throughput
                </SemanticLabel>
                <ComposedChart width={1200} height={400} data={trendLineData} margin={{right: 50}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis lavel={{value: "date", position: "bottom"}} dataKey="date"/>
                    <YAxis label={{value: "Throughput (issues)", angle: -90, position: 'insideLeft'}}/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine y={averageThroughput} stroke="blue" strokeDasharray="3 3">
                        <Label value="Avg" position="left"/>
                        <Label value={averageThroughput} position="right"/>
                    </ReferenceLine>
                    <Bar dataKey="throughput" fill="#8884d8"/>
                    <Line type="monotone" dataKey="trend" stroke="#82ca9d" dot={false}/>
                </ComposedChart>
            </Segment>
            <Segment>
                <h4>Select date range:</h4>
                {props.data.length &&
                <DateRangePicker id={"dates-range-picker-throughput"} minDate={moment(props.data[0].date)}
                                 maxDate={moment(props.data[props.data.length - 1].date)}
                                 dateRangeUpdate={dateRange => filterData(dateRange)}/>
                }
            </Segment>
        </Segment.Group>
    )
}

ThroughputReport.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        throughput: PropTypes.number.isRequired
    })).isRequired
};
