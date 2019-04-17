import React, {useState} from 'react'
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Button, Label, Segment, Transition} from "semantic-ui-react";
import '../global.css';
import {applyDateRangeFilter} from "../DateFiltering/DateFilter";
import {DynamicTable} from "../DynamicTable";
import {DateRangePicker} from "../DateRangePicker";
import moment from "moment";
import {MultipleIssueTypeSelector} from "../MultipleIssueTypeSelector";
import {MultipleWorkflowStatesSelector} from "../MultipleWorkflowStatesSelector";
import PropTypes from "prop-types";

export function CumulativeFlowReport(props) {
    const colours = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#17becf", "#bcbd22"];
    const [displayedData, updateDisplayedData] = useState(props.data);
    const [isTableVisible, toggleTableVisibility] = useState(false);

    const initialSelectedWorkflowState = props.workflow[3].statuses.map(status => [
            status.name, {
                "id": status.id,
                "selected": true
            }
        ]
    );
    const [selectedWorkflowStates, updateSelectedWorkflowStates] = useState(new Map(initialSelectedWorkflowState));

    const initialSelectedIssueTypesState = props.workflow.map(issueType => [
            issueType.name, {
                "id": issueType.id,
                "selected": issueType.name === "Story"
            }
        ]
    );
    const [selectedIssueTypes, updateSelectedIssueTypes] = useState(new Map(initialSelectedIssueTypesState));

    const toggleIssueType = issueTypeName => {
        const updatedIssueTypes = new Map(selectedIssueTypes);
        updatedIssueTypes.set(issueTypeName,
            {...updatedIssueTypes.get(issueTypeName), selected: !updatedIssueTypes.get(issueTypeName).selected});
        updateSelectedIssueTypes(updatedIssueTypes);

        updateAvailableWorkflowStatusTypes(updatedIssueTypes);
    };

    const updateAvailableWorkflowStatusTypes = updatedIssueTypes => {
        const filteredIssuesWithStatuses = props.workflow.filter(issueType => updatedIssueTypes.get(issueType.name).selected);

        const graphWorkflowStates = filteredIssuesWithStatuses
            .flatMap(issueType => issueType.statuses)
            .map(status => [status.name, {"id": status.id, "selected": true}]);

        let stateMap = new Map(graphWorkflowStates);
        updateSelectedWorkflowStates(stateMap);
    };

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, props.data);
        updateDisplayedData(newData);
    };

    const toggleWorkflowStatus = statusName => {
        let updatedStatus = new Map(selectedWorkflowStates);
        updatedStatus.set(statusName,
            {...updatedStatus.get(statusName), selected: !updatedStatus.get(statusName).selected});
        updateSelectedWorkflowStates(updatedStatus);
    };

    const renderAreaChartsForSelectedWorkflows = () => {
        return Array.from(selectedWorkflowStates.entries())
            .filter(entry => entry[1].selected === true)
            .map((entry, index) =>
                <Area type="monotone" id={entry[0]} key={entry[0]} dataKey={entry[0]} stackId="1"
                      stroke={colours[index]} fill={colours[index]} activeDot={false}/>);
    };

    return (
        <Segment.Group stacked>
            <Segment.Group horizontal>
                <Segment>
                    <Label size={'medium'} color='blue' attached='top left'>
                        Cumulative Flow
                    </Label>
                    <div className={'chart-segment'}>
                        <ResponsiveContainer width={props.graphWidth} height={400}>
                            <AreaChart id='cumulative-flow-area-chart' data={displayedData}>
                                <XAxis dataKey="date"/>
                                <YAxis
                                    label={{
                                        value: "No of issues",
                                        angle: -90,
                                        position: 'insideLeft'
                                    }}/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Legend/>
                                <Tooltip/>
                                {
                                    renderAreaChartsForSelectedWorkflows()
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
                            <MultipleIssueTypeSelector workflow={props.workflow}
                                                       selectedIssueTypes={selectedIssueTypes}
                                                       toggleIssueType={toggleIssueType}/>
                        </Segment>
                        <Segment>
                            <h4>Select Workflow States</h4>
                            <MultipleWorkflowStatesSelector workflowStates={selectedWorkflowStates}
                                                            toggleWorkflowStatus={toggleWorkflowStatus}/>
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

CumulativeFlowReport.propTypes = {
    data: PropTypes.array.isRequired,
    workflow: PropTypes.arrayOf(PropTypes.shape({
        statuses: PropTypes.array
    })).isRequired,
    graphWidth: PropTypes.number
};



