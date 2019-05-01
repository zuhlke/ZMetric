import React from 'react';
import {Segment, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export function DynamicTable(props) {
  const keys = Object.keys(props.data[0]);
  return (
    <Segment>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {
              keys.map((key, index) => <Table.HeaderCell key={index}>{key}</Table.HeaderCell>)
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            props.data.map(item =>
              <Table.Row key={item.date}>
                {
                  keys.map((key, index) => <Table.Cell key={index}>{item[key]}</Table.Cell>)
                }
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
    </Segment>
  )
}

DynamicTable.propTypes = {
  data: PropTypes.array.isRequired
};
