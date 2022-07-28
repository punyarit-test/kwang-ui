import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

// Use command pattern
const ELEMENT_NAME = 'right-click';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class RightClick extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-right-click component was created!!</div> `;
  }
}

declare global {
  namespace CRightClick {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CRightClick.Ref,
      | keyof HTMLAttributes<CRightClick.Ref>
      | keyof ClassAttributes<CRightClick.Ref>
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
      [ELEMENT_NAME]: CRightClick.Ref;
    }
  }
}
