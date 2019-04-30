import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import {LeadTimeLineChart} from "../LeadTimeLineChart";
import {getCumulativeFlowData, getThroughput} from "../DataFetcher";
import {ThroughputReport} from "../ThroughputReport";
import {WorkflowContainer} from "../WorkflowContainer"
import {Label, Segment} from "semantic-ui-react";
import {CumulativeFlowReport} from "../CumulativeFlowReport/CumulativeFlowReport";
import {convert} from "../CycleTimeReport/DataAdapter";

import axios from "axios";


export default function Dashboard(props) {
    const {name, value} = props.session;
    const {jiraUrl,project} = props;
    const [workflow, setWorkflow] = useState(undefined);
    const [leadCycleTimeData, setLeadCycleTimeData] = useState(undefined);
    const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});
    const cumulativeFlowDataMock = getCumulativeFlowData();
    const throughputDataMock = getThroughput();

    useEffect(() => {
    axios
        .all([instance.get(`rest/api/2/search?maxResults=10000&fields=resolutiondate,created&jql=project=${project}`),
              instance.get(`/rest/api/2/project/${project}/statuses`)])
        .then(axios.spread((issueResponse,workflowResponse) =>{
                setLeadCycleTimeData(convert(issueResponse.data));
                setWorkflow(workflowResponse.data);
        }
            ))},[] );

    return (
        <div>
            <Segment.Group raised id={"main-segment"}>
                <Segment stacked>
                    <Label size={'large'} color='red' ribbon>
                        {props.project}
                    </Label>
                    {workflow && <CumulativeFlowReport data={cumulativeFlowDataMock} workflow={workflow}/>}
                    {leadCycleTimeData && <LeadTimeLineChart data={leadCycleTimeData}/>}
                    {<ThroughputReport data={throughputDataMock}/>}
                    {workflow && <WorkflowContainer workflow={workflow}/>}
                </Segment>
            </Segment.Group>
        </div>
    );
  }
