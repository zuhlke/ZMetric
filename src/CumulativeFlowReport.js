import React, {useState} from 'react'
// import PropTypes from 'prop-types';
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Label, Segment, Transition} from "semantic-ui-react";
import './global.css';
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import {DynamicTable} from "./DynamicTable";
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";

export function CumulativeFlowReport(props){
    const [displayedData, updateDisplayedData] = useState(props.data);
    const [isTableVisible, toggleTableVisibility] = useState(false);

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData)
    };

    return(
        <Segment.Group stacked>
            <Segment.Group horizontal>
                <Segment>
                    <Label size={'medium'} color='blue' attached='top left'>
                        Cumulative Flow
                    </Label>
                    <div className={'chart-segment'}>
                        <ResponsiveContainer>
                            <AreaChart id='cumulative-flow-area-chart' data={displayedData} >
                                <XAxis dataKey="date"/>
                                <YAxis
                                    label={{
                                        value: "No of issues",
                                        angle: -90,
                                        position: 'insideLeft'
                                    }}/>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Legend/>
                                <Tooltip />
                                <Area type="monotone" dataKey="To Do" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="In Progress" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="On Hold" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                <Area type="monotone" dataKey="In Review" stackId="1" stroke="#ff7300" fill="#ff7300" />
                                <Area type="monotone" dataKey="Ready to Test" stackId="1" stroke="#17becf" fill="#17becf" />
                                <Area type="monotone" dataKey="Done" stackId="1" stroke="#bcbd22" fill="#bcbd22" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Segment>
                <Segment>
                    <h4>Select date range:</h4>
                    {props.data.length &&
                    <DateRangePicker id={"data-range-picker-cumulative-flow"} minDate={moment(props.data[0].date)}
                                     maxDate={moment(props.data[props.data.length - 1].date)}
                                     dateRangeUpdate={dateRange => filterData(dateRange)}/>
                    }
                </Segment>
            </Segment.Group>
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

// CumulativeFlowReport.PropTypes = {
//     data: PropTypes.arrayOf(PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         "To Do": PropTypes.number.isRequired,
//         "In Progress": PropTypes.number.isRequired,
//         "On Hold": PropTypes.number.isRequired,
//         "In Review": PropTypes.number.isRequired,
//         "Ready To Test": PropTypes.number.isRequired,
//         Done: PropTypes.number.isRequired
//     })).isRequired
// };



