import ReactDOM from "react-dom";
import Config from './Config.js';
import React from "react";
import {mount} from "enzyme";
import {JiraConnector} from "../Jira/JiraConnector";
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Config />, div);
    ReactDOM.unmountComponentAtNode(div);
});