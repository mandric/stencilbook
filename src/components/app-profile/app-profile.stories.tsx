import { storiesOf } from '@storybook/html'
import readme from './readme.md';

storiesOf('App Profile', module)
  .add('default', () => {
      return `<app-profile></app-profile>`
  }, {
    notes: { markdown: readme }
  });
