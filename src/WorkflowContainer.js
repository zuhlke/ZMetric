import React, {useState} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

export function WorkflowContainer(props) {
    const [startStatus, setStartStatus] = useState(undefined);
    const [endStatus, setEndStatus] = useState(undefined);
    const [selectedIssueType, setSelectedIssueType] = useState(0);

    const setStartOrEndStatus = (statusName) => {
        if (startStatus === statusName) {
            setStartStatus(undefined);
        } else if (startStatus === undefined) {
            setStartStatus(statusName);
        } else if (endStatus === statusName) {
            setEndStatus(undefined);
        } else {
            setEndStatus(statusName)
        }
    };

    const startOrEndStatus = (statusName) => {
        if (startStatus === statusName) {
            return "Clear start status"
        } else if (startStatus === undefined) {
            return "Set start status";
        } else if (endStatus === statusName) {
            return "Clear end status"
        } else if (endStatus === undefined) {
            return "Set end status";
        } else {
            return statusName;
        }
    };

    const calculateButtonColour = (statusName) => {
        return statusName === startStatus ? "green" : (statusName === endStatus ? "red" : "grey");
    };

    return (
        <div>
            <Grid container columns={3}>
                <Grid.Column>
                    <Button.Group vertical>
                        <h3>Issue Type:</h3>
                        {
                            props.workflow.map((issueType, index) =>
                                <Button id={"issue-button-" + issueType.id} key={issueType.id + issueType.name} toggle active={selectedIssueType===index} onClick={() => {setSelectedIssueType(index)}} color={"grey"}>
                                    {issueType.name}
                                </Button>
                            )
                        }
                    </Button.Group>
                </Grid.Column>
                <Grid.Column>
                <Button.Group vertical>
                    <h3>{props.workflow[selectedIssueType].name} Workflow:</h3>
                    {
                        props.workflow[selectedIssueType].statuses.map((status) =>
                                <WorkflowStatus key={status.id} id={"workFlowStatus-" + status.id} status={status}
                                                setStartOrEndStatus={setStartOrEndStatus}
                                                displayOnClickFunction={startOrEndStatus}
                                                calculateButtonColour={calculateButtonColour}/>
                        )
                    }
                </Button.Group>
                </Grid.Column>
                <Grid.Column>
                    <h3>Update {props.workflow[selectedIssueType].name} Cycle time:</h3>
                    <Label size={"big"} id={"start-status"} color={"green"}>Start status:  {startStatus}</Label>
                    <br/>
                    <br/>
                    <Label size={"big"} id="end-status" color={"red"}>End status:  {endStatus}</Label>
                    <br/>
                    <br/>
                    <Button size={"big"} color={"grey"}>Update</Button>
                </Grid.Column>
            </Grid>

        </div>
    )
}

function WorkflowStatus(props) {
    return (
        <div>
            <Button  size={"large"} id={"status-button-" + props.status.id} animated
                    onClick={() => props.setStartOrEndStatus(props.status.name)}
                    color={props.calculateButtonColour(props.status.name)}>
                <Button.Content visible>{props.status.name}</Button.Content>
                <Button.Content hidden>{props.displayOnClickFunction(props.status.name)}</Button.Content>
            </Button>
        </div>);
}

WorkflowStatus.propTypes = {
    calculateButtonColour: PropTypes.func.isRequired,
    setStartOrEndStatus: PropTypes.func.isRequired,
    displayOnClickFunction: PropTypes.func.isRequired,
    status: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
};
