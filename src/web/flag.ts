import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {FlagAttr} from '../types/flag.type';
import {ElementBase} from '../base/element-base';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'c-flag';

@customElement(ELEMENT_NAME)
export class Flag extends ElementBase {
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
    interface Ref extends CElementBase.Ref<any, any>, FlagAttr {}
    type Key = keyof Omit<
      CFlag.Ref,
      keyof HTMLAttributes<CFlag.Ref> | keyof ClassAttributes<CFlag.Ref>
    >;
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CFlag.Ref;
    }
  }
}
