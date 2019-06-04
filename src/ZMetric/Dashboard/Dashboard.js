import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import {Label, Segment} from "semantic-ui-react";

import axios from "axios";
import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {mergeIssues} from "../../Reports/CumulativeFlow/CumulativeFlowDataAdapter";
import {convertFromJiraToThroughput} from "../../Reports/Throughput/ThroughputDataAdapter";
import {convertFromJiraToLeadtime} from "../../Reports/LeadTime/LeadTimeDataAdapter";


export default function Dashboard(props) {
  const [workflow, setWorkflow] = useState(undefined);
  const [leadCycleTimeData, setLeadCycleTimeData] = useState(undefined);
  const [throughput, setThroughput] = useState(undefined);
  const [cumulativeFlow, setCumulativeFlow] = useState(undefined);

  useEffect(() => {
    const {jiraUrl, project} = props;
    const {name, value} = props.session;
    const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});

    axios
      .all([instance.get(`rest/api/2/search?maxResults=10000&expand=changelog&fields=resolutiondate,created,issuetype&jql=project=${project}`),
        instance.get(`/rest/api/2/project/${project}/statuses`)])
      .then(axios.spread((issueResponse, workflowResponse) => {
          setLeadCycleTimeData(convertFromJiraToLeadtime(issueResponse.data));
          setWorkflow(workflowResponse.data);
          setThroughput(convertFromJiraToThroughput(issueResponse.data));
          setCumulativeFlow(mergeIssues(issueResponse.data.issues, workflowResponse.data));
        }
      ))
  }, [props]);

  return (
    <div>
      <Segment.Group raised id={"main-segment"}>
        <Segment stacked>
          <Label size={'large'} color='red' ribbon>
            {props.project}
          </Label>
          {workflow && cumulativeFlow && <CumulativeFlowReport data={cumulativeFlow} workflow={workflow}/>}
          {leadCycleTimeData && <LeadTimeLineChart data={leadCycleTimeData}/>}
          {throughput && <ThroughputReport data={throughput}/>}
        </Segment>
      </Segment.Group>
    </div>
  );
}
