import React, {useState} from 'react';
import {Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from "recharts";
import PropTypes from 'prop-types';
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";

export function LeadTimeLineChart(props) {
    const [displayedData, updateDisplayedData] = useState(props.data);

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData)
    };
        return(
            <div>
                <LineChart id="lead-time-line-chart" width={1200} height={400} data={displayedData}>
                    <Line type="monotone" dataKey="averageLeadTime" stroke="#8884d8" />
                    <Line type="monotone" dataKey="averageCycleTime" stroke="#82ca9d" />
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend/>
                    <XAxis dataKey={"date"} label={{value: "date"}}/>
                    <YAxis label={{value:"Lead Time Rolling Average (days)", angle: -90, position: 'insideBottomLeft'}}/>
                </LineChart>
                <h4>Select date range:</h4>
                {props.data.length && <DateRangePicker id={"data-range-picker-lead"} minDate={moment(props.data[0].date)}
                                                                         maxDate={moment(props.data[props.data.length - 1].date)}
                                                                         dateRangeUpdate={dateRange => filterData(dateRange)}/>
                }
                <br/>
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
