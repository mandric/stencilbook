import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withViewport } from '@storybook/addon-viewport';
import { withNotes } from '@storybook/addon-notes'

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withViewport);
addDecorator(withNotes);

const req = require.context('../src/components', true, /.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
