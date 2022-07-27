import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'cortex-layout';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Layout extends ElementBase {
  static styles = css`
    .layout-wrap {
      height: 100%;
      background: var(--primary-25);
    }
  `;

  render() {
    return html`
      <div class="layout-wrap">
        <slot slot="navbar"></slot>
        <slot slot="sidebar"></slot>
        <slot slot="content"></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

declare global {
  namespace CLayout {
    interface Ref extends CBaseElement.Ref<any,any> {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CLayout.Ref;
    }
  }
}
