import React, { Component } from 'react';
import './App.css';
import {Table} from "./Table";

class App extends Component {
  render() {
    return (
        <Table data={[
          {
            "date": "2019-02-01",
            "averageLeadTime": 0
          },
          {
            "date": "2019-02-02",
            "averageLeadTime": 1
          }]
        }/>
    );
  }
}

export default App;
