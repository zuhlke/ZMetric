import React, {Component} from 'react';
import './Login.css'
// import JiraApi from 'jira-client';
import {Button, Message, Form, Dropdown, Transition} from 'semantic-ui-react'
// import {JiraConnector} from "../Jira/JiraConnector";
import {convert} from '../CycleTimeReport/DataAdapter';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jiraHostURL: undefined,
      jiraUsername: undefined,
      jiraPassword: undefined,
      jiraConnector: {},
      loading: false,
      successMessage: undefined,
      errorMessage: undefined,
      projects: [],
      isLoginForm: true,
      selectedProject: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIssues = this.getIssues.bind(this);
  }


  handleChange(event, data) {
    console.log(data);
    // this.setState({errorMessage: '', successMessage: ''});
    this.setState({[data.id]: data.value});
  }

  render() {
    const {value} = this.state.selectedProject;

    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            ZMetric
          </div>
        </h2>
        <div className="ui stacked segment">
          <Transition visible={this.state.isLoginForm} animation='fade' duration={100}>
            <Form className="ui large form error success" onSubmit={this.handleSubmit}>
              <Form.Input icon="globe" iconPosition='left' type="text" id="jiraHostURL"
                          value={this.state.jiraHostURL} onChange={this.handleChange}
                          placeholder="Jira URL"/>

              <Form.Input icon="user" iconPosition='left' type="text" id="jiraUsername"
                          value={this.state.jiraUsername} onChange={this.handleChange}
                          placeholder="Jira Username"/>

              <Form.Input icon="lock" iconPosition='left' type="password" id="jiraPassword"
                          value={this.state.jiraPassword} onChange={this.handleChange}
                          placeholder="Jira Password"/>

              <Message hidden={!this.state.errorMessage}
                       error
                       content={this.state.errorMessage}
              />
              <Message hidden={!this.state.successMessage}
                       success
                       content={this.state.successMessage}
              />


              <Button loading={this.state.loading} id="jiraLoginSubmit"
                      disabled={!(this.state.jiraHostURL && this.state.jiraUsername && this.state.jiraPassword)}
                      className="ui fluid large teal submit button">Login</Button>
            </Form>
          </Transition>
          <Transition visible={!this.state.isLoginForm} animation='fade' duration={1000}>
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
          </Transition>

        </div>
      </div>
    </div>;
  }

  //handleChange = (e, { value }) => this.setState({selectedProject: value });
  getIssues(event) {
    this.setState({loading: true});
    const jiraClient = new JiraApi({
      protocol: 'https',
      host: this.state.jiraHostURL,
      username: this.state.jiraUsername,
      password: this.state.jiraPassword,
      apiVersion: '2',
      strictSSL: true,

    });
    // const jiraConnector = new JiraConnector(jiraClient);
    // jiraConnector.getAllIssuesForProject(this.state.selectedProject)
    //   .then((res) => (this.props.onSuccess(convert(res), this.state.selectedProject)));
  }

  handleSubmit(event) {
    // alert('jiraLoginSubmit');
    this.setState({errorMessage: '', successMessage: ''});
    event.preventDefault();
    // const jiraClient = new JiraApi({
    //   protocol: 'https',
    //   host: this.state.jiraHostURL,
    //   username: this.state.jiraUsername,
    //   password: this.state.jiraPassword,
    //   apiVersion: '2',
    //   strictSSL: true
    // });
    //   const jiraConnector = new JiraConnector(jiraClient);
    //   this.setState({loading: true});
    //   jiraConnector.getAllProjects()
    //     .then(res => res.map(project => ({
    //       key: project.key,
    //       text: `${project.key} - ${project.name}`,
    //       value: project.key
    //     })).sort(project => project.name))
    //     .then(projects => this.setState({projects: projects, loading: false, isLoginForm: false}))
    //     .catch(error => this.setState({errorMessage: JiraConnector.parseError(error), loading: false}));
  }
}


export default Login;
