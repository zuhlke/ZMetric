import React, {Component} from 'react';
import './App.css';
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {Label, Segment} from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <Segment.Group raised id={"main-segment"}>
          <Segment stacked>
            <Label size={'large'} color='red' ribbon>
              {this.props.projectName}
            </Label>
            <LeadTimeLineChart data={this.props.data}/>

          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default App;
