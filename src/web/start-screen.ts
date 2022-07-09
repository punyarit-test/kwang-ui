import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {StartScreenAttr} from '../types/start-screen.type';

const ELEMENT_NAME = 'start-screen';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class StartScreen extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div>
        <slot name="img"></slot>
      </div>
      <slot></slot>
    `;
  }
}

declare global {
  namespace CStartScreen {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        StartScreenAttr {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CStartScreen.Ref;
    }
  }
}
