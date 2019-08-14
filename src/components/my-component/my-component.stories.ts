import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('My Component', module).add('Example', () => {
  const first = text('First', 'Johnny');
  const middle = text('Middle', 'High');
  const last = text('Last', 'Five');

  return `<my-component first="${first}" middle="${middle}" last="${last}"></my-app>`;
}, {
  notes: { markdown: readme }
});
