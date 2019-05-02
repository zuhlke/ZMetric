import {convertIssueChangelogToCumulativeFlow, mergeCumulativeFlowData, mergeIssues} from "./DataAdapter";
import moment from "moment";
it("sa", () => {
    const now = moment().toISOString(true);
    console.log(now);
});

describe("DataAdapter", () =>{
    const jiraServerWorkflow = [
        {
            "id": "1",
            "name": "Bug",
            "subtask": false,
            "statuses": [
                {
                    "name": "Needs Triage",
                    "id": "10030"
                },
                {
                    "name": "Gathering Impact",
                    "id": "12072"
                },
                {
                    "name": "Long Term Backlog",
                    "id": "12073"
                },
                {
                    "name": "Short Term Backlog",
                    "id": "12074"
                },
                {
                    "name": "In Progress",
                    "id": "3"
                },
                {
                    "name": "In Review",
                    "id": "10051"
                },
                {
                    "name": "Waiting for Release",
                    "id": "12075"
                },
                {
                    "name": "Closed",
                    "id": "6"
                }
            ]
        },
        {
            "id": "6",
            "name": "Sub-task",
            "subtask": true,
            "statuses": [
                {
                    "name": "Open",
                    "id": "1"
                },
                {
                    "name": "Needs Verification",
                    "id": "10004"
                },
                {
                    "name": "Awaiting Development",
                    "id": "10038"
                },
                {
                    "name": "In Progress",
                    "id": "3"
                },
                {
                    "name": "Quality Review",
                    "id": "10029"
                },
                {
                    "name": "Resolved",
                    "id": "5"
                },
                {
                    "name": "Closed",
                    "id": "6"
                },
                {
                    "name": "Awaiting Quality Review",
                    "id": "10039"
                },
                {
                    "name": "Awaiting Soak",
                    "id": "10040"
                },
                {
                    "name": "Testing Notes",
                    "id": "10272"
                }
            ]
        },
        {
            "id": "5",
            "name": "Support Request",
            "subtask": false,
            "statuses": [
                {
                    "name": "Open",
                    "id": "1"
                },
                {
                    "name": "Needs Verification",
                    "id": "10004"
                },
                {
                    "name": "Awaiting Development",
                    "id": "10038"
                },
                {
                    "name": "In Progress",
                    "id": "3"
                },
                {
                    "name": "Quality Review",
                    "id": "10029"
                },
                {
                    "name": "Resolved",
                    "id": "5"
                },
                {
                    "name": "Closed",
                    "id": "6"
                },
                {
                    "name": "Awaiting Quality Review",
                    "id": "10039"
                },
                {
                    "name": "Awaiting Soak",
                    "id": "10040"
                },
                {
                    "name": "Testing Notes",
                    "id": "10272"
                }
            ]
        },
        {
            "id": "10000",
            "name": "Suggestion",
            "subtask": false,
            "statuses": [
                {
                    "name": "Gathering Interest",
                    "id": "11772"
                },
                {
                    "name": "Reviewing",
                    "id": "11773"
                },
                {
                    "name": "Under Consideration",
                    "id": "11774"
                },
                {
                    "name": "Future Consideration",
                    "id": "11775"
                },
                {
                    "name": "Not Being Considered",
                    "id": "11776"
                },
                {
                    "name": "In Progress",
                    "id": "3"
                },
                {
                    "name": "Resolved",
                    "id": "5"
                },
                {
                    "name": "Waiting for Release",
                    "id": "12075"
                }
            ]
        }
    ];

    describe("converts issues to cumulative flow data", () => {
        const issue1 = {
            id: "1123412",
            key: "JRASERVER-68895",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: "2019-02-24T02:27:28.000+0000",
                    created: "2019-02-20T23:52:36.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-02-20T23:52:48.362+0000",
                        items: [
                            {
                                field: "assignee",
                                fieldtype: "jira",
                                from: "tbartyzel",
                                fromString: "Tomasz Bartyzel",
                                to: "znoorsazali",
                                toString: "Zulfadli Noor Sazali"
                            }
                        ]
                    },
                    {
                        created: "2019-02-22T00:05:19.853+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11772",
                                fromString: "Gathering Interest",
                                to: "11773",
                                toString: "Reviewing"
                            }
                        ]
                    },
                    {
                        created: "2019-02-24T02:27:28.482+0000",//2019-02-24T23:52:36.000+0000
                        items: [
                            {
                                field: "resolution",
                                fieldtype: "jira",
                                from: null,
                                fromString: null,
                                to: "17",
                                toString: "Done"
                            },
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11773",
                                fromString: "Reviewing",
                                to: "5",
                                toString: "Resolved"
                            }
                        ]
                    }

                ]
            }
        };

        const issue2 = {
            id: "968691",
            key: "JRASERVER-67265",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: "2019-02-25T14:55:02.000+0000",
                    created: "2019-02-19T19:19:27.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-02-19T23:52:48.362+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11772",
                                fromString: "Gathering Interest",
                                to: "11773",
                                toString: "Reviewing"
                            }
                        ]
                    },
                    {
                        created: "2019-02-23T00:05:19.853+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11773",
                                fromString: "Reviewing",
                                to: "2",
                                toString: "In Progress"
                            }
                        ]
                    },
                    {
                        "created": "2019-02-25T02:27:28.482+0000",
                        "items": [
                            {
                                field: "resolution",
                                fieldtype: "jira",
                                from: null,
                                fromString: null,
                                to: "17",
                                toString: "Done"
                            },
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "2",
                                fromString: "In Progress",
                                to: "5",
                                toString: "Resolved"
                            }
                        ]
                    }

                ]
            }
        };

        const issue3 = {
            id: "1052324",
            key: "JRASERVER-68020",
            fields:
                {
                    issuetype:{
                        id: "1",
                        name: "Bug",
                        subtask: false
                    },
                    "resolutiondate": "2019-02-26T09:19:20.000+0000",
                    "created": "2019-02-18T23:00:43.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-02-21T23:52:48.362+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "10030",
                                fromString: "Needs Triage",
                                to: "2",
                                toString: "In Progress"
                            }
                        ]
                    },
                    {
                        "created": "2019-02-24T09:19:20.978+0000",
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
                                "fromString": "In Progress",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "created": "2019-02-26T00:45:44.883+0000",
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
                    }

                ]
            }
        };

        const issue4 = {
            id: "1052332",
            key: "JRASERVER-68045",
            fields:
                {
                    issuetype:{
                        id: "1",
                        name: "Bug",
                        subtask: false
                    },
                    "resolutiondate": "2019-03-09T09:19:20.000+0000",//"2019-03-26T09:19:20.000+0000",
                    "created": "2019-03-01T23:00:43.000+0000" //"2019-03-18T23:00:43.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-03-04T23:52:48.362+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "10030",
                                fromString: "Needs Triage",
                                to: "2",
                                toString: "In Progress"
                            }
                        ]
                    },
                    {
                        "created": "2019-03-07T09:19:20.978+0000",
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
                                "fromString": "In Progress",
                                "to": "5",
                                "toString": "Resolved"
                            }
                        ]
                    },
                    {
                        "created": "2019-03-09T00:45:44.883+0000",
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
                    }

                ]
            }
        };

        const issue5Unresolved = {
            id: "1123413",
            key: "JRASERVER-68899",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: null,
                    created: "2019-02-20T23:52:36.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-02-22T00:05:19.853+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11772",
                                fromString: "Gathering Interest",
                                to: "11773",
                                toString: "Reviewing"
                            }
                        ]
                    },
                    {
                        created: "2019-02-24T02:27:28.482+0000",
                        items: [
                            {
                                field: "status",
                                fieldtype: "jira",
                                from: "11773",
                                fromString: "Reviewing",
                                to: "3",
                                toString: "In Progress"
                            }
                        ]
                    }

                ]
            }
        };

        const xissue6NoTransitions = {
            id: "6",
            key: "JRASERVER-66",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: null,
                    created: "2019-02-21T23:52:36.000+0000"
                },
            changelog:{histories:[]}
        };

        const issues = [issue1, issue2, issue3];

        const issue1CumulativeFlowData = {
            id: "1123412",
            key: "JRASERVER-68895",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: "2019-02-24T02:27:28.000+0000",
                    created: "2019-02-20T23:52:36.000+0000"
                },
            cumulativeFlow: [
                {
                    date: "2019-02-18",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-19",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-20",
                    "Gathering Interest": 1,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-21",
                    "Gathering Interest": 1,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-22",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-23",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-24",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 1
                },
                {
                    date: "2019-02-25",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 1
                },
                {
                    date: "2019-02-26",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 1
                }
            ]
        };

        const issue2CumulativeFlowData = {
            id: "968691",
            key: "JRASERVER-67265",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: "2019-02-25T14:55:02.000+0000",
                    created: "2019-02-19T19:19:27.000+0000"
                },
            cumulativeFlow: [
                {
                    date: "2019-02-18",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-19",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-20",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-21",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-22",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-23",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 1,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-24",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 1,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-25",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 1
                },
                {
                    date: "2019-02-26",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 1
                }
            ]
        };

        const issue3CumulativeFlowData = {
            id: "1052324",
            key: "JRASERVER-68020",
            fields:
                {
                    issuetype:{
                        id: "1",
                        name: "Bug",
                        subtask: false
                    },
                    "resolutiondate": "2019-02-26T09:19:20.000+0000",
                    "created": "2019-02-18T23:00:43.000+0000"
                },
            cumulativeFlow: [
                {
                    date: "2019-02-18",
                    "Needs Triage": 1,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-19",
                    "Needs Triage": 1,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-20",
                    "Needs Triage": 1,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-21",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 1,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-22",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 1,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-23",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 1,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 0
                },
                {
                    date: "2019-02-24",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 1,
                    Closed: 0
                },
                {
                    date: "2019-02-25",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 1,
                    Closed: 0
                },
                {
                    date: "2019-02-26",
                    "Needs Triage": 0,
                    "Gathering Impact": 0,
                    "Long Term Backlog": 0,
                    "Short Term Backlog": 0,
                    "In Progress": 0,
                    "In Review": 0,
                    "Waiting for Release": 0,
                    Resolved: 0,
                    Closed: 1
                }
            ]
        };

        const issue5CumulativeFlowData = {
            id: "1123413",
            key: "JRASERVER-68899",
            fields:
                {
                    issuetype:{
                        id: "1000",
                        name: "Suggestion",
                        subtask: false
                    },
                    resolutiondate: null,
                    created: "2019-02-20T23:52:36.000+0000"
                },
            cumulativeFlow: [
                {
                    date: "2019-02-18",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-19",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-20",
                    "Gathering Interest": 1,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-21",
                    "Gathering Interest": 1,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-22",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-23",
                    "Gathering Interest": 0,
                    Reviewing: 1,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 0,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-24",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 1,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-25",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 1,
                    "Waiting for Release": 0,
                    Resolved: 0
                },
                {
                    date: "2019-02-26",
                    "Gathering Interest": 0,
                    Reviewing: 0,
                    "Under Consideration": 0,
                    "Future Consideration": 0,
                    "Not Being Considered": 0,
                    "In Progress": 1,
                    "Waiting for Release": 0,
                    Resolved: 0
                }
            ]
        };

        const issue1And2MergedCumulativeFlowData = [
            {
                date: "2019-02-18",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-19",
                "Gathering Interest": 0,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-20",
                "Gathering Interest": 1,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-21",
                "Gathering Interest": 1,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-22",
                "Gathering Interest": 0,
                Reviewing: 2,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-23",
                "Gathering Interest": 0,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-24",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 1
            },
            {
                date: "2019-02-25",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 2
            },
            {
                date: "2019-02-26",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 2
            }
        ];

        const issue2And5MergedCumulativeFlowData = [
            {
                date: "2019-02-18",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-19",
                "Gathering Interest": 0,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-20",
                "Gathering Interest": 1,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-21",
                "Gathering Interest": 1,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-22",
                "Gathering Interest": 0,
                Reviewing: 2,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-23",
                "Gathering Interest": 0,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-24",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 2,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-25",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 1
            },{
                date: "2019-02-26",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 1
            }
        ];

        const issue1And2And5MergedCumulativeFlowData = [
            {
                date: "2019-02-18",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-19",
                "Gathering Interest": 0,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-20",
                "Gathering Interest": 2,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-21",
                "Gathering Interest": 2,
                Reviewing: 1,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-22",
                "Gathering Interest": 0,
                Reviewing: 3,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-23",
                "Gathering Interest": 0,
                Reviewing: 2,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 0
            },
            {
                date: "2019-02-24",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 2,
                "Waiting for Release": 0,
                Resolved: 1
            },
            {
                date: "2019-02-25",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 2
            },            {
                date: "2019-02-26",
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 1,
                "Waiting for Release": 0,
                Resolved: 2
            },
        ];

        const emptySubTaskCumulativeFlowData18thTo26th = [
            {
                date: "2019-02-18",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-19",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-20",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-21",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-22",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-23",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-24",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-25",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-26",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            }
        ];

        const issue3And4MergedCumulativeFlowData = [
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-18"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-19"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-20"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-21"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-22"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-23"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 1,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-24"
            },
            {
                "Closed": 0,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 1,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-25"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-26"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-27"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-02-28"
            },            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-01"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-02"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 1,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-03"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-04"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-05"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 1,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-06"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 1,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-07"
            },
            {
                "Closed": 1,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 1,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-08"
            },
            {
                "Closed": 2,
                "Gathering Impact": 0,
                "In Progress": 0,
                "In Review": 0,
                "Long Term Backlog": 0,
                "Needs Triage": 0,
                "Resolved": 0,
                "Short Term Backlog": 0,
                "Waiting for Release": 0,
                "date": "2019-03-09"
            }];

        const emptySubTaskCumulativeFlowDataFebMarch = [
            {
                date: "2019-02-18",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-19",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-20",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-21",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-22",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-23",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-24",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-25",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                date: "2019-02-26",
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-02-27"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-02-28"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-01"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-02"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-03"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-04"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-05"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-06"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-07"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-08"
            },
            {
                Open: 0,
                "Needs Verification": 0,
                "Awaiting Development": 0,
                "In Progress": 0,
                "Quality Review":0,
                "Resolved": 0,
                "Closed": 0,
                "Awaiting Quality Review": 0,
                "Awaiting Soak": 0,
                "Testing Notes": 0,
                "date": "2019-03-09"
            }];

        const emptySuggestionCumulativeFlowDataFebMarch = [
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-18"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-19"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-20"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-21"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-22"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-23"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-24"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-25"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-26"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-27"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-02-28"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-01"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-02"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-03"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-04"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-05"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-06"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-07"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-08"
            },
            {
                "Gathering Interest": 0,
                Reviewing: 0,
                "Under Consideration": 0,
                "Future Consideration": 0,
                "Not Being Considered": 0,
                "In Progress": 0,
                "Waiting for Release": 0,
                Resolved: 0,
                "date": "2019-03-09"
            }];

        const extendTestDataToCurrentDate = (cumulativeFlowData) => { //TODO: unittest this
            const cumulativeFlowCopy = [...cumulativeFlowData];
            const dateCounter = moment(cumulativeFlowData[cumulativeFlowData.length-1].date, 'YYYY-MM-DD');
            const today = moment().format('YYYY-MM-DD');
            while(dateCounter.isBefore(today)){
                dateCounter.add(1,'days');
                cumulativeFlowCopy.push(Object.assign({}, cumulativeFlowData[cumulativeFlowData.length-1], {date:dateCounter.toISOString(true).split("T")[0]}));
            }
            return cumulativeFlowCopy
        };

        // describe("helper function extendTestDataToCurrentDate()", () => {
        //     const data = [{
        //         date: "2019-02-19",
        //         "Gathering Interest": 0,
        //         Reviewing: 0,
        //     },{
        //             date: "2019-02-20",
        //             "Gathering Interest": 1,
        //             Reviewing: 0,
        //     }];
        //
        //     expect(extendTestDataToCurrentDate(data)).toEqual({});
        // });

        describe("convertIssueChangelogToCumulativeFlow", () => { //TODO: Add test data for: issue that has no status transition, issue with no transitions at all, issue with only one status transition
            it("converts issue1 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue1, jiraServerWorkflow,"2019-02-18", "2019-02-26")).toEqual(issue1CumulativeFlowData);
            });

            it("converts issue2 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue2, jiraServerWorkflow, "2019-02-18", "2019-02-26")).toEqual(issue2CumulativeFlowData);
            });

            it("converts issue3 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue3, jiraServerWorkflow, "2019-02-18", "2019-02-26")).toEqual(issue3CumulativeFlowData);
            });

            it("converts issue5 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue5Unresolved, jiraServerWorkflow, "2019-02-18", "2019-02-26")).toEqual(issue5CumulativeFlowData);
            });
        });

        describe("mergeCumulativeFlowData", () => {
            it("merges cumulative flow data for two issues of the same type into one", () => {
                expect(mergeCumulativeFlowData(issue2CumulativeFlowData.cumulativeFlow, issue1CumulativeFlowData.cumulativeFlow)).toEqual(issue1And2MergedCumulativeFlowData);
            });

            it("merges cumulative flow data for two issues where one is unresolved", () => {
                expect(mergeCumulativeFlowData(issue2CumulativeFlowData.cumulativeFlow, issue5CumulativeFlowData.cumulativeFlow)).toEqual(issue2And5MergedCumulativeFlowData);
            });

            it("merges cumulative flow data for three issues where one is unresolved", () => {
                expect(mergeCumulativeFlowData(mergeCumulativeFlowData(issue2CumulativeFlowData.cumulativeFlow, issue1CumulativeFlowData.cumulativeFlow),issue5CumulativeFlowData.cumulativeFlow)).toEqual(issue1And2And5MergedCumulativeFlowData);
            });
        });

        describe("mergeIssues", ()=> { //TODO: Add test data for: issue that has no status transition, issue with no transitions at all, issue with only one status transition
            it("converts bug and Suggestion issues to combined cumulative flow data", () => {
                const combinedCumulativeFlowData = [{
                    id: "1",
                    name: "Bug",
                    data: issue3CumulativeFlowData.cumulativeFlow
                },{
                    id:"6",
                    name:"Sub-task",
                    data:emptySubTaskCumulativeFlowData18thTo26th
                },{
                    "id": "5",
                    "name": "Support Request",
                    data:emptySubTaskCumulativeFlowData18thTo26th
                },{
                    id: "10000",
                    name: "Suggestion",
                    data: issue1And2MergedCumulativeFlowData
                }
                ];
                expect(mergeIssues(issues, jiraServerWorkflow)).toEqual(combinedCumulativeFlowData);
            });

            it("merge cumulative flow data for issues with non-overlapping date ranges", () => {
                const issuesAtDifferentTimes = [issue3, issue4];
                const combinedCumulativeFlow = [
                    {
                        "data": issue3And4MergedCumulativeFlowData,
                        "id": "1",
                        "name": "Bug"
                    },
                    {
                        id:"6",
                        name:"Sub-task",
                        data:emptySubTaskCumulativeFlowDataFebMarch
                    },{
                        "id": "5",
                        "name": "Support Request",
                        data:emptySubTaskCumulativeFlowDataFebMarch
                    },
                    {
                        id: "10000",
                        name: "Suggestion",
                        data: emptySuggestionCumulativeFlowDataFebMarch
                    }
                ];
                expect(mergeIssues(issuesAtDifferentTimes, jiraServerWorkflow)).toEqual(combinedCumulativeFlow);
            });

            it("merge cumulative flow data for issues including unfinished issue", () => {
                const combinedCumulativeFlowData = [{
                    id: "1",
                    name: "Bug",
                    data: extendTestDataToCurrentDate(issue3And4MergedCumulativeFlowData)
                },{
                    id:"6",
                    name:"Sub-task",
                    data: extendTestDataToCurrentDate(emptySubTaskCumulativeFlowDataFebMarch)
                },{
                    "id": "5",
                    "name": "Support Request",
                    data: extendTestDataToCurrentDate(emptySubTaskCumulativeFlowDataFebMarch)
                },{
                    id: "10000",
                    name: "Suggestion",
                    data: extendTestDataToCurrentDate(issue1And2And5MergedCumulativeFlowData)
                }
                ];
                const issues1To5 = [issue1, issue2, issue3, issue4, issue5Unresolved];
                expect(mergeIssues(issues1To5, jiraServerWorkflow)).toEqual(combinedCumulativeFlowData);
            });
        });

    });

    describe("convert real JRASERVER issues to cumulative flow data", () => {
        const JRAIssues = [
            {
                "id": "1123412",
                "key": "JRASERVER-68895",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2019-02-21T02:27:28.000+0000",
                    "created": "2019-02-20T23:52:36.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                "id": "1052324",
                "key": "JRASERVER-68020",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2018-10-01T09:19:20.000+0000",
                    "created": "2018-09-28T23:00:43.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "970434",
                "key": "JRASERVER-67274",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2018-05-24T22:40:08.000+0000",
                    "created": "2018-05-08T19:23:50.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "968691",
                "key": "JRASERVER-67265",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2019-03-13T14:55:02.000+0000",
                    "created": "2018-05-07T19:19:27.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                "id": "938934",
                "key": "JRASERVER-66829",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2018-04-11T12:09:00.000+0000",
                    "created": "2018-02-22T09:44:43.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "884627",
                "key": "JRASERVER-66350",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2017-11-20T09:28:16.000+0000",
                    "created": "2017-11-16T16:43:46.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "846415",
                "key": "JRASERVER-65997",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2017-09-21T03:58:31.000+0000",
                    "created": "2017-09-19T11:12:54.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "823256",
                "key": "JRASERVER-65693",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2018-05-07T19:27:47.000+0000",
                    "created": "2017-07-26T10:11:22.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "800042",
                "key": "JRASERVER-65262",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2019-02-15T17:30:43.000+0000",//TODO: problem date
                    "created": "2017-05-09T10:05:29.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            }, //TODO: Problem Issue
            {
                "id": "670902",
                "key": "JRASERVER-64363",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2017-04-06T23:17:24.000+0000",
                    "created": "2017-03-09T20:13:37.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                "id": "662755",
                "key": "JRASERVER-63942",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2018-10-18T09:16:59.000+0000",
                    "created": "2017-01-31T21:14:17.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "657392",
                "key": "JRASERVER-63696",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2018-10-29T09:06:04.000+0000",
                    "created": "2017-01-05T03:19:34.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "636698",
                "key": "JRASERVER-63644",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2016-10-05T07:24:06.000+0000",
                    "created": "2016-10-04T23:11:40.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "650768",
                "key": "JRASERVER-63407",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2016-12-05T23:12:46.000+0000",
                    "created": "2016-12-02T11:12:58.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            },
            {
                "id": "648820",
                "key": "JRASERVER-63314",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Suggestion",
                        "subtask": false
                    },
                    "resolutiondate": "2016-12-12T00:25:22.000+0000",
                    "created": "2016-11-24T13:54:13.000+0000"
                },
                "changelog": {
                    "histories": [
                        {
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
                        }
                    ]
                }
            }
        ];
        it("mergeIssues to combined cumulative flow data with throwing any exceptions", () => {
            mergeIssues(JRAIssues, jiraServerWorkflow);
        });

        const zMetricIssues = [
            {
                "id": "107402",
                "key": "ZMETRIC-127",
                "fields": {
                    "issuetype": {
                        "id": "10001",
                        "name": "Story",
                        "subtask": false
                    },
                    "resolutiondate": null,
                    "created": "2019-05-01T12:07:30.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-05-01T12:07:34.156+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "107383",
                "key": "ZMETRIC-126",
                "fields": {
                    "issuetype": {
                        "id": "3",
                        "name": "Task",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-30T17:52:46.000+0200",
                    "created": "2019-04-30T14:32:38.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-30T14:32:44.235+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-30T17:52:46.803+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "107216",
                "key": "ZMETRIC-125",
                "fields": {
                    "issuetype": {
                        "id": "3",
                        "name": "Task",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-30T14:31:55.000+0200",
                    "created": "2019-04-26T18:37:12.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-29T15:42:08.507+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-30T14:31:55.968+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "107215",
                "key": "ZMETRIC-124",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Epic",
                        "subtask": false
                    },
                    "resolutiondate": null,
                    "created": "2019-04-26T18:36:03.000+0200"
                },
                "changelog": {
                    "histories": []
                }
            },
            {
                "id": "106403",
                "key": "ZMETRIC-123",
                "fields": {
                    "issuetype": {
                        "id": "10001",
                        "name": "Story",
                        "subtask": false
                    },
                    "resolutiondate": null,
                    "created": "2019-04-15T12:51:21.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-25T14:43:12.802+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "106398",
                "key": "ZMETRIC-122",
                "fields": {
                    "issuetype": {
                        "id": "1",
                        "name": "Bug",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-15T12:33:32.000+0200",
                    "created": "2019-04-15T11:34:58.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-15T11:35:01.362+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-15T12:09:19.179+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "10202",
                                    "toString": "Review"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-15T12:33:32.411+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10202",
                                    "fromString": "Review",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "106322",
                "key": "ZMETRIC-121",
                "fields": {
                    "issuetype": {
                        "id": "10001",
                        "name": "Story",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-12T13:00:08.000+0200",
                    "created": "2019-04-12T12:44:51.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-12T12:44:58.788+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-12T13:00:08.349+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "106319",
                "key": "ZMETRIC-120",
                "fields": {
                    "issuetype": {
                        "id": "10001",
                        "name": "Story",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-15T14:57:33.000+0200",
                    "created": "2019-04-12T12:32:31.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-12T13:00:48.935+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-15T14:57:33.809+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "106315",
                "key": "ZMETRIC-119",
                "fields": {
                    "issuetype": {
                        "id": "10000",
                        "name": "Epic",
                        "subtask": false
                    },
                    "resolutiondate": null,
                    "created": "2019-04-12T11:51:45.000+0200"
                },
                "changelog": {
                    "histories": []
                }
            },
            {
                "id": "106160",
                "key": "ZMETRIC-118",
                "fields": {
                    "issuetype": {
                        "id": "10001",
                        "name": "Story",
                        "subtask": false
                    },
                    "resolutiondate": "2019-04-12T19:11:51.000+0200",
                    "created": "2019-04-10T17:42:59.000+0200"
                },
                "changelog": {
                    "histories": [
                        {
                            "created": "2019-04-10T18:50:57.907+0200",
                            "items": [
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "10100",
                                    "fromString": "To Do",
                                    "to": "3",
                                    "toString": "In Progress"
                                }
                            ]
                        },
                        {
                            "created": "2019-04-12T19:11:51.082+0200",
                            "items": [
                                {
                                    "field": "resolution",
                                    "fieldtype": "jira",
                                    "from": null,
                                    "fromString": null,
                                    "to": "10000",
                                    "toString": "Done"
                                },
                                {
                                    "field": "status",
                                    "fieldtype": "jira",
                                    "from": "3",
                                    "fromString": "In Progress",
                                    "to": "11803",
                                    "toString": "Done"
                                }
                            ]
                        }
                    ]
                }
            }
        ];
        const zMetricWorkflow = [
            {
                "id": "1",
                "name": "Bug",
                "subtask": false,
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
                ]
            },
            {
                "id": "10000",
                "name": "Epic",
                "subtask": false,
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
                ]
            },
            {
                "id": "11201",
                "name": "Spike",
                "subtask": false,
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
                ]
            },
            {
                "id": "10001",
                "name": "Story",
                "subtask": false,
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
                ]
            },
            {
                "id": "5",
                "name": "Sub-task",
                "subtask": true,
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
                ]
            },
            {
                "id": "3",
                "name": "Task",
                "subtask": false,
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
                ]
            }
        ];
        it("ZMETRIC issues", () => {
            mergeIssues(zMetricIssues, zMetricWorkflow);
        });

        //TODO: test data with empty pruneHistories //Issue with no status transitions

        //TODO: test data with two empty data arrays for mergeCumulativeFlowData //first two issues have no status transitions
        //all issues have no status tranistions / all are unfinished?

    });
});
