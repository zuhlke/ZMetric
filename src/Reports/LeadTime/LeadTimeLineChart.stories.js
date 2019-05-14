import React from 'react';
import {storiesOf} from '@storybook/react';
import {LeadTimeLineChart} from "./LeadTimeLineChart";

const workflow = [
  {
    "id": "1",
    "name": "Bug",
    "statuses": [
      {
        "name": "To Do",
        "id": "10100"
      },
      {
        "name": "In Progress",
        "id": "3"
      },
      {
        "name": "Review",
        "id": "10202"
      },
      {
        "name": "Done",
        "id": "11803"
      },
      {
        "name": "On Hold",
        "id": "10804"
      },
      {
        "name": "Ready For Test",
        "id": "11903"
      }
    ],

  },
  {
    "id": "10000",
    "name": "Epic",
    "statuses": [
      {
        "name": "To Do",
        "id": "10100"
      },
      {
        "name": "In Progress",
        "id": "3"
      },
      {
        "name": "Review",
        "id": "10202"
      },
      {
        "name": "Done",
        "id": "11803"
      },
      {
        "name": "On Hold",
        "id": "10804"
      },
      {
        "name": "Ready For Review",
        "id": "12305"
      }]
  }
];
const leadCycleTimeData = [
  {
    "date": "2019-02-01",
    "averageLeadTime": 0,
    "averageCycleTime": 0
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
    "averageCycleTime": 2
  }];
storiesOf('LeadTimeChart', module)
  .add('Default', () => <LeadTimeLineChart workflow={workflow} data={leadCycleTimeData}/>);
