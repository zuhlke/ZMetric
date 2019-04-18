import React, {Component} from 'react';
import './Login.css'
import {Button, Message, Form} from 'semantic-ui-react'
import axios from "axios";

const Phases = {
  INIT: 'Init',
  LOADING: 'Loading',
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
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    this.setState({phase: Phases.SUBMITTING});
    const {jiraHostURL, jiraUsername, jiraPassword} = this.state;

    const self = this;
    const instance = axios.create({baseURL: jiraHostURL, headers: {}});
    instance
      .post('/rest/auth/1/session', {username: jiraUsername, password: jiraPassword})
      .then((response) => {
        if (this.props.onSuccess) this.props.onSuccess(response.data.session);
        self.setState({phase: Phases.SUCCESS});
      })
      .catch(error => self.setState({phase: Phases.FAIL, errorMessage: error.response.data.errorMessages}));


    // const jiraClient = new JiraApi({
    //   protocol: 'https',
    //   host: this.state.jiraHostURL,
    //   username: this.state.jiraUsername,
    //   password: this.state.jiraPassword,
    //   apiVersion: '2',
    //   strictSSL: true
    // });
    // const jiraConnector = new JiraConnector(jiraClient);
    // this.setState({loading: true});
    // jiraConnector.getAllProjects()
    //   .then(res => res.map(project => ({
    //     key: project.key,
    //     text: `${project.key} - ${project.name}`,
    //     value: project.key
    //   })).sort(project => project.name))
    //   .then(projects => this.setState({projects: projects, loading: false, isLoginForm: false}))
    //   .catch(error => this.setState({errorMessage: JiraConnector.parseError(error), loading: false}));
  }

  handleChange(event, data) {
    this.setState({[data.id]: data.value});
  }

  render() {
    const {jiraHostURL, jiraUsername, jiraPassword, phase, errorMessage, successMessage} = this.state;
    let disableFormControls = [Phases.SUBMITTING, Phases.SUCCESS].includes(phase);

    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            ZMetric
          </div>
        </h2>
        <div className="ui stacked segment">
          <Form className="ui large form error success" onSubmit={this.handleSubmit}>
            <Form.Input icon="globe" iconPosition='left' type="text" id="jiraHostURL"
                        value={jiraHostURL} onChange={this.handleChange}
                        disabled={disableFormControls}
                        placeholder="Jira URL"/>

            <Form.Input icon="user" iconPosition='left' type="text" id="jiraUsername"
                        value={jiraUsername} onChange={this.handleChange}
                        disabled={disableFormControls}
                        placeholder="Jira Username"/>

            <Form.Input icon="lock" iconPosition='left' type="password" id="jiraPassword"
                        value={jiraPassword} onChange={this.handleChange}
                        disabled={disableFormControls}
                        placeholder="Jira Password"/>

            <Button loading={phase === Phases.SUBMITTING} id="jiraLoginSubmit"
                    disabled={disableFormControls}
                    className="ui fluid large teal submit button">Login</Button>

            <Message error hidden={phase !== Phases.FAIL} content={errorMessage}/>
            <Message success hidden={phase !== Phases.SUCCESS} content={successMessage}/>

          </Form>
          {/* <Transition visible={!this.state.isLoginForm} animation='fade' duration={1000}>
            <Form onSubmit={this.getIssues}>
              <Dropdown
                placeholder='Select Project'
                fluid
                name={"selectedProject"}
                search
                onChange={this.handleChange}
                selection
                options={this.state.projects}
                value={value}
              />
              <Button loading={this.state.loading}
                      disabled={!(this.state.selectedProject)}
                      className="ui fluid large teal submit button">Select Project</Button>
            </Form>
          </Transition>*/}

        </div>
      </div>
    </div>;
  }

  //handleChange = (e, { value }) => this.setState({selectedProject: value });
  getIssues(event) {
    this.setState({loading: true});
    // const jiraClient = new JiraApi({
    //   protocol: 'https',
    //   host: this.state.jiraHostURL,
    //   username: this.state.jiraUsername,
    //   password: this.state.jiraPassword,
    //   apiVersion: '2',
    //   strictSSL: true,
    //
    // });
    // const jiraConnector = new JiraConnector(jiraClient);
    // jiraConnector.getAllIssuesForProject(this.state.selectedProject)
    //   .then((res) => (this.props.onSuccess(convert(res), this.state.selectedProject)));
  }
}


export default Login;
