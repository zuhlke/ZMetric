import React, {useState} from 'react';
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

export default function MockDashboard() {
  const [workflow] = useState(getWorkflow());
  const [cumulativeFlow] = useState(getCumulativeFlowData());
  const [leadCycleTimeData] = useState(getLeadTimeReportData());
  const [throughput] = useState(generateTrendLineData(getThroughput(), "throughput"));

  const [sidebarVisible, updateSidebarVisibility] = useState(true);
  const [reportFiltersVisible, updateReportFiltersVisibility] = useState(false);

  const [dateRange, updateDateRange] = useState(undefined);
  const [currentReport, updateCurrentReport] = useState("CumulativeFlow");

  return (
    <div id="mockDashboardRoot">
        <Segment.Group horizontal id='overwritten' style={{margin:0}}>
          <Sidebar.Pushable as={Segment}>
            <LeftMenu updateCurrentReport={updateCurrentReport}/>
            <Sidebar.Pusher>
              <TopMenu jiraInstance={"Zuhlke"} username={"Nickson Thanda"}
                       selectedProject={"ZMETRIC"} updateSidebarVisibility={() => updateSidebarVisibility(!sidebarVisible)}
                       minDate={moment(throughput[0].date, 'YYYY-MM-DD')} maxDate={moment(throughput[throughput.length-1].date, 'YYYY-MM-DD')}
                       dateRangeUpdate={range => updateDateRange(range)} projects={["ZMETRIC","ZAPP","ZTRACK"]}
              />
              <Segment basic id="ReportsFilterVisibilityIcon" style={{padding: 0, margin: 0}}>
                <Label size={'medium'} color='blue' >
                  {currentReport}
                </Label>
                <Icon name={'angle ' + (reportFiltersVisible ? 'up' : 'down')} onClick={() => updateReportFiltersVisibility(!reportFiltersVisible)}/>
              </Segment>
              <Transition visible={reportFiltersVisible} animation="slide down" duration={500}>
                <Segment basic>
                  <ReportFilters hide={() => updateReportFiltersVisibility(!reportFiltersVisible)}/>
                </Segment>
              </Transition>
              {workflow && cumulativeFlow && (currentReport==="CumulativeFlow") && <CumulativeFlowReport data={dateRange ? applyDateRangeFilterToDataNestedInListOfObjects(dateRange, cumulativeFlow) : cumulativeFlow} workflow={workflow}/>}
              {leadCycleTimeData && (currentReport==="LeadTime") && <LeadTimeLineChart data={dateRange ? applyDateRangeFilter(dateRange, leadCycleTimeData) : leadCycleTimeData}/>}
              {throughput && (currentReport==="Throughput") && <ThroughputReport data={dateRange ? applyDateRangeFilter(dateRange, throughput) : throughput}/>}

            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Segment.Group>

    </div>
  );
}

function ReportFilters() {
  return(
      <span >
      </span>
  )
}
