import ReactDOM from "react-dom";
import ZMetric from "./ZMetric";
import React from "react";
import Login from '../Login/Login.js';
import SelectProject from '../SelectProject/SelectProject.js'
import {shallow} from "enzyme";

describe("ZMetric", () => {
    it('should Render login screen by default ', () => {
        const ZMetricComp = shallow(<ZMetric/>);
        expect(ZMetricComp.find(Login)).toHaveLength(1);
    });
    it('should Render select screen after successful login ', () => {
        const ZMetricComp = shallow(<ZMetric/>);
        ZMetricComp.instance().onLogin("TestSession");
        expect(ZMetricComp.find(SelectProject)).toHaveLength(1);
    });
    it('should Render dashboard on select project', () => {
        const ZMetricComp = shallow(<ZMetric/>);
        ZMetricComp.instance().onLogin("TestSession");
        ZMetricComp.instance().onProjectSelected("TestProject");
        expect(ZMetricComp.find("div")).toHaveLength(1);
    });
});