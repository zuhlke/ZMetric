import Login from "../Login/Login";
import React, {Component} from 'react';
import SelectProject from "../SelectProject/SelectProject";

const Phases = {
  LOGIN: 'Login',
  SELECT_PROJECT: 'Select Project',
  DASHBOARD: 'Dashboard'
};

class ZMetric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: Phases.LOGIN,
      session: undefined,
      project: undefined
    };
  }

  onLogin(session) {
    this.setState({session, phase: Phases.SELECT_PROJECT});
    console.warn("Session: ", session);
  }

  onProjectSelected(project) {
    this.setState({project, phase: Phases.DASHBOARD});
  }

  renderPhase() {
    const {phase, session} = this.state;
    switch (phase) {
      case Phases.LOGIN:
        return <Login onSuccess={this.onLogin.bind(this)}/>;
      case Phases.SELECT_PROJECT:
        return <SelectProject session={session} onProjectSelected={this.onProjectSelected.bind(this)}/>;
      default:
        return <div>Dashboard for project {this.state.project}</div>;
    }
  }

  render = () => this.renderPhase();
}

export default ZMetric;
