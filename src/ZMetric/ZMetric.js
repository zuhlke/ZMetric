import App from "../App";
import Login from "../Login/Login";

import React, {Component} from 'react';


class ZMetric extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            projectName: ""
        };
        this.LoginHandler = this.LoginHandler.bind(this)

    }

    LoginHandler(dataFromChild, projectNameFromChild) {
        // log our state before and after we updated it
        this.setState({
            data: dataFromChild,
            projectName: projectNameFromChild
        });
    }
    render() {
        return this.state.data.length === 0 ? <Login onSuccess={this.LoginHandler}/> : <App data={this.state.data} projectName={this.state.projectName}/>
    }
}


export default ZMetric;
