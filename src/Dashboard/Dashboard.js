import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import {LeadTimeLineChart} from "../CycleTimeReport/LeadTimeLineChart";
import {ThroughputReport} from "../ThroughputReport/ThroughputReport";
import {WorkflowContainer} from "../WorkflowContainer"
import {Dimmer, Label, Loader, Segment} from "semantic-ui-react";
import {CumulativeFlowReport} from "../CumulativeFlowReport/CumulativeFlowReport";
import {convertFromJiraToLeadtime} from "../CycleTimeReport/LeadTimeDataAdapter";
import {convertFromJiraToThroughput} from "../ThroughputReport/ThroughputDataAdapter";

import axios from "axios";
import {mergeIssues} from "../CumulativeFlowReport/DataAdapter/DataAdapter";

const Phases = {
  INIT: 'Init',
  LOADING: 'Loading',
  READY: 'Ready',
  FAILED: 'Failed'
};

export default function Dashboard(props) {
  const {name, value} = props.session;
  const {jiraUrl, project} = props;
  const [phase, setPhases] = useState(Phases.INIT);
  const [workflow, setWorkflow] = useState(undefined);
  const [leadCycleTimeData, setLeadCycleTimeData] = useState(undefined);
  const [throughput, setThroughput] = useState(undefined);
  const [cumulativeFlow, setCumulativeFlow] = useState(undefined);

  const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});
  useEffect(() => {
    setPhases(Phases.LOADING);
    axios
      .all([instance.get(`rest/api/2/search?maxResults=10000&expand=changelog&fields=resolutiondate,created,issuetype&jql=project=${project}`),
        instance.get(`rest/api/2/project/${project}/statuses`)])
      .then(axios.spread((issueResponse, workflowResponse) => {
        setPhases(Phases.READY);
        console.log(issueResponse);
        console.log(workflowResponse);
          setLeadCycleTimeData(convertFromJiraToLeadtime(issueResponse.data));
          setWorkflow(workflowResponse.data);
          setThroughput(convertFromJiraToThroughput(issueResponse.data));
          setCumulativeFlow(mergeIssues(issueResponse.data.issues, workflowResponse.data));
        }
      ))
  }, []);

  return (
    <div>
      <Dimmer active={phase===Phases.LOADING}>
        <Loader content={`Generating reports for ${project}`}/>
      </Dimmer>
      {phase===Phases.READY && <Segment.Group raised id={"main-segment"}>
        <Segment stacked>
          <Label size={'large'} color='red' ribbon>
            {props.project}
          </Label>
          {workflow && cumulativeFlow && <CumulativeFlowReport data={cumulativeFlow} workflow={workflow}/>}
          {workflow && leadCycleTimeData && <LeadTimeLineChart workflow={workflow} data={leadCycleTimeData}/>}
          {throughput && <ThroughputReport data={throughput}/>}
          {workflow && <WorkflowContainer workflow={workflow}/>}
        </Segment>
      </Segment.Group>}
    </div>
  );
}
