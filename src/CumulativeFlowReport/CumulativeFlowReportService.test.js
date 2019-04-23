import {mergeData} from "./CumulativeFlowReportService";

describe("CumulativeFlowReportService", () => {


    it('merges data flows for all selected issues', function () {
        const unmergedData = [
            {
                "id": "1",
                "name": "Bug",
                "data": [
                    {
                        "date": "2019-02-01",
                        "To Do": 1,
                        "In Progress": 1,
                    },
                    {
                        "date": "2019-02-02",
                        "To Do": 1,
                        "In Progress": 1
                    }
                ]
            }, {
                "id": "2",
                "name": "Story",
                "data": [
                    {
                        "date": "2019-02-01",
                        "To Do": 1,
                        "In Progress": 1,
                    },
                    {
                        "date": "2019-02-03",
                        "To Do": 1,
                        "In Progress": 1
                    }
                ]
            }, {
                "id": "3",
                "name": "Epic",
                "data": [
                    {
                        "date": "2019-02-04",
                        "To Do": 1,
                        "In Progress": 1,
                    },
                    {
                        "date": "2019-02-05",
                        "To Do": 1,
                        "In Progress": 1
                    }
                ]
            }
        ];
        const mergedData = [
            {
                "date": "2019-02-01",
                "To Do": 2,
                "In Progress": 2,
            },
            {
                "date": "2019-02-02",
                "To Do": 1,
                "In Progress": 1
            },
            {
                "date": "2019-02-03",
                "To Do": 1,
                "In Progress": 1
            }
        ];
        const selectedIssueTypes = new Map([["Bug", {"selected": true}], ["Story", {"selected": true}, ["Epic", {"selected": false}]]]);

        expect(mergeData(unmergedData, selectedIssueTypes)).toEqual(mergedData);
    });

    it('adds data flows for single issue', function () {
        const unmergedData = [
            {"id": "2",
                "name": "Story",
                "data": [
                    {
                        "date": "2019-02-01",
                        "To Do": 1,
                        "In Progress": 1,
                    },
                    {
                        "date": "2019-02-03",
                        "To Do": 1,
                        "In Progress": 1
                    }
                ]
            }
        ];
        const mergedData = [
            {
                "date": "2019-02-01",
                "To Do": 1,
                "In Progress": 1,
            },
            {
                "date": "2019-02-03",
                "To Do": 1,
                "In Progress": 1
            }
        ];
        const selectedIssueTypes = new Map([["Story", {"selected": true}]]);

        expect(mergeData(unmergedData, selectedIssueTypes)).toEqual(mergedData);
    });
});
