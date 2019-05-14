import {
  calculateCycleTime,
  calculateCycleTimeDataPoints,
  InvalidDataError,
  issueToCycleTimeDatePair
} from "./CycleTimeDataAdapter";
import {calculateFullDataSetForLeadOrCycleTime} from "./LeadTimeDataAdapter";

describe("CycleTimeDataAdapter", () =>{

  //Can we assume startStatus will always be before endStatus?
  describe("Calculates cycle time and end date for a single issue, given a start and end status", () => {
    const issue1 = {
      "fields": {
        "resolutiondate": "2019-02-21T02:27:28.000+0000",
        "created": "2019-02-17T23:52:36.000+0000"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-02-17T23:52:48.362+0000",
            "items": [
              {
                "field": "assignee",
                "fromString": "Tomasz Bartyzel",
                "toString": "Zulfadli Noor Sazali"
              }
            ]
          },
          {
            "created": "2019-02-19T00:05:19.853+0000",
            "items": [
              {
                "field": "status",
                "fromString": "Gathering Interest",
                "toString": "Reviewing"
              }
            ]
          },
          {
            "created": "2019-02-21T02:27:28.482+0000",
            "items": [
              {
                "field": "resolution",
                "fromString": null,
                "toString": "Done"
              },
              {
                "field": "status",
                "fromString": "Reviewing",
                "toString": "Resolved"
              }
            ]
          }
        ]
      }
    };
    const issue2 = {
      "fields": {
        "created": "2019-02-17T23:52:36.000+0000"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-02-17T23:52:48.362+0000",
            "items": [
              {
                "field": "assignee",
                "fromString": "Tomasz Bartyzel",
                "toString": "Zulfadli Noor Sazali"
              }
            ]
          },
          {
            "created": "2019-02-19T00:05:19.853+0000",
            "items": [
              {
                "field": "status",
                "fromString": "Gathering Interest",
                "toString": "Reviewing"
              }
            ]
          }
        ]
      }
    };
    const issue3 = {
      "fields": {
        "resolutiondate": "2019-02-28T02:27:28.000+0000",
        "created": "2019-02-17T23:52:36.000+0000"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-02-17T23:52:48.362+0000",
            "items": [
              {
                "field": "assignee",
                "fromString": "Tomasz Bartyzel",
                "toString": "Zulfadli Noor Sazali"
              }
            ]
          },
          {
            "created": "2019-02-19T00:05:19.853+0000",
            "items": [
              {
                "field": "status",
                "fromString": "Gathering Interest",
                "toString": "Reviewing"
              }
            ]
          },
          {
            "created": "2019-02-23T00:05:19.853+0000",
            "items": [
              {
                "field": "status",
                "fromString": "Reviewing",
                "toString": "Under Consideration"
              }
            ]
          },
          {
            "created": "2019-02-27T00:05:19.853+0000",
            "items": [
              {
                "field": "status",
                "fromString": "Under Consideration",
                "toString": "Reviewing"
              }
            ]
          },
          {
            "created": "2019-02-28T02:27:28.482+0000",
            "items": [
              {
                "field": "resolution",
                "fromString": null,
                "toString": "Done"
              },
              {
                "field": "status",
                "fromString": "Reviewing",
                "toString": "Resolved"
              }
            ]
          }
        ]
      }
    };
    it("issue1", () => {
      const startStatus = "Reviewing";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-21", metricValue:2})
    });

    it("issue1a", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-21", metricValue:4})
    });

    it("issue1b", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Gathering Interest";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-19", metricValue:2})//TODO: date: resolved or endStatus?
    });

    it("unresolved issue that hasn't reached the end status", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair(issue2, startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    it("unresolved issue that has reached the end status", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Gathering Interest";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-19", metricValue:2}) //TODO: date: resolved or endStatus?
    });

    it("issue passes through start status more than once, the earliest should be used", () => {
      const startStatus = "Reviewing";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue3, startStatus, endStatus)).toEqual({date: "2019-02-28", metricValue:9})
    });

    it("issue passes through end status more than once, the latest should be used", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue3, startStatus, endStatus)).toEqual({date: "2019-02-28", metricValue:11}) //TODO: date: resolved or endStatus?
    });

    xit("issue passes through end status then goes back to a status before end status and does not cross end status again", () => {
      const startStatus = "Reviewing";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair("", startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    it("issue never transitions into the startStatus", () =>{
      const startStatus = "Under Consideration";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair(issue1, startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    it("issue never transitions into the endStatus", () =>{ //Unresolved and resolved cases
      //But is still resolved?
      const startStatus = "Gathering Interest";
      const endStatus = "Waiting for Release";
      expect(() => {issueToCycleTimeDatePair(issue1, startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    it("issue transitions into endStatus before startStatus, implying a negative cycleTime", () => {
      const startStatus = "Reviewing";
      const endStatus = "Gathering Interest";
      expect(() => {issueToCycleTimeDatePair(issue1, startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

  });
  //FROM THIS POINT THE SAME AS LEAD TIME
  const issues = [
    {
      "id": "107736",
      "key": "ZAPP-585",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-05-09T11:31:55.000+0200",
        "created": "2019-05-08T11:38:04.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-05-08T11:38:10.594+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-05-08T11:38:14.575+0200",
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
            "created": "2019-05-09T09:29:36.171+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-05-09T11:31:55.823+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "107715",
      "key": "ZAPP-584",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-05-09T08:20:49.000+0200",
        "created": "2019-05-08T09:15:40.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-05-08T09:15:53.841+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-05-09T08:20:49.943+0200",
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
                "from": "10100",
                "fromString": "To Do",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "107612",
      "key": "ZAPP-582",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-05-08T09:33:34.000+0200",
        "created": "2019-05-07T10:07:05.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-05-07T10:07:18.715+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-05-07T10:07:59.588+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-05-07T10:32:40.877+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-05-07T13:22:00.198+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-05-08T09:33:34.862+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "107605",
      "key": "ZAPP-581",
      "fields": {
        "issuetype": {
          "id": "10001",
          "name": "Story",
          "subtask": false
        },
        "resolutiondate": "2019-05-09T11:31:41.000+0200",
        "created": "2019-05-07T09:14:52.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-05-07T09:15:23.213+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-05-07T09:15:55.154+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-05-07T13:22:11.333+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-05-07T17:04:25.700+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-05-09T11:31:41.515+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "107468",
      "key": "ZAPP-577",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-05-06T06:03:42.000+0200",
        "created": "2019-05-02T18:10:20.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-05-02T18:10:25.872+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-05-02T18:10:31.475+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-05-06T05:56:09.192+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-05-06T06:03:25.215+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-05-06T06:03:42.295+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "106846",
      "key": "ZAPP-570",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-05-07T12:03:19.000+0200",
        "created": "2019-04-23T12:19:54.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-04-23T12:20:08.039+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-04-30T09:37:07.569+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-04-30T09:37:13.650+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-30T17:35:20.531+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-05-07T11:36:47.419+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11802",
                "fromString": "In QA",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-05-07T12:03:19.605+0200",
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
                "from": "11504",
                "fromString": "Ready",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "106721",
      "key": "ZAPP-569",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-04-29T12:05:11.000+0200",
        "created": "2019-04-18T09:54:36.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-04-23T12:20:04.936+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-04-23T12:20:49.507+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-04-23T12:20:57.224+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-23T18:38:04.315+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-04-29T12:05:11.800+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "106711",
      "key": "ZAPP-568",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": "2019-04-29T08:18:20.000+0200",
        "created": "2019-04-18T07:06:13.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-04-18T07:06:31.532+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-23T09:54:37.957+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-04-24T10:57:41.260+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-24T15:05:20.568+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-04-24T15:48:46.890+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11802",
                "fromString": "In QA",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-04-24T17:33:00.948+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-24T18:11:04.277+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-04-29T08:18:20.553+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "106708",
      "key": "ZAPP-567",
      "fields": {
        "issuetype": {
          "id": "10001",
          "name": "Story",
          "subtask": false
        },
        "resolutiondate": "2019-04-29T12:06:44.000+0200",
        "created": "2019-04-17T18:36:38.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-04-17T18:39:09.623+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-04-17T18:39:29.978+0200",
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
            "created": "2019-04-18T13:00:25.910+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-04-29T12:06:44.337+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "106707",
      "key": "ZAPP-566",
      "fields": {
        "issuetype": {
          "id": "10001",
          "name": "Story",
          "subtask": false
        },
        "resolutiondate": "2019-04-29T12:07:46.000+0200",
        "created": "2019-04-17T18:33:19.000+0200"
      },
      "changelog": {
        "histories": [
          {
            "created": "2019-04-17T18:39:17.485+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "12602",
                "fromString": "Backlog",
                "to": "10100",
                "toString": "To Do"
              }
            ]
          },
          {
            "created": "2019-04-17T18:39:33.923+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "10100",
                "fromString": "To Do",
                "to": "11504",
                "toString": "Ready"
              }
            ]
          },
          {
            "created": "2019-04-18T13:04:34.508+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "11504",
                "fromString": "Ready",
                "to": "3",
                "toString": "In Progress"
              }
            ]
          },
          {
            "created": "2019-04-23T12:20:24.875+0200",
            "items": [
              {
                "field": "status",
                "fieldtype": "jira",
                "from": "3",
                "fromString": "In Progress",
                "to": "11802",
                "toString": "In QA"
              }
            ]
          },
          {
            "created": "2019-04-29T12:07:46.468+0200",
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
                "from": "11802",
                "fromString": "In QA",
                "to": "11803",
                "toString": "Done"
              }
            ]
          }
        ]
      }
    }
  ];
  describe("Converts a list of issues into a list of data points", () => {
    it("Story", () => {
      const cycleTimeData = [{date: "2019-05-09", metricValue: 2},{date: "2019-04-29", metricValue: 12},{date: "2019-04-29", metricValue: 11}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      const storyIssues = issues.filter(issue => issue.fields.issuetype.name === "Story");
      expect(calculateCycleTimeDataPoints(storyIssues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    });

    it("Bug", () => {
      const cycleTimeData = [{date: "2019-05-09", metricValue: 1},{date: "2019-05-07", metricValue: 0},{date: "2019-05-06", metricValue: 4},{date: "2019-04-30", metricValue: 7},{date: "2019-04-23", metricValue: 0}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      const bugIssues = issues.filter(issue => issue.fields.issuetype.name === "Bug");
      expect(calculateCycleTimeDataPoints(bugIssues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    });

    it("Both", () => {
      const cycleTimeData = [{date: "2019-05-09", metricValue: 1},{date: "2019-05-07", metricValue: 0},{date: "2019-05-09", metricValue: 2},{date: "2019-05-06", metricValue: 4},{date: "2019-04-30", metricValue: 7},{date: "2019-04-23", metricValue: 0},{date: "2019-04-29", metricValue: 12},{date: "2019-04-29", metricValue: 11}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      expect(calculateCycleTimeDataPoints(issues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    })
  });

  describe("calculateFullDataSetForLeadOrCycleTime", () => {
    it("for both bug and story issue types", () => {
      const dataPoints = [{date: "2019-05-09", metricValue: 1},{date: "2019-05-07", metricValue: 0},{date: "2019-05-09", metricValue: 2},{date: "2019-05-06", metricValue: 4},{date: "2019-04-30", metricValue: 7},{date: "2019-04-23", metricValue: 0},{date: "2019-04-29", metricValue: 12},{date: "2019-04-29", metricValue: 11}];
      const cycleTimeData = [
        {
          "date": "2019-04-23",
          "cycleTime": 0
        },
        {
          "date": "2019-04-24",
          "cycleTime": 0
        },
        {
          "date": "2019-04-25",
          "cycleTime": 0
        },
        {
          "date": "2019-04-26",
          "cycleTime": 0
        },
        {
          "date": "2019-04-27",
          "cycleTime": 0
        },
        {
          "date": "2019-04-28",
          "cycleTime": 0
        },
        {
          "date": "2019-04-29",
          "cycleTime": 7.666666666666667
        },
        {
          "date": "2019-04-30",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-01",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-02",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-03",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-04",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-05",
          "cycleTime": 7.5
        },
        {
          "date": "2019-05-06",
          "cycleTime": 6.8
        },
        {
          "date": "2019-05-07",
          "cycleTime": 5.666666666666667
        },
        {
          "date": "2019-05-08",
          "cycleTime": 5.666666666666667
        },
        {
          "date": "2019-05-09",
          "cycleTime": 4.625
        }
      ];
      expect(calculateFullDataSetForLeadOrCycleTime(dataPoints, "2019-05-09", "cycleTime")).toEqual(cycleTimeData)
    });
  });

  describe("calculateCycleTime", () => {
    const cycleTimeData = [
      {
        "date": "2019-04-23",
        "cycleTime": 0
      },
      {
        "date": "2019-04-24",
        "cycleTime": 0
      },
      {
        "date": "2019-04-25",
        "cycleTime": 0
      },
      {
        "date": "2019-04-26",
        "cycleTime": 0
      },
      {
        "date": "2019-04-27",
        "cycleTime": 0
      },
      {
        "date": "2019-04-28",
        "cycleTime": 0
      },
      {
        "date": "2019-04-29",
        "cycleTime": 7.666666666666667
      },
      {
        "date": "2019-04-30",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-01",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-02",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-03",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-04",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-05",
        "cycleTime": 7.5
      },
      {
        "date": "2019-05-06",
        "cycleTime": 6.8
      },
      {
        "date": "2019-05-07",
        "cycleTime": 5.666666666666667
      },
      {
        "date": "2019-05-08",
        "cycleTime": 5.666666666666667
      },
      {
        "date": "2019-05-09",
        "cycleTime": 4.625
      }
    ];
    it("calculate cycle time for issues including an unresolved issue", () => {
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      expect(calculateCycleTime(issues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    });

    const unresolvedIssue = {
      "id": "23454",
      "key": "ZAPP-6012",
      "fields": {
        "issuetype": {
          "id": "1",
          "name": "Bug",
          "subtask": false
        },
        "resolutiondate": null,
        "created": "2019-05-08T11:38:04.000+0200"
      },
      "changelog": {
        "histories":[]
      }
    };
    it("calculate cycle time for issues where no issues ever enter the end status", () => {
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      expect(calculateCycleTime([...issues, unresolvedIssue], issueTypeToStartEndStatusMap).splice(0, 20)).toEqual([...cycleTimeData, {"cycleTime": 4.625, "date": "2019-05-10"}, {"cycleTime": 4.625, "date": "2019-05-11"}, {"cycleTime": 4.625, "date": "2019-05-12"}])
    });

    it("No resolved issues", () => {
      const unresolvedIssue1 = {
        "id": "23455",
        "key": "ZAPP-6013",
        "fields": {
          "issuetype": {
            "id": "1",
            "name": "Bug",
            "subtask": false
          },
          "resolutiondate": null,
          "created": "2019-04-11T11:38:04.000+0200"
        },
        "changelog": {
          "histories":[]
        }
      };
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In Progress"},
        Story: {startStatus: "In Progress" , endStatus: "In QA"}
      };
      expect(calculateCycleTime([unresolvedIssue1, unresolvedIssue],issueTypeToStartEndStatusMap)).toEqual([])

    })
  });


  //TODO: Add test for no resolved issues // none that enter the end status?
});
