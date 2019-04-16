import React, {useState} from 'react'
// import PropTypes from 'prop-types';
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Label, Segment, Transition} from "semantic-ui-react";
import './global.css';
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import {DynamicTable} from "./DynamicTable";
import {DateRangePicker} from "./DateRangePicker";
import moment from "moment";
import {MultipleIssueTypeSelector} from "./MultipleIssueTypeSelector";
import {getWorkflow} from "./DataFetcher";
import {MultipleWorkflowStatesSelector} from "./MultipleWorkflowStatesSelector";

export function CumulativeFlowReport(props){
    const workflow = getWorkflow();
    const initialStatuses = {};
    workflow[3].statuses.forEach( status => {
        initialStatuses[status.name] = true;
    });

    const [displayedData, updateDisplayedData] = useState(props.data);//TODO: updateDATA
    const [isTableVisible, toggleTableVisibility] = useState(false);
    const [statusesToDisplay, updateStatusesToDisplay] = useState(initialStatuses);


    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);//TODO: updateDATA
        updateDisplayedData(newData);
    };

    const updateWorkflowStatus = selectedStatuses => {
        updateStatusesToDisplay(selectedStatuses);
    };

    const displayStatusAreas = data => {
        const colours = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#17becf", "#bcbd22"];
        const copyOfFirstEntry = Object.assign({}, data[0]);
        delete copyOfFirstEntry.date;
        const statusEntries = Object.entries(statusesToDisplay);
        return statusEntries.map((statusEntry, index) =>{
            const colour = colours[(index % statusEntries.length)];
            if(statusEntry[1]) {
                return (
                    <Area type="monotone" id={statusEntry[0] + "-area"} key={statusEntry[0] + "-area"} dataKey={statusEntry[0]} stackId="1"
                          stroke={colour} fill={colour} activeDot={false}/>
                )
            }
        });
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
                            <AreaChart id='cumulative-flow-area-chart' data={displayedData } >{/*//TODO: updateDATA*/}
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
                                {
                                    displayStatusAreas(displayedData)
                                }
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
                    <br/>
                    <Segment.Group horizontal>
                        <Segment>
                            <h4>Select Issue types:</h4>
                            <MultipleIssueTypeSelector workflow={workflow}/>
                        </Segment>
                        <Segment>
                            <h4>Select Workflow States</h4>
                            <MultipleWorkflowStatesSelector workflow={workflow} updateWorkflowStatus={updateWorkflowStatus}/>
                        </Segment>
                    </Segment.Group>
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
//         "Review": PropTypes.number.isRequired,
//         "Ready For Test": PropTypes.number.isRequired,
//         Done: PropTypes.number.isRequired
//     })).isRequired
// };



