import React, {useState} from 'react';
import './Dashboard.css';
import {Button, Container, Divider, Icon, Label, Menu, Segment, Sidebar, Transition} from "semantic-ui-react";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {getCumulativeFlowData, getLeadTimeReportData, getThroughput, getWorkflow} from "./DataFetcher";
import {DateRange} from "../../Filters/DateRange/DateRange";
import moment from "moment";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {applyDateRangeFilter} from "../../Filters/DateRange/DateFilter";
import {generateTrendLineData} from "../../Reports/Throughput/TrendLine/TrendLine";

export default function MockDashboard(props) {
  const [workflow] = useState(getWorkflow());
  const [cumulativeFlow] = useState(getCumulativeFlowData());
  const [leadCycleTimeData] = useState(getLeadTimeReportData());
  const [throughput] = useState(generateTrendLineData(getThroughput(), "throughput"));

  const [sidebarVisible, updateSidebarVisibility] = useState(true);
  const [reportFiltersVisible, updateReportFiltersVisibility] = useState(true);

  const [dateRange, updateDateRange] = useState(undefined);
  const [currentReport, updateCurrentReport] = useState("Throughput");

  return (
    <div id="mockDashboardRoot">
        <div id="topBar">
          ZMETRIC &emsp;
          <Icon name='sidebar' onClick={() => updateSidebarVisibility(!sidebarVisible)}/>
        </div>


        <Segment.Group horizontal id='overwritten'>
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
                  {throughput && <ReportFilters hide={() => updateReportFiltersVisibility(!reportFiltersVisible)} data={throughput}
                                                dateRangeUpdate={range => {
                                                  updateDateRange(range);
                                                }
                                                 }/>
                  }
                </Segment>
              </Transition>

              {workflow && cumulativeFlow && (currentReport==="CumulativeFlow") && <CumulativeFlowReport data={cumulativeFlow} workflow={workflow}/>}
              {/*{workflow && cumulativeFlow && (currentReport==="CumulativeFlow") && <CumulativeFlowReport data={dateRange ? applyDateRangeFilter(dateRange, cumulativeFlow) : cumulativeFlow} workflow={workflow}/>}*/}
              {leadCycleTimeData && (currentReport==="LeadTime") && <LeadTimeLineChart data={dateRange ? applyDateRangeFilter(dateRange, leadCycleTimeData) : leadCycleTimeData}/>}
              {throughput && (currentReport==="Throughput") && <ThroughputReport data={dateRange ? applyDateRangeFilter(dateRange, throughput) : throughput}/>}

            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Segment.Group>

    </div>
  );
}

function ReportFilters(props) {
  const minDate = props.data[0].date;
  const maxDate = props.data[props.data.length-1].date;
  return(
      <span >
        {<DateRange id={"data-range-picker-cumulative-flow"} minDate={moment(minDate)}
                   maxDate={moment(maxDate)}
                   dateRangeUpdate={props.dateRangeUpdate}/>}
      </span>
  )
}
