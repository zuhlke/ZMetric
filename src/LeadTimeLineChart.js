import React, {useState} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from 'prop-types';
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import {Label, Segment} from "semantic-ui-react";

export function LeadTimeLineChart(props) {
    const [displayedData, updateDisplayedData] = useState(props.data);

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData)
    };
    return (
        <Segment.Group horizontal>
            <Segment>
                <Label size={'medium'} color='blue' attached='top left'>
                    Lead Time
                </Label>
                <LineChart id="lead-time-line-chart" width={1200} height={400} data={displayedData}>
                    <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8"/>
                    <Line type="monotone" dataKey="averageCycleTime" stroke="#82ca9d"/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Legend/>
                    <XAxis dataKey={"date"} label={{value: "date"}}/>
                    <YAxis
                        label={{value: "Lead Time Rolling Average (days)", angle: -90, position: 'insideBottomLeft'}}/>
                </LineChart>
            </Segment>
            <Segment>
                <h4>Select date range:</h4>
                {props.data.length &&
                <DateRangePicker id={"data-range-picker-lead"} minDate={moment(props.data[0].date)}
                                 maxDate={moment(props.data[props.data.length - 1].date)}
                                 dateRangeUpdate={dateRange => filterData(dateRange)}/>
                }
            </Segment>
        </Segment.Group>
    )
}

LeadTimeLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        averageLeadTime: PropTypes.number.isRequired,
        averageCycleTime: PropTypes.number.isRequired
    })).isRequired
};
