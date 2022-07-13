import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BaseElement} from './base-element';
import {DivDisplay} from './div-display';

const ELEMENT_NAME = 'c-flex';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Flex extends DivDisplay {
  static styles = css``;

  render() {
    return html` <div>c-flex component was created!!</div> `;
  }
}

declare global {
  namespace CFlex {
    interface Ref extends CDivDisplay.Ref {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFlex.Ref;
    }
  }
}
