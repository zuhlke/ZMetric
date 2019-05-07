import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {mount} from "enzyme";

const session = {name: 'cookie', value: '123'};
const project = "MockProject";
const jiraUrl = "jira.url";
const workflow = [
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
        "name": "Bug To Do",
        "id": "9999999",
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
const jiraIssue = {
  "expand": "names,schema",
  "startAt": 0,
  "maxResults": 1,
  "total": 236802,
  "issues": [
    {
      "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
      "id": "1143143",
      "self": "https://jira.atlassian.com/rest/api/2/issue/1143143",
      "key": "TRANS-2617",
      "fields": {
        "issuetype": {
          "self": "https://jira.zuehlke.com/rest/api/2/issuetype/1",
          "id": "1",
          "description": "A software error which impairs or prevents the functionality of the product.",
          "iconUrl": "https://jira.zuehlke.com/secure/viewavatar?size=xsmall&avatarId=13444&avatarType=issuetype",
          "name": "Bug",
          "subtask": false,
          "avatarId": 13444
        },
      },
        "changelog": {
          "startAt": 0,
          "maxResults": 2,
          "total": 2,
          "histories": [
            {
              "id": "899825",
              "author": {
                "self": "https://jira.zuehlke.com/rest/api/2/user?username=nith",
                "name": "nith",
                "key": "nith",
                "emailAddress": "nickson.thanda@zuhlke.com",
                "avatarUrls": {
                  "48x48": "https://jira.zuehlke.com/secure/useravatar?avatarId=13313",
                  "24x24": "https://jira.zuehlke.com/secure/useravatar?size=small&avatarId=13313",
                  "16x16": "https://jira.zuehlke.com/secure/useravatar?size=xsmall&avatarId=13313",
                  "32x32": "https://jira.zuehlke.com/secure/useravatar?size=medium&avatarId=13313"
                },
                "displayName": "Thanda, Nickson",
                "active": true,
                "timeZone": "Europe/Zurich"
              },
              "created": "2019-05-03T16:52:30.496+0200",
              "items": [
                {
                  "field": "Epic Link",
                  "fieldtype": "custom",
                  "from": null,
                  "fromString": null,
                  "to": "95228",
                  "toString": "ZMETRIC-36"
                }
              ]
            },
            {
              "id": "899829",
              "author": {
                "self": "https://jira.zuehlke.com/rest/api/2/user?username=alsh",
                "name": "alsh",
                "key": "alsh",
                "emailAddress": "Alexander.Shatikov@zuhlke.com",
                "avatarUrls": {
                  "48x48": "https://jira.zuehlke.com/secure/useravatar?ownerId=alsh&avatarId=18003",
                  "24x24": "https://jira.zuehlke.com/secure/useravatar?size=small&ownerId=alsh&avatarId=18003",
                  "16x16": "https://jira.zuehlke.com/secure/useravatar?size=xsmall&ownerId=alsh&avatarId=18003",
                  "32x32": "https://jira.zuehlke.com/secure/useravatar?size=medium&ownerId=alsh&avatarId=18003"
                },
                "displayName": "Shatikov, Alexander",
                "active": true,
                "timeZone": "Europe/Zurich"
              },
              "created": "2019-05-03T16:58:54.553+0200",
              "items": [
                {
                  "field": "Rank",
                  "fieldtype": "custom",
                  "from": "",
                  "fromString": "",
                  "to": "",
                  "toString": "Ranked higher"
                }
              ]
            }
          ]
        },
       "resolutiondate": "2019-01-03T10:15:35.000+0000",
        "created": "2019-01-01T10:15:35.000+0000",
    }
  ]
};

describe("Dashboard", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard project={project} session={session} jiraUrl={jiraUrl}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('sets the correct components', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`rest/api/2/search?maxResults=10000&expand=changelog&fields=resolutiondate,created,issuetype&jql=project=${project}`)
    .reply(200, jiraIssue)
    .onGet(`rest/api/2/project/${project}/statuses`)
    .reply(200, workflow);
    const wrapper = mount(<Dashboard project={project} session={session} jiraUrl={jiraUrl}/>);
    await tick();
  });

  const tick = () => new Promise(resolve => setTimeout(resolve, 0));


});
