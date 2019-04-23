import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'
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
      projects: undefined
    };
  }

  componentWillMount() {
    this.loadProjects();
  }

  loadProjects() {
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
      .catch(error => console.log(error) //&& self.setState({phase: Phases.FAIL, errorMessage: error.response.data.errorMessages})
      );
  }

  selectProject() {
    if (this.props.onProjectSelected) this.props.onProjectSelected(this.state.selectedProject);
  }

  onChange(event, data) {
    this.setState({selectedProject: data.value});
  }

  render() {
    const {selectedProject, phase, projects} = this.state;
    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            ZMetric
          </div>
        </h2>
        <div className="ui stacked segment">
          {(phase === Phases.READY || phase === Phases.LOADING) &&
          <Form onSubmit={this.selectProject.bind(this)} id="jiraSelectProjectForm" disabled={phase === Phases.LOADING}>
            <Form.Dropdown id="jiraSelectProject"
              placeholder='Select Project'
              fluid
                           loading={phase === Phases.LOADING}
                           name={"selectedProject"}
              search
              onChange={this.onChange.bind(this)}
              selection
              options={projects}
              value={selectedProject}/>

            <Button
              loading={this.state.loading}
              disabled={!(this.state.selectedProject)}
              className="ui fluid large teal submit button">Select Project</Button>
          </Form>
          }
        </div>
      </div>
    </div>;
  }
}

export default SelectProject;
