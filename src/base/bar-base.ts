import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ElementBase} from './element-base';

const ELEMENT_NAME = 'c-bar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class BarBase extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-bar component was created!!</div> `;
  }
}

declare global {
  namespace CBar {
    interface Ref extends CElementBase.Ref<any, any> {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CBar.Ref;
    }
  }
}
