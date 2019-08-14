
import { storiesOf } from '@storybook/html'

storiesOf('App Root', module)
  //.addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
  .add('default', () => {
      return `<app-root></app-root>`
  })
