import { newSpecPage } from '@stencil/core/testing';
import { MDCButton } from './mdc-button';

let page;
//let element, button;

describe('mdc button', () => {

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MDCButton],
      html: `<mdc-button></mdc-button>`,
      autoApplyChanges: true
    });
    //element = page.root;
    //button = await element.querySelector('button');
  })

  it('renders default component', async () => {
    expect(page.root).toEqualHtml(`
      <mdc-button>
        <button class="mdc-button">
          <span class="mdc-button__label"></span>
        </button>
      </mdc-button>
    `);
  });

  // todo figure out differences between SpecPage and E2EPage APIs
  // it('renders as a raised button', async () => {
  //   element.raised = true;
  //   debugger
  //   //console.log(element)
  //   await page.waitForChanges();
  //   expect(button).toHaveClass('mdc-button--raised');
  // });
})