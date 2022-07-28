import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'profile-bar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class ProfileBar extends ElementBase {
  static styles = css``;

  render() {
    return html` <div>c-profile-bar component was created!!</div> `;
  }
}

declare global {
  namespace CProfileBar {
    interface Ref extends CElementBase.Ref<any, any> {}
    type Key = keyof Omit<
      CProfileBar.Ref,
      | keyof HTMLAttributes<CProfileBar.Ref>
      | keyof ClassAttributes<CProfileBar.Ref>
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
      [ELEMENT_NAME]: CProfileBar.Ref;
    }
  }
}
