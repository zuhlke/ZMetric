import React from 'react';
import './App.css';
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {getLeadAndCycleTimeData, getWorkflow, getThroughput} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";

export default function App() {
    const leadAndCycleTimeData = getLeadAndCycleTimeData();
    const workflow = getWorkflow();
    const throughputData = getThroughput();


    return (
        <div>
            <LeadAndCycleTimeTable data={leadAndCycleTimeData}/>
            <br/>
            <LeadTimeLineChart data={leadAndCycleTimeData}/>
            <br/>
            <WorkflowContainer workflow={workflow}/>
            <br/>
            <ThroughputReport data={throughputData}/>
        </div>
    );
}
