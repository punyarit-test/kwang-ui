import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-input';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Input extends BaseElement {
  static styles = css``;

  render() {
    return html` <div>c-input component was created!!</div> `;
  }
}

declare global {
  namespace CInput {
    interface Ref extends CBaseElement.Ref {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CInput.Ref;
    }
  }
}
