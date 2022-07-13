import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'fx-item';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class FxItem extends BaseElement {
  static styles = css``;

  render() {
    return html` <div>c-fx-item component was created!!</div> `;
  }
}

declare global {
  namespace CFxItem {
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
      [ELEMENT_NAME]: CFxItem.Ref;
    }
  }
}
