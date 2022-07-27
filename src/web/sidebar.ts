import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {SidebarPositionAttr} from '../types/sidebar.type';
import {BarBase} from '../base/bar-base';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-sidebar';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Sidebar extends BarBase {
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
    interface Ref extends CBar.Ref, SidebarPositionAttr {}
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
