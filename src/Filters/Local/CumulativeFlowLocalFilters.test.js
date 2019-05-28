import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowLocalFilters} from "./CumulativeFlowLocalFilters";
import {mount} from "enzyme";
import {Button} from "semantic-ui-react";

describe("CumulativeFlowLocalFilters", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CumulativeFlowLocalFilters statuses={["Done", "In Progress", "On Hold", "Ready For Test", "Review", "To Do"]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders all buttons as active initially", () =>{
    const wrapper = mount(<CumulativeFlowLocalFilters statuses={["Done", "In Progress", "On Hold", "Ready For Test", "Review", "To Do"]}/>);
    const buttons = wrapper.find(Button);
    buttons.forEach(button => expect(button.props().active).toEqual(true))
  });

  it("renders a button as inactive after it is clicked once", () =>{
    const wrapper = mount(<CumulativeFlowLocalFilters statuses={["Done", "In Progress", "On Hold", "Ready For Test", "Review", "To Do"]}/>);
    const buttons = wrapper.find(Button);
    buttons.forEach(button => expect(button.props().active).toEqual(true));
    const button = buttons.first();
    button.simulate('click');
    expect(button.props().active).toEqual(true)
  })


});
