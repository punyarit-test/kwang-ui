import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'profile-bar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class ProfileBar extends LitElement {
  static styles = css``;

  render() {
    return html` <div>c-profile-bar component was created!!</div> `;
  }
}

declare global {
  namespace CProfileBar {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref> {}
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
