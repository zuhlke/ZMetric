import React, { Component } from 'react';
import './Config.css'

class Config extends Component {
    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                            <div className="content">
                                Jira Configuration
                            </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="required field">
                                <div className="ui left icon input">
                                    <i className="globe icon"></i>
                                    <input type="text" name="email" placeholder="Jira Client host URL"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="Jira Username/Email (Optional)"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password (Optional)"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button">Login</div>
                        </div>

                        <div className="ui error message"></div>

                    </form>
                </div>
            </div>

    );
    }
}

export default Config;