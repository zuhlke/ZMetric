import React from 'react';
import {Segment, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export function LeadAndCycleTimeTable(props) {
    return (
        <Segment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>AverageLeadTime</Table.HeaderCell>
                        <Table.HeaderCell>AverageCycleTime</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.data.map((currentValue) =>
                            <Table.Row key={currentValue.date}>
                                <Table.Cell>{currentValue.date}</Table.Cell>
                                <Table.Cell>{currentValue.averageLeadTime}</Table.Cell>
                                <Table.Cell>{currentValue.averageCycleTime}</Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </Segment>
    )
}

LeadAndCycleTimeTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            averageLeadTime: PropTypes.number.isRequired,
            averageCycleTime: PropTypes.number.isRequired
        })).isRequired
};
