import {DataAdapter} from "./DataAdapter";
import moment from "moment";

describe('DataAdapter', () => {
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
        const result = new DataAdapter().convert(jiraIssue);
        expect(result).toEqual([{date: "2019-02-08", averageLeadTime: 0}])
    });
    it('should return two entries when given two jira issue entries on that have been created and resolved on consequtive dates', () => {
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
        const result = new DataAdapter().convert(jiraIssue);
        expect(result).toEqual([{date: "2019-02-08", averageLeadTime: 0}, {date: "2019-02-09", averageLeadTime: 0}])
    });
    it('should return the same number of date entries for every date between creation and resolution date of jira issue entry', () => {
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
                        "resolutiondate": "2019-02-20T12:30:53.000+0100",
                        "created": "2019-02-08T12:20:36.000+0100"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);

        expect(result.length).toEqual(13)

    });
    it('should return the same number of date entries for every date between creation and resolution date of two jira issue entries whos dates are the same', () => {
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
                        "resolutiondate": "2019-02-20T12:30:53.000+0100",
                        "created": "2019-02-08T12:20:36.000+0100"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-161",
                    "fields": {
                        "resolutiondate": "2019-02-20T12:30:53.000+0100",
                        "created": "2019-02-18T12:20:36.000+0100"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);

        expect(result.length).toEqual(13)

    });

    it('should return the same number of date entries for every date between creation and resolution date of two jira issue entries whos dates overlap', () => {
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
                        "resolutiondate": "2019-02-10T12:30:53.000+0100",
                        "created": "2019-01-08T12:20:36.000+0100"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-161",
                    "fields": {
                        "resolutiondate": "2019-03-20T12:30:53.000+0100",
                        "created": "2019-02-08T12:20:36.000+0100"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result.length).toEqual(72)

    });

    it('should return the same number of date entries for every date between creation and resolution date of two jira issue entries whos dates dont overlap', () => {
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
                        "resolutiondate": "2019-02-10T12:30:53.000+0100",
                        "created": "2019-01-08T12:20:36.000+0100"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "100136",
                    "self": "",
                    "key": "JIRA-161",
                    "fields": {
                        "resolutiondate": "2019-03-20T12:30:53.000+0100",
                        "created": "2019-02-19T12:20:36.000+0100"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result.length).toEqual(72)

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
                        "created": "2019-04-02T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result[result.length - 1].date).toEqual(moment().format('YYYY-MM-DD'))

    });
    it('should return an average lead time of 1 when 1 issue takes one day to complete', () => {
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
                        "resolutiondate": "2019-04-03T10:15:35.000+0000",
                        "created": "2019-04-02T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result).toEqual([{date: "2019-04-02", averageLeadTime: 0}, {date: "2019-04-03", averageLeadTime: 1}])

    });

    it('should return an average lead time of 0 when one issue is not resolved', () => {
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
                        "created": "2019-04-02T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result[result.length - 1]).toEqual({date: moment().format('YYYY-MM-DD'), averageLeadTime: 0})

    });

    it('should return an average lead time over time for a resolved and unresolved issue', () => {
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
                        "created": "2019-04-05T10:15:35.000+0000"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": "2019-04-03T10:15:35.000+0000",
                        "created": "2019-04-02T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue).splice(0,4);
        expect(result).toEqual([{
            date: moment("2019-04-02").format('YYYY-MM-DD'),
            averageLeadTime: 0
        }, {
            date: moment("2019-04-03").format('YYYY-MM-DD'),
            averageLeadTime: 1
        }, {
            date: moment("2019-04-04").format('YYYY-MM-DD'),
            averageLeadTime: 1
        }, {
            date: moment("2019-04-05").format('YYYY-MM-DD'),
            averageLeadTime: 1
        }])

    });
    it('should return an average lead time over time for three issues in the past', () => {
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
                        "resolutiondate": "2019-01-03T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": "2019-01-05T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": "2019-01-07T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result).toEqual([{
            date: moment("2019-01-01").format('YYYY-MM-DD'),
            averageLeadTime: 0
        }, {
            date: moment("2019-01-02").format('YYYY-MM-DD'),
            averageLeadTime: 0
        }, {
            date: moment("2019-01-03").format('YYYY-MM-DD'),
            averageLeadTime: 2
        }, {
            date: moment("2019-01-04").format('YYYY-MM-DD'),
            averageLeadTime: 2
        }, {
            date: moment("2019-01-05").format('YYYY-MM-DD'),
            averageLeadTime: 3
        }, {
            date: moment("2019-01-06").format('YYYY-MM-DD'),
            averageLeadTime: 3
        }, {
            date: moment("2019-01-07").format('YYYY-MM-DD'),
            averageLeadTime: 4
        }])

    });
    it('should return an average lead time over time for three issues in the past', () => {
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
                        "resolutiondate": "2019-01-03T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": "2019-01-05T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                },
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "1143143",
                    "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
                    "key": "TRANS-2617",
                    "fields": {
                        "resolutiondate": "2019-01-07T10:15:35.000+0000",
                        "created": "2019-01-01T10:15:35.000+0000"
                    }
                }
            ]
        };

        const result = new DataAdapter().convert(jiraIssue);
        expect(result).toEqual([{
            date: moment("2019-01-01").format('YYYY-MM-DD'),
            averageLeadTime: 0
        }, {
            date: moment("2019-01-02").format('YYYY-MM-DD'),
            averageLeadTime: 0
        }, {
            date: moment("2019-01-03").format('YYYY-MM-DD'),
            averageLeadTime: 2
        }, {
            date: moment("2019-01-04").format('YYYY-MM-DD'),
            averageLeadTime: 2
        }, {
            date: moment("2019-01-05").format('YYYY-MM-DD'),
            averageLeadTime: 3
        }, {
            date: moment("2019-01-06").format('YYYY-MM-DD'),
            averageLeadTime: 3
        }, {
            date: moment("2019-01-07").format('YYYY-MM-DD'),
            averageLeadTime: 4
        }])

    });
});
