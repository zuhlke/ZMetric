import React from 'react';
import {storiesOf} from '@storybook/react';
import {LeftMenu} from "./LeftMenu";

storiesOf('LeftMenu', module)
  .add('Default', () => {
    return (
      <LeftMenu/>
      )
  });
