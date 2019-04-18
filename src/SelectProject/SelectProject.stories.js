import React from 'react';
import {storiesOf} from '@storybook/react';
import SelectProject from "./SelectProject";

storiesOf('Select Project', module)
  .add('Default', () => <SelectProject/>)
  .add('Loading', () => <SelectProject/>)
  .add('Loaded', () => <SelectProject/>)
  .add('Failed', () => <SelectProject/>)
  .add('Expanded', () => <SelectProject/>)
  .add('Selected', () => <SelectProject/>);
