import ReactDOM from "react-dom";
import React from "react";
import {CumulativeFlowLocalFilters} from "./CumulativeFlowLocalFilters";
import {mount} from "enzyme";
import {Button} from "semantic-ui-react";

describe("CumulativeFlowLocalFilters", () => {
  let initialSelectedWorkflowStatusesArray;
  beforeEach(() => {
    initialSelectedWorkflowStatusesArray = [
      { status: 'Done', active: true },
      { status: 'In Progress', active: true },
      { status: 'On Hold', active: true },
      { status: 'Ready For Test', active: true },
      { status: 'Review', active: true },
      { status: 'To Do', active: true }
    ]
  });
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

  it("calls updateSelectedStatuses with an updated list of statuses when a button is clicked", () => {
    const updateSelectedStatusesCallback = jest.fn(() => {});
    const wrapper = mount(<CumulativeFlowLocalFilters selectedStatuses={initialSelectedWorkflowStatusesArray} updateSelectedStatuses={updateSelectedStatusesCallback}/>);
    const button = wrapper.find(Button).find("#cumulativeFlowLocalFilterWorkflowButtonDone").hostNodes();
    button.simulate('click');
    expect(updateSelectedStatusesCallback.mock.calls[0][0]).toEqual([
      { status: 'Done', active: false },
      { status: 'In Progress', active: true },
      { status: 'On Hold', active: true },
      { status: 'Ready For Test', active: true },
      { status: 'Review', active: true },
      { status: 'To Do', active: true }
    ]);
  });

  it("calls updateSelectedStatuses with an updated list of statuses when a inactive button is clicked.", () => {
    const selectedWorkflowStatusesArray = [
      { status: 'Done', active: false },
      { status: 'In Progress', active: true },
      { status: 'On Hold', active: true },
      { status: 'Ready For Test', active: true },
      { status: 'Review', active: false },
      { status: 'To Do', active: true }
    ];
    const updateSelectedStatusesCallback = jest.fn(() => {});
    const wrapper = mount(<CumulativeFlowLocalFilters selectedStatuses={selectedWorkflowStatusesArray} updateSelectedStatuses={updateSelectedStatusesCallback}/>);
    const buttons = wrapper.find(Button);
    const button = buttons.find("#cumulativeFlowLocalFilterWorkflowButtonDone").hostNodes();
    button.simulate('click');
    expect(updateSelectedStatusesCallback.mock.calls[0][0]).toStrictEqual([
      { status: 'Done', active: true },
      { status: 'In Progress', active: true },
      { status: 'On Hold', active: true },
      { status: 'Ready For Test', active: true },
      { status: 'Review', active: false },
      { status: 'To Do', active: true }
    ]);
  });

});
