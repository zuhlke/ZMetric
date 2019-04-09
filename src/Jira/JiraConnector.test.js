import {JiraConnector} from "./JiraConnector";


describe("Tests for JiraConnector", () => {
    it("gets all projects from a JIRA client", () => {

        const mockJiraClient = {
            project: {
                getAllProjects: () => {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(['A', 'B']);
                        }, 300);
                    });
                }
            }
        };
        let jiraConnector = new JiraConnector(mockJiraClient);

        return jiraConnector.getAllProjects().then(data => {
            expect(data).toEqual(['A', 'B']);
        });

    });
    it("gets a specific issue from a JIRA client", () => {

        const mockJiraClient = {
            issue: {
                getIssue: (opts, callback) => {
                    return "Testing Summary";
                }
            }
        };
        let jiraConnector = new JiraConnector(mockJiraClient);

        expect(jiraConnector.getIssue("TEST1")).toEqual("Testing Summary");

    });
});