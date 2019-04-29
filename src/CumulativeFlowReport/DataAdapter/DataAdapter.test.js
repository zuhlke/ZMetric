import {convertIssueChangelogToCumulativeFlow, mergeCumulativeFlowData, mergeIssues} from "./DataAdapter";

describe("DataAdapter", () =>{
    describe("converts issues to cumulative flow data", () => {
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
                Resolved: 1
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
    });


});
