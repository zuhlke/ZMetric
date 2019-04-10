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
