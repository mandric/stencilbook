import { storiesOf } from '@storybook/html'

storiesOf('Todo Input', module)
    .addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('default', () => {
        return `<todo-input></todo-input>`
    })