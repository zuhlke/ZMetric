import React from 'react';
import './App.css';
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {getLeadAndCycleTimeData, getThroughput, getWorkflow} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";
import {Label, Segment} from "semantic-ui-react";

export default function App() {
    const leadAndCycleTimeData = getLeadAndCycleTimeData();
    const workflow = getWorkflow();
    const throughputData = getThroughput();


    return (
        <div>
            <Segment.Group raised id={"main-segment"}>
                <Segment stacked>
                    <Label size={'large'} color='red' ribbon>
                        ZMetric
                    </Label>
                    <LeadTimeLineChart data={leadAndCycleTimeData}/>
                    <ThroughputReport data={throughputData}/>
                    <WorkflowContainer workflow={workflow}/>
                </Segment>
            </Segment.Group>
        </div>
    );
}