export class JiraConnector {


    constructor(jiraClient) {
        this.jiraClient = jiraClient;
    }

    getAllProjects() {
        return this.jiraClient.project.getAllProjects();
    }

    getIssue(issueKey) {
        return this.jiraClient.issue.getIssue({
            issueKey: issueKey
        }, function (error, issue) {
            return issue.fields.summary;
        });
    }

}