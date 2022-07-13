import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {FlagAttr} from '../types/flag.type';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-flag';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Flag extends BaseElement {
  render() {
    return html` <slot></slot> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.removeFlag();
  }

  private removeFlag(): void {
    const flags = sessionStorage.getItem('flags');
    if (flags) {
      const setFlags = new Set(flags?.split(','));
      const [flagName] = this.attributes;
      if (!setFlags.has(flagName.value)) {
        this.remove();
      }
    }
  }
}

declare global {
  namespace CFlag {
    interface Ref extends CBaseElement.Ref, FlagAttr {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFlag.Ref;
    }
  }
}
