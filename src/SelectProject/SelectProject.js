import React, {Component} from 'react';
import {Button, Form, Message} from 'semantic-ui-react'
import axios from "axios";
import PropTypes from "prop-types";

const Phases = {
  INIT: 'Init',
  LOADING: 'Loading',
  READY: 'Ready',
  SUBMITTING: 'Submitting',
  SUCCESS: 'Success',
  FAILED: 'Failed'
};

class SelectProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: Phases.INIT,
      jiraUrl: 'https://jira.zuehlke.com',
      selectedProject: undefined,
      projects: undefined,
      errorMessage: undefined
    };
  }

  componentWillMount() {
    this.loadProjects();
  }

  loadProjects() {
    this.setState({phase: Phases.LOADING});
    const self = this;
    const {name, value} = this.props.session;
    const {jiraUrl} = this.props;
    const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});
    instance
      .get('/rest/api/2/project')
      .then((response) =>
        self.setState({
          phase: Phases.READY,
          projects: response.data.map(p => ({key: p.key, value: p.key, text: `${p.key} - ${p.name}`}))
        }))
      .catch(error => self.setState({
        phase: Phases.FAILED,
        errorMessage: `${error}`
      }));
  }

  onProjectSelected() {
    this.props.onProjectSelected(this.state.selectedProject);
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
          {(phase === Phases.READY || phase === Phases.LOADING || phase === Phases.FAILED) &&
          <Form onSubmit={this.onProjectSelected.bind(this)} id="jiraSelectProjectForm"
                disabled={phase !== Phases.READY}>
            <Form.Dropdown id="jiraSelectProject"
                           placeholder='Select Project'
                           fluid
                           loading={phase === Phases.LOADING}
                           name={"selectedProject"}
                           search
                           onChange={this.onChange.bind(this)}
                           selection
                           noResultsMessage='No projects found for this JIRA Account'
                           options={projects || []}
                           value={selectedProject}/>

            {phase === Phases.FAILED ?
              <Button
                onClick={this.loadProjects.bind(this)}
                className="ui fluid large teal submit button">Try again</Button>
              :
              <Button
                disabled={!(this.state.selectedProject)}
                className="ui fluid large teal submit button">Select Project</Button>
            }
          </Form>
          }

          <Message error hidden={phase !== Phases.FAILED} header="Can't load projects from JIRA"
                   content={errorMessage}/>

        </div>
      </div>
    </div>;
  }
}

SelectProject.propTypes = {
  jiraUrl: PropTypes.string.isRequired,
  session: PropTypes.object.isRequired,
  onProjectSelected: PropTypes.func.isRequired
};


export default SelectProject;
