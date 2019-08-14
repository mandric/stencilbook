import { storiesOf } from '@storybook/html'
import readme from './readme.md';

storiesOf('App Root', module)
  //.addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
  .add('default', () => {
      return `<app-root></app-root>`
  }, {
    notes: { markdown: readme }
  });
