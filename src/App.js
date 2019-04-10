import React, {useState} from 'react';
import './App.css';
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {DateRangePicker} from "./DateRangePicker";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import moment from "moment";
import {getLeadAndCycleTimeData, getWorkflow, getThroughput} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";

export default function App() {
    const originalLeadAndCycleTimeData = getLeadAndCycleTimeData();
    const workflow = getWorkflow();
    const throughputData = getThroughput();
    const [leadAndCycleTimeData, updateData] = useState(originalLeadAndCycleTimeData);

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, originalLeadAndCycleTimeData);
        updateData(newData)
    };

    return (
        <div>
            <LeadAndCycleTimeTable data={leadAndCycleTimeData}/>
            <br/>
            <LeadTimeLineChart data={leadAndCycleTimeData}/>
            <br/>
            <h4>Select date range:</h4>
            {originalLeadAndCycleTimeData.length && <DateRangePicker minDate={moment(originalLeadAndCycleTimeData[0].date)}
                                                                     maxDate={moment(originalLeadAndCycleTimeData[originalLeadAndCycleTimeData.length - 1].date)}
                                                                     dateRangeUpdate={dateRange => filterData(dateRange)}/>
            }
            <br/>
            <WorkflowContainer workflow={workflow} project={"ZMetric"}/>
            <br/>
            <ThroughputReport data={throughputData}/>
        </div>
    );
}
