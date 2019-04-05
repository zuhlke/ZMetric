import React, { Component} from 'react';
import { Table } from 'semantic-ui-react'

export class LeadAndCycleTimeTable extends Component{
    render(){
        return(
            <div>
                <h2>ZMetric</h2>
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
                            this.props.data.map((currentValue) =>
                                <Table.Row>
                                    <Table.Cell>{currentValue.date}</Table.Cell>
                                    <Table.Cell>{currentValue.averageLeadTime}</Table.Cell>
                                    <Table.Cell>{currentValue.averageCycleTime}</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>

        )
    }
}
