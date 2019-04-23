import React from 'react';
import {storiesOf} from '@storybook/react';
import SelectProject from "./SelectProject";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Actions from "../Actions";

storiesOf('Select Project', module)
  .add('Default', () => <SelectProject/>)
  .add('Loading', () => {
    const mock = new MockAdapter(axios, {delayResponse: 100000});
    return <SelectProject jiraHostURL='https://jira.atlassian.com/' session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Loaded', () => {
    const projectsMock = [
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18910",
        "id": "18910",
        "key": "ACCESS",
        "name": "Atlassian Access",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14613",
        "id": "14613",
        "key": "CLOUD",
        "name": "Atlassian Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14613&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14613&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14613&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14613&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18710",
        "id": "18710",
        "key": "COMMUNITY",
        "name": "Atlassian Community",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18710&avatarId=105296",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18710&avatarId=105296",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18710&avatarId=105296",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18710&avatarId=105296"
        },
        "projectTypeKey": "business"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16710",
        "id": "16710",
        "key": "NPS",
        "name": "Atlassian NPS",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16710&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16710&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16710&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16710&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/20010",
        "id": "20010",
        "key": "API",
        "name": "Atlassian Product Integrations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11460",
        "id": "11460",
        "key": "TRANS",
        "name": "Atlassian Translations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11460&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11904",
        "id": "11904",
        "key": "CONFIG",
        "name": "atlassian-config",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11904&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11904&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11904&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11904&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10450",
        "id": "10450",
        "key": "CORE",
        "name": "atlassian-core",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10450&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10450&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10450&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10450&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11922",
        "id": "11922",
        "key": "EXTRAS",
        "name": "atlassian-extras",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11922&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11922&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11922&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11922&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14310",
        "id": "14310",
        "key": "HTTP",
        "name": "atlassian-http",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14310&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/17310",
        "id": "17310",
        "key": "JWT",
        "name": "atlassian-jwt",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=17310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=17310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=17310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=17310&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10460",
        "id": "10460",
        "key": "MAIL",
        "name": "atlassian-mail",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10460&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11842",
        "id": "11842",
        "key": "RNDR",
        "name": "atlassian-renderer",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11842&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11842&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11842&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11842&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10480",
        "id": "10480",
        "key": "SER",
        "name": "atlassian-seraph",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10480&avatarId=10111",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10480&avatarId=10111",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10480&avatarId=10111",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10480&avatarId=10111"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11011",
        "id": "11011",
        "key": "BAM",
        "name": "Bamboo",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11011&avatarId=105290",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11011&avatarId=105290",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11011&avatarId=105290",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11011&avatarId=105290"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12180",
        "id": "12180",
        "key": "BAMJ",
        "name": "Bamboo JIRA Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12180&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12180&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12180&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12180&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13310",
        "id": "13310",
        "key": "BSERV",
        "name": "Bitbucket Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13310&avatarId=105193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13310&avatarId=105193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13310&avatarId=105193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13310&avatarId=105193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11984",
        "id": "11984",
        "key": "BLOGIT",
        "name": "BLOG IT",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11984&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11984&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11984&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11984&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12610",
        "id": "12610",
        "key": "BON",
        "name": "Capture for JIRA",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12610&avatarId=105195",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12610&avatarId=105195",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12610&avatarId=105195",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12610&avatarId=105195"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11720",
        "id": "11720",
        "key": "CEN",
        "name": "Cenqua ToDos",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11720&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11720&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11720&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11720&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11772",
        "id": "11772",
        "key": "CLOV",
        "name": "Clover",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11772&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11772&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11772&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11772&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18513",
        "id": "18513",
        "key": "CONFCLOUD",
        "name": "Confluence Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18513&avatarId=106090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18513&avatarId=106090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18513&avatarId=106090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18513&avatarId=106090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19410",
        "id": "19410",
        "key": "CE",
        "name": "Confluence Ecosystem",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12410",
        "id": "12410",
        "key": "CONFEXT",
        "name": "Confluence External",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12410&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12410&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12410&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12410&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15711",
        "id": "15711",
        "key": "CRA",
        "name": "Confluence REST API",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15711&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15711&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15711&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15711&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10470",
        "id": "10470",
        "key": "CONFSERVER",
        "name": "Confluence Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10470&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10470&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10470&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10470&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14713",
        "id": "14713",
        "key": "CSI",
        "name": "Confluence Sharepoint Connector",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14713&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14713&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14713&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14713&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13210",
        "id": "13210",
        "key": "SOURCE",
        "name": "Confluence Source Editor Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13210&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11291",
        "id": "11291",
        "key": "CWD",
        "name": "Crowd",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11291&avatarId=105192",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11291&avatarId=105192",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11291&avatarId=105192",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11291&avatarId=105192"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11771",
        "id": "11771",
        "key": "CRUC",
        "name": "Crucible",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11771&avatarId=105292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11771&avatarId=105292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11771&avatarId=105292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11771&avatarId=105292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11830",
        "id": "11830",
        "key": "FE",
        "name": "FishEye",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11830&avatarId=105291",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11830&avatarId=105291",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11830&avatarId=105291",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11830&avatarId=105291"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18110",
        "id": "18110",
        "key": "HCPUB",
        "name": "HipChat",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18110&avatarId=105194",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18110&avatarId=105194",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18110&avatarId=105194",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18110&avatarId=105194"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11240",
        "id": "11240",
        "key": "CHE",
        "name": "Hosted Services - Archive",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11240&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11240&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11240&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11240&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16810",
        "id": "16810",
        "key": "ID",
        "name": "Identity",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16810&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16810&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16810&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16810&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18514",
        "id": "18514",
        "key": "JRACLOUD",
        "name": "Jira Cloud (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18514&avatarId=106292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18514&avatarId=106292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18514&avatarId=106292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18514&avatarId=106292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18210",
        "id": "18210",
        "key": "JIM",
        "name": "JIRA Importers Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19610",
        "id": "19610",
        "key": "JOPSCLOUD",
        "name": "Jira Ops Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10240",
        "id": "10240",
        "key": "JRASERVER",
        "name": "JIRA Server (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10240&avatarId=105190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10240&avatarId=105190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10240&avatarId=105190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10240&avatarId=105190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18512",
        "id": "18512",
        "key": "JSDCLOUD",
        "name": "Jira Service Desk Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18512&avatarId=106190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18512&avatarId=106190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18512&avatarId=106190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18512&avatarId=106190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15611",
        "id": "15611",
        "key": "JSDSERVER",
        "name": "JIRA Service Desk Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15611&avatarId=105295",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15611&avatarId=105295",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15611&avatarId=105295",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15611&avatarId=105295"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18511",
        "id": "18511",
        "key": "JSWCLOUD",
        "name": "JIRA Software Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18511&avatarId=105990",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18511&avatarId=105990",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18511&avatarId=105990",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18511&avatarId=105990"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12200",
        "id": "12200",
        "key": "JSWSERVER",
        "name": "JIRA Software Server (including JIRA Agile)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12200&avatarId=105191",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12200&avatarId=105191",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12200&avatarId=105191",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12200&avatarId=105191"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14010",
        "id": "14010",
        "key": "MKTREQ",
        "name": "Marketing Requests",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14010&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14010&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14010&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14010&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19710",
        "id": "19710",
        "key": "MIG",
        "name": "Migration Platform",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=19710&avatarId=27801",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=19710&avatarId=27801",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=19710&avatarId=27801",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=19710&avatarId=27801"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18510",
        "id": "18510",
        "key": "JPOCLOUD",
        "name": "Portfolio for JIRA Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16510",
        "id": "16510",
        "key": "JPOSERVER",
        "name": "Portfolio for JIRA Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16510&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16510&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16510&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16510&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12210",
        "id": "12210",
        "key": "CONFPRO",
        "name": "Social Project Collaboration",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12210&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16610",
        "id": "16610",
        "key": "SRCTREEDEV",
        "name": "SourceTree Development",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16610&avatarId=104492",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16610&avatarId=104492",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16610&avatarId=104492",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16610&avatarId=104492"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12910",
        "id": "12910",
        "key": "SRCTREE",
        "name": "Sourcetree For Mac",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12910&avatarId=105091",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12910&avatarId=105091",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12910&avatarId=105091",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12910&avatarId=105091"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14510",
        "id": "14510",
        "key": "SRCTREEWIN",
        "name": "Sourcetree for Windows",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14510&avatarId=105090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14510&avatarId=105090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14510&avatarId=105090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14510&avatarId=105090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      }
    ];
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, projectsMock);
    return <SelectProject jiraHostURL='https://jira.atlassian.com/' session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Failed', () => {
    const mock = new MockAdapter(axios, {delayResponse: 1000});
    mock.onGet().replyOnce(404, {
      "errorMessages": [
        "The user named 'username' does not exist"
      ],
      "errors": {}
    });
    return <SelectProject jiraHostURL='https://jira.atlassian.com/' session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Expanded', () => {
    const projectsMock = [
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18910",
        "id": "18910",
        "key": "ACCESS",
        "name": "Atlassian Access",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14613",
        "id": "14613",
        "key": "CLOUD",
        "name": "Atlassian Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14613&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14613&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14613&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14613&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18710",
        "id": "18710",
        "key": "COMMUNITY",
        "name": "Atlassian Community",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18710&avatarId=105296",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18710&avatarId=105296",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18710&avatarId=105296",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18710&avatarId=105296"
        },
        "projectTypeKey": "business"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16710",
        "id": "16710",
        "key": "NPS",
        "name": "Atlassian NPS",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16710&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16710&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16710&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16710&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/20010",
        "id": "20010",
        "key": "API",
        "name": "Atlassian Product Integrations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11460",
        "id": "11460",
        "key": "TRANS",
        "name": "Atlassian Translations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11460&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11904",
        "id": "11904",
        "key": "CONFIG",
        "name": "atlassian-config",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11904&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11904&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11904&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11904&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10450",
        "id": "10450",
        "key": "CORE",
        "name": "atlassian-core",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10450&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10450&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10450&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10450&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11922",
        "id": "11922",
        "key": "EXTRAS",
        "name": "atlassian-extras",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11922&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11922&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11922&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11922&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14310",
        "id": "14310",
        "key": "HTTP",
        "name": "atlassian-http",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14310&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/17310",
        "id": "17310",
        "key": "JWT",
        "name": "atlassian-jwt",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=17310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=17310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=17310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=17310&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10460",
        "id": "10460",
        "key": "MAIL",
        "name": "atlassian-mail",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10460&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11842",
        "id": "11842",
        "key": "RNDR",
        "name": "atlassian-renderer",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11842&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11842&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11842&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11842&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10480",
        "id": "10480",
        "key": "SER",
        "name": "atlassian-seraph",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10480&avatarId=10111",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10480&avatarId=10111",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10480&avatarId=10111",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10480&avatarId=10111"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11011",
        "id": "11011",
        "key": "BAM",
        "name": "Bamboo",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11011&avatarId=105290",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11011&avatarId=105290",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11011&avatarId=105290",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11011&avatarId=105290"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12180",
        "id": "12180",
        "key": "BAMJ",
        "name": "Bamboo JIRA Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12180&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12180&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12180&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12180&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13310",
        "id": "13310",
        "key": "BSERV",
        "name": "Bitbucket Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13310&avatarId=105193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13310&avatarId=105193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13310&avatarId=105193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13310&avatarId=105193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11984",
        "id": "11984",
        "key": "BLOGIT",
        "name": "BLOG IT",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11984&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11984&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11984&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11984&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12610",
        "id": "12610",
        "key": "BON",
        "name": "Capture for JIRA",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12610&avatarId=105195",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12610&avatarId=105195",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12610&avatarId=105195",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12610&avatarId=105195"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11720",
        "id": "11720",
        "key": "CEN",
        "name": "Cenqua ToDos",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11720&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11720&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11720&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11720&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11772",
        "id": "11772",
        "key": "CLOV",
        "name": "Clover",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11772&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11772&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11772&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11772&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18513",
        "id": "18513",
        "key": "CONFCLOUD",
        "name": "Confluence Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18513&avatarId=106090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18513&avatarId=106090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18513&avatarId=106090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18513&avatarId=106090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19410",
        "id": "19410",
        "key": "CE",
        "name": "Confluence Ecosystem",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12410",
        "id": "12410",
        "key": "CONFEXT",
        "name": "Confluence External",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12410&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12410&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12410&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12410&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15711",
        "id": "15711",
        "key": "CRA",
        "name": "Confluence REST API",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15711&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15711&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15711&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15711&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10470",
        "id": "10470",
        "key": "CONFSERVER",
        "name": "Confluence Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10470&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10470&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10470&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10470&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14713",
        "id": "14713",
        "key": "CSI",
        "name": "Confluence Sharepoint Connector",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14713&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14713&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14713&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14713&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13210",
        "id": "13210",
        "key": "SOURCE",
        "name": "Confluence Source Editor Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13210&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11291",
        "id": "11291",
        "key": "CWD",
        "name": "Crowd",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11291&avatarId=105192",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11291&avatarId=105192",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11291&avatarId=105192",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11291&avatarId=105192"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11771",
        "id": "11771",
        "key": "CRUC",
        "name": "Crucible",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11771&avatarId=105292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11771&avatarId=105292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11771&avatarId=105292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11771&avatarId=105292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11830",
        "id": "11830",
        "key": "FE",
        "name": "FishEye",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11830&avatarId=105291",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11830&avatarId=105291",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11830&avatarId=105291",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11830&avatarId=105291"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18110",
        "id": "18110",
        "key": "HCPUB",
        "name": "HipChat",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18110&avatarId=105194",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18110&avatarId=105194",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18110&avatarId=105194",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18110&avatarId=105194"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11240",
        "id": "11240",
        "key": "CHE",
        "name": "Hosted Services - Archive",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11240&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11240&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11240&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11240&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16810",
        "id": "16810",
        "key": "ID",
        "name": "Identity",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16810&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16810&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16810&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16810&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18514",
        "id": "18514",
        "key": "JRACLOUD",
        "name": "Jira Cloud (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18514&avatarId=106292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18514&avatarId=106292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18514&avatarId=106292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18514&avatarId=106292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18210",
        "id": "18210",
        "key": "JIM",
        "name": "JIRA Importers Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19610",
        "id": "19610",
        "key": "JOPSCLOUD",
        "name": "Jira Ops Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10240",
        "id": "10240",
        "key": "JRASERVER",
        "name": "JIRA Server (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10240&avatarId=105190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10240&avatarId=105190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10240&avatarId=105190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10240&avatarId=105190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18512",
        "id": "18512",
        "key": "JSDCLOUD",
        "name": "Jira Service Desk Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18512&avatarId=106190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18512&avatarId=106190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18512&avatarId=106190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18512&avatarId=106190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15611",
        "id": "15611",
        "key": "JSDSERVER",
        "name": "JIRA Service Desk Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15611&avatarId=105295",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15611&avatarId=105295",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15611&avatarId=105295",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15611&avatarId=105295"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18511",
        "id": "18511",
        "key": "JSWCLOUD",
        "name": "JIRA Software Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18511&avatarId=105990",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18511&avatarId=105990",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18511&avatarId=105990",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18511&avatarId=105990"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12200",
        "id": "12200",
        "key": "JSWSERVER",
        "name": "JIRA Software Server (including JIRA Agile)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12200&avatarId=105191",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12200&avatarId=105191",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12200&avatarId=105191",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12200&avatarId=105191"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14010",
        "id": "14010",
        "key": "MKTREQ",
        "name": "Marketing Requests",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14010&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14010&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14010&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14010&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19710",
        "id": "19710",
        "key": "MIG",
        "name": "Migration Platform",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=19710&avatarId=27801",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=19710&avatarId=27801",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=19710&avatarId=27801",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=19710&avatarId=27801"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18510",
        "id": "18510",
        "key": "JPOCLOUD",
        "name": "Portfolio for JIRA Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16510",
        "id": "16510",
        "key": "JPOSERVER",
        "name": "Portfolio for JIRA Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16510&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16510&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16510&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16510&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12210",
        "id": "12210",
        "key": "CONFPRO",
        "name": "Social Project Collaboration",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12210&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16610",
        "id": "16610",
        "key": "SRCTREEDEV",
        "name": "SourceTree Development",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16610&avatarId=104492",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16610&avatarId=104492",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16610&avatarId=104492",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16610&avatarId=104492"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12910",
        "id": "12910",
        "key": "SRCTREE",
        "name": "Sourcetree For Mac",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12910&avatarId=105091",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12910&avatarId=105091",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12910&avatarId=105091",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12910&avatarId=105091"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14510",
        "id": "14510",
        "key": "SRCTREEWIN",
        "name": "Sourcetree for Windows",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14510&avatarId=105090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14510&avatarId=105090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14510&avatarId=105090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14510&avatarId=105090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      }
    ];
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, projectsMock);
    Actions.click("#jiraSelectProject");
    return <SelectProject jiraHostURL='https://jira.atlassian.com/' session={{name: 'cookie', value: '123'}}/>;
  })
  .add('Selected', () => {
    const projectsMock = [
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18910",
        "id": "18910",
        "key": "ACCESS",
        "name": "Atlassian Access",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14613",
        "id": "14613",
        "key": "CLOUD",
        "name": "Atlassian Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14613&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14613&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14613&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14613&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18710",
        "id": "18710",
        "key": "COMMUNITY",
        "name": "Atlassian Community",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18710&avatarId=105296",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18710&avatarId=105296",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18710&avatarId=105296",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18710&avatarId=105296"
        },
        "projectTypeKey": "business"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16710",
        "id": "16710",
        "key": "NPS",
        "name": "Atlassian NPS",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16710&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16710&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16710&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16710&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/20010",
        "id": "20010",
        "key": "API",
        "name": "Atlassian Product Integrations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11460",
        "id": "11460",
        "key": "TRANS",
        "name": "Atlassian Translations",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11460&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11904",
        "id": "11904",
        "key": "CONFIG",
        "name": "atlassian-config",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11904&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11904&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11904&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11904&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10450",
        "id": "10450",
        "key": "CORE",
        "name": "atlassian-core",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10450&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10450&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10450&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10450&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11922",
        "id": "11922",
        "key": "EXTRAS",
        "name": "atlassian-extras",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11922&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11922&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11922&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11922&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14310",
        "id": "14310",
        "key": "HTTP",
        "name": "atlassian-http",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14310&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/17310",
        "id": "17310",
        "key": "JWT",
        "name": "atlassian-jwt",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=17310&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=17310&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=17310&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=17310&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10460",
        "id": "10460",
        "key": "MAIL",
        "name": "atlassian-mail",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10460&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10460&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10460&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10460&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11842",
        "id": "11842",
        "key": "RNDR",
        "name": "atlassian-renderer",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11842&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11842&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11842&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11842&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10480",
        "id": "10480",
        "key": "SER",
        "name": "atlassian-seraph",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10480&avatarId=10111",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10480&avatarId=10111",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10480&avatarId=10111",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10480&avatarId=10111"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10030",
          "id": "10030",
          "name": "Common Modules",
          "description": "Set of common libraries used by multiple Atlassian products"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11011",
        "id": "11011",
        "key": "BAM",
        "name": "Bamboo",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11011&avatarId=105290",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11011&avatarId=105290",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11011&avatarId=105290",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11011&avatarId=105290"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12180",
        "id": "12180",
        "key": "BAMJ",
        "name": "Bamboo JIRA Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12180&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12180&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12180&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12180&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13310",
        "id": "13310",
        "key": "BSERV",
        "name": "Bitbucket Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13310&avatarId=105193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13310&avatarId=105193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13310&avatarId=105193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13310&avatarId=105193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11984",
        "id": "11984",
        "key": "BLOGIT",
        "name": "BLOG IT",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11984&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11984&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11984&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11984&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12610",
        "id": "12610",
        "key": "BON",
        "name": "Capture for JIRA",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12610&avatarId=105195",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12610&avatarId=105195",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12610&avatarId=105195",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12610&avatarId=105195"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11720",
        "id": "11720",
        "key": "CEN",
        "name": "Cenqua ToDos",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11720&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11720&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11720&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11720&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11772",
        "id": "11772",
        "key": "CLOV",
        "name": "Clover",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11772&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11772&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11772&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11772&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18513",
        "id": "18513",
        "key": "CONFCLOUD",
        "name": "Confluence Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18513&avatarId=106090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18513&avatarId=106090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18513&avatarId=106090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18513&avatarId=106090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19410",
        "id": "19410",
        "key": "CE",
        "name": "Confluence Ecosystem",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12410",
        "id": "12410",
        "key": "CONFEXT",
        "name": "Confluence External",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12410&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12410&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12410&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12410&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15711",
        "id": "15711",
        "key": "CRA",
        "name": "Confluence REST API",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15711&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15711&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15711&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15711&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10470",
        "id": "10470",
        "key": "CONFSERVER",
        "name": "Confluence Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10470&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10470&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10470&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10470&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14713",
        "id": "14713",
        "key": "CSI",
        "name": "Confluence Sharepoint Connector",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14713&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14713&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14713&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14713&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/13210",
        "id": "13210",
        "key": "SOURCE",
        "name": "Confluence Source Editor Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=13210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=13210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=13210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=13210&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10020",
          "id": "10020",
          "name": "Confluence Plugins",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11291",
        "id": "11291",
        "key": "CWD",
        "name": "Crowd",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11291&avatarId=105192",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11291&avatarId=105192",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11291&avatarId=105192",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11291&avatarId=105192"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11771",
        "id": "11771",
        "key": "CRUC",
        "name": "Crucible",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11771&avatarId=105292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11771&avatarId=105292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11771&avatarId=105292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11771&avatarId=105292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11830",
        "id": "11830",
        "key": "FE",
        "name": "FishEye",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11830&avatarId=105291",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11830&avatarId=105291",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11830&avatarId=105291",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11830&avatarId=105291"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18110",
        "id": "18110",
        "key": "HCPUB",
        "name": "HipChat",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18110&avatarId=105194",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18110&avatarId=105194",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18110&avatarId=105194",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18110&avatarId=105194"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/11240",
        "id": "11240",
        "key": "CHE",
        "name": "Hosted Services - Archive",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=11240&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=11240&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=11240&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=11240&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16810",
        "id": "16810",
        "key": "ID",
        "name": "Identity",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16810&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16810&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16810&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16810&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18514",
        "id": "18514",
        "key": "JRACLOUD",
        "name": "Jira Cloud (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18514&avatarId=106292",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18514&avatarId=106292",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18514&avatarId=106292",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18514&avatarId=106292"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18210",
        "id": "18210",
        "key": "JIM",
        "name": "JIRA Importers Plugin",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19610",
        "id": "19610",
        "key": "JOPSCLOUD",
        "name": "Jira Ops Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/10240",
        "id": "10240",
        "key": "JRASERVER",
        "name": "JIRA Server (including JIRA Core)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=10240&avatarId=105190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=10240&avatarId=105190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=10240&avatarId=105190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=10240&avatarId=105190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18512",
        "id": "18512",
        "key": "JSDCLOUD",
        "name": "Jira Service Desk Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18512&avatarId=106190",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18512&avatarId=106190",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18512&avatarId=106190",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18512&avatarId=106190"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/15611",
        "id": "15611",
        "key": "JSDSERVER",
        "name": "JIRA Service Desk Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=15611&avatarId=105295",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=15611&avatarId=105295",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=15611&avatarId=105295",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=15611&avatarId=105295"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18511",
        "id": "18511",
        "key": "JSWCLOUD",
        "name": "JIRA Software Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=18511&avatarId=105990",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=18511&avatarId=105990",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=18511&avatarId=105990",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=18511&avatarId=105990"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12200",
        "id": "12200",
        "key": "JSWSERVER",
        "name": "JIRA Software Server (including JIRA Agile)",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12200&avatarId=105191",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12200&avatarId=105191",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12200&avatarId=105191",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12200&avatarId=105191"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14010",
        "id": "14010",
        "key": "MKTREQ",
        "name": "Marketing Requests",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14010&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14010&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14010&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14010&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/19710",
        "id": "19710",
        "key": "MIG",
        "name": "Migration Platform",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=19710&avatarId=27801",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=19710&avatarId=27801",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=19710&avatarId=27801",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=19710&avatarId=27801"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/18510",
        "id": "18510",
        "key": "JPOCLOUD",
        "name": "Portfolio for JIRA Cloud",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?avatarId=98193",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&avatarId=98193",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&avatarId=98193",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&avatarId=98193"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16510",
        "id": "16510",
        "key": "JPOSERVER",
        "name": "Portfolio for JIRA Server",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16510&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16510&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16510&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16510&avatarId=10011"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10050",
          "id": "10050",
          "name": "Atlassian Add-ons",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12210",
        "id": "12210",
        "key": "CONFPRO",
        "name": "Social Project Collaboration",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12210&avatarId=10011",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12210&avatarId=10011",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12210&avatarId=10011",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12210&avatarId=10011"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/16610",
        "id": "16610",
        "key": "SRCTREEDEV",
        "name": "SourceTree Development",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=16610&avatarId=104492",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=16610&avatarId=104492",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=16610&avatarId=104492",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=16610&avatarId=104492"
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/12910",
        "id": "12910",
        "key": "SRCTREE",
        "name": "Sourcetree For Mac",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=12910&avatarId=105091",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=12910&avatarId=105091",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=12910&avatarId=105091",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=12910&avatarId=105091"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      },
      {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.atlassian.com/rest/api/2/project/14510",
        "id": "14510",
        "key": "SRCTREEWIN",
        "name": "Sourcetree for Windows",
        "avatarUrls": {
          "48x48": "https://jira.atlassian.com/secure/projectavatar?pid=14510&avatarId=105090",
          "24x24": "https://jira.atlassian.com/secure/projectavatar?size=small&pid=14510&avatarId=105090",
          "16x16": "https://jira.atlassian.com/secure/projectavatar?size=xsmall&pid=14510&avatarId=105090",
          "32x32": "https://jira.atlassian.com/secure/projectavatar?size=medium&pid=14510&avatarId=105090"
        },
        "projectCategory": {
          "self": "https://jira.atlassian.com/rest/api/2/projectCategory/10031",
          "id": "10031",
          "name": "Atlassian Products",
          "description": ""
        },
        "projectTypeKey": "software"
      }
    ];
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, projectsMock);
    Actions.click("#jiraSelectProject");

    return <SelectProject jiraHostURL='https://jira.atlassian.com/' session={{name: 'cookie', value: '123'}}/>;
  });
