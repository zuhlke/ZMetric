import ReactDOM from "react-dom";
import Config from './Config.js';
import React from "react";
import {mount,shallow} from "enzyme";
import {JiraConnector} from "../Jira/JiraConnector";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Config/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('changes button to be enabled when input is entered', () => {
    const wrapper = mount(<Config/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass'
    });
    wrapper.update(); // Read: enzyme update
    expect(wrapper.find('Button').props('disabled').disabled).toEqual(false);
});
jest.mock('../Jira/JiraConnector');

it('sets successful message state to successfully connected when successful connected ', async () => {
    JiraConnector.mockImplementation(
        () => ({
            getAllProjects: () => {
                return new Promise((resolve, reject) => {
                    setImmediate(resolve);
                });
            }
        })
    );
    const wrapper = mount(<Config/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass',
        successMessage: 'Number of votes: 2'
    });

    wrapper.find("form").simulate("submit");
    wrapper.update(); // Read: enzyme update
    await tick();

    expect(wrapper.update().find({success: true}).text()).toEqual('Successfully Connected');


});
it('sets error message state to when error connecting to JIRA clien', async () => {
    JiraConnector.mockImplementation(
        () => ({
            getAllProjects: () => {
                return new Promise((resolve, reject) => {
                    reject();
                });
            }
        }),
    );

    const mockParseError = jest.fn();
    mockParseError.mockReturnValue('Unknown Error');
    JiraConnector.parseError = mockParseError.bind(JiraConnector);

    const wrapper = mount(<Config/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass',
        successMessage: 'Number of votes: 2'
    });

    wrapper.find("form").simulate("submit");
    wrapper.update(); // Read: enzyme update
    await tick();
    expect(wrapper.update().find({error: true}).text()).toEqual('Unknown Error');


});

it('should change the state of jiraUsername when changed in input', async () => {
    const wrapper = shallow(<Config/>);
    wrapper.find('Input').at(1).simulate('change',{target: {value:"Test Username",name:"jiraUsername"}});
    wrapper.update(); // Read: enzyme update
    await tick();
    expect(wrapper.state("jiraUsername")).toEqual("Test Username");

});

// Helper function returns a promise that resolves after all other promise mocks,
// even if they are chained like Promise.resolve().then(...)
// Technically: this is designed to resolve on the next macrotask
function tick() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}