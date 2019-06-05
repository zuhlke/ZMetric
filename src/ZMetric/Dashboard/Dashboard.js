import React, {useEffect} from 'react';
import './Dashboard.css';
import {Label, Segment} from "semantic-ui-react";

import axios from "axios";


export default function Dashboard(props) {

  useEffect(() => {
    const {jiraUrl, project} = props;
    const {name, value} = props.session;
    const instance = axios.create({baseURL: jiraUrl, headers: {cookie: `${name}=${value}`}});

    axios
      .all([instance.get(`rest/api/2/search?maxResults=10000&expand=changelog&fields=resolutiondate,created,issuetype&jql=project=${project}`),
        instance.get(`/rest/api/2/project/${project}/statuses`)])
      .then(axios.spread(() => {

        }
      ))
  }, [props]);

  return (
    <div>
      <Segment.Group raised id={"main-segment"}>
        <Segment stacked>
          <Label size={'large'} color='red' ribbon>
            {props.project}
          </Label>
        </Segment>
      </Segment.Group>
    </div>
  );
}
