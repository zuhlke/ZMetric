import React, {useState} from 'react';
import './App.css';
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {DateRangePicker} from "./DateRangePicker";
import {applyDateRangeFilter} from "./DateFiltering/DateFilter";
import moment from "moment";
import {getData, getWorkflow} from "./DataFetcher";

export default function App() {
    const originalData = getData();
    const workflow = getWorkflow();
    const [data, updateData] = useState(originalData);

    const filterData = dateRange => {
        const newData = applyDateRangeFilter(dateRange, originalData);
        updateData(newData)
    };

    return (
        <div>
            <LeadAndCycleTimeTable data={data}/>
            <br/>
            <LeadTimeLineChart data={data}/>
            <br/>
            <WorkflowContainer workflow={workflow} project={"ZMetric"}/>
            <br/>
            {originalData.length && <DateRangePicker minDate={moment(originalData[0].date)}
                                                     maxDate={moment(originalData[originalData.length - 1].date)}
                                                     dateRangeUpdate={dateRange => filterData(dateRange)}/>}
        </div>
    );
}
