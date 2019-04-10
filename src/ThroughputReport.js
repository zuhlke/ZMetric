import React, {useState} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import PropTypes from 'prop-types';

export function ThroughputReport(props){
    const [displayedData, updateDisplayedData] = useState(props.data);
    const data = props.data;

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData)
    };
    return(
        <div>
            <BarChart width={1200} height={400} data={displayedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis lavel={{value:"date", position: "bottom"}} dataKey="date"/>
                <YAxis label={{value:"Throughput (issues)", angle: -90, position: 'insideLeft'}}/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="throughput" fill="#8884d8"/>
            </BarChart>
            <br/>
            <h4>Select date range:</h4>
            {props.data.length && <DateRangePicker id={"dates-range-picker-throughput"} minDate={moment(data[0].date)}
                                                                     maxDate={moment(data[data.length - 1].date)}
                                                                     dateRangeUpdate={dateRange => filterData(dateRange)}/>
            }
        </div>

    )
}

ThroughputReport.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        throughput: PropTypes.number.isRequired
    })).isRequired
};
