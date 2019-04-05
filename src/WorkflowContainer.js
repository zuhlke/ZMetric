import React, { Component} from 'react';

export class WorkflowContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>{this.props.project} Workflow</h3>
                <div>
                    {
                        this.props.workflow.map((status) => <WorkflowStatus status={status}/>)
                    }
                </div>
            </div>
        )
    }

}

export class WorkflowStatus extends Component {

    render(){
        return(<div>{this.props.status.name}</div>)
    }
}
