import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {DivDisplay} from './div-display';

const ELEMENT_NAME = 'c-block';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Block extends DivDisplay {
  static styles = css``;

  render() {
    return html` <div>c-block component was created!!</div> `;
  }
}

declare global {
  namespace CBlock {
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
      [ELEMENT_NAME]: CBlock.Ref;
    }
  }
}
