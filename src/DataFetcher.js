import {convert} from "./CycleTimeReport/DataAdapter";
// import {mergeIssues} from "./CumulativeFlowReport/DataAdapter/DataAdapter";

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
const issues = {
    "expand": "schema,names",
    "startAt": 0,
    "maxResults": 15,
    "total": 138,
    "issues": [
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "1123412",
            "self": "https://jira.atlassian.com/rest/api/2/issue/1123412",
            "key": "JRASERVER-68895",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2019-02-21T02:27:28.000+0000",
                "created": "2019-02-20T23:52:36.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 3,
                "total": 3,
                "histories": [
                    {
                        "id": "8502688",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vkharisma",
                            "name": "vkharisma",
                            "key": "vkharisma",
                            "emailAddress": "vkharisma at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=32"
                            },
                            "displayName": "Vicky Kharisma",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-02-20T23:52:48.362+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "tbartyzel",
                                "fromString": "Tomasz Bartyzel",
                                "to": "znoorsazali",
                                "toString": "Zulfadli Noor Sazali"
                            }
                        ]
                    },
                    {
                        "id": "8502754",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vkharisma",
                            "name": "vkharisma",
                            "key": "vkharisma",
                            "emailAddress": "vkharisma at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/116b2eca10d9fe8f1e161273b8f444ec?d=mm&s=32"
                            },
                            "displayName": "Vicky Kharisma",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-02-21T00:05:19.853+0000",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "11773",
                                "toString": "Reviewing"
                            }
                        ]
                    },
                    {
                        "id": "8503313",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=znoorsazali",
                            "name": "znoorsazali",
                            "key": "znoorsazali",
                            "emailAddress": "znoorsazali at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4ee68cd309b4b85f9fe26411f9e0086e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4ee68cd309b4b85f9fe26411f9e0086e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4ee68cd309b4b85f9fe26411f9e0086e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4ee68cd309b4b85f9fe26411f9e0086e?d=mm&s=32"
                            },
                            "displayName": "Zulfadli Noor Sazali",
                            "active": true,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2019-02-21T02:27:28.482+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11773",
                                "fromString": "Reviewing",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "1052324",
            "self": "https://jira.atlassian.com/rest/api/2/issue/1052324",
            "key": "JRASERVER-68020",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2018-10-01T09:19:20.000+0000",
                "created": "2018-09-28T23:00:43.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 9,
                "total": 9,
                "histories": [
                    {
                        "id": "8137207",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=emccutcheon",
                            "name": "emccutcheon",
                            "key": "emccutcheon",
                            "emailAddress": "emccutcheon at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=32"
                            },
                            "displayName": "Earl McCutcheon",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-09-28T23:07:39.695+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "h3. Summary\r\nThe Documentation for [Increasing JIRA application memory | https://confluence.atlassian.com/adminjiraserver/increasing-jira-application-memory-938847654.html] does not display steps for jira 7.0 and above\r\n\r\nh3. Currently states:\r\nFor JIRA 5.1 or below:\r\n{code}\r\ntomcat6w //ES//%SERVICENAME%\r\n{code}\r\nFor JIRA 5.2 to JIRA 6.4:\r\n{code}\r\ntomcat7w //ES//%SERVICENAME%\r\n{code}\r\n\r\nh3. Missing:\r\nFor JIRA 7.0 or above:\r\n{code}\r\n tomcat8w //ES//%SERVICENAME%\r\n{code}\r\n\r\n \r\nh3. Notes\r\nAlso For Version specific documentation, a list of commands for older versions is not relevent \r\n\r\n"
                            }
                        ]
                    },
                    {
                        "id": "8137208",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=emccutcheon",
                            "name": "emccutcheon",
                            "key": "emccutcheon",
                            "emailAddress": "emccutcheon at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=32"
                            },
                            "displayName": "Earl McCutcheon",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-09-28T23:08:22.085+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nThe Documentation for [Increasing JIRA application memory | https://confluence.atlassian.com/adminjiraserver/increasing-jira-application-memory-938847654.html] does not display steps for jira 7.0 and above\r\n\r\nh3. Currently states:\r\nFor JIRA 5.1 or below:\r\n{code}\r\ntomcat6w //ES//%SERVICENAME%\r\n{code}\r\nFor JIRA 5.2 to JIRA 6.4:\r\n{code}\r\ntomcat7w //ES//%SERVICENAME%\r\n{code}\r\n\r\nh3. Missing:\r\nFor JIRA 7.0 or above:\r\n{code}\r\n tomcat8w //ES//%SERVICENAME%\r\n{code}\r\n\r\n \r\nh3. Notes\r\nAlso For Version specific documentation, a list of commands for older versions is not relevent \r\n\r\n",
                                "to": null,
                                "toString": "h3. Summary\r\nThe Documentation for [Increasing JIRA application memory | https://confluence.atlassian.com/adminjiraserver/increasing-jira-application-memory-938847654.html] does not display steps for jira 7.0 and above\r\n\r\nh3. Currently states:\r\nFor JIRA 5.1 or below:\r\n{code}\r\ntomcat6w //ES//%SERVICENAME%\r\n{code}\r\nFor JIRA 5.2 to JIRA 6.4:\r\n{code}\r\ntomcat7w //ES//%SERVICENAME%\r\n{code}\r\n\r\nh3. Missing:\r\nFor JIRA 7.0 or above:\r\n{code}\r\n tomcat8w //ES//%SERVICENAME%\r\n{code}\r\n\r\n \r\nh3. Notes\r\nDocument versions for 7.0 - 7.4 reflect the correct information\r\n\r\nAlso For Version specific documentation, a list of commands for older versions is not relevent \r\n\r\n"
                            }
                        ]
                    },
                    {
                        "id": "8137209",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=emccutcheon",
                            "name": "emccutcheon",
                            "key": "emccutcheon",
                            "emailAddress": "emccutcheon at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=32"
                            },
                            "displayName": "Earl McCutcheon",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-09-28T23:08:30.975+0000",
                        "items": [
                            {
                                "field": "security",
                                "fieldtype": "jira",
                                "from": "10751",
                                "fromString": "Reporter and Atlassian Staff",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "8137210",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=emccutcheon",
                            "name": "emccutcheon",
                            "key": "emccutcheon",
                            "emailAddress": "emccutcheon at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=32"
                            },
                            "displayName": "Earl McCutcheon",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-09-28T23:08:38.996+0000",
                        "items": [
                            {
                                "field": "priority",
                                "fieldtype": "jira",
                                "from": "4",
                                "fromString": "Low",
                                "to": "1",
                                "toString": "Highest"
                            }
                        ]
                    },
                    {
                        "id": "8137211",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=emccutcheon",
                            "name": "emccutcheon",
                            "key": "emccutcheon",
                            "emailAddress": "emccutcheon at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/54dc29f76b8bd0d83f46e66fbb2098b6?d=mm&s=32"
                            },
                            "displayName": "Earl McCutcheon",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-09-28T23:09:42.982+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nThe Documentation for [Increasing JIRA application memory | https://confluence.atlassian.com/adminjiraserver/increasing-jira-application-memory-938847654.html] does not display steps for jira 7.0 and above\r\n\r\nh3. Currently states:\r\nFor JIRA 5.1 or below:\r\n{code}\r\ntomcat6w //ES//%SERVICENAME%\r\n{code}\r\nFor JIRA 5.2 to JIRA 6.4:\r\n{code}\r\ntomcat7w //ES//%SERVICENAME%\r\n{code}\r\n\r\nh3. Missing:\r\nFor JIRA 7.0 or above:\r\n{code}\r\n tomcat8w //ES//%SERVICENAME%\r\n{code}\r\n\r\n \r\nh3. Notes\r\nDocument versions for 7.0 - 7.4 reflect the correct information\r\n\r\nAlso For Version specific documentation, a list of commands for older versions is not relevent \r\n\r\n",
                                "to": null,
                                "toString": "h3. Summary\r\nThe Documentation for [Increasing JIRA application memory | https://confluence.atlassian.com/adminjiraserver/increasing-jira-application-memory-938847654.html] does not display steps for jira 7.0 and above\r\n\r\nh3. Currently states:\r\nFor JIRA 5.1 or below:\r\n{code}\r\ntomcat6w //ES//%SERVICENAME%\r\n{code}\r\nFor JIRA 5.2 or above:\r\n{code}\r\ntomcat7w //ES//%SERVICENAME%\r\n{code}\r\n\r\nh3. Missing:\r\nFor JIRA 7.0 or above:\r\n{code}\r\n tomcat8w //ES//%SERVICENAME%\r\n{code}\r\n\r\n \r\nh3. Notes\r\nDocument versions for 7.0 - 7.4 reflect the correct information\r\n\r\nAlso For Version specific documentation, a list of commands for older versions is not relevent \r\n\r\n"
                            }
                        ]
                    },
                    {
                        "id": "8139089",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-09-30T01:03:06.759+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "1"
                            }
                        ]
                    },
                    {
                        "id": "8139702",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-10-01T09:19:20.978+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10030",
                                "fromString": "Needs Triage",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8204144",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T00:45:44.883+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2860652",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2917053",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8574410",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=bugfix-bot",
                            "name": "bugfix-bot",
                            "key": "bugfix-bot",
                            "emailAddress": "bugfix-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=32"
                            },
                            "displayName": "Bugfix Automation Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-03-28T00:25:51.019+0000",
                        "items": [
                            {
                                "field": "Minimum Version",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "7.05"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "970434",
            "self": "https://jira.atlassian.com/rest/api/2/issue/970434",
            "key": "JRASERVER-67274",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2018-05-24T22:40:08.000+0000",
                "created": "2018-05-08T19:23:50.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 9,
                "total": 9,
                "histories": [
                    {
                        "id": "7748244",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=aheinzer",
                            "name": "aheinzer",
                            "key": "aheinzer",
                            "emailAddress": "aheinzer at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=32"
                            },
                            "displayName": "Andrew Heinzer",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-08T19:28:43.708+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "In the Jira Supported platforms documentation: [https://confluence.atlassian.com/adminjiraserver/supported-platforms-938846830.html]\r\n\r\nThis document indicates that when using MySQL to use the latest jdbc driver:\r\n  \r\n{quote}*MySQL:*\r\n * JIRA will not work on:\r\n ** 4 byte characters, regardless of MySQL version\r\n ** MariaDB nor PerconaDB\r\n * We recommend running MySQL in strict mode.\r\n * {color:#d04437}+Supported MySQL databases use the [latest JDBC driver listed here|https://dev.mysql.com/downloads/connector/j/]+.{color} {quote}\r\n \r\n\r\n \r\n However recently, MySQL has started releasing a Connector/J in the 8.0 version (and there is a 6.0 version as well). But to date, Jira has never been tested against those specific JDBC drivers and ultimately there are a number of support cases where users have tried to use this because this doc says to use the latest.\r\n\r\nWe need to amend this document to fall into line with the [Connecting JIRA applications to MySQL - Atlassian Documentation|https://confluence.atlassian.com/adminjiraserver/connecting-jira-applications-to-mysql-938846854.html] which does clearly indicate to use the latest 5.1 version available:\r\n{quote}*To copy the MySQL JDBC driver to your application server:*\r\n # Get the MySQL driver:\r\n\r\n ** If you are *installing JIRA*, download the recommended MySQL driver [JDBC Connector/J 5.1|http://dev.mysql.com/downloads/connector/j]. \r\nYou can download either the {{.tar.gz}} or the{{ .zip}} file by selecting the _'Platform Independent'_ option. Extract the jar for the driver (e.g. {{mysql-connector-java-5.x.x-bin.jar}}) from the archive.{quote}\r\n \r\n\r\nAlso I believe that all the versions of this supported platforms document have this wording and will need to be updated (7.0, 7.1, 7.2, etc)\r\n\r\n \r\n\r\n "
                            }
                        ]
                    },
                    {
                        "id": "7748245",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=aheinzer",
                            "name": "aheinzer",
                            "key": "aheinzer",
                            "emailAddress": "aheinzer at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=32"
                            },
                            "displayName": "Andrew Heinzer",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-08T19:28:51.027+0000",
                        "items": [
                            {
                                "field": "priority",
                                "fieldtype": "jira",
                                "from": "4",
                                "fromString": "Low",
                                "to": "3",
                                "toString": "Medium"
                            }
                        ]
                    },
                    {
                        "id": "7748247",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=aheinzer",
                            "name": "aheinzer",
                            "key": "aheinzer",
                            "emailAddress": "aheinzer at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=32"
                            },
                            "displayName": "Andrew Heinzer",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-08T19:38:02.627+0000",
                        "items": [
                            {
                                "field": "summary",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "Jira supported platforms notes on using MySQL jdbc driver version",
                                "to": null,
                                "toString": "Jira supported platforms should be more explicit on which MySQL jdbc driver version to use"
                            }
                        ]
                    },
                    {
                        "id": "7752164",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ayakovlev%40atlassian.com",
                            "name": "ayakovlev@atlassian.com",
                            "key": "ayakovlev@atlassian.com",
                            "emailAddress": "ayakovlev at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/533a2348ff3d4fbb8ae28210abb73fb1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/533a2348ff3d4fbb8ae28210abb73fb1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/533a2348ff3d4fbb8ae28210abb73fb1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/533a2348ff3d4fbb8ae28210abb73fb1?d=mm&s=32"
                            },
                            "displayName": "Andriy Yakovlev",
                            "active": true,
                            "timeZone": "Europe/Amsterdam"
                        },
                        "created": "2018-05-09T09:39:57.248+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "",
                                "to": null,
                                "toString": "pse-request"
                            }
                        ]
                    },
                    {
                        "id": "7789497",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-05-24T22:40:08.073+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8111449",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T00:43:22.370+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2672117",
                                "fromString": "JIRA Bug Workflow w Kanban v7 - Restricted",
                                "to": "2848693",
                                "toString": "JAC Bug Workflow v2"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "6",
                                "fromString": "Closed",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8123534",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T04:28:53.123+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14432",
                                "fromString": "Minor",
                                "to": "15832",
                                "toString": "Severity 3 - Minor"
                            }
                        ]
                    },
                    {
                        "id": "8216469",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T00:59:40.096+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2848693",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2929248",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8574124",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=bugfix-bot",
                            "name": "bugfix-bot",
                            "key": "bugfix-bot",
                            "emailAddress": "bugfix-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=32"
                            },
                            "displayName": "Bugfix Automation Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-03-28T00:25:09.854+0000",
                        "items": [
                            {
                                "field": "Minimum Version",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "7.09"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "968691",
            "self": "https://jira.atlassian.com/rest/api/2/issue/968691",
            "key": "JRASERVER-67265",//TODO: problem at array index 174-175
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2019-03-13T14:55:02.000+0000",
                "created": "2018-05-07T19:19:27.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 9,
                "total": 9,
                "histories": [
                    {
                        "id": "7746048",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:23:55.140+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-65693",
                                "toString": "This issue supersedes JRASERVER-65693"
                            }
                        ]
                    },
                    {
                        "id": "7746049",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:25:46.009+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "",
                                "to": null,
                                "toString": "aws-cf-doc aws-cf-use"
                            }
                        ]
                    },
                    {
                        "id": "7746050",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:25:54.287+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "aws-cf-doc aws-cf-use",
                                "to": null,
                                "toString": "aws aws-cf-doc aws-cf-use"
                            }
                        ]
                    },
                    {
                        "id": "7746051",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:26:10.867+0000",
                        "items": [
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78610",
                                "toString": "7.9.1"
                            },
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78306",
                                "toString": "7.2.14"
                            }
                        ]
                    },
                    {
                        "id": "7749115",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-09T00:53:33.296+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "1"
                            }
                        ]
                    },
                    {
                        "id": "7961687",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=dunterwurzacher",
                            "name": "dunterwurzacher",
                            "key": "dunterwurzacher",
                            "emailAddress": "dunterwurzacher at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=32"
                            },
                            "displayName": "Denise Unterwurzacher",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-08-06T18:27:03.992+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "tbartyzel",
                                "fromString": "Tomasz Bartyzel",
                                "to": "dunterwurzacher",
                                "toString": "Denise Unterwurzacher"
                            }
                        ]
                    },
                    {
                        "id": "7964361",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=dunterwurzacher",
                            "name": "dunterwurzacher",
                            "key": "dunterwurzacher",
                            "emailAddress": "dunterwurzacher at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=32"
                            },
                            "displayName": "Denise Unterwurzacher",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-08-07T20:01:58.605+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "aws aws-cf-doc aws-cf-use",
                                "to": null,
                                "toString": "aws aws-cf-doc aws-cf-use wpe-enhanced"
                            }
                        ]
                    },
                    {
                        "id": "8381460",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:54:01.774+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2670544",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3056686",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    },
                    {
                        "id": "8529109",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=dunterwurzacher",
                            "name": "dunterwurzacher",
                            "key": "dunterwurzacher",
                            "emailAddress": "dunterwurzacher at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/38217e1464eb0fa01ac8850f536af5fd?d=mm&s=32"
                            },
                            "displayName": "Denise Unterwurzacher",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2019-03-13T14:55:02.731+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "938934",
            "self": "https://jira.atlassian.com/rest/api/2/issue/938934",
            "key": "JRASERVER-66829",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2018-04-11T12:09:00.000+0000",
                "created": "2018-02-22T09:44:43.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 51,
                "total": 51,
                "histories": [
                    {
                        "id": "7640135",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:44:43.863+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-66732",
                                "toString": "This issue is cloned from JRASERVER-66732"
                            }
                        ]
                    },
                    {
                        "id": "7640137",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:45:02.389+0000",
                        "items": [
                            {
                                "field": "reporter",
                                "fieldtype": "jira",
                                "from": "sdegroot@atlassian.com",
                                "fromString": "Steven de Groot",
                                "to": "michin",
                                "toString": "Michelle Chin"
                            }
                        ]
                    },
                    {
                        "id": "7640138",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:45:11.461+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": "77902",
                                "fromString": "7.7.2",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": "78190",
                                "fromString": "7.8.0 Server",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "7640139",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:46:31.792+0000",
                        "items": [
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78190",
                                "toString": "7.8.0 Server"
                            },
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "77902",
                                "toString": "7.7.2"
                            },
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": "77804",
                                "fromString": "7.7.1",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "7640140",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:46:34.566+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "18",
                                "to": null,
                                "toString": ""
                            }
                        ]
                    },
                    {
                        "id": "7640141",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:46:38.622+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "19",
                                "to": null,
                                "toString": ""
                            }
                        ]
                    },
                    {
                        "id": "7640142",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:46:46.258+0000",
                        "items": [
                            {
                                "field": "Occurrence Factor",
                                "fieldtype": "custom",
                                "from": "12833",
                                "fromString": "75%",
                                "to": null,
                                "toString": ""
                            }
                        ]
                    },
                    {
                        "id": "7640143",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:48:42.126+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "308887",
                                "toString": "screenshot-1.png"
                            }
                        ]
                    },
                    {
                        "id": "7640144",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:50:07.382+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\n\r\nDashboard (Startseite) is containing HTML tags in the German translation, it shows as S<u>t</u>artseite instead.\r\n !screenshot-1.png|thumbnail!\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.7.1\r\n # Change the default or profile language to German\r\n\r\nh3. Expected Results\r\n\r\nThe Dashboard should be correctly translated to {{Startseite}}\r\nh3. Workaround\r\n\r\n# Go to JIRA Installation Directory/atlassian-jira/WEB-INF/atlassian-bundled-plugins/jira-core-language-pack-de_DE-7.7.1.v20180122100646.jar\r\n# Edit the .jar far to .rar format and open it with WinRAR\r\n# Go to com/atlassian/jira/web/action/JiraWebActionSupport_de_DE.properties\r\n# Search for S<u>t</u>artseite, menu.dashboard.header=S<u>t</u>artseite\r\n# Remove both <u> and </u> and save it\r\n# Change the file formart back to .jar\r\n# Restart your JIRA instance",
                                "to": null,
                                "toString": "h3. Summary\r\n\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> in the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.7.2 or 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have \r\n\r\nh3. Workaround\r\n\r\n# Go to JIRA Installation Directory/atlassian-jira/WEB-INF/atlassian-bundled-plugins/jira-core-language-pack-de_DE-7.7.1.v20180122100646.jar\r\n# Edit the .jar far to .rar format and open it with WinRAR\r\n# Go to com/atlassian/jira/web/action/JiraWebActionSupport_de_DE.properties\r\n# Search for S<u>t</u>artseite, menu.dashboard.header=S<u>t</u>artseite\r\n# Remove both <u> and </u> and save it\r\n# Change the file formart back to .jar\r\n# Restart your JIRA instance"
                            }
                        ]
                    },
                    {
                        "id": "7640145",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T09:52:47.906+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\n\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> in the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.7.2 or 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have \r\n\r\nh3. Workaround\r\n\r\n# Go to JIRA Installation Directory/atlassian-jira/WEB-INF/atlassian-bundled-plugins/jira-core-language-pack-de_DE-7.7.1.v20180122100646.jar\r\n# Edit the .jar far to .rar format and open it with WinRAR\r\n# Go to com/atlassian/jira/web/action/JiraWebActionSupport_de_DE.properties\r\n# Search for S<u>t</u>artseite, menu.dashboard.header=S<u>t</u>artseite\r\n# Remove both <u> and </u> and save it\r\n# Change the file formart back to .jar\r\n# Restart your JIRA instance",
                                "to": null,
                                "toString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workaround\r\n# Go to {{JIRA Installation Directory/atlassian-jira/WEB-INF/atlassian-bundled-plugins/jira-core-language-pack-es_ES-7.8.0.v20180215144337.jar}}.\r\n# Edit the {{.jar}} file to {{.rar}} format and open it with WinRAR.\r\n# Go to {{com/atlassian/jira/web/action/JiraWebActionSupport_es_ES.properties}}.\r\n# Search for all lines that has <u> and </u>.\r\n# Remove both <u> and </u> and save it.\r\n# Change the file formart back to .jar.\r\n# Restart your JIRA instance."
                            }
                        ]
                    },
                    {
                        "id": "7640147",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=michin",
                            "name": "michin",
                            "key": "michin",
                            "emailAddress": "michin at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/7a3bd27e375fe4d6b285f58be5f46f53?d=mm&s=32"
                            },
                            "displayName": "Michelle Chin",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2018-02-22T10:15:23.099+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workaround\r\n# Go to {{JIRA Installation Directory/atlassian-jira/WEB-INF/atlassian-bundled-plugins/jira-core-language-pack-es_ES-7.8.0.v20180215144337.jar}}.\r\n# Edit the {{.jar}} file to {{.rar}} format and open it with WinRAR.\r\n# Go to {{com/atlassian/jira/web/action/JiraWebActionSupport_es_ES.properties}}.\r\n# Search for all lines that has <u> and </u>.\r\n# Remove both <u> and </u> and save it.\r\n# Change the file formart back to .jar.\r\n# Restart your JIRA instance.",
                                "to": null,
                                "toString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags."
                            }
                        ]
                    },
                    {
                        "id": "7641343",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-22T23:49:39.643+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "1"
                            }
                        ]
                    },
                    {
                        "id": "7642106",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=pdrygas",
                            "name": "pdrygas",
                            "key": "pdrygas",
                            "emailAddress": "pdrygas at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=32"
                            },
                            "displayName": "Pawel Drygas",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-23T10:17:44.512+0000",
                        "items": [
                            {
                                "field": "Occurrence Factor",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": "12831",
                                "toString": "25%"
                            }
                        ]
                    },
                    {
                        "id": "7642107",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=pdrygas",
                            "name": "pdrygas",
                            "key": "pdrygas",
                            "emailAddress": "pdrygas at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=32"
                            },
                            "displayName": "Pawel Drygas",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-23T10:17:57.124+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "warranty",
                                "to": null,
                                "toString": "triaged warranty"
                            }
                        ]
                    },
                    {
                        "id": "7642108",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=pdrygas",
                            "name": "pdrygas",
                            "key": "pdrygas",
                            "emailAddress": "pdrygas at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/560321dd979f6b7e43a3c3c3905353a1?d=mm&s=32"
                            },
                            "displayName": "Pawel Drygas",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-23T10:18:11.263+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "43417",
                                "toString": "System Administration - General Configuration"
                            }
                        ]
                    },
                    {
                        "id": "7643077",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-23T23:34:44.784+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "1",
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "7643661",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-24T23:35:11.768+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "2",
                                "to": null,
                                "toString": "4"
                            }
                        ]
                    },
                    {
                        "id": "7648353",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-28T16:36:02.248+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "353560",
                                "toString": "This issue links to \"Page (Extranet)\""
                            }
                        ]
                    },
                    {
                        "id": "7652703",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-03T23:45:41.523+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "4",
                                "to": null,
                                "toString": "5"
                            }
                        ]
                    },
                    {
                        "id": "7658806",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-08T00:13:17.232+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "5",
                                "to": null,
                                "toString": "6"
                            }
                        ]
                    },
                    {
                        "id": "7659508",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-08T11:54:47.518+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "310609",
                                "toString": "jira-core-language-pack-es_ES-7.7.1.v20180122100646.jar"
                            }
                        ]
                    },
                    {
                        "id": "7659509",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-08T11:57:29.116+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.",
                                "to": null,
                                "toString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workarounds\r\nWhile the issue is officially resolved, you may use the Jira 7.7.1 Language pack in the following way:  \r\n# Download the Jira 7.7.1 Spanish Lang Pack: [^jira-core-language-pack-es_ES-7.7.1.v20180122100646.jar]\r\n# Go to <Jira Installation Folder>/WEB-INF/atlassian-bundled-plugins/ \r\n# locate and remove the file jira-core-language-pack-es_ES-7.#.#.v#############.jar (you may want to back it up somewhere...)\r\n# Place the Jira 7.7.1 Lang pack in the directory.\r\n# Restart Jira.\r\n\r\nThis will fix most of the regressions introduced in the language packs of Jira 7.7.2 and 7.8."
                            }
                        ]
                    },
                    {
                        "id": "7659515",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-08T12:27:39.899+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "310612",
                                "toString": "jira-core-language-pack-es_ES-7.7.0.v20180108103548.jar"
                            }
                        ]
                    },
                    {
                        "id": "7659516",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-08T12:27:48.163+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": "310609",
                                "fromString": "jira-core-language-pack-es_ES-7.7.1.v20180122100646.jar",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "7659517",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-08T12:29:39.134+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workarounds\r\nWhile the issue is officially resolved, you may use the Jira 7.7.1 Language pack in the following way:  \r\n# Download the Jira 7.7.1 Spanish Lang Pack: [^jira-core-language-pack-es_ES-7.7.1.v20180122100646.jar]\r\n# Go to <Jira Installation Folder>/WEB-INF/atlassian-bundled-plugins/ \r\n# locate and remove the file jira-core-language-pack-es_ES-7.#.#.v#############.jar (you may want to back it up somewhere...)\r\n# Place the Jira 7.7.1 Lang pack in the directory.\r\n# Restart Jira.\r\n\r\nThis will fix most of the regressions introduced in the language packs of Jira 7.7.2 and 7.8.",
                                "to": null,
                                "toString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workarounds\r\nWhile the issue is officially resolved, you may use the Jira 7.7.0 Language pack in the following way:  \r\n# Download the Jira 7.7.0 Spanish Lang Pack: [^jira-core-language-pack-es_ES-7.7.0.v20180108103548.jar]\r\n# Go to <Jira Installation Folder>/WEB-INF/atlassian-bundled-plugins/ \r\n# locate and remove the file jira-core-language-pack-es_ES-7.#.#.v#############.jar (you may want to back it up somewhere...)\r\n# Place the Jira 7.7.1 Lang pack in the directory.\r\n# Restart Jira.\r\n\r\n* This will fix most of the regressions introduced in the language packs of Jira 7.7.2 and 7.8. \r\n* This workaround originally suggested the pack from Jira 7.7.1 but it seems it had a few translation errors already in it, so 7.7.0 seems a better fix, even if it is just temporary."
                            }
                        ]
                    },
                    {
                        "id": "7660708",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-09T00:13:29.120+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "6",
                                "to": null,
                                "toString": "8"
                            },
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "1"
                            }
                        ]
                    },
                    {
                        "id": "7662483",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-10T23:39:45.820+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "8",
                                "to": null,
                                "toString": "9"
                            }
                        ]
                    },
                    {
                        "id": "7665077",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-13T06:46:28.859+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "packermann",
                                "toString": "Piotr Ackermann"
                            }
                        ]
                    },
                    {
                        "id": "7665078",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-13T06:46:32.727+0000",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "10005",
                                "toString": "Verified"
                            }
                        ]
                    },
                    {
                        "id": "7665079",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-13T06:46:45.264+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "packermann",
                                "fromString": "Piotr Ackermann",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10005",
                                "fromString": "Verified",
                                "to": "10038",
                                "toString": "Awaiting Development"
                            }
                        ]
                    },
                    {
                        "id": "7665080",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-13T06:46:51.663+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "kkolonko",
                                "toString": "Kamil Kolonko"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10038",
                                "fromString": "Awaiting Development",
                                "to": "3",
                                "toString": "In Progress"
                            }
                        ]
                    },
                    {
                        "id": "7669848",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-14T07:52:22.514+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "kkolonko",
                                "fromString": "Kamil Kolonko",
                                "to": "packermann",
                                "toString": "Piotr Ackermann"
                            }
                        ]
                    },
                    {
                        "id": "7680213",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-20T23:57:04.517+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "9",
                                "to": null,
                                "toString": "10"
                            }
                        ]
                    },
                    {
                        "id": "7685198",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-23T10:20:53.476+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "311517",
                                "toString": "screenshot-2.png"
                            }
                        ]
                    },
                    {
                        "id": "7685199",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-03-23T10:30:12.100+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workarounds\r\nWhile the issue is officially resolved, you may use the Jira 7.7.0 Language pack in the following way:  \r\n# Download the Jira 7.7.0 Spanish Lang Pack: [^jira-core-language-pack-es_ES-7.7.0.v20180108103548.jar]\r\n# Go to <Jira Installation Folder>/WEB-INF/atlassian-bundled-plugins/ \r\n# locate and remove the file jira-core-language-pack-es_ES-7.#.#.v#############.jar (you may want to back it up somewhere...)\r\n# Place the Jira 7.7.1 Lang pack in the directory.\r\n# Restart Jira.\r\n\r\n* This will fix most of the regressions introduced in the language packs of Jira 7.7.2 and 7.8. \r\n* This workaround originally suggested the pack from Jira 7.7.1 but it seems it had a few translation errors already in it, so 7.7.0 seems a better fix, even if it is just temporary.",
                                "to": null,
                                "toString": "h3. Summary\r\nMenu items like Dashboard, Projects, Issues contain HTML tags in the Spanish translation, it has <u> and </u> on the labels.\r\n !screenshot-1.png|thumbnail! \r\n\r\nh3. Steps to Reproduce\r\n # Install a fresh JIRA instance using version 7.8.0.\r\n # Change the default or profile language to Spanish.\r\n\r\nh3. Expected Result\r\nThe menu labels on the Jira top header bar are translated properly and correctly.\r\n\r\nh3. Actual Result\r\nSome menu labels have HTML tags.\r\n\r\nh3. Workarounds\r\nWhile the issue is officially resolved, you may use the Jira 7.7.0 Language pack in the following way:  \r\n# Download the Jira 7.7.0 Spanish Lang Pack: [^jira-core-language-pack-es_ES-7.7.0.v20180108103548.jar]\r\n# Go to <Jira Installation Folder>/WEB-INF/atlassian-bundled-plugins/ \r\n# locate and remove the file jira-core-language-pack-es_ES-7.#.#.v#############.jar (you may want to back it up somewhere...)\r\n# Place the Jira 7.7.0 Lang pack in the directory.\r\n# Restart Jira.\r\n\r\n* This will fix most of the regressions introduced in the language packs of Jira 7.7.2 and 7.8. \r\n* This workaround originally suggested the pack from Jira 7.7.1 but it seems it had a few translation errors already in it, so 7.7.0 seems a better fix, even if it is just temporary."
                            }
                        ]
                    },
                    {
                        "id": "7686588",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-24T23:34:48.250+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "10",
                                "to": null,
                                "toString": "11"
                            }
                        ]
                    },
                    {
                        "id": "7686868",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kderenda%40atlassian.com",
                            "name": "kderenda@atlassian.com",
                            "key": "kderenda@atlassian.com",
                            "emailAddress": "kderenda at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=32"
                            },
                            "displayName": "Katarzyna Derenda",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-25T20:12:28.273+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "358054",
                                "toString": "This issue links to \"Page (Extranet)\""
                            }
                        ]
                    },
                    {
                        "id": "7687329",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kderenda%40atlassian.com",
                            "name": "kderenda@atlassian.com",
                            "key": "kderenda@atlassian.com",
                            "emailAddress": "kderenda at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/b66d3b3f3f12b5480c6fd7243e8d269e?d=mm&s=32"
                            },
                            "displayName": "Katarzyna Derenda",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-26T10:25:00.365+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": "358054",
                                "fromString": "This issue links to \"Page (Extranet)\"",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "7687497",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mkujalowicz",
                            "name": "mkujalowicz",
                            "key": "mkujalowicz",
                            "emailAddress": "mkujalowicz at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=32"
                            },
                            "displayName": "Michal Kujalowicz",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-26T11:49:53.364+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "358301",
                                "toString": "This issue links to \"Page (Extranet)\""
                            }
                        ]
                    },
                    {
                        "id": "7700250",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-05T00:48:49.004+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "11",
                                "to": null,
                                "toString": "12"
                            },
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "1",
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "7707159",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mkujalowicz",
                            "name": "mkujalowicz",
                            "key": "mkujalowicz",
                            "emailAddress": "mkujalowicz at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/8e0d19832c089ce024907bc685adf547?d=mm&s=32"
                            },
                            "displayName": "Michal Kujalowicz",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-10T06:55:55.076+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": "358301",
                                "fromString": "This issue links to \"Page (Extranet)\"",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "7709171",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rchiquete",
                            "name": "rchiquete",
                            "key": "rchiquete",
                            "emailAddress": "rchiquete at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/343ac88dde1c0ca3ab9ba871af6a7808?d=mm&s=32"
                            },
                            "displayName": "Rene Chiquete",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2018-04-11T07:00:54.928+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-66930",
                                "toString": "This issue is duplicated by JRASERVER-66930"
                            }
                        ]
                    },
                    {
                        "id": "7709608",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=packermann",
                            "name": "packermann",
                            "key": "packermann",
                            "emailAddress": "packermann at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=32"
                            },
                            "displayName": "Piotr Ackermann",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2018-04-11T12:08:37.868+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78309",
                                "toString": "7.7.3"
                            },
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78108",
                                "toString": "7.8.1"
                            }
                        ]
                    },
                    {
                        "id": "7709609",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=packermann",
                            "name": "packermann",
                            "key": "packermann",
                            "emailAddress": "packermann at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/efed76a3d2c69955d1594ad2b50d559f?d=mm&s=32"
                            },
                            "displayName": "Piotr Ackermann",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2018-04-11T12:09:00.300+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "3",
                                "fromString": "In Progress",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "7709664",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-11T13:10:19.172+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "78107",
                                "toString": "7.9.0"
                            }
                        ]
                    },
                    {
                        "id": "7722969",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-04-20T14:44:49.015+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "triaged warranty",
                                "to": null,
                                "toString": "raid triaged warranty"
                            }
                        ]
                    },
                    {
                        "id": "7745925",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kkolonko",
                            "name": "kkolonko",
                            "key": "kkolonko",
                            "emailAddress": "kkolonko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/fc04553dbcf14104f6e30510eca5fb9e?d=mm&s=32"
                            },
                            "displayName": "Kamil Kolonko",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-07T13:58:23.613+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "79791",
                                "toString": "7.7.4"
                            },
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": "78309",
                                "fromString": "7.7.3",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "8097470",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T00:31:54.937+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2635854",
                                "fromString": "JIRA Bug Workflow w Kanban v7 - Restricted",
                                "to": "2834820",
                                "toString": "JAC Bug Workflow v2"
                            }
                        ]
                    },
                    {
                        "id": "8123458",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T04:28:40.753+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14432",
                                "fromString": "Minor",
                                "to": "15832",
                                "toString": "Severity 3 - Minor"
                            }
                        ]
                    },
                    {
                        "id": "8217767",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T01:00:33.963+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2834820",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2930536",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8573990",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=bugfix-bot",
                            "name": "bugfix-bot",
                            "key": "bugfix-bot",
                            "emailAddress": "bugfix-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=32"
                            },
                            "displayName": "Bugfix Automation Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-03-28T00:24:43.481+0000",
                        "items": [
                            {
                                "field": "Minimum Version",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "7.07"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "884627",
            "self": "https://jira.atlassian.com/rest/api/2/issue/884627",
            "key": "JRASERVER-66350",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2017-11-20T09:28:16.000+0000",
                "created": "2017-11-16T16:43:46.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 20,
                "total": 20,
                "histories": [
                    {
                        "id": "7416335",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T16:44:43.827+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page."
                            }
                        ]
                    },
                    {
                        "id": "7416336",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T16:44:46.947+0000",
                        "items": [
                            {
                                "field": "priority",
                                "fieldtype": "jira",
                                "from": "4",
                                "fromString": "Low",
                                "to": "2",
                                "toString": "High"
                            }
                        ]
                    },
                    {
                        "id": "7416337",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T16:45:50.412+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "When working with Jira deployed by AMPS it is impossible to see priorities page.",
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. "
                            }
                        ]
                    },
                    {
                        "id": "7416348",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T17:00:32.588+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. ",
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload \r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with */*includes"
                            }
                        ]
                    },
                    {
                        "id": "7416349",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T17:00:46.469+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14430",
                                "fromString": "Critical",
                                "to": "14432",
                                "toString": "Minor"
                            }
                        ]
                    },
                    {
                        "id": "7416350",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T17:00:50.568+0000",
                        "items": [
                            {
                                "field": "priority",
                                "fieldtype": "jira",
                                "from": "2",
                                "fromString": "High",
                                "to": "3",
                                "toString": "Medium"
                            }
                        ]
                    },
                    {
                        "id": "7416351",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-16T17:01:20.792+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload \r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with */*includes",
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload prioritySchemesForPriorityPage.soy file\r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with */*includes"
                            }
                        ]
                    },
                    {
                        "id": "7417990",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mnowakowski",
                            "name": "mnowakowski",
                            "key": "mnowakowski",
                            "emailAddress": "mnowakowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=32"
                            },
                            "displayName": "Maciej Nowakowski",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-17T06:45:00.469+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "mnowakowski",
                                "toString": "Maciej Nowakowski"
                            }
                        ]
                    },
                    {
                        "id": "7418464",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mnowakowski",
                            "name": "mnowakowski",
                            "key": "mnowakowski",
                            "emailAddress": "mnowakowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=32"
                            },
                            "displayName": "Maciej Nowakowski",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-17T11:43:40.857+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload prioritySchemesForPriorityPage.soy file\r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with */*includes",
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload prioritySchemesForPriorityPage.soy file\r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with {*}/{*}includes"
                            }
                        ]
                    },
                    {
                        "id": "7418468",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mnowakowski",
                            "name": "mnowakowski",
                            "key": "mnowakowski",
                            "emailAddress": "mnowakowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=32"
                            },
                            "displayName": "Maciej Nowakowski",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-17T11:45:28.293+0000",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "10005",
                                "toString": "Verified"
                            }
                        ]
                    },
                    {
                        "id": "7418470",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mnowakowski",
                            "name": "mnowakowski",
                            "key": "mnowakowski",
                            "emailAddress": "mnowakowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=32"
                            },
                            "displayName": "Maciej Nowakowski",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-17T11:45:49.570+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "mnowakowski",
                                "fromString": "Maciej Nowakowski",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10005",
                                "fromString": "Verified",
                                "to": "10038",
                                "toString": "Awaiting Development"
                            }
                        ]
                    },
                    {
                        "id": "7418471",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mnowakowski",
                            "name": "mnowakowski",
                            "key": "mnowakowski",
                            "emailAddress": "mnowakowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f12ec494f4a783a42dcd886dae706525?d=mm&s=32"
                            },
                            "displayName": "Maciej Nowakowski",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-17T11:46:01.171+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "mnowakowski",
                                "toString": "Maciej Nowakowski"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10038",
                                "fromString": "Awaiting Development",
                                "to": "3",
                                "toString": "In Progress"
                            }
                        ]
                    },
                    {
                        "id": "7420412",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-20T09:27:41.579+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload prioritySchemesForPriorityPage.soy file\r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with {*}/{*}includes",
                                "to": null,
                                "toString": "When working with Jira deployed by AMPS it is impossible to see priorities page.\r\n\r\nThis affects only apps developers.\r\n{code:java}\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\njava.lang.IllegalArgumentException: The resource path [includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy] is not valid\r\n\tat org.apache.catalina.webresources.StandardRoot.validate(StandardRoot.java:237) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:199) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.webresources.StandardRoot.getResource(StandardRoot.java:193) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContext.getResource(ApplicationContext.java:533) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationContextFacade.getResource(ApplicationContextFacade.java:198) [catalina.jar:8.0.9]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.getSoyResourceURL(WebResourceTemplateSetFactory.java:133) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addSoyTemplateResources(WebResourceTemplateSetFactory.java:110) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:98) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:103) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.addTemplatesForTree(WebResourceTemplateSetFactory.java:95) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$TemplateSetBuilder.access$200(WebResourceTemplateSetFactory.java:78) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.findRequiredTemplates(WebResourceTemplateSetFactory.java:72) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.access$000(WebResourceTemplateSetFactory.java:33) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:50) [?:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory$1.load(WebResourceTemplateSetFactory.java:47) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.WebResourceTemplateSetFactory.get(WebResourceTemplateSetFactory.java:60) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.strainTofu(DefaultSoyManager.java:196) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.access$100(DefaultSoyManager.java:32) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:65) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager$1.load(DefaultSoyManager.java:62) [?:?]\r\n\tat com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3527) [LocalCache$LoadingValueReference.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2319) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2282) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2197) [LocalCache$Segment.class:?]\r\n\tat com.google.common.cache.LocalCache.get(LocalCache.java:3937) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3941) [LocalCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4824) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.google.common.cache.LocalCache$LocalLoadingCache.getUnchecked(LocalCache.java:4830) [LocalCache$LocalLoadingCache.class:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyManager.render(DefaultSoyManager.java:118) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:45) [?:?]\r\n\tat com.atlassian.soy.impl.DefaultSoyTemplateRenderer.render(DefaultSoyTemplateRenderer.java:39) [?:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.render(JiraSoyViewDispatcher.java:48) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraSoyViewDispatcher.dispatch(JiraSoyViewDispatcher.java:38) [JiraSoyViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchViaSoyView(JiraWebworkViewDispatcher.java:120) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkViewDispatcher.dispatchView(JiraWebworkViewDispatcher.java:54) [JiraWebworkViewDispatcher.class:?]\r\n\tat com.atlassian.jira.web.dispatcher.JiraWebworkActionDispatcher.service(JiraWebworkActionDispatcher.java:178) [JiraWebworkActionDispatcher.class:?]\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:725) [servlet-api.jar:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:291) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) [tomcat-websocket.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.lambda$doFilter$0(JiraLastFilter.java:39) [JiraLastFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLastFilter.doFilter(JiraLastFilter.java:36) [JiraLastFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.HeaderSanitisingFilter.doFilter(HeaderSanitisingFilter.java:37) [HeaderSanitisingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.onboarding.postsetup.ui.PostSetupAnnouncementsFilter.doFilter(PostSetupAnnouncementsFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.tzdetect.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:77) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.jira.baseurl.IncludeResourcesFilter.doFilter(IncludeResourcesFilter.java:38) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.applinks.core.rest.context.ContextFilter.doFilter(ContextFilter.java:24) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.mywork.client.filter.ServingRequestsFilter.doFilter(ServingRequestsFilter.java:37) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.UniversalAnalyticsFilter.doFilter(UniversalAnalyticsFilter.java:92) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFixupFilter.doFilter(PrettyUrlsSiteMeshFixupFilter.java:32) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsDispatcherFilter.doFilter(PrettyUrlsDispatcherFilter.java:55) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsSiteMeshFilter.doFilter(PrettyUrlsSiteMeshFilter.java:79) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsMatcherFilter.doFilter(PrettyUrlsMatcherFilter.java:51) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.botkiller.BotKillerFilter.doFilter(BotKillerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.labs.httpservice.resource.ResourceFilter.doFilter(ResourceFilter.java:59) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.executeRequest(AccessLogFilter.java:92) [AccessLogFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.accesslog.AccessLogFilter.doFilter(AccessLogFilter.java:78) [AccessLogFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.xsrf.XsrfTokenAdditionRequestFilter.doFilter(XsrfTokenAdditionRequestFilter.java:46) [XsrfTokenAdditionRequestFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.obtainContent(SiteMeshFilter.java:181) [SiteMeshFilter.class:?]\r\n\tat com.opensymphony.sitemesh.webapp.SiteMeshFilter.doFilter(SiteMeshFilter.java:85) [SiteMeshFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.SitemeshPageFilter.doFilter(SitemeshPageFilter.java:112) [SitemeshPageFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.pagebuilder.PageBuilderFilter.doFilter(PageBuilderFilter.java:81) [PageBuilderFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.CommittedResponseHtmlErrorRecoveryFilter.doFilter(CommittedResponseHtmlErrorRecoveryFilter.java:55) [CommittedResponseHtmlErrorRecoveryFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.mau.AbstractMauRequestTaggingFilter.doFilter(AbstractMauRequestTaggingFilter.java:40) [AbstractMauRequestTaggingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MauEventFilter.doFilter(MauEventFilter.java:49) [MauEventFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.lambda$doFilter$0(JiraSecurityFilter.java:66) [JiraSecurityFilter.class:?]\r\n\tat com.atlassian.seraph.filter.SecurityFilter.doFilter(SecurityFilter.java:242) [SecurityFilter.class:?]\r\n\tat com.atlassian.jira.security.JiraSecurityFilter.doFilter(JiraSecurityFilter.java:64) [JiraSecurityFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.security.auth.trustedapps.filter.TrustedApplicationsFilter.doFilter(TrustedApplicationsFilter.java:103) [TrustedApplicationsFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.seraph.filter.BaseLoginFilter.doFilter(BaseLoginFilter.java:148) [BaseLoginFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraLoginFilter.doFilter(JiraLoginFilter.java:77) [JiraLoginFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.oauth.serviceprovider.internal.servlet.OAuthFilter.doFilter(OAuthFilter.java:67) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.util.profiling.filters.ProfilingFilter.doFilter(ProfilingFilter.java:99) [ProfilingFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.JIRAProfilingFilter.doFilter(JIRAProfilingFilter.java:16) [JIRAProfilingFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.johnson.JiraJohnsonFilter.doFilter(JiraJohnsonFilter.java:73) [JiraJohnsonFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.handleRewrite(RuleChain.java:176) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.RuleChain.doRules(RuleChain.java:145) [RuleChain.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriter.processRequest(UrlRewriter.java:92) [UrlRewriter.class:4.0.3]\r\n\tat org.tuckey.web.filters.urlrewrite.UrlRewriteFilter.doFilter(UrlRewriteFilter.java:394) [UrlRewriteFilter.class:4.0.3]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.CorrelationIdPopulatorFilter.doFilter(CorrelationIdPopulatorFilter.java:30) [CorrelationIdPopulatorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:39) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.analytics.client.filter.JiraAnalyticsFilter.doFilter(JiraAnalyticsFilter.java:42) [?:?]\r\n\tat com.atlassian.analytics.client.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.request.RedirectInterceptingFilter.doFilter(RedirectInterceptingFilter.java:21) [?:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.web.servlet.plugin.LocationCleanerFilter.doFilter(LocationCleanerFilter.java:36) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter$1.doFilter(DelegatingPluginFilter.java:58) [DelegatingPluginFilter$1.class:?]\r\n\tat com.atlassian.prettyurls.filter.PrettyUrlsCombinedMatchDispatcherFilter.doFilter(PrettyUrlsCombinedMatchDispatcherFilter.java:56) [?:?]\r\n\tat com.atlassian.plugin.servlet.filter.DelegatingPluginFilter.doFilter(DelegatingPluginFilter.java:64) [DelegatingPluginFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.IteratingFilterChain.doFilter(IteratingFilterChain.java:37) [IteratingFilterChain.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:70) [ServletFilterModuleContainerFilter.class:?]\r\n\tat com.atlassian.plugin.servlet.filter.ServletFilterModuleContainerFilter.doFilter(ServletFilterModuleContainerFilter.java:58) [ServletFilterModuleContainerFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.cache.AbstractCachingFilter.doFilter(AbstractCachingFilter.java:31) [AbstractCachingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.core.filters.encoding.AbstractEncodingFilter.doFilter(AbstractEncodingFilter.java:39) [AbstractEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat com.atlassian.jira.web.filters.PathMatchingEncodingFilter.doFilter(PathMatchingEncodingFilter.java:41) [PathMatchingEncodingFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.MultipartBoundaryCheckFilter.doFilter(MultipartBoundaryCheckFilter.java:36) [MultipartBoundaryCheckFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.servermetrics.MetricsCollectorFilter.doFilter(MetricsCollectorFilter.java:25) [MetricsCollectorFilter.class:?]\r\n\tat com.atlassian.core.filters.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:32) [AbstractHttpFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.jira.web.filters.steps.ChainedFilterStepRunner.doFilter(ChainedFilterStepRunner.java:74) [ChainedFilterStepRunner.class:?]\r\n\tat com.atlassian.jira.web.filters.JiraFirstFilter.doFilter(JiraFirstFilter.java:57) [JiraFirstFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilterInternal(GzipFilter.java:115) [GzipFilter.class:?]\r\n\tat com.atlassian.gzipfilter.GzipFilter.doFilter(GzipFilter.java:92) [GzipFilter.class:?]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:239) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:136) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:610) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) [catalina.jar:8.0.9]\r\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:526) [catalina.jar:8.0.9]\r\n\tat org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1078) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:655) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.coyote.http11.Http11NioProtocol$Http11ConnectionHandler.process(Http11NioProtocol.java:222) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1566) [tomcat-coyote.jar:8.0.9]\r\n\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1523) [tomcat-coyote.jar:8.0.9]\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) [?:1.8.0_152]\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) [?:1.8.0_152]\r\n\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) [tomcat-util.jar:8.0.9]\r\n\tat java.lang.Thread.run(Thread.java:748) [?:1.8.0_152]{code}\r\nThis makes testing compatibility of plugins for  7.6.0 impossible at the moment. \r\n\r\nThis is happening because in dev mode Jira is trying to reload prioritySchemesForPriorityPage.soy file\r\n{code:java}\r\n<resource type=\"download\" name=\"proritiesPage.soy.js\" location=\"includes/jira/admin/priority-schemes-for-priority/prioritySchemesForPriorityPage.soy\">\r\n\r\n{code}\r\nlocation should start with */*includes\r\n\r\n*SOLUTION*\r\n\r\nThis is happening because amps is using Tomcat version 8.0 and Jira is shipped with Tomcat 8.5.\r\n\r\nUpgrade to latest Altassian SDK (6.3.4+) and latest AMPS 6.3.6+. "
                            }
                        ]
                    },
                    {
                        "id": "7420413",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ajakubowski",
                            "name": "ajakubowski",
                            "key": "ajakubowski",
                            "emailAddress": "ajakubowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4e89bfb81391a01bf34f9466fb3b467a?d=mm&s=32"
                            },
                            "displayName": "Adam Jakubowski",
                            "active": false,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2017-11-20T09:28:16.053+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "75171",
                                "toString": "7.6.0 Server"
                            },
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "3",
                                "fromString": "In Progress",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "7578883",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:34:46.033+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2478893",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - Restricted",
                                "to": "2590223",
                                "toString": "JIRA Bug Workflow w Kanban v7 - Restricted"
                            }
                        ]
                    },
                    {
                        "id": "8102832",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T00:35:57.217+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2590223",
                                "fromString": "JIRA Bug Workflow w Kanban v7 - Restricted",
                                "to": "2840177",
                                "toString": "JAC Bug Workflow v2"
                            }
                        ]
                    },
                    {
                        "id": "8122749",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T04:26:44.059+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14432",
                                "fromString": "Minor",
                                "to": "15832",
                                "toString": "Severity 3 - Minor"
                            }
                        ]
                    },
                    {
                        "id": "8203804",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T00:45:19.350+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2840177",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2916718",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8483434",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mlech",
                            "name": "mlech",
                            "key": "mlech",
                            "emailAddress": "mlech at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/bead242a467d0d7090b8badcb662a07b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/bead242a467d0d7090b8badcb662a07b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/bead242a467d0d7090b8badcb662a07b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/bead242a467d0d7090b8badcb662a07b?d=mm&s=32"
                            },
                            "displayName": "Milena Lech",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-02-05T15:00:40.070+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": "46079",
                                "fromString": "Plugin Manager",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "10870",
                                "toString": "UPM"
                            }
                        ]
                    },
                    {
                        "id": "8573740",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=bugfix-bot",
                            "name": "bugfix-bot",
                            "key": "bugfix-bot",
                            "emailAddress": "bugfix-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4c81b5edca25de74f3df5ecc6468a7c0?d=mm&s=32"
                            },
                            "displayName": "Bugfix Automation Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-03-28T00:24:20.907+0000",
                        "items": [
                            {
                                "field": "Minimum Version",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "7.06"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "846415",
            "self": "https://jira.atlassian.com/rest/api/2/issue/846415",
            "key": "JRASERVER-65997",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2017-09-21T03:58:31.000+0000",
                "created": "2017-09-19T11:12:54.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 6,
                "total": 6,
                "histories": [
                    {
                        "id": "7349317",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-09-21T03:58:31.292+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "7573386",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:30:25.586+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2438461",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2584726",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "7601372",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:27:57.423+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2584726",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2607431",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "6",
                                "fromString": "Closed",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8380334",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:53:05.575+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2607431",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3055560",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    },
                    {
                        "id": "8456284",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2019-01-15T06:55:19.262+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": "45491",
                                "fromString": "JIRA 7.3 EAP",
                                "to": null,
                                "toString": null
                            }
                        ]
                    },
                    {
                        "id": "8456294",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2019-01-15T06:55:25.968+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": "46794",
                                "fromString": "JIRA 7.4 EAP",
                                "to": null,
                                "toString": null
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "823256",
            "self": "https://jira.atlassian.com/rest/api/2/issue/823256",
            "key": "JRASERVER-65693",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2018-05-07T19:27:47.000+0000",
                "created": "2017-07-26T10:11:22.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 19,
                "total": 19,
                "histories": [
                    {
                        "id": "7275525",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-07-26T10:11:56.949+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-65510",
                                "toString": "This issue is incorporated by JRASERVER-65510"
                            }
                        ]
                    },
                    {
                        "id": "7275532",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-07-26T10:26:08.910+0000",
                        "items": [
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "65334",
                                "toString": "7.4.0 Server"
                            }
                        ]
                    },
                    {
                        "id": "7275533",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-07-26T10:26:16.627+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "10120",
                                "toString": "Documentation - All"
                            }
                        ]
                    },
                    {
                        "id": "7281348",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-07-31T20:52:25.165+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "309863",
                                "toString": "This issue links to \"Page (Extranet)\""
                            }
                        ]
                    },
                    {
                        "id": "7283590",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-08-01T08:44:38.630+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way.\r\n\r\nApart from that, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clearly define the Support Scope",
                                "to": null,
                                "toString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way.\r\n\r\nFurthermore, the Upgrade method by updating the Stack doesn't seem to work as it's not possible to choose a Version as documented - refer to .\r\n\r\nApart from that, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clearly define the Support Scope"
                            }
                        ]
                    },
                    {
                        "id": "7283591",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-08-01T08:45:37.489+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way.\r\n\r\nFurthermore, the Upgrade method by updating the Stack doesn't seem to work as it's not possible to choose a Version as documented - refer to .\r\n\r\nApart from that, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clearly define the Support Scope",
                                "to": null,
                                "toString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way.\r\n\r\nFurthermore, the Upgrade method by updating the Stack doesn't seem to work as it's not possible to choose a Version as documented - refer to JRASERVER-65510.\r\n\r\nApart from that, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clearly define the Support Scope"
                            }
                        ]
                    },
                    {
                        "id": "7283550",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-08-01T08:47:56.953+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-64895",
                                "toString": "This issue is incorporated by JRASERVER-64895"
                            }
                        ]
                    },
                    {
                        "id": "7283558",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2017-08-01T08:57:01.812+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way.\r\n\r\nFurthermore, the Upgrade method by updating the Stack doesn't seem to work as it's not possible to choose a Version as documented - refer to JRASERVER-65510.\r\n\r\nApart from that, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clearly define the Support Scope",
                                "to": null,
                                "toString": "h3. +Summary+\r\n\r\n[Running JIRA Data Center in AWS|https://confluence.atlassian.com/adminjiraserver074/running-jira-data-center-in-aws-881683285.html] currently doesn't contain steps to back up and restore JIRA instances in AWS. It's not clear what need to be backed up and how to restore/migrate them in the right way, using the CloudFormation template.\r\n\r\nFurthermore, the Upgrade method by updating the Stack doesn't seem to work as it's not possible to choose a Version as documented - refer to JRASERVER-64895.\r\n\r\nLast, but not least, it's not clear whether the entire process is supported, and by which team (Atlassian or AWS).\r\nh3. +Suggestion+\r\n # Add more details on Backup and Restore\r\n # Clarify the Upgrade method\r\n # Clearly define the Support Scope"
                            }
                        ]
                    },
                    {
                        "id": "7343318",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rreidl",
                            "name": "rreidl",
                            "key": "rreidl",
                            "emailAddress": "rreidl at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=32"
                            },
                            "displayName": "Robin Reidl",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-09-17T22:58:07.210+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "",
                                "to": null,
                                "toString": "aws datacenter"
                            }
                        ]
                    },
                    {
                        "id": "7343319",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rreidl",
                            "name": "rreidl",
                            "key": "rreidl",
                            "emailAddress": "rreidl at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=32"
                            },
                            "displayName": "Robin Reidl",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-09-17T22:58:13.559+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "wthompson",
                                "toString": "Warren Thompson"
                            }
                        ]
                    },
                    {
                        "id": "7488535",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-01-18T11:37:03.174+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "7577104",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:33:42.508+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2413307",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2588444",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7612343",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:54:15.054+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2588444",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2618404",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "11772",
                                "toString": "Gathering Interest"
                            }
                        ]
                    },
                    {
                        "id": "7669700",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-03-14T04:11:09.053+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "aws datacenter",
                                "to": null,
                                "toString": "aws aws-cf-doc datacenter"
                            }
                        ]
                    },
                    {
                        "id": "7746047",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:23:55.128+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-67265",
                                "toString": "This issue is superseded by JRASERVER-67265"
                            }
                        ]
                    },
                    {
                        "id": "7746052",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:27:47.155+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRASERVER-65290",
                                "toString": "This issue is superseded by JRASERVER-65290"
                            }
                        ]
                    },
                    {
                        "id": "7746054",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-07T19:27:47.164+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "7754260",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2018-05-10T20:33:46.140+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JSWSERVER-16580",
                                "toString": "This issue relates to JSWSERVER-16580"
                            }
                        ]
                    },
                    {
                        "id": "8382990",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:55:21.031+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2618404",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3058216",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "800042",
            "self": "https://jira.atlassian.com/rest/api/2/issue/800042",
            "key": "JRASERVER-65262",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2019-02-15T17:30:43.000+0000", //TODO: Problem date
                "created": "2017-05-09T10:05:29.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 11,
                "total": 11,
                "histories": [
                    {
                        "id": "6893906",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:02:20.216+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2015900",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2091254",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "6931215",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:28:35.836+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2091254",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2128450",
                                "toString": "JIRA Bug Workflow w Kanban v6"
                            }
                        ]
                    },
                    {
                        "id": "7187103",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-06-22T06:33:47.420+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2128450",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2360945",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7495520",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-01-21T23:57:21.459+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "1"
                            }
                        ]
                    },
                    {
                        "id": "7582357",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:37:14.583+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2360945",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2593697",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7613765",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:57:47.185+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2593697",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2619826",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "11772",
                                "toString": "Gathering Interest"
                            }
                        ]
                    },
                    {
                        "id": "7998683",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-08-20T00:38:02.298+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "1",
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "8388099",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:59:39.922+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2619826",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3063325",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    },
                    {
                        "id": "8442359",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-01-10T00:26:29.594+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "2",
                                "to": null,
                                "toString": "4"
                            }
                        ]
                    },
                    {
                        "id": "8497306",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tthompson3%40atlassian.com",
                            "name": "tthompson3@atlassian.com",
                            "key": "tthompson3@atlassian.com",
                            "emailAddress": "tthompson3 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ee81c922ceb4bc9cdd8d23c97c542b57?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ee81c922ceb4bc9cdd8d23c97c542b57?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ee81c922ceb4bc9cdd8d23c97c542b57?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ee81c922ceb4bc9cdd8d23c97c542b57?d=mm&s=32"
                            },
                            "displayName": "Trevor Thompson",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-02-15T17:30:43.743+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8497308",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=lsilva",
                            "name": "lsilva",
                            "key": "lsilva",
                            "emailAddress": "lsilva at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f029a388954afd2fb1bdded5cd2d3470?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f029a388954afd2fb1bdded5cd2d3470?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f029a388954afd2fb1bdded5cd2d3470?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f029a388954afd2fb1bdded5cd2d3470?d=mm&s=32"
                            },
                            "displayName": "Luiz Silva",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2019-02-15T17:49:30.940+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "412015",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "670902",
            "self": "https://jira.atlassian.com/rest/api/2/issue/670902",
            "key": "JRASERVER-64363",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2017-04-06T23:17:24.000+0000",
                "created": "2017-03-09T20:13:37.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 13,
                "total": 13,
                "histories": [
                    {
                        "id": "4545638",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=aheinzer",
                            "name": "aheinzer",
                            "key": "aheinzer",
                            "emailAddress": "aheinzer at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=32"
                            },
                            "displayName": "Andrew Heinzer",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-03-09T20:17:50.549+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "Current JIRA documentation for system settings:\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer070/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer071/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer073/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n \r\n\r\nIndicate that the default setting for Use GZIP compress is 'OFF'.  In reality, the default value is 'ON'."
                            }
                        ]
                    },
                    {
                        "id": "4545639",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=aheinzer",
                            "name": "aheinzer",
                            "key": "aheinzer",
                            "emailAddress": "aheinzer at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/f71ce9ce631bf07cd6257f92813b506f?d=mm&s=32"
                            },
                            "displayName": "Andrew Heinzer",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-03-09T20:18:14.984+0000",
                        "items": [
                            {
                                "field": "summary",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "JIRA system settings lists incorrect default value for GZIP compression",
                                "to": null,
                                "toString": "JIRA application options docs lists incorrect default value for GZIP compression"
                            }
                        ]
                    },
                    {
                        "id": "4545426",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2017-03-09T22:18:20.389+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "alui",
                                "fromString": "Andrew Lui",
                                "to": "rreidl",
                                "toString": "Robin Reidl"
                            }
                        ]
                    },
                    {
                        "id": "4545427",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2017-03-09T22:18:27.320+0000",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "10005",
                                "toString": "Verified"
                            }
                        ]
                    },
                    {
                        "id": "4569000",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rreidl",
                            "name": "rreidl",
                            "key": "rreidl",
                            "emailAddress": "rreidl at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=32"
                            },
                            "displayName": "Robin Reidl",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-03-20T23:34:37.302+0000",
                        "items": [
                            {
                                "field": "Story Points",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "4"
                            }
                        ]
                    },
                    {
                        "id": "4570779",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rreidl",
                            "name": "rreidl",
                            "key": "rreidl",
                            "emailAddress": "rreidl at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/77b3b86f87dab683486818d6b369823a?d=mm&s=32"
                            },
                            "displayName": "Robin Reidl",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-03-21T21:33:21.927+0000",
                        "items": [
                            {
                                "field": "Story Points",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "4",
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "6607027",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:35:11.107+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-64363",
                                "toString": "This issue relates to JRACLOUD-64363"
                            }
                        ]
                    },
                    {
                        "id": "6607051",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:35:13.036+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "Current JIRA documentation for system settings:\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer070/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer071/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer073/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n \r\n\r\nIndicate that the default setting for Use GZIP compress is 'OFF'.  In reality, the default value is 'ON'.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This bug report is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding bug report|http://jira.atlassian.com/browse/JRACLOUD-64363].\n  {panel}\n\nCurrent JIRA documentation for system settings:\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer070/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer071/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n[https://confluence.atlassian.com/display/AdminJIRAServer073/Configuring+JIRA+application+options|https://confluence.atlassian.com/display/AdminJIRAServer072/Configuring+JIRA+application+options]\r\n\r\n \r\n\r\nIndicate that the default setting for Use GZIP compress is 'OFF'.  In reality, the default value is 'ON'."
                            }
                        ]
                    },
                    {
                        "id": "6751337",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-06T23:17:24.368+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10005",
                                "fromString": "Verified",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "7571929",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:28:33.962+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1767068",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - Restricted",
                                "to": "2583268",
                                "toString": "JIRA Bug Workflow w Kanban v7 - Restricted"
                            }
                        ]
                    },
                    {
                        "id": "8096671",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T00:31:07.650+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2583268",
                                "fromString": "JIRA Bug Workflow w Kanban v7 - Restricted",
                                "to": "2834021",
                                "toString": "JAC Bug Workflow v2"
                            }
                        ]
                    },
                    {
                        "id": "8124144",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T04:36:38.136+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14432",
                                "fromString": "Minor",
                                "to": "15832",
                                "toString": "Severity 3 - Minor"
                            }
                        ]
                    },
                    {
                        "id": "8211416",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T00:54:13.152+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2834021",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2924260",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "662755",
            "self": "https://jira.atlassian.com/rest/api/2/issue/662755",
            "key": "JRASERVER-63942",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2018-10-18T09:16:59.000+0000",
                "created": "2017-01-31T21:14:17.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 19,
                "total": 19,
                "histories": [
                    {
                        "id": "4305154",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kgrier",
                            "name": "kgrier",
                            "key": "kgrier",
                            "emailAddress": "kgrier at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=32"
                            },
                            "displayName": "Kathryn Grier",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-01-31T21:17:28.404+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "255816",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    },
                    {
                        "id": "4315917",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kgrier",
                            "name": "kgrier",
                            "key": "kgrier",
                            "emailAddress": "kgrier at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=32"
                            },
                            "displayName": "Kathryn Grier",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-02-07T21:03:18.711+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "258491",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    },
                    {
                        "id": "6605987",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:33:30.070+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-63942",
                                "toString": "This issue relates to JRACLOUD-63942"
                            }
                        ]
                    },
                    {
                        "id": "6606005",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:33:31.788+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\n  {panel}\n\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage."
                            }
                        ]
                    },
                    {
                        "id": "6880758",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T00:56:55.602+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1642704",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2078107",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "6920503",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:24:37.381+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2078107",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2117842",
                                "toString": "JIRA Bug Workflow w Kanban v6"
                            }
                        ]
                    },
                    {
                        "id": "7176335",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-06-22T06:29:45.700+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2117842",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2350178",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7227920",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kgrier",
                            "name": "kgrier",
                            "key": "kgrier",
                            "emailAddress": "kgrier at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=32"
                            },
                            "displayName": "Kathryn Grier",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-06-22T18:51:56.316+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "300806",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    },
                    {
                        "id": "7539682",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T13:49:53.693+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2350178",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2550919",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7596188",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:14:13.035+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2550919",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2602146",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "11772",
                                "toString": "Gathering Interest"
                            }
                        ]
                    },
                    {
                        "id": "7627135",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=baldin1697836153",
                            "name": "baldin1697836153",
                            "key": "baldin1697836153",
                            "emailAddress": "baldin at adobe dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=32"
                            },
                            "displayName": "Dominic Baldin",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-13T22:27:18.379+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "350499",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    },
                    {
                        "id": "8254203",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jkurcek",
                            "name": "jkurcek",
                            "key": "jkurcek",
                            "emailAddress": "jkurcek at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=32"
                            },
                            "displayName": "Jakub Kurcek",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-18T09:16:59.628+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "79901",
                                "toString": "7.11.0"
                            },
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8256414",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jkurcek",
                            "name": "jkurcek",
                            "key": "jkurcek",
                            "emailAddress": "jkurcek at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=32"
                            },
                            "displayName": "Jakub Kurcek",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-19T11:04:24.934+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\n  {panel}\n\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\r\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\r\n  {panel}\r\n\r\n{panel:title=Atlassian Update – 19 October 2018|borderStyle=solid|borderColor=#ebf2f9|titleBGColor=#ebf2f9|bgColor=#ffffff}\r\nHi all,\r\n\r\nThanks for providing your thoughts and votes on this suggestion. I know it's been a while since we last commented on this suggestion and we are sorry to have kept you so long without a clear answer.\r\n\r\n\r\n\r\nRegards,\r\nJakub Kurcek\r\nSenior Product Manager, Jira Server\r\n{panel}\r\n\r\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage."
                            }
                        ]
                    },
                    {
                        "id": "8256415",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jkurcek",
                            "name": "jkurcek",
                            "key": "jkurcek",
                            "emailAddress": "jkurcek at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=32"
                            },
                            "displayName": "Jakub Kurcek",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-19T11:08:48.895+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "328252",
                                "toString": "projects_columns2.png"
                            }
                        ]
                    },
                    {
                        "id": "8256416",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jkurcek",
                            "name": "jkurcek",
                            "key": "jkurcek",
                            "emailAddress": "jkurcek at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=32"
                            },
                            "displayName": "Jakub Kurcek",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-19T11:08:53.248+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "{panel:bgColor=#e7f4fa}\r\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\r\n  {panel}\r\n\r\n{panel:title=Atlassian Update – 19 October 2018|borderStyle=solid|borderColor=#ebf2f9|titleBGColor=#ebf2f9|bgColor=#ffffff}\r\nHi all,\r\n\r\nThanks for providing your thoughts and votes on this suggestion. I know it's been a while since we last commented on this suggestion and we are sorry to have kept you so long without a clear answer.\r\n\r\n\r\n\r\nRegards,\r\nJakub Kurcek\r\nSenior Product Manager, Jira Server\r\n{panel}\r\n\r\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\r\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\r\n  {panel}\r\n\r\n{panel:title=Atlassian Update – 19 October 2018|borderStyle=solid|borderColor=#ebf2f9|titleBGColor=#ebf2f9|bgColor=#ffffff}\r\nHi all,\r\n\r\nI'm happy to announce that in Jira 7.11 we’ve added two columns to the Projects page to help you determine the importance of your projects, so you can decide if they’re worth keeping. Issues and Last issue update will show you the number of issues in a project, and the date of the last update on an issue —just to give you an idea of what’s going on with the projects in your Jira.\r\n\r\n\r\nRegards,\r\nJakub Kurcek\r\nSenior Product Manager, Jira Server\r\n{panel}\r\n\r\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage."
                            }
                        ]
                    },
                    {
                        "id": "8256417",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jkurcek",
                            "name": "jkurcek",
                            "key": "jkurcek",
                            "emailAddress": "jkurcek at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/e54063323294eb908cebdeb0a6f156c1?d=mm&s=32"
                            },
                            "displayName": "Jakub Kurcek",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-19T11:13:47.112+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "{panel:bgColor=#e7f4fa}\r\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\r\n  {panel}\r\n\r\n{panel:title=Atlassian Update – 19 October 2018|borderStyle=solid|borderColor=#ebf2f9|titleBGColor=#ebf2f9|bgColor=#ffffff}\r\nHi all,\r\n\r\nI'm happy to announce that in Jira 7.11 we’ve added two columns to the Projects page to help you determine the importance of your projects, so you can decide if they’re worth keeping. Issues and Last issue update will show you the number of issues in a project, and the date of the last update on an issue —just to give you an idea of what’s going on with the projects in your Jira.\r\n\r\n\r\nRegards,\r\nJakub Kurcek\r\nSenior Product Manager, Jira Server\r\n{panel}\r\n\r\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\r\n*NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63942].\r\n{panel}\r\n{panel:title=Atlassian Update – 19 October 2018|borderStyle=solid|borderColor=#ebf2f9|titleBGColor=#ebf2f9|bgColor=#ffffff}\r\nHi all,\r\n\r\nI'm happy to announce that in [Jira 7.11|https://confluence.atlassian.com/jirasoftware/jira-software-7-11-x-release-notes-952600888.html#JiraSoftware7.11.xreleasenotes-projects_columnsMoreinsightsintoyourprojects] we’ve added two columns to the Projects page to help you determine the importance of your projects, so you can decide if they’re worth keeping. Issues and Last issue update will show you the number of issues in a project, and the date of the last update on an issue — just to give you an idea of what’s going on with the projects in your Jira.\r\n\r\n!projects_columns2.png|width=100%!\r\n\r\nRegards,\r\n Jakub Kurcek\r\n Senior Product Manager, Jira Server\r\n{panel}\r\nh3. Problem Definition:\r\n\r\nFor long established JIRA Servers, over time many projects may no longer be necessary. Knowing when they were created, who owned them, when they were last updated, number of issues, etc. would be a good addition to regular JIRA Server Administration so that unnecessary or old Projects can be pruned on a regular basis.\r\nh3. Suggested Solution:\r\n\r\nThere should be a tool for native project analysis/archival/mgmt workflow that allows administrators to View _all_ project characteristics, such as: project create date, last updated date, total # of issues, project owners/admins in the Administration are of the product.\r\nh3. Why this is needed:\r\n\r\nReducing the size of a large JIRA Server is good for performance, and makes the server easier to manage."
                            }
                        ]
                    },
                    {
                        "id": "8387271",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:58:31.834+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2602146",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3062497",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    },
                    {
                        "id": "8497464",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kgrier",
                            "name": "kgrier",
                            "key": "kgrier",
                            "emailAddress": "kgrier at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/c0edabc6fd4f80366b04b4fd3665e63e?d=mm&s=32"
                            },
                            "displayName": "Kathryn Grier",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2019-02-15T18:57:12.134+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "411842",
                                "toString": "This issue links to \"Page (Confluence)\""
                            }
                        ]
                    },
                    {
                        "id": "8597447",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=baldin1697836153",
                            "name": "baldin1697836153",
                            "key": "baldin1697836153",
                            "emailAddress": "baldin at adobe dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a9b674e9526f25bb57f00ecc6a869ec0?d=mm&s=32"
                            },
                            "displayName": "Dominic Baldin",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2019-04-11T22:16:44.222+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": "411842",
                                "fromString": "This issue links to \"Page (Confluence)\"",
                                "to": null,
                                "toString": null
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "657392",
            "self": "https://jira.atlassian.com/rest/api/2/issue/657392",
            "key": "JRASERVER-63696",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2018-10-29T09:06:04.000+0000",
                "created": "2017-01-05T03:19:34.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 39,
                "total": 39,
                "histories": [
                    {
                        "id": "4288600",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=tevans",
                            "name": "tevans",
                            "key": "tevans",
                            "emailAddress": "tevans at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2ec7dad2bb2810af58e9fb1cc35c9e34?d=mm&s=32"
                            },
                            "displayName": "Tim Evans",
                            "active": true,
                            "timeZone": "America/Chicago"
                        },
                        "created": "2017-01-22T16:38:54.506+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "CONF-44216",
                                "toString": "This issue is related to CONF-44216"
                            }
                        ]
                    },
                    {
                        "id": "4562018",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=confluence-escalation-bot",
                            "name": "confluence-escalation-bot",
                            "key": "confluence-escalation-bot",
                            "emailAddress": "confluence-escalation-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=32"
                            },
                            "displayName": "Confluence Escalation Bot",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2017-03-16T04:44:14.965+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "",
                                "to": null,
                                "toString": "affects-server"
                            }
                        ]
                    },
                    {
                        "id": "6605406",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:32:32.744+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-63696",
                                "toString": "This issue relates to JRACLOUD-63696"
                            }
                        ]
                    },
                    {
                        "id": "6605423",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:32:34.723+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "As an admin, I would like PostgreSQL 9.6 to be supported in the future.\r\n",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63696].\n  {panel}\n\nAs an admin, I would like PostgreSQL 9.6 to be supported in the future.\r\n"
                            }
                        ]
                    },
                    {
                        "id": "6800125",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mmuthusamy",
                            "name": "mmuthusamy",
                            "key": "mmuthusamy",
                            "emailAddress": "mmuthusamy at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/347e623aa005d67432583fe087df955f?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/347e623aa005d67432583fe087df955f?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/347e623aa005d67432583fe087df955f?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/347e623aa005d67432583fe087df955f?d=mm&s=32"
                            },
                            "displayName": "Mogavenasan Muthusamy",
                            "active": true,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2017-05-12T05:52:32.608+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JSWSERVER-15736",
                                "toString": "This issue is duplicated by JSWSERVER-15736"
                            }
                        ]
                    },
                    {
                        "id": "6887251",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T00:59:37.808+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1635728",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2084599",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "6925594",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:26:40.390+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2084599",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2122832",
                                "toString": "JIRA Bug Workflow w Kanban v6"
                            }
                        ]
                    },
                    {
                        "id": "7163032",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-06-22T06:27:19.672+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2122832",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2336875",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7355339",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2017-09-27T13:59:30.053+0000",
                        "items": [
                            {
                                "field": "RemoteIssueLink",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "323047",
                                "toString": "This issue links to \"RUM-1696 (JIRA Server (Bulldog))\""
                            }
                        ]
                    },
                    {
                        "id": "7493154",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-01-21T00:00:54.851+0000",
                        "items": [
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "45"
                            },
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "9"
                            }
                        ]
                    },
                    {
                        "id": "7581373",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:36:18.825+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2336875",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2592713",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7613219",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:56:19.958+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2592713",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2619280",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "11772",
                                "toString": "Gathering Interest"
                            }
                        ]
                    },
                    {
                        "id": "7623039",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-10T23:54:52.452+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "9",
                                "to": null,
                                "toString": "13"
                            }
                        ]
                    },
                    {
                        "id": "7633335",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-16T23:42:59.646+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "13",
                                "to": null,
                                "toString": "17"
                            }
                        ]
                    },
                    {
                        "id": "7633757",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-17T23:31:54.372+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "17",
                                "to": null,
                                "toString": "18"
                            }
                        ]
                    },
                    {
                        "id": "7647376",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-27T23:46:34.683+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "18",
                                "to": null,
                                "toString": "26"
                            }
                        ]
                    },
                    {
                        "id": "7671085",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-14T23:43:50.604+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "26",
                                "to": null,
                                "toString": "27"
                            }
                        ]
                    },
                    {
                        "id": "7674741",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-16T23:55:27.260+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "27",
                                "to": null,
                                "toString": "26"
                            }
                        ]
                    },
                    {
                        "id": "7682055",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-03-22T01:33:23.318+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "26",
                                "to": null,
                                "toString": "27"
                            }
                        ]
                    },
                    {
                        "id": "7714910",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-14T00:44:32.635+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "27",
                                "to": null,
                                "toString": "23"
                            }
                        ]
                    },
                    {
                        "id": "7717466",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-17T00:31:58.586+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "23",
                                "to": null,
                                "toString": "22"
                            }
                        ]
                    },
                    {
                        "id": "7723458",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-21T00:30:43.725+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "22",
                                "to": null,
                                "toString": "18"
                            }
                        ]
                    },
                    {
                        "id": "7727828",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-04-25T00:41:17.943+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "18",
                                "to": null,
                                "toString": "19"
                            }
                        ]
                    },
                    {
                        "id": "7744328",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-05T00:38:53.396+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "19",
                                "to": null,
                                "toString": "18"
                            }
                        ]
                    },
                    {
                        "id": "7754759",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-11T00:57:50.194+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "18",
                                "to": null,
                                "toString": "19"
                            }
                        ]
                    },
                    {
                        "id": "7760467",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-15T01:52:45.918+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "19",
                                "to": null,
                                "toString": "14"
                            }
                        ]
                    },
                    {
                        "id": "7766570",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-19T00:51:06.130+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "14",
                                "to": null,
                                "toString": "9"
                            }
                        ]
                    },
                    {
                        "id": "7767543",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-21T00:25:11.333+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "9",
                                "to": null,
                                "toString": "10"
                            }
                        ]
                    },
                    {
                        "id": "7791785",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-28T00:33:52.979+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "10",
                                "to": null,
                                "toString": "9"
                            }
                        ]
                    },
                    {
                        "id": "7795653",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-05-30T00:45:34.746+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "9",
                                "to": null,
                                "toString": "5"
                            }
                        ]
                    },
                    {
                        "id": "7961129",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-08-06T02:10:49.548+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "5",
                                "to": null,
                                "toString": "4"
                            }
                        ]
                    },
                    {
                        "id": "7963031",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-08-07T01:38:39.337+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "4",
                                "to": null,
                                "toString": "5"
                            }
                        ]
                    },
                    {
                        "id": "7971295",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-08-12T00:16:46.369+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "5",
                                "to": null,
                                "toString": "2"
                            }
                        ]
                    },
                    {
                        "id": "7997920",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-08-19T01:42:47.754+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "2",
                                "to": null,
                                "toString": "5"
                            }
                        ]
                    },
                    {
                        "id": "8267100",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=set-analytics-bot",
                            "name": "set-analytics-bot",
                            "key": "set-analytics-bot",
                            "emailAddress": "set-analytics-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/288d3882d0ca2083927ceef68aa1a506?d=mm&s=32"
                            },
                            "displayName": "SET Analytics Bot",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-25T00:34:14.921+0000",
                        "items": [
                            {
                                "field": "UIS",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": "5",
                                "to": null,
                                "toString": "11"
                            }
                        ]
                    },
                    {
                        "id": "8271441",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mwyrzykowski",
                            "name": "mwyrzykowski",
                            "key": "mwyrzykowski",
                            "emailAddress": "mwyrzykowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=32"
                            },
                            "displayName": "Michal Wyrzykowski",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-29T09:02:42.630+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "mwyrzykowski",
                                "toString": "Michal Wyrzykowski"
                            }
                        ]
                    },
                    {
                        "id": "8271443",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mwyrzykowski",
                            "name": "mwyrzykowski",
                            "key": "mwyrzykowski",
                            "emailAddress": "mwyrzykowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=32"
                            },
                            "displayName": "Michal Wyrzykowski",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-29T09:05:10.448+0000",
                        "items": [
                            {
                                "field": "Fix Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "65334",
                                "toString": "7.4.0"
                            }
                        ]
                    },
                    {
                        "id": "8271444",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=mwyrzykowski",
                            "name": "mwyrzykowski",
                            "key": "mwyrzykowski",
                            "emailAddress": "mwyrzykowski at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/d5a2f80abd1857230d248af31319a322?d=mm&s=32"
                            },
                            "displayName": "Michal Wyrzykowski",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-10-29T09:06:04.647+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "11772",
                                "fromString": "Gathering Interest",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8387701",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:59:30.274+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2619280",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3062927",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "636698",
            "self": "https://jira.atlassian.com/rest/api/2/issue/636698",
            "key": "JRASERVER-63644",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51493&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 51493
                },
                "resolutiondate": "2016-10-05T07:24:06.000+0000",
                "created": "2016-10-04T23:11:40.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 12,
                "total": 12,
                "histories": [
                    {
                        "id": "4100049",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kewilliams",
                            "name": "kewilliams",
                            "key": "kewilliams",
                            "emailAddress": "kewilliams at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=32"
                            },
                            "displayName": "Kerrod Williams",
                            "active": false,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-10-04T23:12:11.752+0000",
                        "items": [
                            {
                                "field": "Attachment",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "213441",
                                "toString": "_JIM-1778__Unexpected_failure_occured_in_Trello_importer_-_Ecosystem_JIRA.png"
                            }
                        ]
                    },
                    {
                        "id": "4100050",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kewilliams",
                            "name": "kewilliams",
                            "key": "kewilliams",
                            "emailAddress": "kewilliams at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/53a2a7a81251638e55407fc5bb0c23f3?d=mm&s=32"
                            },
                            "displayName": "Kerrod Williams",
                            "active": false,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-10-04T23:12:42.857+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "Currently, the Trello Importer specifies that customer's check their JIRA *Agile's* licensing if there is an issue. This should be renamed to JIRA Software.\r\n\r\n !_JIM-1778__Unexpected_failure_occured_in_Trello_importer_-_Ecosystem_JIRA.png|thumbnail! "
                            }
                        ]
                    },
                    {
                        "id": "4101541",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=dkapusta%40atlassian.com",
                            "name": "dkapusta@atlassian.com",
                            "key": "dkapusta@atlassian.com",
                            "emailAddress": "dkapusta at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/d02e1e967028edb8d595ad3ae4add32d?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/d02e1e967028edb8d595ad3ae4add32d?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/d02e1e967028edb8d595ad3ae4add32d?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/d02e1e967028edb8d595ad3ae4add32d?d=mm&s=32"
                            },
                            "displayName": "Dominik Kapusta",
                            "active": true,
                            "timeZone": "Europe/Warsaw"
                        },
                        "created": "2016-10-05T07:24:06.359+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10071",
                                "fromString": "To Do",
                                "to": "10044",
                                "toString": "Done"
                            }
                        ]
                    },
                    {
                        "id": "4114152",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2016-10-11T21:17:28.848+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1608816",
                                "fromString": "JIM Project Workflow (Software Simplified)",
                                "to": "1611768",
                                "toString": "JIM - workflow v2"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10044",
                                "fromString": "Done",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "4251644",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2016-12-27T12:40:25.063+0000",
                        "items": [
                            {
                                "field": "CVSS Score",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "0"
                            },
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "44293",
                                "toString": "Backup & Restore - Import from Trello"
                            },
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": "44906",
                                "fromString": "Trello",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "Key",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "JIM-1783",
                                "to": null,
                                "toString": "JRA-63644"
                            },
                            {
                                "field": "Story Points",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "0"
                            },
                            {
                                "field": "Support reference count",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "0"
                            },
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": "14432",
                                "toString": "Minor"
                            },
                            {
                                "field": "Testing Notes",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "None"
                            },
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1611768",
                                "fromString": "JIM - workflow v2",
                                "to": "1633476",
                                "toString": "JIRA Bug Workflow w Kanban v6 - Restricted"
                            },
                            {
                                "field": "project",
                                "fieldtype": "jira",
                                "from": "18210",
                                "fromString": "JIRA Importers Plugin",
                                "to": "10240",
                                "toString": "JIRA (including JIRA Core)"
                            }
                        ]
                    },
                    {
                        "id": "6605261",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:32:16.903+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-63644",
                                "toString": "This issue relates to JRACLOUD-63644"
                            }
                        ]
                    },
                    {
                        "id": "6605277",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:32:19.148+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "Currently, the Trello Importer specifies that customer's check their JIRA *Agile's* licensing if there is an issue. This should be renamed to JIRA Software.\r\n\r\n !_JIM-1778__Unexpected_failure_occured_in_Trello_importer_-_Ecosystem_JIRA.png|thumbnail! ",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This bug report is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding bug report|http://jira.atlassian.com/browse/JRACLOUD-63644].\n  {panel}\n\nCurrently, the Trello Importer specifies that customer's check their JIRA *Agile's* licensing if there is an issue. This should be renamed to JIRA Software.\r\n\r\n !_JIM-1778__Unexpected_failure_occured_in_Trello_importer_-_Ecosystem_JIRA.png|thumbnail! "
                            }
                        ]
                    },
                    {
                        "id": "7559008",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:10:49.552+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1633476",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - Restricted",
                                "to": "2570247",
                                "toString": "JIRA Bug Workflow w Kanban v7 - Restricted"
                            }
                        ]
                    },
                    {
                        "id": "8092682",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T00:26:46.427+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2570247",
                                "fromString": "JIRA Bug Workflow w Kanban v7 - Restricted",
                                "to": "2830132",
                                "toString": "JAC Bug Workflow v2"
                            }
                        ]
                    },
                    {
                        "id": "8124576",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-09-25T04:37:51.452+0000",
                        "items": [
                            {
                                "field": "Symptom Severity",
                                "fieldtype": "custom",
                                "from": "14432",
                                "fromString": "Minor",
                                "to": "15832",
                                "toString": "Severity 3 - Minor"
                            }
                        ]
                    },
                    {
                        "id": "8218150",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-10-16T01:00:47.219+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2830132",
                                "fromString": "JAC Bug Workflow v2",
                                "to": "2930916",
                                "toString": "JAC Bug Workflow v3"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "8449306",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2019-01-15T05:45:01.935+0000",
                        "items": [
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": "44293",
                                "fromString": "Backup & Restore - Import from Trello",
                                "to": null,
                                "toString": null
                            },
                            {
                                "field": "Component",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "44190",
                                "toString": "Jira Importers Plugin"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "650768",
            "self": "https://jira.atlassian.com/rest/api/2/issue/650768",
            "key": "JRASERVER-63407",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2016-12-05T23:12:46.000+0000",
                "created": "2016-12-02T11:12:58.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 11,
                "total": 11,
                "histories": [
                    {
                        "id": "4215843",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=vdung",
                            "name": "vdung",
                            "key": "vdung",
                            "emailAddress": "vdung at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/30f284b67c76abc15ea6127693772bfc?d=mm&s=32"
                            },
                            "displayName": "Andy Nguyen",
                            "active": true,
                            "timeZone": "Asia/Shanghai"
                        },
                        "created": "2016-12-02T11:13:22.008+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRA-63406",
                                "toString": "This issue is related to JRA-63406"
                            }
                        ]
                    },
                    {
                        "id": "4216800",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2016-12-04T22:33:28.076+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "alui",
                                "fromString": "Andrew Lui [Atlassian technical writer]",
                                "to": "sirons",
                                "toString": "Sam Irons"
                            }
                        ]
                    },
                    {
                        "id": "4219837",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=sirons",
                            "name": "sirons",
                            "key": "sirons",
                            "emailAddress": "sirons at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/9bc4305c47481793060cc64a99f80024?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/9bc4305c47481793060cc64a99f80024?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/9bc4305c47481793060cc64a99f80024?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/9bc4305c47481793060cc64a99f80024?d=mm&s=32"
                            },
                            "displayName": "Sam Irons",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-12-05T23:12:46.387+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "6604637",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:31:11.077+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-63407",
                                "toString": "This issue relates to JRACLOUD-63407"
                            }
                        ]
                    },
                    {
                        "id": "6604654",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:31:12.958+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h4. Summary\r\nCurrently the documentation [Automating your service desk|https://confluence.atlassian.com/display/SERVICEDESKSERVER032/Automating+your+service+desk] doesn't mention whether or not an issue can be automated when a linked issue from a linked instance is transitioned. Please kindly update this.\r\n\r\nh4. Note\r\nThis is currently not possible. A Suggestion ticket has been raised at JRA-63406.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63407].\n  {panel}\n\nh4. Summary\r\nCurrently the documentation [Automating your service desk|https://confluence.atlassian.com/display/SERVICEDESKSERVER032/Automating+your+service+desk] doesn't mention whether or not an issue can be automated when a linked issue from a linked instance is transitioned. Please kindly update this.\r\n\r\nh4. Note\r\nThis is currently not possible. A Suggestion ticket has been raised at JRA-63406."
                            }
                        ]
                    },
                    {
                        "id": "6892530",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:01:47.817+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1627698",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2089878",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "6929986",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:28:12.694+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2089878",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2127223",
                                "toString": "JIRA Bug Workflow w Kanban v6"
                            }
                        ]
                    },
                    {
                        "id": "7185916",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-06-22T06:33:24.178+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2127223",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2359758",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7570742",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:26:49.342+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2359758",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2582081",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "7609382",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:47:23.518+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2582081",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2615443",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "6",
                                "fromString": "Closed",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8377015",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:51:00.968+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2615443",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3052241",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "648820",
            "self": "https://jira.atlassian.com/rest/api/2/issue/648820",
            "key": "JRASERVER-63314",
            "fields": {
                "issuetype": {
                    "self": "https://jira.atlassian.com/rest/api/2/issuetype/10000",
                    "id": "10000",
                    "description": "",
                    "iconUrl": "https://jira.atlassian.com/secure/viewavatar?size=xsmall&avatarId=51505&avatarType=issuetype",
                    "name": "Suggestion",
                    "subtask": false,
                    "avatarId": 51505
                },
                "resolutiondate": "2016-12-12T00:25:22.000+0000",
                "created": "2016-11-24T13:54:13.000+0000"
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 18,
                "total": 18,
                "histories": [
                    {
                        "id": "4199957",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ckimloong",
                            "name": "ckimloong",
                            "key": "ckimloong",
                            "emailAddress": "ckimloong at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=32"
                            },
                            "displayName": "Chin Kim Loong",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2016-11-24T13:54:48.103+0000",
                        "items": [
                            {
                                "field": "Version",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "60531",
                                "toString": "7.0.10"
                            }
                        ]
                    },
                    {
                        "id": "4199958",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ckimloong",
                            "name": "ckimloong",
                            "key": "ckimloong",
                            "emailAddress": "ckimloong at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/17a976eb8788c3f14260614959dec312?d=mm&s=32"
                            },
                            "displayName": "Chin Kim Loong",
                            "active": false,
                            "timeZone": "Asia/Kuala_Lumpur"
                        },
                        "created": "2016-11-24T13:55:22.013+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h4. Problem\r\n\r\nCustomer couldn't get shared home directory files created even though the permissions has been granted to the directory.\r\nh4. Suggestion\r\n\r\nResolved by using [Configuring the JIRA HOME over an UNC path|https://confluence.atlassian.com/display/JIRAKB/Configuring+the+JIRA+HOME+over+an+UNC+path] KB and suggest to include the KB into [JIRA Data Center|https://confluence.atlassian.com/adminjiraserver071/installing-jira-data-center-802592197.html] documentation so other users able to find the workaround without reported to support at the first place.",
                                "to": null,
                                "toString": "h4. Problem\r\n\r\nCustomer couldn't get shared home directory files created even though the permissions has been granted to the directory.\r\nh4. Suggestion\r\n\r\nResolved by using [Configuring the JIRA HOME over an UNC path|https://confluence.atlassian.com/display/JIRAKB/Configuring+the+JIRA+HOME+over+an+UNC+path] KB and suggest to include the KB into [JIRA Data Center installation|https://confluence.atlassian.com/adminjiraserver071/installing-jira-data-center-802592197.html] documentation so other users able to find the workaround without reported to support at the first place."
                            }
                        ]
                    },
                    {
                        "id": "4200267",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2016-11-24T22:30:22.096+0000",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": "alui",
                                "fromString": "Andrew Lui [Atlassian technical writer]",
                                "to": "wthompson",
                                "toString": "Warren Thompson"
                            }
                        ]
                    },
                    {
                        "id": "4200268",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2016-11-24T22:30:24.352+0000",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "1",
                                "fromString": "Open",
                                "to": "10005",
                                "toString": "Verified"
                            }
                        ]
                    },
                    {
                        "id": "4204025",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-11-27T23:40:47.727+0000",
                        "items": [
                            {
                                "field": "Story Points",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": null,
                                "toString": "4"
                            }
                        ]
                    },
                    {
                        "id": "4204026",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-11-27T23:40:53.002+0000",
                        "items": [
                            {
                                "field": "Rank",
                                "fieldtype": "custom",
                                "from": "",
                                "fromString": "",
                                "to": "",
                                "toString": "Ranked higher"
                            }
                        ]
                    },
                    {
                        "id": "4204374",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2016-11-28T00:48:15.635+0000",
                        "items": [
                            {
                                "field": "Sprint",
                                "fieldtype": "custom",
                                "from": null,
                                "fromString": null,
                                "to": "3571",
                                "toString": "Sprint 27"
                            }
                        ]
                    },
                    {
                        "id": "4204375",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=alui",
                            "name": "alui",
                            "key": "alui",
                            "emailAddress": "alui at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/a0ddb065cf4beac5df66a475580809e0?d=mm&s=32"
                            },
                            "displayName": "Andrew Lui",
                            "active": true,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2016-11-28T00:48:15.815+0000",
                        "items": [
                            {
                                "field": "Rank",
                                "fieldtype": "custom",
                                "from": "",
                                "fromString": "",
                                "to": "",
                                "toString": "Ranked lower"
                            }
                        ]
                    },
                    {
                        "id": "4228223",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=wthompson",
                            "name": "wthompson",
                            "key": "wthompson",
                            "emailAddress": "wthompson at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/108545bafa908c4a7a14fd55ffac0f71?d=mm&s=32"
                            },
                            "displayName": "Warren Thompson",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2016-12-12T00:25:22.165+0000",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "17",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10005",
                                "fromString": "Verified",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "4376500",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=confluence-escalation-bot",
                            "name": "confluence-escalation-bot",
                            "key": "confluence-escalation-bot",
                            "emailAddress": "confluence-escalation-bot at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/2cfd964a3761f8f128b04627cd7793e5?d=mm&s=32"
                            },
                            "displayName": "Confluence Escalation Bot",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2017-02-20T03:49:33.257+0000",
                        "items": [
                            {
                                "field": "labels",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "",
                                "to": null,
                                "toString": "affects-server"
                            }
                        ]
                    },
                    {
                        "id": "6604410",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:30:47.189+0000",
                        "items": [
                            {
                                "field": "Link",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "JRACLOUD-63314",
                                "toString": "This issue relates to JRACLOUD-63314"
                            }
                        ]
                    },
                    {
                        "id": "6604428",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=jturnquist",
                            "name": "jturnquist",
                            "key": "jturnquist",
                            "emailAddress": "jturnquist at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/dd0ec5cec45195486512703c8434246b?d=mm&s=32"
                            },
                            "displayName": "Jonah Turnquist",
                            "active": true,
                            "timeZone": "Australia/Sydney"
                        },
                        "created": "2017-04-02T11:30:49.217+0000",
                        "items": [
                            {
                                "field": "description",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": "h4. Problem\r\n\r\nCustomer couldn't get shared home directory files created even though the permissions has been granted to the directory.\r\nh4. Suggestion\r\n\r\nResolved by using [Configuring the JIRA HOME over an UNC path|https://confluence.atlassian.com/display/JIRAKB/Configuring+the+JIRA+HOME+over+an+UNC+path] KB and suggest to include the KB into [JIRA Data Center installation|https://confluence.atlassian.com/adminjiraserver071/installing-jira-data-center-802592197.html] documentation so other users able to find the workaround without reported to support at the first place.",
                                "to": null,
                                "toString": "{panel:bgColor=#e7f4fa}\n  *NOTE:* This suggestion is for *JIRA Server*. Using *JIRA Cloud*? [See the corresponding suggestion|http://jira.atlassian.com/browse/JRACLOUD-63314].\n  {panel}\n\nh4. Problem\r\n\r\nCustomer couldn't get shared home directory files created even though the permissions has been granted to the directory.\r\nh4. Suggestion\r\n\r\nResolved by using [Configuring the JIRA HOME over an UNC path|https://confluence.atlassian.com/display/JIRAKB/Configuring+the+JIRA+HOME+over+an+UNC+path] KB and suggest to include the KB into [JIRA Data Center installation|https://confluence.atlassian.com/adminjiraserver071/installing-jira-data-center-802592197.html] documentation so other users able to find the workaround without reported to support at the first place."
                            }
                        ]
                    },
                    {
                        "id": "6891826",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:01:28.083+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "1625597",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2089174",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "6929348",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-05-31T01:27:56.592+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2089174",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2126586",
                                "toString": "JIRA Bug Workflow w Kanban v6"
                            }
                        ]
                    },
                    {
                        "id": "7185307",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=kyabut",
                            "name": "kyabut",
                            "key": "kyabut",
                            "emailAddress": "kyabut at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/0a1a9c743c582d1aa1b01325a8c7488a?d=mm&s=32"
                            },
                            "displayName": "Katherine Yabut",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2017-06-22T06:33:11.763+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2126586",
                                "fromString": "JIRA Bug Workflow w Kanban v6",
                                "to": "2359149",
                                "toString": "JIRA Bug Workflow w Kanban v6 - TEMP"
                            }
                        ]
                    },
                    {
                        "id": "7551051",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=ialexeyenko",
                            "name": "ialexeyenko",
                            "key": "ialexeyenko",
                            "emailAddress": "ialexeyenko at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/68ec8e51e66886bf81483147124a9658?d=mm&s=32"
                            },
                            "displayName": "Ignat Alexeyenko",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2018-02-01T14:03:19.508+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2359149",
                                "fromString": "JIRA Bug Workflow w Kanban v6 - TEMP",
                                "to": "2562289",
                                "toString": "JIRA PM Feature Request Workflow v2 - TEMP"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "5",
                                "fromString": "Resolved",
                                "to": "6",
                                "toString": "Closed"
                            }
                        ]
                    },
                    {
                        "id": "7603223",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=rlin2%40atlassian.com",
                            "name": "rlin2@atlassian.com",
                            "key": "rlin2@atlassian.com",
                            "emailAddress": "rlin2 at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/4372e68ec296b0d7962a78a58b43873a?d=mm&s=32"
                            },
                            "displayName": "Rachel Lin",
                            "active": false,
                            "timeZone": "Etc/Universal"
                        },
                        "created": "2018-02-08T06:33:51.275+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2562289",
                                "fromString": "JIRA PM Feature Request Workflow v2 - TEMP",
                                "to": "2609282",
                                "toString": "Confluence Workflow - Public Facing v4"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "6",
                                "fromString": "Closed",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "id": "8373802",
                        "author": {
                            "self": "https://jira.atlassian.com/rest/api/2/user?username=osanico",
                            "name": "osanico",
                            "key": "osanico",
                            "emailAddress": "osanico at atlassian dot com",
                            "avatarUrls": {
                                "48x48": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=48",
                                "24x24": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=24",
                                "16x16": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=16",
                                "32x32": "https://avatar-cdn.atlassian.com/ba8e4c1d466c65f724211df8fe7c75d8?d=mm&s=32"
                            },
                            "displayName": "Owen Sanico",
                            "active": true,
                            "timeZone": "Asia/Manila"
                        },
                        "created": "2018-11-21T06:49:24.187+0000",
                        "items": [
                            {
                                "field": "Workflow",
                                "fieldtype": "jira",
                                "from": "2609282",
                                "fromString": "Confluence Workflow - Public Facing v4",
                                "to": "3049028",
                                "toString": "JAC Suggestion Workflow"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
//https://jira.atlassian.com/rest/api/2/search?maxResults=15&expand=changelog&jql=project=JRASERVER AND resolution=Done&fields=resolutiondate,created,issuetype
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


export const getCycleTimeReportData = () => convert(jiraResponse);
export const getIssues = () => issues;
export const getWorkflow = () => workflow;
export const getLeadAndCycleTimeData = () => leadAndCycleTimeData;
export const getThroughput = () => throughputData;
export const getCumulativeFlowData = () => cumulativeFlowData; //mergeIssues(issues,workflow)

