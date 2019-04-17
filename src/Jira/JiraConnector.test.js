import {JiraConnector} from "./JiraConnector";


describe("Tests for JiraConnector", () => {

    it("gets all issue for a project", () => {
        const mockJiraClient = {
            makeUri: () => {
                return undefined
            },
            makeRequestHeader: () => {
                return undefined
            },
            doRequest: () => {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve({"expand": "schema,names",
                            "startAt": 0,
                            "maxResults": 325,
                            "total": 122,
                            "issues": [
                                {
                                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                                    "id": "00000",
                                    "self": "http://jira.mockdata.com/rest/api/2/issue/105389",
                                    "key": "MOCK-555",
                                    "fields": {
                                        "resolutiondate": "2019-04-05T14:18:04.000+0200",
                                        "created": "2019-04-05T11:48:41.000+0200"
                                    }
                                }]});
                    }, 300);
                });
            }
        };
        let jiraConnector = new JiraConnector(mockJiraClient);
        return jiraConnector.getAllIssuesForProject("MOCKPROJECT").then(data => {
            expect(data).toEqual({"expand": "schema,names",
                "startAt": 0,
                "maxResults": 325,
                "total": 122,
                "issues": [
                {
                    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
                    "id": "00000",
                    "self": "http://jira.mockdata.com/rest/api/2/issue/105389",
                    "key": "MOCK-555",
                    "fields": {
                        "resolutiondate": "2019-04-05T14:18:04.000+0200",
                        "created": "2019-04-05T11:48:41.000+0200"
                    }
                }]});
        });

    });
    it("gets all projects from a JIRA client", () => {

        const mockJiraClient = {
            listProjects: () => {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(['A', 'B']);
                    }, 300);
                });
            }
        };
        let jiraConnector = new JiraConnector(mockJiraClient);

        return jiraConnector.getAllProjects().then(data => {
            expect(data).toEqual(['A', 'B']);
        });

    });
    it('should return Incorrect user details when statusCode is 401 ',  () => {
        expect(JiraConnector.parseError({statusCode: 401})).toEqual('Incorrect user details');

    });
    it('should return Captcha issue, please try again later when statusCode is 403 ',  () => {
        expect(JiraConnector.parseError({statusCode: 403})).toEqual('Captcha issue, please try again later');

    });
    it('should return unknown error when statusCode is 123 ',  () => {
        expect(JiraConnector.parseError({statusCode: 123})).toEqual('Unknown error');
    });
});