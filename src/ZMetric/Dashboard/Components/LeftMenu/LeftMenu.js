import React from "react";
import {Sidebar, Menu, Icon, Popup} from "semantic-ui-react";
import "./LeftMenu.css"
export function LeftMenu (props) {
  const {updateCurrentReport, currentReport} = props;

  return (
      <Sidebar as={Menu} animation='push' icon='labeled' left vertical visible width={'very thin'} className={'flex-container'} >
        <Popup
          trigger={
            <Menu.Item active={currentReport === "CumulativeFlow"} id="CumulativeFlowSidebarMenuItem" as='a' onClick={() => updateCurrentReport("CumulativeFlow")} >
              <Icon name='quidditch' size={"mini"}/>
            </Menu.Item>
          }
          header={"CumulativeFlow"}
          content={"Definition..."}
          position={"right center"}
        />
        <Popup
          trigger={
            <Menu.Item active={currentReport === "LeadTime"} as='a' id="LeadTimeSidebarMenuItem" onClick={() => updateCurrentReport("LeadTime")}>
              <Icon name='sync' size="tiny"/>
            </Menu.Item>
          }
          position={"right center"}
        >
          <Popup.Header>Lead & Cycle Time </Popup.Header>
          <Popup.Content>
            <p><b>Lead time:</b> definition...</p><p><b>Cycle Time:</b> definition...</p>
          </Popup.Content>
        </Popup>
        <Popup
          trigger={
            <Menu.Item active={currentReport === "Throughput"} as='a' id="ThroughputSidebarMenuItem" onClick={() => updateCurrentReport("Throughput")}>
              <Icon name='chart line' size="mini"/>
            </Menu.Item>
          }
          header={"Throughput"}
          content={"A measure of issues completed per unit time."}
          position={"right center"}
          />
        <Popup
          trigger={
            <Menu.Item active={currentReport === "Histogram"} as='a' id="" onClick={() => updateCurrentReport("FixVsFeatureTime")}>
                <Icon name='chart bar outline' size="mini"/>
            </Menu.Item>
          }
          header={"Histogram"}
          content={"A serious of fix vs feature work."}
          position={"right center"}
        />
      </Sidebar>
  );
}
