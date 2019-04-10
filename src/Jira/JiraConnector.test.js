import {JiraConnector} from "./JiraConnector";


describe("Tests for JiraConnector", () => {
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