export class JiraConnector {

    constructor(jiraClient) {
        this.jiraClient = jiraClient;
    }

    getAllProjects() {
        return this.jiraClient.listProjects();
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
