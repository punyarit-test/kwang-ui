import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-content';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Content extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-content component was created!!</div> `;
  }
}

declare global {
  namespace CContent {
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
      [ELEMENT_NAME]: CContent.Ref;
    }
  }
}
