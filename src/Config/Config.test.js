import ReactDOM from "react-dom";
import Config from './Config.js';
import React from "react";
import moment from "moment";
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Config />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("", () =>
{
    const thing = moment();
    console.log(thing);
});
