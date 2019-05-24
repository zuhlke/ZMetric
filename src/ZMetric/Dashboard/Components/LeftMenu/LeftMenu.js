import React, {useState} from "react";
import {Sidebar, Menu, Icon, Image, Popup} from "semantic-ui-react";
import logo from "../../../../logo.jpg"
import "./LeftMenu.css"
export function LeftMenu (props) {
  const [width, setWidth] = useState('thin');
  const {updateCurrentReport} = props;

  function onClickArrow() {
    setWidth(width==='thin' ? 'very thin' : 'thin')
  }
  return (
      <Sidebar as={Menu} animation='push' icon='labeled' left vertical visible width={width} className={'flex-container'} >
        <Menu.Item fitted={'vertically'} className={width} style={{"min-width":0, /*height:"2.85714286em",*/ padding: 0, background:"#9A5CA7"}}>
          <Image src={logo} size={'mini'}/>
        </Menu.Item>
        <Popup
          trigger={
            <Menu.Item id="CumulativeFlowSidebarMenuItem" as='a' onClick={() => updateCurrentReport("CumulativeFlow")} style={{"min-width":0}}>
              <Icon name='quidditch' />
              {(width === "thin") ? "Cumulative Flow" : ""}
            </Menu.Item>
          }
          header={"CumulativeFlow"}
          content={"Definition..."}
          position={"right center"}
        />
        <Popup
          trigger={
            <Menu.Item as='a' id="LeadTimeSidebarMenuItem" onClick={() => updateCurrentReport("LeadTime")}
                       style={{"min-width": 0}}>
              <Icon name='sync'/>
              {(width === "thin") ? "Lead & Cycle Time" : ""}
            </Menu.Item>
          }
          // header={"Lead and Cycle Time"}
          // content={"Lead time: definition... \n Cycle Time: definition..."}
          position={"right center"}
        >
          <Popup.Header>Lead & Cycle Time </Popup.Header>
          <Popup.Content>
            <p><b>Lead time:</b> definition...</p><p><b>Cycle Time:</b> definition...</p>
          </Popup.Content>
        </Popup>
        <Popup
          trigger={
            <Menu.Item as='a' id="ThroughputSidebarMenuItem" onClick={() => updateCurrentReport("Throughput")}
                       style={{"min-width": 0}}>
              <Icon name='chart line'/>
              {(width === "thin") ? "Throughput" : ""}
            </Menu.Item>
          }
          header={"Throughput"}
          content={"A measure of issues completed per unit time."}
          position={"right center"}
          />
        <Menu.Item as='a' className={'bottom-aligned'} onClick ={onClickArrow} style={{"min-width":0}}>
          <Icon name={width==='thin' ? "angle left" : "angle right"} />
        </Menu.Item>
      </Sidebar>
  );
}
