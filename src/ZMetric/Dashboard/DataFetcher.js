import {convertFromJiraToLeadtime} from "../../Reports/LeadTime/LeadTimeDataAdapter";

const workflow = [
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/1",
    "id": "1",
    "name": "Bug",
    "subtask": false,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "Bug To Do",
        "id": "9999999",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  },
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/10000",
    "id": "10000",
    "name": "Epic",
    "subtask": false,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "To Do",
        "id": "10100",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  },
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/11201",
    "id": "11201",
    "name": "Spike",
    "subtask": false,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "To Do",
        "id": "10100",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  },
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/10001",
    "id": "10001",
    "name": "Story",
    "subtask": false,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "To Do",
        "id": "10100",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  },
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/5",
    "id": "5",
    "name": "Sub-task",
    "subtask": true,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "To Do",
        "id": "10100",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  },
  {
    "self": "https://jira.zuehlke.com/rest/api/2/issuetype/3",
    "id": "3",
    "name": "Task",
    "subtask": false,
    "statuses": [
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
        "name": "To Do",
        "id": "10100",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
          "id": 2,
          "key": "new",
          "colorName": "blue-gray",
          "name": "To Do"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/3",
        "description": "This issue is being actively worked on at the moment by the assignee.",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
        "name": "In Progress",
        "id": "3",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
        "name": "Review",
        "id": "10202",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Done",
        "id": "11803",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
          "id": 3,
          "key": "done",
          "colorName": "green",
          "name": "Done"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
        "description": "",
        "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
        "name": "On Hold",
        "id": "10804",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      },
      {
        "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
        "description": "This status is managed internally by JIRA Software",
        "iconUrl": "https://jira.zuehlke.com/",
        "name": "Ready For Test",
        "id": "11903",
        "statusCategory": {
          "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
          "id": 4,
          "key": "indeterminate",
          "colorName": "yellow",
          "name": "In Progress"
        }
      }
    ]
  }
];
const leadAndCycleTimeData = [
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
const cumulativeFlowData = [
  {
    "id": "1",
    "name": "Bug",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-04",
        "To Do": 1,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-05",
        "To Do": 0,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-06",
        "To Do": 2,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-07",
        "To Do": 2,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-08",
        "To Do": 2,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-09",
        "To Do": 2,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2, "Bug To Do": 0
      },
      {
        "date": "2019-02-10",
        "To Do": 0,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 1,
        "Done": 4, "Bug To Do": 0
      },
      {
        "date": "2019-02-11",
        "To Do": 0,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 6, "Bug To Do": 0
      },
      {
        "date": "2019-02-12",
        "To Do": 0,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 2,
        "Done": 8, "Bug To Do": 0
      }
    ]
  }, {
    "id": "10000",
    "name": "Epic",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-04",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-05",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-06",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-07",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-08",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-09",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-10",
        "To Do": 6,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-11",
        "To Do": 5,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 1
      },
      {
        "date": "2019-02-12",
        "To Do": 5,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 1
      }
    ]
  }, {
    "id": "11201",
    "name": "Spike",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 2,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 1,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 1,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 1
      },
      {
        "date": "2019-02-04",
        "To Do": 0,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 1
      },
      {
        "date": "2019-02-05",
        "To Do": 2,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 1
      },
      {
        "date": "2019-02-06",
        "To Do": 1,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 2
      },
      {
        "date": "2019-02-07",
        "To Do": 0,
        "In Progress": 1,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 3
      },
      {
        "date": "2019-02-08",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 4
      },
      {
        "date": "2019-02-09",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 4
      },
      {
        "date": "2019-02-10",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 4
      },
      {
        "date": "2019-02-11",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 4
      },
      {
        "date": "2019-02-12",
        "To Do": 0,
        "In Progress": 0,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 4
      }
    ]
  }, {
    "id": "10001",
    "name": "Story",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 14,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 12,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 11,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-04",
        "To Do": 9,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2
      },
      {
        "date": "2019-02-05",
        "To Do": 8,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 3
      },
      {
        "date": "2019-02-06",
        "To Do": 8,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 5
      },
      {
        "date": "2019-02-07",
        "To Do": 6,
        "In Progress": 4,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 6
      },
      {
        "date": "2019-02-08",
        "To Do": 4,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 1,
        "Done": 7
      },
      {
        "date": "2019-02-09",
        "To Do": 4,
        "In Progress": 2,
        "On Hold": 2,
        "Review": 2,
        "Ready For Test": 0,
        "Done": 7
      },
      {
        "date": "2019-02-10",
        "To Do": 3,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 2,
        "Done": 8
      },
      {
        "date": "2019-02-11",
        "To Do": 1,
        "In Progress": 3,
        "On Hold": 2,
        "Review": 3,
        "Ready For Test": 3,
        "Done": 8
      },
      {
        "date": "2019-02-12",
        "To Do": 0,
        "In Progress": 2,
        "On Hold": 4,
        "Review": 3,
        "Ready For Test": 2,
        "Done": 10
      }
    ]
  }, {
    "id": "5",
    "name": "Sub-task",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 14,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 12,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 11,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-04",
        "To Do": 9,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2
      },
      {
        "date": "2019-02-05",
        "To Do": 8,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 3
      },
      {
        "date": "2019-02-06",
        "To Do": 8,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 5
      },
      {
        "date": "2019-02-07",
        "To Do": 6,
        "In Progress": 4,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 6
      },
      {
        "date": "2019-02-08",
        "To Do": 4,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 1,
        "Done": 7
      },
      {
        "date": "2019-02-09",
        "To Do": 4,
        "In Progress": 2,
        "On Hold": 2,
        "Review": 2,
        "Ready For Test": 0,
        "Done": 7
      },
      {
        "date": "2019-02-10",
        "To Do": 3,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 2,
        "Done": 8
      },
      {
        "date": "2019-02-11",
        "To Do": 1,
        "In Progress": 3,
        "On Hold": 2,
        "Review": 3,
        "Ready For Test": 3,
        "Done": 8
      },
      {
        "date": "2019-02-12",
        "To Do": 0,
        "In Progress": 2,
        "On Hold": 4,
        "Review": 3,
        "Ready For Test": 2,
        "Done": 10
      }
    ]
  }, {
    "id": "3",
    "name": "Task",
    "data": [
      {
        "date": "2019-02-01",
        "To Do": 14,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-02",
        "To Do": 12,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-03",
        "To Do": 11,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0, "Bug To Do": 5
      },
      {
        "date": "2019-02-04",
        "To Do": 9,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2
      },
      {
        "date": "2019-02-05",
        "To Do": 8,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 3
      },
      {
        "date": "2019-02-06",
        "To Do": 8,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 5
      },
      {
        "date": "2019-02-07",
        "To Do": 6,
        "In Progress": 4,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 6
      },
      {
        "date": "2019-02-08",
        "To Do": 4,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 1,
        "Done": 7
      },
      {
        "date": "2019-02-09",
        "To Do": 4,
        "In Progress": 2,
        "On Hold": 2,
        "Review": 2,
        "Ready For Test": 0,
        "Done": 7
      },
      {
        "date": "2019-02-10",
        "To Do": 3,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 2,
        "Done": 8
      },
      {
        "date": "2019-02-11",
        "To Do": 1,
        "In Progress": 3,
        "On Hold": 2,
        "Review": 3,
        "Ready For Test": 3,
        "Done": 8
      },
      {
        "date": "2019-02-12",
        "To Do": 0,
        "In Progress": 2,
        "On Hold": 4,
        "Review": 3,
        "Ready For Test": 2,
        "Done": 10
      }
    ]
  }
];
const throughputData = [
  {
    "date": "2019-02-01",
    "throughput": 1
  },
  {
    "date": "2019-02-02",
    "throughput": 3
  },
  {
    "date": "2019-02-03",
    "throughput": 4
  },
  {
    "date": "2019-02-04",
    "throughput": 2
  },
  {
    "date": "2019-02-05",
    "throughput": 5
  },
  {
    "date": "2019-02-06",
    "throughput": 2
  },
  {
    "date": "2019-02-07",
    "throughput": 4
  },
  {
    "date": "2019-02-08",
    "throughput": 7
  },
  {
    "date": "2019-02-09",
    "throughput": 5
  },
  {
    "date": "2019-02-10",
    "throughput": 4
  },
  {
    "date": "2019-02-11",
    "throughput": 1
  },
  {
    "date": "2019-02-12",
    "throughput": 4
  }
];
const jiraResponse = {
  "expand": "schema,names",
  "startAt": 0,
  "maxResults": 325,
  "total": 122,
  "issues": [
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "105389",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/105389",
      "key": "ZAPP-555",
      "fields": {
        "resolutiondate": "2019-04-05T14:18:04.000+0200",
        "created": "2019-04-05T11:48:41.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "105381",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/105381",
      "key": "ZAPP-554",
      "fields": {
        "resolutiondate": "2019-04-05T12:04:02.000+0200",
        "created": "2019-04-05T10:35:09.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "103678",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/103678",
      "key": "ZAPP-535",
      "fields": {
        "resolutiondate": "2019-04-03T11:52:49.000+0200",
        "created": "2019-03-20T12:46:11.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "103404",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/103404",
      "key": "ZAPP-533",
      "fields": {
        "resolutiondate": "2019-03-18T15:55:21.000+0100",
        "created": "2019-03-18T14:30:43.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "102605",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/102605",
      "key": "ZAPP-530",
      "fields": {
        "resolutiondate": "2019-03-14T14:58:14.000+0100",
        "created": "2019-03-08T15:03:34.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "102604",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/102604",
      "key": "ZAPP-529",
      "fields": {
        "resolutiondate": "2019-03-18T15:53:48.000+0100",
        "created": "2019-03-08T14:59:35.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "101935",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/101935",
      "key": "ZAPP-525",
      "fields": {
        "resolutiondate": "2019-04-05T12:04:00.000+0200",
        "created": "2019-02-28T14:29:56.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "101536",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/101536",
      "key": "ZAPP-524",
      "fields": {
        "resolutiondate": "2019-02-25T11:09:37.000+0100",
        "created": "2019-02-22T12:56:20.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "101057",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/101057",
      "key": "ZAPP-523",
      "fields": {
        "resolutiondate": "2019-03-13T15:58:04.000+0100",
        "created": "2019-02-20T12:40:58.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "100089",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/100089",
      "key": "ZAPP-517",
      "fields": {
        "resolutiondate": "2019-02-11T16:50:49.000+0100",
        "created": "2019-02-07T19:29:23.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99889",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99889",
      "key": "ZAPP-484",
      "fields": {
        "resolutiondate": "2019-02-07T13:07:11.000+0100",
        "created": "2019-02-06T16:48:02.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99887",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99887",
      "key": "ZAPP-483",
      "fields": {
        "resolutiondate": "2019-02-07T18:13:08.000+0100",
        "created": "2019-02-06T16:38:47.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99877",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99877",
      "key": "ZAPP-482",
      "fields": {
        "resolutiondate": "2019-02-07T18:17:24.000+0100",
        "created": "2019-02-06T15:45:52.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99874",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99874",
      "key": "ZAPP-481",
      "fields": {
        "resolutiondate": "2019-02-07T19:30:43.000+0100",
        "created": "2019-02-06T15:30:54.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99810",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99810",
      "key": "ZAPP-480",
      "fields": {
        "resolutiondate": "2019-03-01T12:42:09.000+0100",
        "created": "2019-02-06T12:47:24.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99521",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99521",
      "key": "ZAPP-479",
      "fields": {
        "resolutiondate": "2019-02-11T17:33:57.000+0100",
        "created": "2019-02-04T10:12:44.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99173",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99173",
      "key": "ZAPP-478",
      "fields": {
        "resolutiondate": "2019-02-01T09:47:43.000+0100",
        "created": "2019-01-30T17:28:44.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "99010",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/99010",
      "key": "ZAPP-470",
      "fields": {
        "resolutiondate": "2019-02-18T12:29:47.000+0100",
        "created": "2019-01-29T12:00:43.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98620",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98620",
      "key": "ZAPP-467",
      "fields": {
        "resolutiondate": "2019-02-25T11:07:57.000+0100",
        "created": "2019-01-24T10:16:52.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98565",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98565",
      "key": "ZAPP-466",
      "fields": {
        "resolutiondate": "2019-02-18T12:24:13.000+0100",
        "created": "2019-01-23T17:11:51.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98475",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98475",
      "key": "ZAPP-465",
      "fields": {
        "resolutiondate": "2019-01-25T10:29:52.000+0100",
        "created": "2019-01-23T12:05:22.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98428",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98428",
      "key": "ZAPP-464",
      "fields": {
        "resolutiondate": "2019-01-29T17:24:03.000+0100",
        "created": "2019-01-23T10:58:09.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98361",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98361",
      "key": "ZAPP-463",
      "fields": {
        "resolutiondate": "2019-01-24T17:12:17.000+0100",
        "created": "2019-01-22T18:20:44.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98254",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98254",
      "key": "ZAPP-460",
      "fields": {
        "resolutiondate": "2019-01-25T12:32:01.000+0100",
        "created": "2019-01-22T12:36:29.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "98110",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/98110",
      "key": "ZAPP-459",
      "fields": {
        "resolutiondate": "2019-01-24T19:00:40.000+0100",
        "created": "2019-01-21T10:59:07.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "97717",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/97717",
      "key": "ZAPP-455",
      "fields": {
        "resolutiondate": "2019-03-14T15:06:49.000+0100",
        "created": "2019-01-16T11:48:06.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "97489",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/97489",
      "key": "ZAPP-454",
      "fields": {
        "resolutiondate": "2019-01-22T14:33:00.000+0100",
        "created": "2019-01-14T16:48:35.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "97050",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/97050",
      "key": "ZAPP-452",
      "fields": {
        "resolutiondate": "2019-01-14T16:25:26.000+0100",
        "created": "2019-01-09T15:59:37.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "97029",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/97029",
      "key": "ZAPP-451",
      "fields": {
        "resolutiondate": "2019-01-24T13:30:08.000+0100",
        "created": "2019-01-09T15:11:52.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96427",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96427",
      "key": "ZAPP-448",
      "fields": {
        "resolutiondate": "2019-01-02T16:11:39.000+0100",
        "created": "2018-12-20T11:56:43.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96292",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96292",
      "key": "ZAPP-447",
      "fields": {
        "resolutiondate": "2019-01-18T14:45:52.000+0100",
        "created": "2018-12-19T16:39:51.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96261",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96261",
      "key": "ZAPP-445",
      "fields": {
        "resolutiondate": "2019-01-16T09:26:36.000+0100",
        "created": "2018-12-19T15:42:14.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96164",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96164",
      "key": "ZAPP-444",
      "fields": {
        "resolutiondate": "2018-12-27T10:14:23.000+0100",
        "created": "2018-12-18T14:29:54.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96127",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96127",
      "key": "ZAPP-443",
      "fields": {
        "resolutiondate": "2019-01-11T16:43:28.000+0100",
        "created": "2018-12-18T10:04:15.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96035",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96035",
      "key": "ZAPP-442",
      "fields": {
        "resolutiondate": "2018-12-18T11:13:24.000+0100",
        "created": "2018-12-17T11:23:09.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96029",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96029",
      "key": "ZAPP-441",
      "fields": {
        "resolutiondate": "2018-12-19T11:15:40.000+0100",
        "created": "2018-12-17T10:32:41.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "96011",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/96011",
      "key": "ZAPP-440",
      "fields": {
        "resolutiondate": "2019-02-18T12:17:13.000+0100",
        "created": "2018-12-14T18:35:24.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95906",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95906",
      "key": "ZAPP-434",
      "fields": {
        "resolutiondate": "2018-12-19T12:23:53.000+0100",
        "created": "2018-12-13T17:30:42.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95904",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95904",
      "key": "ZAPP-433",
      "fields": {
        "resolutiondate": "2019-02-07T12:32:06.000+0100",
        "created": "2018-12-13T17:22:20.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95901",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95901",
      "key": "ZAPP-430",
      "fields": {
        "resolutiondate": "2018-12-17T10:22:48.000+0100",
        "created": "2018-12-13T17:06:45.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95900",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95900",
      "key": "ZAPP-429",
      "fields": {
        "resolutiondate": "2018-12-27T12:38:39.000+0100",
        "created": "2018-12-13T16:57:27.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95899",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95899",
      "key": "ZAPP-428",
      "fields": {
        "resolutiondate": "2019-01-18T14:45:43.000+0100",
        "created": "2018-12-13T16:57:19.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95898",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95898",
      "key": "ZAPP-427",
      "fields": {
        "resolutiondate": "2019-01-28T14:41:59.000+0100",
        "created": "2018-12-13T16:57:11.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95897",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95897",
      "key": "ZAPP-426",
      "fields": {
        "resolutiondate": "2018-12-19T11:12:10.000+0100",
        "created": "2018-12-13T16:57:02.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95844",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95844",
      "key": "ZAPP-411",
      "fields": {
        "resolutiondate": "2018-12-14T11:32:31.000+0100",
        "created": "2018-12-13T11:51:39.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95687",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95687",
      "key": "ZAPP-408",
      "fields": {
        "resolutiondate": "2018-12-27T12:38:54.000+0100",
        "created": "2018-12-12T12:51:04.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95680",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95680",
      "key": "ZAPP-407",
      "fields": {
        "resolutiondate": "2018-12-19T11:13:09.000+0100",
        "created": "2018-12-12T12:21:28.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95660",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95660",
      "key": "ZAPP-405",
      "fields": {
        "resolutiondate": "2018-12-12T12:11:30.000+0100",
        "created": "2018-12-12T11:50:12.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95382",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95382",
      "key": "ZAPP-404",
      "fields": {
        "resolutiondate": "2019-01-02T14:31:22.000+0100",
        "created": "2018-12-11T11:49:56.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95278",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95278",
      "key": "ZAPP-403",
      "fields": {
        "resolutiondate": "2018-12-14T12:40:46.000+0100",
        "created": "2018-12-10T16:44:49.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95268",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95268",
      "key": "ZAPP-402",
      "fields": {
        "resolutiondate": "2018-12-18T11:11:34.000+0100",
        "created": "2018-12-10T16:26:28.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95258",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95258",
      "key": "ZAPP-401",
      "fields": {
        "resolutiondate": "2019-01-28T10:12:03.000+0100",
        "created": "2018-12-10T15:18:54.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95257",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95257",
      "key": "ZAPP-400",
      "fields": {
        "resolutiondate": "2018-12-12T19:02:29.000+0100",
        "created": "2018-12-10T15:18:20.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "95239",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/95239",
      "key": "ZAPP-398",
      "fields": {
        "resolutiondate": "2018-12-10T18:07:22.000+0100",
        "created": "2018-12-10T13:43:22.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94886",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94886",
      "key": "ZAPP-396",
      "fields": {
        "resolutiondate": "2018-12-10T17:23:20.000+0100",
        "created": "2018-12-04T11:38:00.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94739",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94739",
      "key": "ZAPP-394",
      "fields": {
        "resolutiondate": "2019-04-03T11:52:52.000+0200",
        "created": "2018-12-03T15:06:13.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94548",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94548",
      "key": "ZAPP-392",
      "fields": {
        "resolutiondate": "2018-12-12T12:28:48.000+0100",
        "created": "2018-11-29T16:58:03.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94462",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94462",
      "key": "ZAPP-391",
      "fields": {
        "resolutiondate": "2018-12-10T16:42:06.000+0100",
        "created": "2018-11-29T11:35:17.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94338",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94338",
      "key": "ZAPP-390",
      "fields": {
        "resolutiondate": "2018-11-29T11:06:01.000+0100",
        "created": "2018-11-28T13:26:33.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94208",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94208",
      "key": "ZAPP-389",
      "fields": {
        "resolutiondate": "2018-12-04T12:12:37.000+0100",
        "created": "2018-11-27T19:03:12.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94186",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94186",
      "key": "ZAPP-387",
      "fields": {
        "resolutiondate": "2018-11-29T11:27:15.000+0100",
        "created": "2018-11-27T16:43:20.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "94115",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/94115",
      "key": "ZAPP-386",
      "fields": {
        "resolutiondate": "2019-02-01T18:26:42.000+0100",
        "created": "2018-11-27T11:44:28.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "93512",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/93512",
      "key": "ZAPP-385",
      "fields": {
        "resolutiondate": "2019-01-29T15:16:20.000+0100",
        "created": "2018-11-20T11:37:53.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92930",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92930",
      "key": "ZAPP-382",
      "fields": {
        "resolutiondate": "2018-11-19T13:11:09.000+0100",
        "created": "2018-11-13T13:51:47.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92926",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92926",
      "key": "ZAPP-381",
      "fields": {
        "resolutiondate": "2018-12-11T15:08:40.000+0100",
        "created": "2018-11-13T13:33:12.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92924",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92924",
      "key": "ZAPP-380",
      "fields": {
        "resolutiondate": "2018-12-10T18:28:08.000+0100",
        "created": "2018-11-13T13:26:19.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92923",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92923",
      "key": "ZAPP-379",
      "fields": {
        "resolutiondate": "2018-11-29T10:47:01.000+0100",
        "created": "2018-11-13T13:23:53.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92919",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92919",
      "key": "ZAPP-378",
      "fields": {
        "resolutiondate": "2018-11-19T11:30:45.000+0100",
        "created": "2018-11-13T13:07:19.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92917",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92917",
      "key": "ZAPP-377",
      "fields": {
        "resolutiondate": "2018-11-19T12:13:18.000+0100",
        "created": "2018-11-13T12:57:56.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92600",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92600",
      "key": "ZAPP-373",
      "fields": {
        "resolutiondate": "2018-12-12T11:57:19.000+0100",
        "created": "2018-11-09T15:08:25.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92595",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92595",
      "key": "ZAPP-372",
      "fields": {
        "resolutiondate": "2018-11-12T11:29:01.000+0100",
        "created": "2018-11-09T14:32:18.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92387",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92387",
      "key": "ZAPP-370",
      "fields": {
        "resolutiondate": "2018-11-12T13:13:06.000+0100",
        "created": "2018-11-07T17:41:12.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92099",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92099",
      "key": "ZAPP-369",
      "fields": {
        "resolutiondate": "2018-11-29T11:08:55.000+0100",
        "created": "2018-11-05T11:39:18.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92098",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92098",
      "key": "ZAPP-368",
      "fields": {
        "resolutiondate": "2018-11-12T11:06:15.000+0100",
        "created": "2018-11-05T11:35:39.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92097",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92097",
      "key": "ZAPP-367",
      "fields": {
        "resolutiondate": "2018-11-09T16:41:33.000+0100",
        "created": "2018-11-05T11:33:14.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92095",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92095",
      "key": "ZAPP-366",
      "fields": {
        "resolutiondate": "2018-11-20T16:32:46.000+0100",
        "created": "2018-11-05T11:29:44.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "92087",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/92087",
      "key": "ZAPP-365",
      "fields": {
        "resolutiondate": "2018-11-19T12:31:24.000+0100",
        "created": "2018-11-05T10:29:56.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91835",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91835",
      "key": "ZAPP-363",
      "fields": {
        "resolutiondate": "2018-11-02T18:35:01.000+0100",
        "created": "2018-10-31T11:17:39.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91829",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91829",
      "key": "ZAPP-362",
      "fields": {
        "resolutiondate": "2018-11-27T15:26:41.000+0100",
        "created": "2018-10-31T10:29:15.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91827",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91827",
      "key": "ZAPP-361",
      "fields": {
        "resolutiondate": "2018-11-22T10:39:39.000+0100",
        "created": "2018-10-31T10:12:52.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91823",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91823",
      "key": "ZAPP-359",
      "fields": {
        "resolutiondate": "2018-12-10T16:38:11.000+0100",
        "created": "2018-10-31T10:02:02.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91738",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91738",
      "key": "ZAPP-357",
      "fields": {
        "resolutiondate": "2018-11-13T16:10:03.000+0100",
        "created": "2018-10-30T10:54:46.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91670",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91670",
      "key": "ZAPP-356",
      "fields": {
        "resolutiondate": "2018-11-02T18:35:36.000+0100",
        "created": "2018-10-29T11:34:08.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91667",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91667",
      "key": "ZAPP-355",
      "fields": {
        "resolutiondate": "2018-11-02T18:35:49.000+0100",
        "created": "2018-10-29T11:04:52.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91531",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91531",
      "key": "ZAPP-353",
      "fields": {
        "resolutiondate": "2018-10-31T10:52:39.000+0100",
        "created": "2018-10-25T17:17:00.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91348",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91348",
      "key": "ZAPP-349",
      "fields": {
        "resolutiondate": "2019-02-25T11:12:15.000+0100",
        "created": "2018-10-24T14:23:41.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91316",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91316",
      "key": "ZAPP-347",
      "fields": {
        "resolutiondate": "2018-10-25T14:28:14.000+0200",
        "created": "2018-10-24T11:52:10.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91110",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91110",
      "key": "ZAPP-345",
      "fields": {
        "resolutiondate": "2018-10-25T14:28:01.000+0200",
        "created": "2018-10-22T12:51:31.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91109",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91109",
      "key": "ZAPP-344",
      "fields": {
        "resolutiondate": "2018-10-25T14:27:52.000+0200",
        "created": "2018-10-22T12:42:22.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91108",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91108",
      "key": "ZAPP-343",
      "fields": {
        "resolutiondate": "2018-10-25T14:27:42.000+0200",
        "created": "2018-10-22T12:40:59.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "91057",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/91057",
      "key": "ZAPP-342",
      "fields": {
        "resolutiondate": "2018-12-12T11:57:43.000+0100",
        "created": "2018-10-19T18:16:45.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90924",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90924",
      "key": "ZAPP-340",
      "fields": {
        "resolutiondate": "2018-10-25T14:27:33.000+0200",
        "created": "2018-10-18T11:27:37.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90586",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90586",
      "key": "ZAPP-283",
      "fields": {
        "resolutiondate": "2018-10-25T14:27:24.000+0200",
        "created": "2018-10-15T15:27:01.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90587",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90587",
      "key": "ZAPP-282",
      "fields": {
        "resolutiondate": "2018-11-12T11:03:42.000+0100",
        "created": "2018-10-15T15:29:40.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90579",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90579",
      "key": "ZAPP-281",
      "fields": {
        "resolutiondate": "2018-10-22T12:41:26.000+0200",
        "created": "2018-10-15T14:06:42.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90463",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90463",
      "key": "ZAPP-278",
      "fields": {
        "resolutiondate": "2018-11-21T15:07:09.000+0100",
        "created": "2018-10-11T16:45:25.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90461",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90461",
      "key": "ZAPP-276",
      "fields": {
        "resolutiondate": "2018-11-12T13:12:47.000+0100",
        "created": "2018-10-11T16:40:16.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90458",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90458",
      "key": "ZAPP-274",
      "fields": {
        "resolutiondate": "2018-11-29T14:44:30.000+0100",
        "created": "2018-10-11T16:16:06.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90456",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90456",
      "key": "ZAPP-273",
      "fields": {
        "resolutiondate": "2018-10-19T12:23:24.000+0200",
        "created": "2018-10-11T16:06:42.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90452",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90452",
      "key": "ZAPP-272",
      "fields": {
        "resolutiondate": "2018-10-19T12:23:22.000+0200",
        "created": "2018-10-11T15:55:18.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90077",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90077",
      "key": "ZAPP-271",
      "fields": {
        "resolutiondate": "2018-12-13T11:05:37.000+0100",
        "created": "2018-10-09T09:25:23.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "90000",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/90000",
      "key": "ZAPP-270",
      "fields": {
        "resolutiondate": "2018-10-12T12:08:09.000+0200",
        "created": "2018-10-08T11:56:13.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "89662",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/89662",
      "key": "ZAPP-268",
      "fields": {
        "resolutiondate": "2018-10-12T12:08:06.000+0200",
        "created": "2018-10-02T12:46:17.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "89658",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/89658",
      "key": "ZAPP-267",
      "fields": {
        "resolutiondate": "2018-10-08T09:50:12.000+0200",
        "created": "2018-10-02T12:21:27.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "89420",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/89420",
      "key": "ZAPP-263",
      "fields": {
        "resolutiondate": "2018-10-29T11:00:39.000+0100",
        "created": "2018-09-27T18:25:48.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88977",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/88977",
      "key": "ZAPP-259",
      "fields": {
        "resolutiondate": "2018-10-12T12:07:59.000+0200",
        "created": "2018-09-21T17:49:20.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88976",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/88976",
      "key": "ZAPP-258",
      "fields": {
        "resolutiondate": "2018-10-01T15:40:56.000+0200",
        "created": "2018-09-21T17:46:58.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "88975",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/88975",
      "key": "ZAPP-257",
      "fields": {
        "resolutiondate": "2018-10-05T16:38:44.000+0200",
        "created": "2018-09-21T17:43:14.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78090",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78090",
      "key": "ZAPP-203",
      "fields": {
        "resolutiondate": "2018-06-12T11:36:29.000+0200",
        "created": "2018-05-03T09:28:59.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78009",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78009",
      "key": "ZAPP-202",
      "fields": {
        "resolutiondate": "2018-06-12T11:37:41.000+0200",
        "created": "2018-04-30T15:41:12.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78008",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78008",
      "key": "ZAPP-201",
      "fields": {
        "resolutiondate": "2018-06-12T11:39:25.000+0200",
        "created": "2018-04-30T15:31:16.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78007",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78007",
      "key": "ZAPP-200",
      "fields": {
        "resolutiondate": "2018-06-12T11:37:37.000+0200",
        "created": "2018-04-30T15:29:56.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78006",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78006",
      "key": "ZAPP-199",
      "fields": {
        "resolutiondate": "2018-06-12T11:37:12.000+0200",
        "created": "2018-04-30T15:29:14.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "78005",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/78005",
      "key": "ZAPP-198",
      "fields": {
        "resolutiondate": "2018-06-12T11:36:15.000+0200",
        "created": "2018-04-30T15:27:46.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "77990",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/77990",
      "key": "ZAPP-196",
      "fields": {
        "resolutiondate": "2018-06-12T11:33:10.000+0200",
        "created": "2018-04-30T09:54:12.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "77518",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/77518",
      "key": "ZAPP-195",
      "fields": {
        "resolutiondate": "2018-10-22T12:41:20.000+0200",
        "created": "2018-04-24T11:20:44.000+0200"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "72186",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/72186",
      "key": "ZAPP-182",
      "fields": {
        "resolutiondate": "2018-10-15T14:37:29.000+0200",
        "created": "2018-02-23T17:52:38.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "65529",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/65529",
      "key": "ZAPP-169",
      "fields": {
        "resolutiondate": "2018-10-31T10:55:31.000+0100",
        "created": "2017-11-30T16:17:45.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "65285",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/65285",
      "key": "ZAPP-165",
      "fields": {
        "resolutiondate": "2018-10-02T15:29:14.000+0200",
        "created": "2017-11-29T11:45:57.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "65281",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/65281",
      "key": "ZAPP-163",
      "fields": {
        "resolutiondate": "2018-10-15T14:23:59.000+0200",
        "created": "2017-11-29T11:39:23.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "65278",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/65278",
      "key": "ZAPP-162",
      "fields": {
        "resolutiondate": "2018-10-15T14:26:06.000+0200",
        "created": "2017-11-29T11:36:16.000+0100"
      }
    },
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "64807",
      "self": "http://jira.zuehlke.com/rest/api/2/issue/64807",
      "key": "ZAPP-160",
      "fields": {
        "resolutiondate": "2018-10-25T12:03:36.000+0200",
        "created": "2017-11-24T14:42:47.000+0100"
      }
    }
  ]
};


export const getLeadTimeReportData = () => convertFromJiraToLeadtime(jiraResponse);
export const getWorkflow = () => workflow;
export const getLeadAndCycleTimeData = () => leadAndCycleTimeData;
export const getThroughput = () => throughputData;
export const getCumulativeFlowData = () => cumulativeFlowData;

