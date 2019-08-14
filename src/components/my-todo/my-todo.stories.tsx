import { storiesOf } from '@storybook/html';

storiesOf('My Todo', module)
    .addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('Example', () => {
        return `<my-todo></my-todo>`;
    });
