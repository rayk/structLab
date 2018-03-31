import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button label={"Some Label"}>Hello Button</Button>
  ));
