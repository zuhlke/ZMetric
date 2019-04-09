import React, { Component } from 'react';
import './App.css';
import {LeadAndCycleTimeTable} from "./LeadAndCycleTimeTable";
import {LeadTimeLineChart} from "./LeadTimeLineChart";
import {WorkflowContainer} from "./WorkflowContainer";
import {DateRangePicker} from "./DateRangePicker";
import {DateFilter} from "./DateFiltering/DateFilter";
import moment from "moment";


const workflow =
    [
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/1",
            "id": "1",
            "name": "Bug",
            "subtask": false,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        },
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/10000",
            "id": "10000",
            "name": "Epic",
            "subtask": false,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        },
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/11201",
            "id": "11201",
            "name": "Spike",
            "subtask": false,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        },
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/10001",
            "id": "10001",
            "name": "Story",
            "subtask": false,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        },
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/5",
            "id": "5",
            "name": "Sub-task",
            "subtask": true,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        },
        {
            "self": "https://jira.zuehlke.com/rest/api/2/issuetype/3",
            "id": "3",
            "name": "Task",
            "subtask": false,
            "statuses": [
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10100",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/subtask.gif",
                    "name": "To Do",
                    "id": "10100",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/2",
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10202",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/information.png",
                    "name": "Review",
                    "id": "10202",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11803",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Done",
                    "id": "11803",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/10804",
                    "description": "",
                    "iconUrl": "https://jira.zuehlke.com/images/icons/statuses/generic.png",
                    "name": "On Hold",
                    "id": "10804",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                {
                    "self": "https://jira.zuehlke.com/rest/api/2/status/11903",
                    "description": "This status is managed internally by JIRA Software",
                    "iconUrl": "https://jira.zuehlke.com/",
                    "name": "Ready For Test",
                    "id": "11903",
                    "statusCategory": {
                        "self": "https://jira.zuehlke.com/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                }
            ]
        }
    ];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData(dateRange){
        const newData = DateFilter.applyDateRangeFilter(dateRange, this.props.data);
        this.setState({data: newData});
    }
  render() {
    return (
        <div>
            <LeadAndCycleTimeTable data={this.state.data}/>
            <br/>
            <LeadTimeLineChart data={this.state.data}/>
            <br/>
            <WorkflowContainer workflow={workflow} project={"ZMetric"}/>
            <br/>
            <DateRangePicker minDate={moment(this.props.data[0].date)} maxDate={moment(this.props.data[this.props.data.length-1].date)} dateRangeUpdate={(dateRange) => {this.updateData(dateRange)}}/>
        </div>
    );
  }
}

export default App;
