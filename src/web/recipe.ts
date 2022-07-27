import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-recipe';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Recipe extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-recipe component was created!!</div> `;
  }
}

declare global {
  namespace CRecipe {
    interface Ref extends CBaseElement.Ref<any,any> {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CRecipe.Ref;
    }
  }
}
