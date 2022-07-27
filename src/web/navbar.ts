import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {NavbarPositionAttr} from '../types/navbar.type';
import {BarBase} from '../base/bar-base';

const ELEMENT_NAME = 'c-navbar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Navbar extends BarBase {
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
    interface Ref extends NavbarPositionAttr, CBar.Ref {}
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
