import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'menu-bar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class MenuBar extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-menu-bar component was created!!</div> `;
  }
}

declare global {
  namespace CMenuBar {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CMenuBar.Ref,
      keyof HTMLAttributes<CMenuBar.Ref> | keyof ClassAttributes<CMenuBar.Ref>
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
      [ELEMENT_NAME]: CMenuBar.Ref;
    }
  }
}
