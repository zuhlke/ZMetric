export class JiraConnector {

    constructor(jiraClient) {
        this.jiraClient = jiraClient;
    }

    getAllProjects() {
        return this.jiraClient.listProjects();
    }
    getAllIssuesForProject(projectKey) {
        return this.jiraClient.doRequest(this.jiraClient.makeRequestHeader(this.jiraClient.makeUri({
            pathname: '/search',
            query: {
                jql: `project=${projectKey}`,
                fields:"resolutiondate,created",
                maxResults:10000
            },
        }), {
            method: 'GET',
            followAllRedirects: true
        }));
    }
    static parseError = error => {
        let statusCode = error.statusCode;
        if (statusCode === 401) {
            return "Incorrect user details";
        }
        else if (statusCode === 403 )
        {
            return "Captcha issue, please try again later"
        }
        else {
            return "Unknown error"
        }
    };
}
