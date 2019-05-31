import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowLocalFilters} from "./CumulativeFlowLocalFilters";
import {mount} from "enzyme";
import {Button} from "semantic-ui-react";

describe("CumulativeFlowLocalFilters", () => {
  const initialSelectedWorkflowStatusesArray = [
    { issueType: 'Done', active: true },
    { issueType: 'In Progress', active: true },
    { issueType: 'On Hold', active: true },
    { issueType: 'Ready For Test', active: true },
    { issueType: 'Review', active: true },
    { issueType: 'To Do', active: true }
    ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CumulativeFlowLocalFilters selectedStatuses={initialSelectedWorkflowStatusesArray} updateSelectedStatuses={()=>{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders all buttons as active initially", () =>{
    const wrapper = mount(<CumulativeFlowLocalFilters selectedStatuses={initialSelectedWorkflowStatusesArray} updateSelectedStatuses={()=>{}}/>);
    const buttons = wrapper.find(Button);
    buttons.forEach(button => expect(button.props().active).toEqual(true))
  });

  it("renders a button as inactive after it is clicked once", () =>{
    const wrapper = mount(<CumulativeFlowLocalFilters selectedStatuses={initialSelectedWorkflowStatusesArray} updateSelectedStatuses={()=>{}}/>);
    const buttons = wrapper.find(Button);
    buttons.forEach(button => expect(button.props().active).toEqual(true));
    const button = buttons.first();
    button.simulate('click');
    expect(button.props().active).toEqual(true)
  })


});
