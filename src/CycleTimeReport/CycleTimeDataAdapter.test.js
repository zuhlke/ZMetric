import {calculateCycleTimeDataPoints, InvalidDataError, issueToCycleTimeDatePair} from "./CycleTimeDataAdapter";

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
      const endStatus = "Resolved";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-21", cycleTime:2})
    });

    it("issue1a", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Resolved";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-21", cycleTime:4})
    });

    it("issue1b", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-19", cycleTime:2})//TODO: date: resolved or endStatus?
    });

    it("unresolved issue that hasn't reached the end status", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair(issue2, startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    it("unresolved issue that has reached the end status", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-19", cycleTime:2}) //TODO: date: resolved or endStatus?
    });

    it("issue passes through start status more than once, the earliest should be used", () => {
      const startStatus = "Reviewing";
      const endStatus = "Resolved";
      expect(issueToCycleTimeDatePair(issue3, startStatus, endStatus)).toEqual({date: "2019-02-28", cycleTime:9})
    });

    it("issue passes through end status more than once, the latest should be used", () => {
      const startStatus = "Gathering Interest";
      const endStatus = "Reviewing";
      expect(issueToCycleTimeDatePair(issue3, startStatus, endStatus)).toEqual({date: "2019-02-27", cycleTime:10}) //TODO: date: resolved or endStatus?
    });

    xit("issue passes through end status then goes back through end status the other way and does not cross end status again", () => {
      const startStatus = "Reviewing";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair("", startStatus, endStatus)}).toThrowError(InvalidDataError);
    });

    xit("issue passes through end status then goes back to a status before end status and does not cross end status again", () => {
      const startStatus = "Reviewing";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair("", startStatus, endStatus)}).toThrowError(InvalidDataError);
    });


    //Is it possible to skip statuses? or does it transition into that status in the background?
    it("issue never transitions into the startStatus", () =>{ //Unresolved and resolved cases
      const startStatus = "Under Consideration";
      const endStatus = "Resolved";
      expect(() => {issueToCycleTimeDatePair(issue1, startStatus, endStatus)}).toThrowError(InvalidDataError);
      // expect(issueToCycleTimeDatePair(issue1, startStatus, endStatus)).toEqual({date: "2019-02-21", cycleTime:2})
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

    // it("issue is resolved, then reopened?", () => {
    //   //resolved or not seems irrelevant
    // });
    //
    // it("workflow is updated during issues lifetime", () => {
    //     //Shouldn't actually be a problem
    // });

    it("start and end status are the same status?!", () => {
      const startStatus = "Reviewing";
      const endStatus = "Reviewing";
      expect(() => {issueToCycleTimeDatePair(issue1, startStatus, endStatus)}).toThrowError(InvalidDataError);
    })




  });
  //FROM THIS POINT THE SAME AS LEAD TIME
  describe("Converts a list of issues into a list of data points for the chart by averaging the cycle time values for each date with cycle time values", () => {
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
    it("Story", () => {
      const cycleTimeData = [{date: "2019-05-09", cycleTime: 2},{date: "2019-04-29", cycleTime: 12},{date: "2019-04-29", cycleTime: 11}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In QA"},
        Story: {startStatus: "In Progress" , endStatus: "Done"}
      };
      const storyIssues = issues.filter(issue => issue.fields.issuetype.name === "Story");
      expect(calculateCycleTimeDataPoints(storyIssues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    });

    it("Bug", () => {
      const cycleTimeData = [{date: "2019-05-09", cycleTime: 1},{date: "2019-05-07", cycleTime: 0},{date: "2019-05-06", cycleTime: 4},{date: "2019-04-30", cycleTime: 7},{date: "2019-04-23", cycleTime: 0}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In QA"},
        Story: {startStatus: "In Progress" , endStatus: "Done"}
      };
      const bugIssues = issues.filter(issue => issue.fields.issuetype.name === "Bug");
      console.log(JSON.stringify(bugIssues));
      expect(calculateCycleTimeDataPoints(bugIssues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    });

    it("Both", () => {
      const cycleTimeData = [{date: "2019-05-09", cycleTime: 1},{date: "2019-05-07", cycleTime: 0},{date: "2019-05-09", cycleTime: 2},{date: "2019-05-06", cycleTime: 4},{date: "2019-04-30", cycleTime: 7},{date: "2019-04-23", cycleTime: 0},{date: "2019-04-29", cycleTime: 12},{date: "2019-04-29", cycleTime: 11}];
      const issueTypeToStartEndStatusMap = {
        Bug: {startStatus: "To Do" , endStatus: "In QA"},
        Story: {startStatus: "In Progress" , endStatus: "Done"}
      };
      expect(calculateCycleTimeDataPoints(issues, issueTypeToStartEndStatusMap)).toEqual(cycleTimeData)
    })
  });


});
