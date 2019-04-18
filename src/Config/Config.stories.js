import React from 'react';
import { storiesOf } from '@storybook/react';
import Config from "./Config";

storiesOf('Login', module)
  .add('Default', () => (
    <Config/>
  ));