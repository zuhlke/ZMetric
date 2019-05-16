import React, {useState} from 'react';
import './Dashboard.css';
import {Button, Container, Divider, Icon, Label, Menu, Segment, Sidebar, Transition} from "semantic-ui-react";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {getCumulativeFlowData, getCycleTimeReportData, getThroughput, getWorkflow} from "./DataFetcher";
import {DateRange} from "../../Filters/DateRange/DateRange";
import moment from "moment";


export default function MockDashboard(props) {
  const [workflow] = useState(getWorkflow());
  const [cumulativeFlow] = useState(getCumulativeFlowData());
  const [sidebarVisible, updateSidebarVisibility] = useState(true);
  const [reportFiltersVisible, updateReportFiltersVisibility] = useState(true);

  const handleSideBarVisibility = () => updateSidebarVisibility(!sidebarVisible);
  const handleReportsFilterVisibility = () => updateReportFiltersVisibility(!reportFiltersVisible);
  return (
    <div id="mockDashboardRoot">
      {/*<Segment.Group >*/}
        <div id="topBar">
          ZMETRIC &emsp;
          <Icon name='sidebar' onClick={handleSideBarVisibility}/>
          {/*<span> <Button content={"Sidebar " + (sidebarVisible ? "Hide" : "Show")} onClick={handleSideBarVisibility}/></span>*/}
          {/*&emsp;*/}
          {/*<span> <Button content={"Sub-Menu " + (reportFiltersVisible ? "Hide" : "Show")} onClick={handleReportsFilterVisibility}/></span>*/}
        </div>




        <Segment.Group horizontal id='overwritten'>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='push'
              icon='labeled'
              // inverted
              vertical
              visible={sidebarVisible}
              width='thin'
            >
              <Menu.Item as='a' onClick={() => alert("clicked!")}>
                <Icon name='quidditch' />
                Cumulative Flow
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='sync' />
                Lead & Cycle Time
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='chart line' />
                Throughput
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              {/*<br/>*/}
              <div id="ReportsFilterVisibilityIcon"> <b>Report Specific Filters</b> <Icon name={'angle ' + (reportFiltersVisible ? 'up' : 'down')} onClick={handleReportsFilterVisibility}/> </div>
              <Transition visible={reportFiltersVisible} animation="slide down" duration={500}>
                <Segment basic>
                  <ReportFilters hide={handleReportsFilterVisibility}/>
                </Segment>
              </Transition>


              {/*<Segment.Group raised id={"main-segment"}>*/}
              {/*  <Segment>*/}
                  {/*<Label size={'large'} color='red' ribbon>*/}
                  {/*  {props.project}*/}
                  {/*</Label>*/}
                  {workflow && cumulativeFlow && <CumulativeFlowReport data={cumulativeFlow} workflow={workflow}/>}
                  {/*{leadCycleTimeData && <LeadTimeLineChart data={leadCycleTimeData}/>}*/}
                  {/*{throughput && <ThroughputReport data={throughput}/>}*/}
                {/*</Segment>*/}
              {/*</Segment.Group>*/}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Segment.Group>

      {/*</Segment.Group>*/}
    </div>
  );
}

function ReportFilters(props) {
  return(
      <span >
        {<DateRange id={"data-range-picker-cumulative-flow"} minDate={moment()}
                   maxDate={moment()}
                   dateRangeUpdate={() => {}}/>}
      </span>

  )
}
