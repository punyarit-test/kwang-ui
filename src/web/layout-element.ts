import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'layout-element';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class LayoutElement extends BaseElement {
  static styles = css``;

  render() {
    return html` <div>c-layout-element component was created!!</div> `;
  }
}

declare global {
  namespace CLayoutElement {
    interface Ref extends CBaseElement.Ref {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CLayoutElement.Ref;
    }
  }
}
