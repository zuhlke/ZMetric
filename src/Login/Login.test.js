import ReactDOM from "react-dom";
import Login from './Login.js';
import React from "react";
import {mount,shallow} from "enzyme";
import {JiraConnector} from "../Jira/JiraConnector";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('changes button to be enabled when jira details are entered', () => {
    const wrapper = mount(<Login/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass'
    });
    wrapper.update(); // Read: enzyme update
    expect(wrapper.find('Button').at(0).props('disabled').disabled).toEqual(false);
});
jest.mock('../Jira/JiraConnector');

it('sets isLoginForm state to false when successfully connected', async () => {
    JiraConnector.mockImplementation(
        () => ({
            getAllProjects: () => {
                return new Promise((resolve, reject) => {
                    setImmediate(  resolve(['A', 'B']));
                });
            }
        })
    );
    const wrapper = mount(<Login/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass',
    });

    wrapper.find("form").simulate("submit");
    wrapper.update(); // Read: enzyme update

    await tick();

    expect((wrapper.update().state("isLoginForm"))).toEqual(false)


});
it('changes button to be enabled when project is selected', async () => {
    JiraConnector.mockImplementation(
        () => ({
            getAllProjects: () => {
                return new Promise((resolve, reject) => {
                    setImmediate(  resolve(['A', 'B']));
                });
            },
        })
    );
    const wrapper = mount(<Login/>);
    wrapper.setState({
        jiraHostURL: 'jira.atlassian.com',
        jiraUsername: 'testjirausername',
        jiraPassword: 'testjirapass',
    });

    wrapper.find("form").simulate("submit");
    wrapper.update(); // Read: enzyme update
   /* wrapper.setState({
        selectedProject: 'A'
    });*/
    await tick();
    console.log(wrapper.find('Button').debug());
    expect(wrapper.find('Button').at(0).props('disabled').disabled).toEqual(false);


});

it('sets error message state to when error connecting to JIRA client', async () => {
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

    const wrapper = mount(<Login/>);
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
/*
it('should change the state of jiraUsername when changed in input', async () => {
    const wrapper = shallow(<Login/>);
    wrapper.find('FormInput').at(1).simulate('change',{value:"Test Username",name:"jiraUsername"});
    wrapper.update(); // Read: enzyme update
    await tick();
    expect(wrapper.state("jiraUsername")).toEqual("Test Username");

});*/

// Helper function returns a promise that resolves after all other promise mocks,
// even if they are chained like Promise.resolve().then(...)
// Technically: this is designed to resolve on the next macrotask
function tick() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}