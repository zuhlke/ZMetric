import {convertIssueChangelogToCumulativeFlow, mergeCumulativeFlowData, mergeIssues} from "./DataAdapter";

describe("DataAdapter", () =>{
    const workflow = [
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
                    "resolutiondate": "2019-03-26T09:19:20.000+0000",
                    "created": "2019-03-18T23:00:43.000+0000"
                },
            changelog: {
                histories: [
                    {
                        created: "2019-03-21T23:52:48.362+0000",
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
                        "created": "2019-03-24T09:19:20.978+0000",
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
                        "created": "2019-03-26T00:45:44.883+0000",
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

        const issue1And2MergedCumulativeFlowData = [
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
                "date": "2019-03-01"
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
                "date": "2019-03-02"
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
                "date": "2019-03-03"
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
                "date": "2019-03-04"
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
                "date": "2019-03-05"
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
                "date": "2019-03-06"
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
                "date": "2019-03-07"
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
                "date": "2019-03-08"
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
                "date": "2019-03-09"
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
                "date": "2019-03-10"
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
                "date": "2019-03-11"
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
                "date": "2019-03-12"
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
                "date": "2019-03-13"
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
                "date": "2019-03-14"
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
                "date": "2019-03-15"
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
                "date": "2019-03-16"
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
                "date": "2019-03-17"
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
                "date": "2019-03-18"
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
                "date": "2019-03-19"
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
                "date": "2019-03-20"
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
                "date": "2019-03-21"
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
                "date": "2019-03-22"
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
                "date": "2019-03-23"
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
                "date": "2019-03-24"
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
                "date": "2019-03-25"
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
                "date": "2019-03-26"
            }
        ];

        describe("convertIssueChangelogToCumulativeFlow", () => {
            it("converts issue1 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue1, workflow)).toEqual(issue1CumulativeFlowData);
            });

            it("converts issue2 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue2, workflow)).toEqual(issue2CumulativeFlowData);
            });

            it("converts issue3 to cumulative flow for that issue", () => {
                expect(convertIssueChangelogToCumulativeFlow(issue3, workflow)).toEqual(issue3CumulativeFlowData);
            });
        });

        it("merges cumulative flow data for two issues of the same type into one", () => {
            expect(mergeCumulativeFlowData(issue2CumulativeFlowData.cumulativeFlow, issue1CumulativeFlowData.cumulativeFlow)).toEqual(issue1And2MergedCumulativeFlowData);
        });

        it("converts bug and Suggestion issues to combined cumulative flow data", () => {
            const combinedCumulativeFlowData = [{
                id: "1000",
                name: "Suggestion",
                data: issue1And2MergedCumulativeFlowData
            },{
                id: "1",
                name: "Bug",
                data: issue3CumulativeFlowData.cumulativeFlow
            }];
            expect(mergeIssues(issues, workflow)).toEqual(combinedCumulativeFlowData);
        });

        it("merge cumulative flow data for issues with non-overlapping date ranges", () => {
            const issuesAtDifferentTimes = [issue3, issue4];
            const combinedCumulativeFlow = [
                {
                    "data": issue3And4MergedCumulativeFlowData,
                    "id": "1",
                    "name": "Bug"
                }
            ];
            expect(mergeIssues(issuesAtDifferentTimes, workflow)).toEqual(combinedCumulativeFlow);
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
                    "resolutiondate": "2019-02-15T17:30:43.000+0000",
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
            },
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
        it("mergeIssues to combined cumulative flow data", () => {
            const combinedJRACumulativeFlowData = [];
            expect(mergeIssues(JRAIssues, workflow)).toEqual(combinedJRACumulativeFlowData);
        });
    });
});
