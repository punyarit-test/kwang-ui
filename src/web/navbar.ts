import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {NavbarPosition} from '../types/navbar.type';
import {Bar} from './bar';

const ELEMENT_NAME = 'c-navbar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Navbar extends Bar {
  static styles = css``;

  render() {
    return html`
      <div>
        <slot name="header"></slot>
        <slot name="center"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  namespace CNavbar {
    interface Ref extends NavbarPosition, CBar.Ref {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CNavbar.Ref;
    }
  }
}
