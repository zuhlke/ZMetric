import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import {Icon, Label, Segment, Sidebar, Transition} from "semantic-ui-react";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {getCumulativeFlowData, getLeadTimeReportData, getThroughput, getWorkflow} from "./DataFetcher";
import moment from "moment";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {
  applyDateRangeFilter,
  applyDateRangeFilterToDataNestedInListOfObjects
} from "../../Filters/DateRange/DateFilter";
import {generateTrendLineData} from "../../Reports/Throughput/TrendLine/TrendLine";
import {TopMenu} from "./Components/TopMenu/TopMenu";
import {LeftMenu} from "./Components/LeftMenu/LeftMenu";
import {CumulativeFlowLocalFilters} from "../../Filters/Local/CumulativeFlowLocalFilters";

export default function MockDashboard() {
  const [workflow] = useState(getWorkflow());
  const [cumulativeFlow] = useState(getCumulativeFlowData());
  const [leadCycleTimeData] = useState(getLeadTimeReportData());
  const [throughput] = useState(generateTrendLineData(getThroughput(), "throughput"));

  const [sidebarVisible, updateSidebarVisibility] = useState(true);
  const [reportFiltersVisible, updateReportFiltersVisibility] = useState(false);

  const [dateRange, updateDateRange] = useState(undefined);
  const [currentReport, updateCurrentReport] = useState("CumulativeFlow");

  const [displayLocalFilters, updateDisplayLocalFilters] = useState(hasLocalFilters(currentReport)); //TODO: is it ok to use currentReport variable here, will it be initialized (especially when we move to axios)?
  const initialSelectedWorkflowStatusesArray = ["Done", "In Progress", "On Hold", "Ready For Test", "Review", "To Do"].map(status => {return {issueType: status, active: true}});
  const [selectedWorkflowStatuses, updateSelectedWorkflowStatuses] = useState(initialSelectedWorkflowStatusesArray);

  function hasLocalFilters(report){  return report === "CumulativeFlow"}

  useEffect(() => {
    updateDisplayLocalFilters(hasLocalFilters(currentReport));
  }, [currentReport]);

  function updateStatuses(statuses){
    updateSelectedWorkflowStatuses(statuses);
  }


  return (
    <div id="mockDashboardRoot">
      <TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
               updateSidebarVisibility={() => updateSidebarVisibility(!sidebarVisible)}
               minDate={moment(throughput[0].date, 'YYYY-MM-DD')} maxDate={moment(throughput[throughput.length-1].date, 'YYYY-MM-DD')}
               dateRangeUpdate={range => updateDateRange(range)} projects={["ZMETRIC","ZAPP","ZTRACK"]}
               issueTypes={["Story", "Task", "Epic", "Bug", "Sub-task", "Spike"]}
      />
      <Segment.Group horizontal id='segmentGroupContainingPushable'>
        <Sidebar.Pushable as={Segment}>
          <LeftMenu updateCurrentReport={updateCurrentReport} currentReport={currentReport}/>
          <Sidebar.Pusher>
            <Segment basic className={"dashboardSegment"}>
              <Label size={'big'} color='teal' >
                {currentReport}
              </Label>
              {displayLocalFilters && <Icon id="LocalFiltersExpanderIcon" name={'angle ' + (reportFiltersVisible ? 'up' : 'down')} onClick={() => updateReportFiltersVisibility(!reportFiltersVisible)}/>}
            </Segment>
            {displayLocalFilters &&
              <Transition visible={reportFiltersVisible} animation="slide down" duration={500}>
                <Segment basic className={"dashboardSegment"}>
                  {(currentReport==="CumulativeFlow")&&<CumulativeFlowLocalFilters selectedStatuses={selectedWorkflowStatuses}
                                                                                   updateSelectedStatuses={updateStatuses}/>}
                </Segment>
              </Transition>
            }
            {workflow && cumulativeFlow && (currentReport==="CumulativeFlow") && <CumulativeFlowReport data={dateRange ? applyDateRangeFilterToDataNestedInListOfObjects(dateRange, cumulativeFlow) : cumulativeFlow}
                                                                                                       workflow={workflow}
                                                                                                      selectedStatuses={selectedWorkflowStatuses.filter(entry => entry.active).map(entry => entry.issueType)}/>}
            {leadCycleTimeData && (currentReport==="LeadTime") && <LeadTimeLineChart data={dateRange ? applyDateRangeFilter(dateRange, leadCycleTimeData) : leadCycleTimeData}/>}
            {throughput && (currentReport==="Throughput") && <ThroughputReport data={dateRange ? applyDateRangeFilter(dateRange, throughput) : throughput}/>}

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment.Group>
    </div>
  );
}
