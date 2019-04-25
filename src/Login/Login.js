import React, {Component} from 'react';
import './Login.css'
import {Button, Message, Form} from 'semantic-ui-react'
import axios from "axios";

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
      jiraHostURL: 'https://jira.zuehlke.com',
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
    const {jiraHostURL, jiraUsername, jiraPassword} = this.state;

    const self = this;
    const instance = axios.create({baseURL: jiraHostURL, headers: {}});
    //https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-cookie-based-authentication/
    instance
      .post('/rest/auth/1/session', {username: jiraUsername, password: jiraPassword}, { headers: {"X-Atlassian-Token" : "no-check"}})
      .then((response) => {
        if (this.props.onSuccess) this.props.onSuccess(response.data.session);
        self.setState({phase: Phases.SUCCESS});
      })
      .catch(error => self.setState({phase: Phases.FAIL, errorMessage: error.response && error.response.data ? error.response.data.errorMessages : this.state.errorMessage}));
  }

  handleChange(event) {
    console.log(event)
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    const {jiraHostURL, jiraUsername, jiraPassword, phase, errorMessage, successMessage} = this.state;

    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">ZMetric</div>
        </h2>
        <div className="ui stacked segment">
          <Form className="ui large form error success"
                onSubmit={this.handleSubmit}
                loading={phase === Phases.SUBMITTING}>
            <Form.Input icon="globe" iconPosition='left' type="text" name="jiraHostURL"
                        value={jiraHostURL} onChange={this.handleChange}
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
      </div>
    </div>;
  }

}


export default Login;
