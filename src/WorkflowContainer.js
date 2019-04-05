import React, { Component} from 'react';
import { List } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

export class WorkflowContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                    <List>
                        <List.Header as='h3'>{this.props.project} Workflow:</List.Header>
                        {
                            this.props.workflow.map((status) =>
                                <List.Item>
                                    <WorkflowStatus status={status}/>
                                </List.Item>
                            )
                        }
                    </List>
            </div>
        )
    }

}

export class WorkflowStatus extends Component {

    render(){
        return(
            <Button animated>
                <Button.Content visible>{this.props.status.name}</Button.Content>
                <Button.Content hidden>Start State</Button.Content>
            </Button>)
    }
}
