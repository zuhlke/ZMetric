import React, {useState} from 'react';
import {ISession} from "./Model/Session";
//import Dashboard from "./Dashboard/Dashboard";
import SelectProject from "./SelectProject/SelectProject";
import Login from "./Login/Login";
import MockDashBoard from "./Dashboard/MockDashBoard";

enum Phase {
  LOGIN = 'Login',
  SELECT_PROJECT = 'Select Project',
  DASHBOARD = 'Dashboard'
}

export default function ZMetric() {

  const [project, setProject] = useState('');
  const [jiraUrl, setJiraUrl] = useState('');
  const [session, setSession] = useState<ISession>({name: '', value: ''});
  const [phase, setPhase] = useState(Phase.LOGIN);

  function onLogin(session: ISession, jiraUrl: string) {
    setSession(session);
    setJiraUrl(jiraUrl);
    setPhase(Phase.SELECT_PROJECT);
  }

  function onProjectSelected(project: string) {
    setProject(project);
    setPhase(Phase.DASHBOARD);
  }

  return (
    <div>
      {phase !== Phase.DASHBOARD &&
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">ZMetric</div>
            </h2>
            {phase === Phase.LOGIN &&
              <Login onSuccess={onLogin}/>}
            {phase === Phase.SELECT_PROJECT &&
              <SelectProject
                jiraUrl={jiraUrl}
                session={session}
                onProjectSelected={onProjectSelected}
              />}
          </div>
        </div>}
      {phase === Phase.DASHBOARD &&
        <MockDashBoard project={project}/>}
    </div>
  );

}
