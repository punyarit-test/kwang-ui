import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-effect';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Effect extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-effect component was created!!</div> `;
  }
}

declare global {
  namespace CEffect {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CEffect.Ref,
      keyof HTMLAttributes<CEffect.Ref> | keyof ClassAttributes<CEffect.Ref>
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
      [ELEMENT_NAME]: CEffect.Ref;
    }
  }
}
