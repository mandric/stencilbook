import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import demo from './demo.html';

storiesOf('Select', module)
    //.addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('All', () => demo, {
        notes: { markdown: readme }
    });