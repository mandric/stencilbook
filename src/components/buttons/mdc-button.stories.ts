import { storiesOf } from '@storybook/html';
//import { action } from '@storybook/addon-actions';
import readme from './readme.md';
import demo from './demo.html';

storiesOf('Buttons', module)
    //.addDecorator(story => `<div style="padding: 3rem">${story()}</div>`)
    .add('All', () => demo, {
        notes: { markdown: readme }
    });
    // .add('test actions', () => (
    //     <mdc-button onClick=${action('button-click')}>Hello Actions!</mdc-button>
    // ));