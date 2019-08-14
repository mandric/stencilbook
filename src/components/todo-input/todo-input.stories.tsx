import { storiesOf } from '@storybook/html'
import readme from './readme.md';

storiesOf('Todo Input', module)
    .addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('default', () => {
        return `<todo-input></todo-input>`
    }, {
    notes: { markdown: readme }
    });