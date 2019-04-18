import React, {Component} from 'react';
import {Button, Message, Dropdown, Form} from 'semantic-ui-react'
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
      selectedProject: undefined,
      projects: undefined
    };
  }

  componentWillMount() {
    this.loadProjects();
  }

  loadProjects() {
    console.count();
    this.setState({phase: Phases.LOADING});
    // const {jiraHostURL} = this.props;

    this.setState({projects: [{"key": "1", "value":"ZM-12", "text": "zMetrics"}]});

    this.setState({phase: Phases.READY});
    // const self = this;
    // const instance = axios.create({baseURL: jiraHostURL, headers: {}});
    // instance
    //   .post('/rest/auth/1/session', {username: jiraUsername, password: jiraPassword})
    //   .then((response) => {
    //     if (this.props.onSuccess) this.props.onSuccess(response.data.session);
    //     self.setState({phase: Phases.SUCCESS});
    //   })
    //   .catch(error => self.setState({phase: Phases.FAIL, errorMessage: error.response.data.errorMessages}));

  }

  selectProject() {
    // callback
  }

  onChange() {
    // set state
  }

  render() {
    const {selectedProject, phase, projects} = this.state;
    // let disableFormControls = [Phases.SUBMITTING, Phases.SUCCESS].includes(phase);

    return <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            ZMetric
          </div>
        </h2>
        <div className="ui stacked segment">
          <Form onSubmit={this.selectProject}>
            <Dropdown
              loading={phase === Phases.LOADING}
              placeholder='Select Project'
              fluid
              name={"selectedProject"}
              search
              onChange={this.onChange.bind(this)}
              selection
              options={this.state.projects}
              value={selectedProject}/>
            <Button
              // loading={this.state.loading}
              // disabled={!(this.state.selectedProject)}
              className="ui fluid large teal submit button">Select Project</Button>
          </Form>
        </div>
      </div>
    </div>;
  }
}

export default SelectProject;
