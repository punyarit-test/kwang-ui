import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'c-button';

@customElement(ELEMENT_NAME)
export class Button extends LitElement {
  static styles = css``;

  render() {
    return html` <div>c-button component was created!!</div> `;
  }
}

declare global {
  namespace CButton {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CButton.Ref,
      keyof HTMLAttributes<CButton.Ref> | keyof ClassAttributes<CButton.Ref>
    >;

    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CButton.Ref;
    }
  }
}
