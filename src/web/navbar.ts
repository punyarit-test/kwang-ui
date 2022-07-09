import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {INavbarMenus, INavbarPosition} from '../types/navbar';

const ELEMENT_NAME = 'c-navbar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Navbar extends LitElement {
  static styles = css``;

  render() {
    return html` <div>c-navbar component was created!!</div> `;
  }
}

declare global {
  namespace CNavbar {
    interface Menu extends INavbarMenus {}

    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        INavbarPosition {
      menu: Menu[];
      img: string;
    }
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
