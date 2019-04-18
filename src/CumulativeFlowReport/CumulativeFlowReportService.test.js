import {CumulativeFlowReport} from "./CumulativeFlowReport";
import {getColoursForNewIssues} from "./CumulativeFlowReportService";

describe("CumulativeFlowReport", () => {
    const workflow = [
        {
            "id": "1",
            "name": "Story",
            "statuses": [
                {
                    "name": "To Do",
                    "id": "1",
                },
                {
                    "name": "In Progress",
                    "id": "2"
                },
                {
                    "name": "On Hold",
                    "id": "3"
                }
            ]
        }
    ];

    it("memorises the status colours", () => {
        const previousColours = new Map([
            ["To Do", "#8884d8"],
            ["In Progress", "#82ca9d"]
        ]);

        const expectedColours = new Map([
            ["On Hold", "#ffc658"],
            ["To Do", "#8884d8"],
            ["In Progress", "#82ca9d"]
        ]);

        expect(getColoursForNewIssues(workflow, previousColours)).toEqual(expectedColours)
    });

});
