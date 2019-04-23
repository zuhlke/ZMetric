import React, {Component} from 'react';
import {Button, Form, Message} from 'semantic-ui-react'
import axios from "axios";

const Phases = {
  INIT: 'Init',
  LOADING: 'Loading',
  READY: 'Ready',
  SUBMITTING: 'Submitting',
  SUCCESS: 'Success',
  FAIL: 'Fail'
};

class SelectProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: Phases.INIT,
      jiraHostURL: 'https://jira.zuehlke.com',
      selectedProject: undefined,
      projects: undefined,
      errorMessage: undefined
    };
  }

  componentWillMount() {
    this.loadProjects();
  }

  loadProjects() {
    console.log("Loading Projects");
    this.setState({phase: Phases.LOADING});
    const self = this;
    const {name, value} = this.props.session;
    const {jiraHostURL} = this.state;
    const instance = axios.create({baseURL: jiraHostURL, headers: {cookie: `${name}=${value}`}});
    instance
        .get('/rest/api/2/project')
        .then((response) =>
            self.setState({
              phase: Phases.READY,
              projects: response.data.map(p => ({key: p.key, value: p.key, text: p.name}))
            }))
        .catch(error =>     self.setState({
              phase: Phases.FAIL,
              errorMessage: `Response code: ${error.response.status}`
            }) //&& self.setState({phase: Phases.FAIL, errorMessage: error.response.data.errorMessages})
        );
  }

  selectProject() {
    if (this.props.onProjectSelected) this.props.onProjectSelected(this.state.selectedProject);
  }

  onChange(event, data) {
    this.setState({selectedProject: data.value});
  }


  render() {
    const {selectedProject, phase, projects, errorMessage} = this.state;
    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            ZMetric
          </div>
        </h2>
        <div className="ui stacked segment">

          {(phase === Phases.READY || phase === Phases.LOADING || phase === Phases.FAIL) &&
          <Form onSubmit={this.selectProject.bind(this)} id="jiraSelectProjectForm" disabled={phase === Phases.LOADING || phase === Phases.FAIL}>
            <Form.Dropdown id="jiraSelectProject"
                           placeholder='Select Project'
                           fluid
                           loading={phase === Phases.LOADING}
                           name={"selectedProject"}
                           search
                           onChange={this.onChange.bind(this)}
                           selection
                           noResultsMessage='No projects found for this JIRA Account'
                           options={projects}
                           value={selectedProject}/>

            {phase === Phases.FAIL ? <Button
                hidden={true}
                onClick={this.loadProjects.bind(this)}
                loading={this.state.loading}
                className="ui fluid large teal submit button">Try again</Button>
                : <Button
                hidden={true}
                loading={this.state.loading}

                disabled={!(this.state.selectedProject)}
                className="ui fluid large teal submit button">Select Project</Button>}

          </Form>
          }
          <Message error hidden={phase !== Phases.FAIL} header="Can't load projects from JIRA" content={errorMessage}/>

        </div>
      </div>
    </div>;
  }
}

export default SelectProject;
