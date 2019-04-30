import {calculateAverageThroughput, convertFromJiraToThroughput} from "./ThroughputDataAdapter";
import moment from "moment";

const data = [
    {
        "date": "2019-02-01",
        "throughput":2
    },
    {
        "date": "2019-02-02",
        "throughput":6
    },
    {
        "date": "2019-02-03",
        "throughput":3
    },
    {
        "date": "2019-02-04",
        "throughput":7
    }];

describe("ThroughputDataAdapter", () => {
    it("calculates average throughput from data set correctly", () =>{
        expect(calculateAverageThroughput(data)).toEqual(4.5);
    });
    it("calculates average throughput for empty data set as 0", () =>{
        expect(calculateAverageThroughput([])).toEqual(0);
    });
    it('should return one entry when given a jira issue entry that is created and resolved on the same day', () => {
        const jiraIssue = {
            "expand": "names,schema",
            "startAt": 0,
            "maxResults": 1,
            "total": 160,
            "issues": [
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-161",
                    "fields": {
                        "resolutiondate": "2019-02-08T12:30:53.000+0100",
                        "created": "2019-02-08T12:20:36.000+0100"
                    }
                }
            ]
        };
        const result = convertFromJiraToThroughput(jiraIssue);
        expect(result).toEqual([{date: "2019-02-08", throughput: 1}])
    });
    it('should return two entries when given two jira issue entries on that have been created and resolved on consecutive dates', () => {
        const jiraIssue = {
            "expand": "names,schema",
            "startAt": 0,
            "maxResults": 1,
            "total": 160,
            "issues": [
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-161",
                    "fields": {
                        "resolutiondate": "2019-02-08T12:30:53.000+0100",
                        "created": "2019-02-08T12:20:36.000+0100"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-162",
                    "fields": {
                        "resolutiondate": "2019-02-09T12:30:53.000+0100",
                        "created": "2019-02-09T12:20:36.000+0100"
                    }
                }
            ]
        };
        const result = convertFromJiraToThroughput(jiraIssue);
        expect(result).toEqual([{date: "2019-02-08", throughput: 1}, {date: "2019-02-09", throughput: 1}])
    });

    it('should return all dates until today if a issue hasn\'t been resolved', () => {
        const jiraIssue = {
            "expand": "names,schema",
            "startAt": 0,
            "maxResults": 1,
            "total": 236802,
            "issues": [
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": null,
                        "created": "2019-04-02T00:00:00.000+0000"
                    }
                }
            ]
        };

        const result =  convertFromJiraToThroughput(jiraIssue);
        expect(result[result.length - 1].date).toEqual(moment().format('YYYY-MM-DD'))

    });

});
