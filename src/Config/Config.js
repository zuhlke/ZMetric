import React, {Component} from 'react';
import './Config.css'
import JiraApi from 'jira-client';
import {Button, Input, Message} from 'semantic-ui-react'
import {JiraConnector} from "../Jira/JiraConnector";


class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jiraHostURL: '',
            jiraUsername: '',
            jiraPassword: '',
            loading: false,
            successMessage: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({errorMessage: '', successMessage: ''});
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                            ZMetric
                        </div>
                    </h2>
                    <form className="ui large form error success" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <Input icon="globe" iconPosition='left' type="text" name="jiraHostURL"
                                       value={this.state.jiraHostURL} onChange={this.handleChange}
                                       placeholder="Jira Client host URL"/>
                            </div>
                            <div className="field">
                                <Input icon="user" iconPosition='left' type="text" name="jiraUsername"
                                       value={this.state.jiraUsername} onChange={this.handleChange}
                                       placeholder="Jira Username"/>
                            </div>
                            <div className="field">
                                <Input icon="lock" iconPosition='left' type="password" name="jiraPassword"
                                       value={this.state.jiraPassword} onChange={this.handleChange}
                                       placeholder=" Jira Password"/>
                            </div>
                            <Message hidden={!this.state.errorMessage}
                                     error
                                     content={this.state.errorMessage}
                            />
                            <Message hidden={!this.state.successMessage}
                                     success
                                     content={this.state.successMessage}
                            />
                            <Button loading={this.state.loading}
                                    disabled={!(this.state.jiraHostURL && this.state.jiraUsername && this.state.jiraPassword)}
                                    className="ui fluid large teal submit button">Login</Button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }

    handleSubmit(event) {
        this.setState({errorMessage: '', successMessage: ''});
        event.preventDefault();
        this.setState({loading: true});
        let jiraClient = new JiraApi({
            protocol: 'https',
            host: this.state.jiraHostURL,
            username: this.state.jiraUsername,
            password: this.state.jiraPassword,
            apiVersion: '2',
            strictSSL: true
        });
        let jiraConnector = new JiraConnector(jiraClient);
        jiraConnector.getAllProjects().then(() => {
            this.setState({loading: false , successMessage: 'Successfully Connected'});
        }).catch((error) => {
            console.log(error);
            this.setState({
                errorMessage: JiraConnector.parseError(error),
                loading: false
            })
        });
    }
}

export default Config;
