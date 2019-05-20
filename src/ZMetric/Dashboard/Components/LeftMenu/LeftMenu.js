import React, {useState} from "react";
import {Segment,Sidebar,Menu, Icon, Header, Image} from "semantic-ui-react";
import logo from "../../../../logo.jpg"
import "./LeftMenu.css"
export function LeftMenu (props) {
  const [width, setWidth] = useState('thin');

  function onClickArrow() {
    setWidth(width==='thin' ? 'very thin' : 'thin')
  }
  return (
      <Sidebar as={Menu} animation='push' icon='labeled' left vertical visible width={width} className={'flex-container'}>
        <Menu.Item fitted={'vertically'} className={width}>
          <Image src={logo} size={'mini'}/>
        </Menu.Item>
        <Menu.Item as='a' >
          Cumulative Flow
        </Menu.Item>
        <Menu.Item as='a'>
          Throughput
        </Menu.Item>
        <Menu.Item as='a' >
          Lead and Cycle Time
        </Menu.Item>
        <Menu.Item as='a' className={'bottom-aligned'} onClick ={onClickArrow}>
          <Icon name={width==='thin' ? "angle left" : "angle right"} />
        </Menu.Item>
      </Sidebar>
  );
};
