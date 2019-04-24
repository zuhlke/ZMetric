import ReactDOM from "react-dom";
import Login from './Login.js';
import React from "react";
import {mount,shallow} from "enzyme";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


