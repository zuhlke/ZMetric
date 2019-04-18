import Login from "../Login/Login";
import React, {Component} from 'react';

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
      session: undefined
    };
  }

  onLogin(session) {
    this.setState({session});
  }

  render() {
    return <Login onSuccess={this.onLogin.bind(this)}/>;
  }
}


export default ZMetric;
