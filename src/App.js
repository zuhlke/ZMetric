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
                <Segment>
                    <Label size={'large'} color='red' ribbon>
                        ZMetric
                    </Label>
                    <LeadTimeLineChart data={leadAndCycleTimeData}/>
                    <WorkflowContainer workflow={workflow}/>
                    <ThroughputReport data={throughputData}/>
                </Segment>
            </Segment.Group>
        </div>
    );
}
