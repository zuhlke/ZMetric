import React, {Component} from 'react';
import './App.css';
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {getCumulativeFlowData, getLeadAndCycleTimeData, getThroughput, getWorkflow} from "./DataFetcher";
import {ThroughputReport} from "./ThroughputReport";
import {Label, Segment} from "semantic-ui-react";
import {CumulativeFlowReport} from "./CumulativeFlowReport/CumulativeFlowReport";

export default function App() {
    const leadAndCycleTimeData = getLeadAndCycleTimeData();
    const workflow = getWorkflow();
    const throughputData = getThroughput();
    const cumulativeFlowData = getCumulativeFlowData();

    return (
        <div>
            <Segment.Group raised id={"main-segment"}>
                <Segment stacked>
                    <Label size={'large'} color='red' ribbon>
                        ZMetric
                    </Label>
                    <CumulativeFlowReport data={cumulativeFlowData} workflow={workflow}/>
                    <LeadTimeLineChart data={leadAndCycleTimeData}/>
                    <ThroughputReport data={throughputData}/>
                    {/*<WorkflowContainer workflow={workflow}/>*/}
                </Segment>
            </Segment.Group>
        </div>
    );
  }
}

export default App;
