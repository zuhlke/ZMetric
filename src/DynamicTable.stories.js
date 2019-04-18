import React from 'react';
import {storiesOf} from '@storybook/react';
import {DynamicTable} from "./DynamicTable";

storiesOf('Dynamic Table', module)
  .add('Default', () => (
    <DynamicTable data={[
      {
        "date": "2019-02-01",
        "throughput": 1
      },
      {
        "date": "2019-02-02",
        "throughput": 3
      }
    ]}/>
  ));
