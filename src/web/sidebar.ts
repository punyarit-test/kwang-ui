import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {SidebarPosition} from '../types/sidebar.type';

const ELEMENT_NAME = 'c-sidebar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Sidebar extends LitElement {
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
  namespace CSidebar {
    interface Ref extends CBar.Ref, SidebarPosition {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CSidebar.Ref;
    }
  }
}
