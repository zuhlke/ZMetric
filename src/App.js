import React from 'react';
import './App.css';
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {getWorkflow, getThroughput, getCycleTimeReportData} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";

export default function App() {
    const workflow = getWorkflow();
    const throughputData = getThroughput();
    const cycleTimeReportData = getCycleTimeReportData();

    return (
        <div>
            <LeadAndCycleTimeTable data={cycleTimeReportData}/>
            <br/>
            <LeadTimeLineChart data={cycleTimeReportData}/>
            <br/>
            <WorkflowContainer workflow={workflow}/>
            <br/>
            <ThroughputReport data={throughputData}/>
        </div>
    );
}
