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
const newCumulativeFlowData = [
    {
        "id": "1",
        "name": "Bug",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-04",
                "To Do": 1,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-05",
                "To Do": 0,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-06",
                "To Do":2,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-07",
                "To Do":2,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 0
            },
            {
                "date": "2019-02-08",
                "To Do":2,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-09",
                "To Do": 2,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 2,
                "Ready For Test": 1,
                "Done": 2
            },
            {
                "date": "2019-02-10",
                "To Do":0,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 1,
                "Done": 4
            },
            {
                "date": "2019-02-11",
                "To Do":0,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 6
            },
            {
                "date": "2019-02-12",
                "To Do": 0,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 2,
                "Done": 8
            }
        ]
    },    {
        "id": "10000",
        "name": "Epic",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-04",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-05",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-06",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-07",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-08",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-09",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-10",
                "To Do":6,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-11",
                "To Do":5,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 1
            },
            {
                "date": "2019-02-12",
                "To Do":5,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 1
            }
        ]
    },    {
        "id": "11201",
        "name": "Spike",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":2,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":1,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":1,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 1
            },
            {
                "date": "2019-02-04",
                "To Do":0,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 1
            },
            {
                "date": "2019-02-05",
                "To Do":2,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 1
            },
            {
                "date": "2019-02-06",
                "To Do":1,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 2
            },
            {
                "date": "2019-02-07",
                "To Do":0,
                "In Progress": 1,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 3
            },
            {
                "date": "2019-02-08",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 4
            },
            {
                "date": "2019-02-09",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 4
            },
            {
                "date": "2019-02-10",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 4
            },
            {
                "date": "2019-02-11",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 4
            },
            {
                "date": "2019-02-12",
                "To Do":0,
                "In Progress": 0,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 4
            }
        ]
    },    {
        "id": "10001",
        "name": "Story",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":14,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":12,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":11,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 0
            },
            {
                "date": "2019-02-04",
                "To Do":9,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 2,
                "Ready For Test": 1,
                "Done": 2
            },
            {
                "date": "2019-02-05",
                "To Do":8,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 3
            },
            {
                "date": "2019-02-06",
                "To Do":8,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 5
            },
            {
                "date": "2019-02-07",
                "To Do":6,
                "In Progress": 4,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 6
            },
            {
                "date": "2019-02-08",
                "To Do":4,
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
                "To Do":3,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 2,
                "Done": 8
            },
            {
                "date": "2019-02-11",
                "To Do":1,
                "In Progress": 3,
                "On Hold": 2,
                "Review": 3,
                "Ready For Test": 3,
                "Done": 8
            },
            {
                "date": "2019-02-12",
                "To Do":0,
                "In Progress": 2,
                "On Hold": 4,
                "Review": 3,
                "Ready For Test": 2,
                "Done": 10
            }
        ]
    },    {
        "id": "5",
        "name": "Sub-task",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":14,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":12,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":11,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 0
            },
            {
                "date": "2019-02-04",
                "To Do":9,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 2,
                "Ready For Test": 1,
                "Done": 2
            },
            {
                "date": "2019-02-05",
                "To Do":8,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 3
            },
            {
                "date": "2019-02-06",
                "To Do":8,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 5
            },
            {
                "date": "2019-02-07",
                "To Do":6,
                "In Progress": 4,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 6
            },
            {
                "date": "2019-02-08",
                "To Do":4,
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
                "To Do":3,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 2,
                "Done": 8
            },
            {
                "date": "2019-02-11",
                "To Do":1,
                "In Progress": 3,
                "On Hold": 2,
                "Review": 3,
                "Ready For Test": 3,
                "Done": 8
            },
            {
                "date": "2019-02-12",
                "To Do":0,
                "In Progress": 2,
                "On Hold": 4,
                "Review": 3,
                "Ready For Test": 2,
                "Done": 10
            }
        ]
    },    {
        "id": "3",
        "name": "Task",
        "data": [
            {
                "date": "2019-02-01",
                "To Do":14,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-02",
                "To Do":12,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 0
            },
            {
                "date": "2019-02-03",
                "To Do":11,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 0
            },
            {
                "date": "2019-02-04",
                "To Do":9,
                "In Progress": 2,
                "On Hold": 0,
                "Review": 2,
                "Ready For Test": 1,
                "Done": 2
            },
            {
                "date": "2019-02-05",
                "To Do":8,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 0,
                "Done": 3
            },
            {
                "date": "2019-02-06",
                "To Do":8,
                "In Progress": 2,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 1,
                "Done": 5
            },
            {
                "date": "2019-02-07",
                "To Do":6,
                "In Progress": 4,
                "On Hold": 1,
                "Review": 0,
                "Ready For Test": 0,
                "Done": 6
            },
            {
                "date": "2019-02-08",
                "To Do":4,
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
                "To Do":3,
                "In Progress": 3,
                "On Hold": 1,
                "Review": 1,
                "Ready For Test": 2,
                "Done": 8
            },
            {
                "date": "2019-02-11",
                "To Do":1,
                "In Progress": 3,
                "On Hold": 2,
                "Review": 3,
                "Ready For Test": 3,
                "Done": 8
            },
            {
                "date": "2019-02-12",
                "To Do":0,
                "In Progress": 2,
                "On Hold": 4,
                "Review": 3,
                "Ready For Test": 2,
                "Done": 10
            }
        ]
    }
];
const cumulativeFlowData = [
    {
        "date": "2019-02-01",
        "To Do":14,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-02",
        "To Do":12,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 0
    },
    {
        "date": "2019-02-03",
        "To Do":11,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 0
    },
    {
        "date": "2019-02-04",
        "To Do":9,
        "In Progress": 2,
        "On Hold": 0,
        "Review": 2,
        "Ready For Test": 1,
        "Done": 2
    },
    {
        "date": "2019-02-05",
        "To Do":8,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 0,
        "Done": 3
    },
    {
        "date": "2019-02-06",
        "To Do":8,
        "In Progress": 2,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 1,
        "Done": 5
    },
    {
        "date": "2019-02-07",
        "To Do":6,
        "In Progress": 4,
        "On Hold": 1,
        "Review": 0,
        "Ready For Test": 0,
        "Done": 6
    },
    {
        "date": "2019-02-08",
        "To Do":4,
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
        "To Do":3,
        "In Progress": 3,
        "On Hold": 1,
        "Review": 1,
        "Ready For Test": 2,
        "Done": 8
    },
    {
        "date": "2019-02-11",
        "To Do":1,
        "In Progress": 3,
        "On Hold": 2,
        "Review": 3,
        "Ready For Test": 3,
        "Done": 8
    },
    {
        "date": "2019-02-12",
        "To Do":0,
        "In Progress": 2,
        "On Hold": 4,
        "Review": 3,
        "Ready For Test": 2,
        "Done": 10
    }
];
const throughputData = [
    {
        "date": "2019-02-01",
        "throughput":1
    },
    {
        "date": "2019-02-02",
        "throughput":3
    },
    {
        "date": "2019-02-03",
        "throughput":4
    },
    {
        "date": "2019-02-04",
        "throughput":2
    },
    {
        "date": "2019-02-05",
        "throughput":5
    },
    {
        "date": "2019-02-06",
        "throughput":2
    },
    {
        "date": "2019-02-07",
        "throughput":4
    },
    {
        "date": "2019-02-08",
        "throughput":7
    },
    {
        "date": "2019-02-09",
        "throughput":5
    },
    {
        "date": "2019-02-10",
        "throughput":4
    },
    {
        "date": "2019-02-11",
        "throughput":1
    },
    {
        "date": "2019-02-12",
        "throughput":4
    }
];

export const getWorkflow = () => workflow;
export const getLeadAndCycleTimeData = () => leadAndCycleTimeData;
export const getThroughput = () => throughputData;
export const getCumulativeFlowData = () => cumulativeFlowData;

