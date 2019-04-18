import App from "../App";
import Login from "../Login/Login";

import React, {Component} from 'react';


class ZMetric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: undefined,
      data: []
    };
    this.LoginHandler = this.LoginHandler.bind(this)

  }

  LoginHandler(session) {
    this.setState({session});
  }

  render() {
    return <Login onSuccess={this.LoginHandler}/>;
    // return this.state.data.length === 0 ? <Login onSuccess={this.LoginHandler}/> :
    {/*<App data={this.state.data} projectName={this.state.projectName}/>*/
    }
  }
}


export default ZMetric;
