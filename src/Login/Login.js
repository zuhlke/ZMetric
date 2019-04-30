import React, {Component} from 'react';
import './Login.css'
import {Button, Message, Form} from 'semantic-ui-react'
import axios from "axios";
import PropTypes from "prop-types";

const Phases = {
  INIT: 'Init',
  SUBMITTING: 'Submitting',
  SUCCESS: 'Success',
  FAIL: 'Fail'
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: Phases.INIT,
      jiraUrl: 'https://jira.zuehlke.com',
      jiraUsername: 'username',
      jiraPassword: 'password',
      successMessage: 'Successfully logged in',
      errorMessage: 'Can\'t connect to Jira'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({phase: Phases.SUBMITTING});
    const {jiraUrl, jiraUsername, jiraPassword} = this.state;

    const self = this;
    const instance = axios.create({baseURL: jiraUrl, headers: {}});
    //https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-cookie-based-authentication/
    instance
      .post('/rest/auth/1/session', {
        username: jiraUsername,
        password: jiraPassword
      }, {headers: {"X-Atlassian-Token": "no-check"}})
      .then((response) => {
        this.props.onSuccess(response.data.session, this.state.jiraUrl);
        self.setState({phase: Phases.SUCCESS});
      })
      .catch(error => self.setState({
        phase: Phases.FAIL,
        errorMessage: error.response && error.response.data ? error.response.data.errorMessages : this.state.errorMessage
      }));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {jiraUrl, jiraUsername, jiraPassword, phase, errorMessage, successMessage} = this.state;

    return <div className="ui stacked segment">
          <Form className="ui large form error success"
                onSubmit={this.handleSubmit}
                loading={phase === Phases.SUBMITTING}>
            <Form.Input icon="globe" iconPosition='left' type="text" name="jiraUrl"
                        value={jiraUrl} onChange={this.handleChange}
                        placeholder="Jira URL"/>

            <Form.Input icon="user" iconPosition='left' type="text" name="jiraUsername"
                        value={jiraUsername} onChange={this.handleChange}
                        placeholder="Jira Username"/>

            <Form.Input icon="lock" iconPosition='left' type="password" name="jiraPassword"
                        value={jiraPassword} onChange={this.handleChange}
                        placeholder="Jira Password"/>

            <Button id="jiraLoginSubmit"
                    className="ui fluid large teal submit button">Login</Button>

            <Message error hidden={phase !== Phases.FAIL} content={errorMessage}/>
            <Message success hidden={phase !== Phases.SUCCESS} content={successMessage}/>
          </Form>
        </div>
  }

}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired
};


export default Login;
