import {getColoursForNewIssues} from "./CumulativeFlowStateInitialization";

describe("CumulativeFlowStateInitialization", () => {

  const workflow = [
    {
      "id": "1",
      "name": "Bug",
      "statuses": [
        {
          "name": "Bug To Do",
          "id": "3",
        },
        {
          "name": "In Progress",
          "id": "2"
        }
      ]
    }, {
      "id": "11201",
      "name": "Epic",
      "statuses": [
        {
          "name": "In Progress",
          "id": "2"
        },
        {
          "name": "Done",
          "id": "5"
        }
      ]
    }, {
      "id": "11204",
      "name": "Spike",
      "statuses": [
        {
          "name": "In Progress",
          "id": "2"
        }
      ]
    }, {
      "id": "10001",
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
          "id": "4"
        }
      ]
    }
  ];

  it("memorises the status colours", () => {
    const expectedColours = new Map([
      ["On Hold", "#ffc658"],
      ["To Do", "#bcbd22"],
      ["In Progress", "#82ca9d"],
      ["Done", "#ff7300"],
      ["On Hold", "#ff7f0e"],
      ["Bug To Do", "#8884d8"]
    ]);

    expect(getColoursForNewIssues(workflow)).toEqual(expectedColours);
  });
});
