import React, { Component } from 'react';
import './App.css';
import {Table} from "./Table";
import {LeadTimeLineChart} from "./LeadTimeLineChart";

const data = [
    {
        "date": "2019-02-01",
        "averageLeadTime": 0,
        "averageCycleTime":0
    },
    {
        "date": "2019-02-02",
        "averageLeadTime": 1,
        "averageCycleTime": 0,
    },
    {
        "date": "2019-02-03",
        "averageLeadTime": 1,
        "averageCycleTime": 1
    },
    {
        "date": "2019-02-04",
        "averageLeadTime": 3,
        "averageCycleTime":2
    },
    {
        "date": "2019-02-05",
        "averageLeadTime": 2,
        "averageCycleTime": 1
    },
    {
        "date": "2019-02-06",
        "averageLeadTime": 3,
        "averageCycleTime": 2
    },
    {
        "date": "2019-02-07",
        "averageLeadTime": 5,
        "averageCycleTime": 3
    },
    {
        "date": "2019-02-08",
        "averageLeadTime": 4,
        "averageCycleTime": 4
    }
];


class App extends Component {
  render() {
    return (
        <div>
            <Table data={data}/>
            <br/>
            <LeadTimeLineChart data={data}/>
        </div>
    );
  }
}

export default App;
