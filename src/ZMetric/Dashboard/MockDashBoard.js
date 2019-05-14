import React, {useState} from 'react';
import './Dashboard.css';
import {Label, Segment} from "semantic-ui-react";

import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {getCumulativeFlowData, getCycleTimeReportData, getThroughput, getWorkflow} from "./DataFetcher";


export default function MockDashboard(props) {
  const [workflow] = useState(getWorkflow());
  const [leadCycleTimeData] = useState(getCycleTimeReportData());
  const [throughput] = useState(getThroughput());
  const [cumulativeFlow] = useState(getCumulativeFlowData());

  // useEffect(() => {
  //   const {jiraUrl, project} = props;
  //   const {name, value} = props.session;
  //   const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});
  //
  //   axios
  //     .all([instance.get(`rest/api/2/search?maxResults=10000&expand=changelog&fields=resolutiondate,created,issuetype&jql=project=${project}`),
  //       instance.get(`/rest/api/2/project/${project}/statuses`)])
  //     .then(axios.spread((issueResponse, workflowResponse) => {
  //         setLeadCycleTimeData(convertFromJiraToLeadtime(issueResponse.data));
  //         setWorkflow(workflowResponse.data);
  //         setThroughput(convertFromJiraToThroughput(issueResponse.data));
  //         setCumulativeFlow(mergeIssues(issueResponse.data.issues, workflowResponse.data));
  //       }
  //     ))
  // }, [props]);

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
