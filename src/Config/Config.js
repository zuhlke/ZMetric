import React, {Component} from 'react';
import './Config.css'
import axios from 'axios'
import {Button, Input, Loader} from 'semantic-ui-react'


class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jiraHostURL: '',
            jiraUsername: '',
            jiraPassword: '',
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]: value
        });
        if(this.state.jiraHostURL && this.state.jiraUsername && this.state.jiraPassword)
        {

        }
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                            ZMetric
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <Input icon="globe" iconPosition='left' type="text" name="jiraHostURL"
                                       value={this.state.jiraHostURL} onChange={this.handleChange}
                                       placeholder="Jira Client host URL"/>
                            </div>
                            <div className="field">
                                <Input icon="user" iconPosition='left' type="text" name="jiraUsername"
                                       value={this.state.jiraUsername} onChange={this.handleChange}
                                       placeholder="Jira Username"/>
                            </div>
                            <div className="field">
                                <Input icon="lock" iconPosition='left' type="password" name="jiraPassword"
                                       value={this.state.jiraPassword} onChange={this.handleChange}
                                       placeholder=" Jira Password"/>
                            </div>
                            <Button loading={this.state.loading} className="ui fluid large teal submit button">Click
                                Here</Button>
                        </div>

                        <div className="ui error message"></div>

                    </form>
                </div>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({loading: true});
        const jiraInstance = axios.create({
            baseURL: this.state.jiraHostURL,
            //headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Max-Age': 600, 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}
        });

        jiraInstance.interceptors.request.use( (config) => {
            console.log(config);
            return config;
        }, (error)=> {

            return Promise.reject(error)}
        )
        jiraInstance.get(`rest/api/2/myself`).then( (res) => {console.log(res)})
    }
}

export default Config;