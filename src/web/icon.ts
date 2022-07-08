import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {IIcons} from '../types/icons.type';
import {ISizes} from '../types/sizes.type';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon2 extends LitElement {
  static styles = css`
    .icon {
      font-family: var(--icon);
      font-size: var(--size);
      color: var(--color);
    }
  `;

  render() {
    return html` <span class="icon">&#xe800;</span> `;
  }

  firstUpdated() {
    this.setIconAttr();
  }

  private setIconAttr(): void {
    const [icon, color, size] = this.attributes;
    this.style.setProperty(`--icon`, icon?.name || 'cortex');
    this.style.setProperty(`--color`, color?.name || 'gray-500');
    this.style.setProperty(`--size`, size?.name || 'regular');
  }
}

declare global {
  namespace CIcon {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<CTypography.Ref>,
        IIcons,
        IPrimary,
        IGray,
        ISizes {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
