import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {ISizes} from '../types/size.type';

enum element {
  name = 'header-xl',
}

@customElement(element.name)
export class HeaderXl extends LitElement {
  static styles = css`
    .font {
      font-weight: var(--font-weight);
      color: var(--color);
    }
  `;

  render() {
    return html`
      <span class="font">
        <slot></slot>
      </span>
    `;
  }

  updated() {
    const [fontWeight, color] = this.attributes;
    this.style.setProperty(`--font-weight`, fontWeight.name);
    this.style.setProperty(`--color`, color.name);
  }
}

declare global {
  namespace JSX {
    interface CTxtHeader
      extends Omit<HTMLAttributes<JSX.CTxtHeader>, 'color' | 'placeholder'>,
        ClassAttributes<JSX.CTxtHeader>,
        IPrimary,
        IGray,
        ISizes {}

    interface IntrinsicElements {
      [element.name]: CTxtHeader;
    }
  }
}
