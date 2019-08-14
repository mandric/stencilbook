import { storiesOf } from '@storybook/html'
import { text } from '@storybook/addon-knobs'

storiesOf('Todo Item', module)
    .addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('default', () => {
        const txt = text('Text', 'Pickup Cookies')
        return `<todo-item index="0" text="${txt}"></todo-item>`
    })
    .add('checked', () => {
        const txt = text('Text', 'Pickup Milk')
        return `<todo-item index="0" text="${txt}" checked="true"></todo-item> `
    })