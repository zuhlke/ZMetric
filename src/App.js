import React from 'react';
import './App.css';
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {getCumulativeFlowData, getLeadAndCycleTimeData, getThroughput} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";
import {Label, Segment} from "semantic-ui-react";
import {CumulativeFlowReport} from "./CumulativeFlowReport";

export default function App() {
    const leadAndCycleTimeData = getLeadAndCycleTimeData();
    // const workflow = getWorkflow();
    const throughputData = getThroughput();
    const cumulativeFlowData = getCumulativeFlowData();


    return (
        <div>
            <Segment.Group raised id={"main-segment"}>
                <Segment stacked>
                    <Label size={'large'} color='red' ribbon>
                        ZMetric
                    </Label>
                    <LeadTimeLineChart data={leadAndCycleTimeData}/>
                    <ThroughputReport data={throughputData}/>
                    {/*<WorkflowContainer workflow={workflow}/>*/}
                    <CumulativeFlowReport data={cumulativeFlowData}/>
                </Segment>
            </Segment.Group>
        </div>
    );
}
