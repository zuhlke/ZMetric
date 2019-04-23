import {getColoursForNewIssues} from "./CumulativeFlowStateInitialization";

describe("CumulativeFlowStateInitialization", () => {
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
        const expectedColours = new Map([
            ["On Hold", "#ffc658"],
            ["To Do", "#8884d8"],
            ["In Progress", "#82ca9d"]
        ]);

        expect(getColoursForNewIssues(workflow)).toEqual(expectedColours);
    });
});
