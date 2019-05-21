import React, {useState} from 'react';
import './Dashboard.css';
import {Icon, Menu, Segment, Sidebar, Transition} from "semantic-ui-react";
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

export default function MockDashboard() {
  const [workflow] = useState(getWorkflow());
  const [cumulativeFlow] = useState(getCumulativeFlowData());
  const [leadCycleTimeData] = useState(getLeadTimeReportData());
  const [throughput] = useState(generateTrendLineData(getThroughput(), "throughput"));

  const [sidebarVisible, updateSidebarVisibility] = useState(true);
  const [reportFiltersVisible, updateReportFiltersVisibility] = useState(false);

  const [dateRange, updateDateRange] = useState(undefined);
  const [currentReport, updateCurrentReport] = useState("Throughput");

  return (
    <div id="mockDashboardRoot">
        <TopMenu jiraInstance={"Zuhlke"} username={"Nickson Thanda"}
                 selectedProject={"ZMETRIC"} updateSidebarVisibility={() => updateSidebarVisibility(!sidebarVisible)}
                 minDate={moment(throughput[0].date, 'YYYY-MM-DD')} maxDate={moment(throughput[throughput.length-1].date, 'YYYY-MM-DD')}
                 dateRangeUpdate={range => updateDateRange(range)}
                 />


        <Segment.Group horizontal id='overwritten' style={{margin:0}}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='push'
              icon='labeled'
              vertical
              visible={sidebarVisible}
              width='thin'
            >
              <Menu.Item id="CumulativeFlowSidebarMenuItem" as='a' onClick={() => updateCurrentReport("CumulativeFlow")}>
                <Icon name='quidditch' />
                Cumulative Flow
              </Menu.Item>
              <Menu.Item as='a' id="LeadTimeSidebarMenuItem" onClick={() => updateCurrentReport("LeadTime")}>
                <Icon name='sync' />
                Lead & Cycle Time
              </Menu.Item>
              <Menu.Item as='a' id="ThroughputSidebarMenuItem" onClick={() => updateCurrentReport("Throughput")}>
                <Icon name='chart line' />
                Throughput
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <div id="ReportsFilterVisibilityIcon"> <b>Report Specific Filters</b> <Icon name={'angle ' + (reportFiltersVisible ? 'up' : 'down')} onClick={() => updateReportFiltersVisibility(!reportFiltersVisible)}/> </div>
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
