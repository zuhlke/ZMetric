import React, {Component} from 'react';
import Dashboard from "./Dashboard/Dashboard";
import SelectProject from "./SelectProject/SelectProject";
import Login from "./Login/Login";

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
      jiraUrl: undefined,
      session: undefined,
      project: undefined
    };
  }

  onLogin(session, jiraUrl) {
    this.setState({session, jiraUrl, phase: Phases.SELECT_PROJECT});
  }

  onProjectSelected(project) {
    this.setState({project, phase: Phases.DASHBOARD});
  }

  renderPhase() {
    const {session, jiraUrl, project} = this.state;
    return <div>
      {this.state.phase !== Phases.DASHBOARD && <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">ZMetric</div>
          </h2>
          {this.state.phase === Phases.LOGIN && <Login onSuccess={this.onLogin.bind(this)}/>}
          {this.state.phase === Phases.SELECT_PROJECT &&
          <SelectProject jiraUrl={jiraUrl} session={session} onProjectSelected={this.onProjectSelected.bind(this)}/>}
        </div>
      </div>}
      {this.state.phase === Phases.DASHBOARD && <Dashboard project={project} session={session} jiraUrl={jiraUrl}/>}

    </div>
  }

  render = () => this.renderPhase();
}

export default ZMetric;
