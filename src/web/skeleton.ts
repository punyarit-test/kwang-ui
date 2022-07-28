import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-skeleton';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Skeleton extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-skeleton component was created!!</div> `;
  }
}

declare global {
  namespace CSkeleton {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CSkeleton.Ref,
      keyof HTMLAttributes<CSkeleton.Ref> | keyof ClassAttributes<CSkeleton.Ref>
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
      [ELEMENT_NAME]: CSkeleton.Ref;
    }
  }
}
