import {convertFromJiraToLeadtime} from "./LeadTimeDataAdapter";
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
    const result = convertFromJiraToLeadtime(jiraIssue);
    expect(result).toEqual([{date: "2019-02-08", averageLeadTime: 0}])
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
    const result = convertFromJiraToLeadtime(jiraIssue);
    expect(result).toEqual([{date: "2019-02-08", averageLeadTime: 0}, {date: "2019-02-09", averageLeadTime: 0}])
  });
  it('should return one entry for one issue', () => {
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

    const result = convertFromJiraToLeadtime(jiraIssue);

    expect(result.length).toEqual(1)

  });
  it('should return one entry for two issues which are resolved on the same date', () => {
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

    const result = convertFromJiraToLeadtime(jiraIssue);

    expect(result.length).toEqual(1)

  });

  it('for two issues resolved on different days should return the same number of date entries as days between the two resolution dates ', () => {
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

    const result = convertFromJiraToLeadtime(jiraIssue);
    expect(result.length).toEqual(39)

  });

  it('should return empty list if a issue hasn\'t been resolved', () => {
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
            "created": "2019-04-02T00:15:35.000+0000"
          }
        }
      ]
    };

    const result = convertFromJiraToLeadtime(jiraIssue);
    expect(result).toEqual([])

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

    const result = convertFromJiraToLeadtime(jiraIssue);
    expect(result).toEqual([{date: "2019-04-03", averageLeadTime: 1}])

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
            "created": "2019-04-05T00:15:35.000+0000"
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

    const result = convertFromJiraToLeadtime(jiraIssue).splice(0, 3);
    expect(result).toEqual([{
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

  it('should return an average lead time over time for three issues in the past!', () => {
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

    const result = convertFromJiraToLeadtime(jiraIssue);
    const expected = [{
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
    }];
    expect(result).toEqual(expected)

  });
});
