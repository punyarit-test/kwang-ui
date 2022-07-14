import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-badge';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Badge extends BaseElement {
  static styles = css``;

  render() {
    return html` <div>c-badge component was created!!</div> `;
  }
}

declare global {
  namespace CBadge {
    interface Ref extends CBaseElement.Ref<string> {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CBadge.Ref;
    }
  }
}
