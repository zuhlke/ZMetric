import {TopMenu} from "./TopMenu";
import ReactDOM from "react-dom";
import React from "react";
import moment from "moment";

describe("TopMenu", () =>{
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(      <TopMenu username={"Nickson Thanda"} selectedProject={"ZMETRIC"}
                                   updateSidebarVisibility={() => {}}
                                   minDate={moment()} maxDate={moment()}
                                   dateRangeUpdate={() => {}} projects={["ZMETRIC","ZAPP","ZTRACK"]}
                                   issueTypes={["Story", "Task", "Epic", "Bug", "Sub-task", "Spike"]}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
