/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface MdcButton {
    /**
    * Style the button with slightly smaller text and container.
    */
    'dense': boolean;
    /**
    * Prevent the button from being clicked.
    */
    'disabled': boolean;
    /**
    * The name of the icon to use with the button.  Name must be that of the [Material Icons](https://material.io/tools/icons/?style=baseline).
    */
    'icon': string;
    /**
    * The label text to display on the button.
    */
    'label': string;
    /**
    * Style the button with an outline.
    */
    'outlined': boolean;
    /**
    * Styles the button such that it appears to be raised off the surface it is on.
    */
    'raised': boolean;
    /**
    * A flag indicating if the icon comes after the label.
    */
    'trailing': boolean;
    /**
    * Style the button such that it appears to be flush with the surface it is on.
    */
    'unelevated': boolean;
  }
  interface MdcSelect {
    /**
    * Flag indicating if the style of the select should be an outline. Flag indicating if this select menu is disabled.
    */
    'disabled': boolean;
    /**
    * The list of items that will be displayed in the dropdown menu.
    */
    'items': { value: string, label: string }[];
    /**
    * The placeholder/label that is displayed over top of the selected item and in place of a selected item when none are selected.
    */
    'label': string;
    /**
    * A flag indicating whether or not a `select` DOM structure should be used in favour of a `ul`/`li` styled structure.
    */
    'native': boolean;
    /**
    * The width of the select box.  Must be specified when using enhanced select.
    */
    'selectWidth': number;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyTodo {}
  interface TodoInput {}
  interface TodoItem {
    'checked': boolean;
    'index': number;
    'text': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMdcButtonElement extends Components.MdcButton, HTMLStencilElement {}
  var HTMLMdcButtonElement: {
    prototype: HTMLMdcButtonElement;
    new (): HTMLMdcButtonElement;
  };

  interface HTMLMdcSelectElement extends Components.MdcSelect, HTMLStencilElement {}
  var HTMLMdcSelectElement: {
    prototype: HTMLMdcSelectElement;
    new (): HTMLMdcSelectElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyTodoElement extends Components.MyTodo, HTMLStencilElement {}
  var HTMLMyTodoElement: {
    prototype: HTMLMyTodoElement;
    new (): HTMLMyTodoElement;
  };

  interface HTMLTodoInputElement extends Components.TodoInput, HTMLStencilElement {}
  var HTMLTodoInputElement: {
    prototype: HTMLTodoInputElement;
    new (): HTMLTodoInputElement;
  };

  interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {}
  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'mdc-button': HTMLMdcButtonElement;
    'mdc-select': HTMLMdcSelectElement;
    'my-component': HTMLMyComponentElement;
    'my-todo': HTMLMyTodoElement;
    'todo-input': HTMLTodoInputElement;
    'todo-item': HTMLTodoItemElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface MdcButton extends JSXBase.HTMLAttributes<HTMLMdcButtonElement> {
    /**
    * Style the button with slightly smaller text and container.
    */
    'dense'?: boolean;
    /**
    * Prevent the button from being clicked.
    */
    'disabled'?: boolean;
    /**
    * The name of the icon to use with the button.  Name must be that of the [Material Icons](https://material.io/tools/icons/?style=baseline).
    */
    'icon'?: string;
    /**
    * The label text to display on the button.
    */
    'label'?: string;
    /**
    * Style the button with an outline.
    */
    'outlined'?: boolean;
    /**
    * Styles the button such that it appears to be raised off the surface it is on.
    */
    'raised'?: boolean;
    /**
    * A flag indicating if the icon comes after the label.
    */
    'trailing'?: boolean;
    /**
    * Style the button such that it appears to be flush with the surface it is on.
    */
    'unelevated'?: boolean;
  }
  interface MdcSelect extends JSXBase.HTMLAttributes<HTMLMdcSelectElement> {
    /**
    * Flag indicating if the style of the select should be an outline. Flag indicating if this select menu is disabled.
    */
    'disabled'?: boolean;
    /**
    * The list of items that will be displayed in the dropdown menu.
    */
    'items'?: { value: string, label: string }[];
    /**
    * The placeholder/label that is displayed over top of the selected item and in place of a selected item when none are selected.
    */
    'label'?: string;
    /**
    * A flag indicating whether or not a `select` DOM structure should be used in favour of a `ul`/`li` styled structure.
    */
    'native'?: boolean;
    /**
    * The width of the select box.  Must be specified when using enhanced select.
    */
    'selectWidth'?: number;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface MyTodo extends JSXBase.HTMLAttributes<HTMLMyTodoElement> {}
  interface TodoInput extends JSXBase.HTMLAttributes<HTMLTodoInputElement> {
    'onOnTodoInputSubmit'?: (event: CustomEvent<any>) => void;
  }
  interface TodoItem extends JSXBase.HTMLAttributes<HTMLTodoItemElement> {
    'checked'?: boolean;
    'index'?: number;
    'onOnTodoItemChecked'?: (event: CustomEvent<any>) => void;
    'onOnTodoItemRemove'?: (event: CustomEvent<any>) => void;
    'text'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'mdc-button': MdcButton;
    'mdc-select': MdcSelect;
    'my-component': MyComponent;
    'my-todo': MyTodo;
    'todo-input': TodoInput;
    'todo-item': TodoItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


