import {
  getFilteredIssueStatuses,
  mergeData,
  toggleProperty,
  updateAvailableWorkflowStatusTypes
} from "./CumulativeFlowReportService";

describe("CumulativeFlowReportService", () => {
  const workflow = [
    {
      "id": "1",
      "name": "firstIssueType",
      "statuses": [
        {
          "name": "firstStatus",
          "id": "1",
        },
        {
          "name": "secondStatus",
          "id": "2",
        }
      ]
    }, {
      "id": "2",
      "name": "secondIssueType",
      "statuses": [
        {
          "name": "secondStatus",
          "id": "2",
        },
        {
          "name": "thirdStatus",
          "id": "3"
        }
      ]
    }, {
      "id": "3",
      "name": "thirdIssueType",
      "statuses": [
        {
          "name": "fourthStatus",
          "id": "4"
        },
        {
          "name": "fifthStatus",
          "id": "5"
        }
      ]
    }, {
      "id": "4",
      "name": "fourthIssueType",
      "statuses": [
        {
          "name": "sixthStatus",
          "id": "4"
        }
      ]
    }
  ];

  it("getFilteredIssueStatuses returns a list of the statuses belonging to the selected issueTypes, with duplicates", () => {
    const expectedFilteredIssueStatuses = [
      {name: "firstStatus", id: "1"},
      {name: "secondStatus", id: "2"},
      {name: "secondStatus", id: "2"},
      {name: "thirdStatus", id: "3"}
    ];
    const selectedIssueTypes = new Map([
      ["firstIssueType", {id: "1", selected: true}],
      ["secondIssueType", {id: "2", selected: true}],
      ["thirdIssueType", {id: "3", selected: false}],
      ["fourthIssueType", {id: "4", selected: false}]
    ]);

    expect(getFilteredIssueStatuses(workflow, selectedIssueTypes)).toEqual(expectedFilteredIssueStatuses);
  });

  describe("updateAvailableWorkflowStatusTypes", () => {
    const initialSelectedWorkflowStatuses = new Map([
      ["firstStatus", {id: "1", selected: true}],
      ["secondStatus", {id: "2", selected: false}],
      ["thirdStatus", {id: "3", selected: false}],
    ]);

    it("adds two new statuses (initialized to unselected) when a new issue Type is added", () => {
      const expectedSelectedWorkflowStatuses = new Map([
        ["firstStatus", {id: "1", selected: true}],
        ["secondStatus", {id: "2", selected: false}],
        ["thirdStatus", {id: "3", selected: false}],
        ["fourthStatus", {id: "4", selected: false}],
        ["fifthStatus", {id: "5", selected: false}]
      ]);
      const updatedIssueTypes = new Map([
        ["firstIssueType", {id: "1", selected: true}],
        ["secondIssueType", {id: "2", selected: true}],
        ["thirdIssueType", {id: "3", selected: true}],
        ["fourthIssueType", {id: "4", selected: false}]
      ]);
      expect(updateAvailableWorkflowStatusTypes(updatedIssueTypes, workflow, initialSelectedWorkflowStatuses)).toEqual(expectedSelectedWorkflowStatuses)
    });

    it("removes a statuses when a issue type is removed, but keeps the status that belonged to both issueTypes", () => {
      const expectedSelectedWorkflowStatuses = new Map([
        ["secondStatus", {id: "2", selected: false}],
        ["thirdStatus", {id: "3", selected: false}]
      ]);
      const updatedIssueTypes = new Map([
        ["firstIssueType", {id: "1", selected: false}],
        ["secondIssueType", {id: "2", selected: true}],
        ["thirdIssueType", {id: "3", selected: false}],
        ["fourthIssueType", {id: "4", selected: false}]
      ]);
      expect(updateAvailableWorkflowStatusTypes(updatedIssueTypes, workflow, initialSelectedWorkflowStatuses)).toEqual(expectedSelectedWorkflowStatuses)
    });
  });

  describe("toggleProperty", () => {
    it("correctly toggles property to true for state variable used to store multiple checkboxes", () => {
      const initialData = new Map([
        ["firstProperty", {id: 1, selected: true}],
        ["secondProperty", {id: 2, selected: false}],
        ["thirdProperty", {id: 3, selected: true}]
      ]);
      const updatedData = new Map([
        ["firstProperty", {id: 1, selected: true}],
        ["secondProperty", {id: 2, selected: false}],
        ["thirdProperty", {id: 3, selected: false}]
      ]);
      expect(toggleProperty(initialData, "thirdProperty")).toEqual(updatedData);
    });

    it("correctly toggles property to false for state variable used to store multiple checkboxes", () => {
      const initialData = new Map([
        ["firstProperty", {id: 1, selected: true}],
        ["secondProperty", {id: 2, selected: false}],
        ["thirdProperty", {id: 3, selected: true}]
      ]);
      const updatedData = new Map([
        ["firstProperty", {id: 1, selected: true}],
        ["secondProperty", {id: 2, selected: true}],
        ["thirdProperty", {id: 3, selected: true}]
      ]);
      expect(toggleProperty(initialData, "secondProperty")).toEqual(updatedData);
    });
  });

  describe("mergeData", () => {
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
        {
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

});
