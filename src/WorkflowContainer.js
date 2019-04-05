import React, {useState} from 'react';
import {List} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

export function WorkflowContainer(props) {
    const [startStatus, setStartStatus] = useState(undefined);
    const [endStatus, setEndStatus] = useState(undefined);

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
            <Label color={"green"}>Start status: {startStatus}</Label>
            <br/>
            <Label color={"red"}>End status: {endStatus}</Label>
            <List>
                <List.Header as='h3'>{props.project} Workflow:</List.Header>
                {
                    props.workflow.map((status) =>
                        <List.Item key={status.name}>
                            <WorkflowStatus status={status} setStartOrEndStatus={setStartOrEndStatus}
                                            displayOnClickFunction={startOrEndStatus}
                                            calculateButtonColour={calculateButtonColour}/>
                        </List.Item>
                    )
                }
            </List>
        </div>
    )
}

function WorkflowStatus(props) {
    return (
        <div>
            <Button size={"large"} animated onClick={() => props.setStartOrEndStatus(props.status.name)}
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
        name: PropTypes.string.isRequired
    })
};
