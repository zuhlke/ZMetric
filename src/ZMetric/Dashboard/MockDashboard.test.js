import React from 'react';
import ReactDOM from 'react-dom';
import MockDashboard from "./MockDashBoard";
import {mount} from "enzyme/build";
import {ThroughputReport} from "../../Reports/Throughput/ThroughputReport";
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {act} from "react-dom/test-utils";
import {CumulativeFlowReport} from "../../Reports/CumulativeFlow/CumulativeFlowReport";
import {LeadTimeLineChart} from "../../Reports/LeadTime/LeadTimeLineChart";
import {AreaChart, ComposedChart, LineChart} from "recharts";
import {CumulativeFlowLocalFilters} from "../../Filters/Local/CumulativeFlowLocalFilters";
import {TopMenu} from "./Components/TopMenu/TopMenu";
import * as DataFetcher from "./DataFetcher";

const session = {name: 'cookie', value: '123'};
const project = "MockProject";
const jiraUrl = "jira.url";

describe("Dashboard", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MockDashboard project={project} session={session} jiraUrl={jiraUrl}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  describe("Global Filters", () => {
    describe("IssueType filter", () =>{
      describe("CumulativeFlow ", () => {
        it("Deselecting an issue type is reflected in the data passed onto the CumulativeFlowReport", () =>{
          const wrapper = mount(<MockDashboard />); //WILL HAVE TO INJECT IN ISSUE TYPES WHEN MOVING AWAY FROM MOCK
          const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
          cumulativeFlowMenuItem.simulate('click');
          expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonEpic").hostNodes();
          expect(wrapper.find(CumulativeFlowReport).props().data.length).toEqual(6);
          button.simulate('click');
          expect(wrapper.find(CumulativeFlowReport).props().data.length).toEqual(5);
        });

        it("Deselecting and then re-selecting an issue type is reflected in the data passed onto the CumulativeFlowReport", () =>{
          const wrapper = mount(<MockDashboard />); //WILL HAVE TO INJECT IN ISSUE TYPES WHEN MOVING AWAY FROM MOCK
          const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
          cumulativeFlowMenuItem.simulate('click');
          expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonEpic").hostNodes();
          expect(wrapper.find(CumulativeFlowReport).props().data.length).toEqual(6);
          button.simulate('click');
          expect(wrapper.find(CumulativeFlowReport).props().data.length).toEqual(5);
          button.simulate('click');
          expect(wrapper.find(CumulativeFlowReport).props().data.length).toEqual(6);
        })
      });
      describe("LeadTimeLineChart", () =>{
        const mockJiraResponse = {
          "issues": [
            {
              "id": "1185009",
              "key": "JRASERVER-69440",
              "fields": {
                "issuetype": {
                  "id": "10000",
                  "name": "Story",
                  "subtask": false
                },
                "resolutiondate": "2019-06-8T15:13:27.229+0000",
                "created": "2019-06-05T15:40:38.000+0000"
              },
              "changelog": {
                "histories": [
                  {
                    "id": "8715258",
                    "created": "2019-06-05T15:40:43.437+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10030",
                        "fromString": "Needs Triage",
                        "to": "12072",
                        "toString": "Gathering Impact"
                      }
                    ]
                  },
                  {
                    "id": "8715327",
                    "created": "2019-06-6T15:58:49.160+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "12072",
                        "fromString": "Gathering Impact",
                        "to": "3",
                        "toString": "In Progress"
                      }
                    ]
                  },
                  {
                    "id": "8715328",
                    "created": "2019-06-7T15:59:27.229+0000",
                    "items": [
                      {
                        "field": "resolution",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "3",
                        "toString": "Duplicate"
                      },
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "3",
                        "fromString": "In Progress",
                        "to": "6",
                        "toString": "Closed"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "1184905",
              "key": "JRASERVER-69439",
              "fields": {
                "issuetype": {
                  "id": "10001",
                  "name": "Bug",
                  "subtask": false
                },
                "resolutiondate": "2019-06-30T15:59:27.229+0000",
                "created": "2019-06-05T15:37:20.000+0000"
              },
              "changelog": {
                "histories": [
                  {
                    "id": "8715258",
                    "created": "2019-06-05T15:40:43.437+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10030",
                        "fromString": "Needs Triage",
                        "to": "12072",
                        "toString": "Gathering Impact"
                      }
                    ]
                  },
                  {
                    "id": "8715327",
                    "created": "2019-06-15T15:58:49.160+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "12072",
                        "fromString": "Gathering Impact",
                        "to": "3",
                        "toString": "In Progress"
                      }
                    ]
                  },
                  {
                    "id": "8715328",
                    "created": "2019-06-30T15:59:27.229+0000",
                    "items": [
                      {
                        "field": "resolution",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "3",
                        "toString": "Duplicate"
                      },
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "3",
                        "fromString": "In Progress",
                        "to": "6",
                        "toString": "Closed"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "id": "1184123",
              "key": "JRASERVER-69433",
              "fields": {
                "issuetype": {
                  "id": "10002",
                  "name": "Task",
                  "subtask": false
                },
                "resolutiondate": "2019-06-7T15:59:27.229+0000",
                "created": "2019-06-04T20:56:19.000+0000"
              },
              "changelog": {
                "histories": [
                  {
                    "id": "8715258",
                    "created": "2019-06-05T15:40:43.437+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10030",
                        "fromString": "Needs Triage",
                        "to": "12072",
                        "toString": "Gathering Impact"
                      }
                    ]
                  },
                  {
                    "id": "8715327",
                    "created": "2019-06-6T15:58:49.160+0000",
                    "items": [
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "12072",
                        "fromString": "Gathering Impact",
                        "to": "3",
                        "toString": "In Progress"
                      }
                    ]
                  },
                  {
                    "id": "8715328",
                    "created": "2019-06-7T15:59:27.229+0000",
                    "items": [
                      {
                        "field": "resolution",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "3",
                        "toString": "Duplicate"
                      },
                      {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "3",
                        "fromString": "In Progress",
                        "to": "6",
                        "toString": "Closed"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        };
        jest.mock("./DataFetcher");
        it("Deselecting an issue type is reflected in the data passed onto the report", () =>{
          DataFetcher.getJiraResponse = jest.fn( () => mockJiraResponse);
          const wrapper = mount(<MockDashboard />); //INJECT simple values to allow testing
          const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
          leadTimeMenuItem.simulate('click');
          expect(wrapper.exists(LeadTimeLineChart)).toBe(true);
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(27);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes();
          button.simulate('click');
          wrapper.update();
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(5);
        });

        xit("Deselecting and then re-selecting an issue type is reflected in the data passed onto the report", () =>{
          const wrapper = mount(<MockDashboard />); //WILL HAVE TO INJECT IN ISSUE TYPES WHEN MOVING AWAY FROM MOCK
          const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
          leadTimeMenuItem.simulate('click');
          expect(wrapper.exists(LeadTimeLineChart)).toBe(true);
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(27);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes();
          button.simulate('click');
          wrapper.update();
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(5);
          wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes().simulate('click');
          wrapper.update();
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(27);

        })
      });
      describe("ThroughputReport", () =>{
        xit("Deselecting an issue type is reflected in the data passed onto the report", () =>{
          const wrapper = mount(<MockDashboard />); //WILL HAVE TO INJECT IN ISSUE TYPES WHEN MOVING AWAY FROM MOCK
          const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
          throughputMenuItem.simulate('click');
          expect(wrapper.exists(ThroughputReport)).toBe(true);
          expect(wrapper.find(ThroughputReport).props().data.length).toEqual(27);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes();
          button.simulate('click');
          wrapper.update();
          expect(wrapper.find(ThroughputReport).props().data.length).toEqual(5);
        });

        xit("Deselecting and then re-selecting an issue type is reflected in the data passed onto the report", () =>{
          const wrapper = mount(<MockDashboard />); //WILL HAVE TO INJECT IN ISSUE TYPES WHEN MOVING AWAY FROM MOCK
          const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
          throughputMenuItem.simulate('click');
          expect(wrapper.exists(ThroughputReport)).toBe(true);
          expect(wrapper.find(ThroughputReport).props().data.length).toEqual(27);
          const button = wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes();
          button.simulate('click');
          wrapper.update();
          expect(wrapper.find(ThroughputReport).props().data.length).toEqual(5);
          wrapper.find(TopMenu).find("#issueTypeButtonBug").hostNodes().simulate('click');
          wrapper.update();
          expect(wrapper.find(LeadTimeLineChart).props().data.length).toEqual(27);
        })
      });
    });

    describe("DateRange", () => {
      it("renders LeadTimeChart with updated data values when DateRangePicker is used to specify a date range", () => {
        const wrapper = mount(<MockDashboard />);
        const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
        const event = {target: {value: '02-02-2019 - 03-02-2019'}};
        const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
        leadTimeMenuItem.simulate('click');
        act(() => {
          datesRangeInput.props().onChange(event, {value: '02-02-19 - 03-02-19'});
        });
        wrapper.update();
        const chartProps = wrapper.find(LineChart).props();
        expect(chartProps.data.length).toEqual(2);
        expect(chartProps.data[0].date).toEqual("2019-02-02");
        expect(chartProps.data[1].date).toEqual("2019-02-03")
      });

      it("renders CumulativeFlowReport with updated props.data when DateRangePicker is used to specify a date range", () => {
        const wrapper = mount(<MockDashboard />);
        const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
        const event = {target: {value: '02-02-19 - 03-02-19'}};
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        act(() => {
          datesRangeInput.props().onChange(event, {value: '02-02-19 - 03-02-19'});
        });
        wrapper.update();
        const chartProps = wrapper.find(CumulativeFlowReport).props();
        chartProps.data.forEach(issueType => {
          expect(issueType.data.length).toEqual(2);
          expect(issueType.data[0].date).toEqual("2019-02-02");
          expect(issueType.data[1].date).toEqual("2019-02-03")
        });
      });

      it("renders CumulativeFlowReport AreaChart with updated data values when DateRangePicker is used to specify a date range", () => {
        const wrapper = mount(<MockDashboard />);
        const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
        const event = {target: {value: '02-02-19 - 03-02-19'}};
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        act(() => {
          datesRangeInput.props().onChange(event, {value: '02-02-19 - 03-02-19'});
        });
        wrapper.update();
        const chartProps = wrapper.find(AreaChart).props();
        expect(chartProps.data.length).toEqual(2);
        expect(chartProps.data[0].date).toEqual("2019-02-02");
        expect(chartProps.data[1].date).toEqual("2019-02-03")
      });

      it("renders ThroughputReport with updated data values when DateRangePicker is used to specify a date range", () => {
        const wrapper = mount(<MockDashboard />);
        const datesRangeInput = wrapper.find(DatesRangeInput).at(0);
        const event = {target: {value: '02-02-19 - 03-02-19'}};
        const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
        throughputMenuItem.simulate('click');
        act(() => {
          datesRangeInput.props().onChange(event, {value: '02-02-19 - 03-02-19'});
        });
        wrapper.update();
        const chartProps = wrapper.find(ComposedChart).props();
        expect(chartProps.data.length).toEqual(2);
        expect(chartProps.data[0].date).toEqual("2019-02-02");
        expect(chartProps.data[1].date).toEqual("2019-02-03")
      });
    });
  });

  describe("Local Filters", () => {
    describe("Expansion", () => {
      it("Render expansion arrow next to Report name when selected report is a type with local filters", () => {
        const wrapper = mount(<MockDashboard/>);
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        expect(wrapper.exists('#LocalFiltersExpanderIcon')).toEqual(true);
      });
      it("Render report title without expansion arrow when selected report is a type without local filters", () =>{
        const wrapper = mount(<MockDashboard/>);
        const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
        throughputMenuItem.simulate('click');
        expect(wrapper.exists(ThroughputReport)).toBe(true);
        expect(wrapper.exists('#LocalFiltersExpanderIcon')).toEqual(false);
      });
      it("Expand Local Filters when expansion arrow clicked", () =>{
        const wrapper = mount(<MockDashboard/>);
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        const localFiltersExpander = wrapper.find('#LocalFiltersExpanderIcon').hostNodes();
        expect(wrapper.exists(CumulativeFlowLocalFilters)).toEqual(false);
        localFiltersExpander.simulate('click');
        expect(wrapper.exists(CumulativeFlowLocalFilters)).toEqual(true);
      });
    });
    describe("CumulativeFlow", () => {
      it("Render a local filter section with all possible workflow statuses as options", () =>{
        const wrapper = mount(<MockDashboard/>); //TODO: This will be more meaningful when statuses are injected in to replicate axios
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        const localFiltersExpander = wrapper.find('#LocalFiltersExpanderIcon').hostNodes();
        localFiltersExpander.simulate('click');
        expect(wrapper.exists(CumulativeFlowLocalFilters)).toEqual(true);
        const cumulativeFlowLocalFilters = wrapper.find(CumulativeFlowLocalFilters);
        const initialSelectedWorkflowStatusesArray = ["Done", "In Progress", "On Hold", "Ready For Test", "Review", "To Do"].map(status => {return {status: status, active: true}});
        expect(cumulativeFlowLocalFilters.props().selectedStatuses).toEqual(initialSelectedWorkflowStatusesArray)
      });
      it("Render all possible workflow statuses initially selected", () =>{
        const wrapper = mount(<MockDashboard/>);
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        const localFiltersExpander = wrapper.find('#LocalFiltersExpanderIcon').hostNodes();
        localFiltersExpander.simulate('click');
        [ 'Done', 'In Progress', 'On Hold', 'Ready For Test', 'Review', 'To Do' ].forEach( status => {
          expect(wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0).props().active).toBe(true)
        });

      });
      it("De-selecting every issueType with local filters causes a corresponding change to the props passed to the CumulativeFlowReport", () => {
        const statuses = [ 'Done', 'In Progress', 'On Hold', 'Ready For Test', 'Review', 'To Do' ];
        const wrapper = mount(<MockDashboard/>);
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        const localFiltersExpander = wrapper.find('#LocalFiltersExpanderIcon').hostNodes();
        localFiltersExpander.simulate('click');
        statuses.forEach( status => {
          const statusButton = wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0);
          act(()=>{
            statusButton.simulate('click');
          });
          wrapper.update();
          expect(wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0).props().active).toBe(false);
        });
        expect(wrapper.find(CumulativeFlowReport).props().selectedStatuses).toStrictEqual([])
      });

      it("Selecting (previously not selected) statuses with local filters causes a corresponding change to the props passed to the CumulativeFlowReport", () => {
        const statuses = [ 'Done', 'In Progress', 'On Hold', 'Ready For Test', 'Review', 'To Do' ];
        const wrapper = mount(<MockDashboard/>);
        const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
        cumulativeFlowMenuItem.simulate('click');
        expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
        const localFiltersExpander = wrapper.find('#LocalFiltersExpanderIcon').hostNodes();
        localFiltersExpander.simulate('click');
        statuses.forEach( status => {
          const statusButton = wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0);
          act(()=>{
            statusButton.simulate('click');
          });
          wrapper.update();
          expect(wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0).props().active).toBe(false);
        });
        expect(wrapper.find("CumulativeFlowReport").props().selectedStatuses).toStrictEqual([]);
        statuses.forEach( status => {
          const statusButton = wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0);
          act(()=>{
            statusButton.simulate('click');
          });
          wrapper.update();
          expect(wrapper.find("#cumulativeFlowLocalFilterWorkflowButton" + status.replace(/\s+/g, '')).at(0).props().active).toBe(true);
        });
        expect(wrapper.find("CumulativeFlowReport").props().selectedStatuses).toStrictEqual(statuses)
      });

    })
  });

  describe("LeftMenu functionality", () =>{
    it("renders LeadTimeChart when the leadTimeMenuItem is selected from the sidebar menu", () => {
      const wrapper = mount(<MockDashboard />);
      const leadTimeMenuItem = wrapper.find("#LeadTimeSidebarMenuItem").hostNodes();
      expect(wrapper.exists(LeadTimeLineChart)).toBe(false);
      leadTimeMenuItem.simulate('click');
      expect(wrapper.exists(LeadTimeLineChart)).toBe(true);
    });

    it("renders CumulativeFlowReport when the CumulativeFlowReportMenuItem is selected from the sidebar menu", () => {
      const wrapper = mount(<MockDashboard />);
      const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
      const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
      throughputMenuItem.simulate('click');
      expect(wrapper.exists(ThroughputReport)).toBe(true);
      expect(wrapper.exists(CumulativeFlowReport)).toBe(false);
      cumulativeFlowMenuItem.simulate('click');
      cumulativeFlowMenuItem.simulate('click');
      expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
    });

    it("renders ThroughputReport when the ThroughputMenuItem is selected from the sidebar menu", () => {
      const wrapper = mount(<MockDashboard />);
      const throughputMenuItem = wrapper.find("#ThroughputSidebarMenuItem").hostNodes();
      const cumulativeFlowMenuItem = wrapper.find("#CumulativeFlowSidebarMenuItem").hostNodes();
      cumulativeFlowMenuItem.simulate('click');
      expect(wrapper.exists(CumulativeFlowReport)).toBe(true);
      expect(wrapper.exists(ThroughputReport)).toBe(false);
      throughputMenuItem.simulate('click');
      expect(wrapper.exists(ThroughputReport)).toBe(true);
    });
  });
});




