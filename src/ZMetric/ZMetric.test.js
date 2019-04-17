import ReactDOM from "react-dom";
import ZMetric from "./ZMetric";
import React from "react";

describe("ZMetric", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ZMetric/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});