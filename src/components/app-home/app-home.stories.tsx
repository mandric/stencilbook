import { storiesOf } from '@storybook/html'
import readme from './readme.md';

storiesOf('App Home', module)
  .add('default', () => {
      return `<app-home></app-home>`
  }, {
    notes: { markdown: readme }
  });
