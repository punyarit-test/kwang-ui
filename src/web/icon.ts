import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {Colors} from '../types/colors.type';
import {SizesAttr} from '../types/sizes.type';
import {IconName} from '../types/icons.type';
import {WeightAttr} from '../types/weights.type';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon2 extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }
    .icon {
      font-family: var(--icon);
    }
  `;

  render() {
    return html` <span class="icon">&#xe800;</span> `;
  }

  firstUpdated() {
    this.setIconAttr();
  }

  private setIconAttr(): void {
    const [icon, attr1, attr2] = this.attributes;

    this.style.setProperty(`--icon`, icon?.name || '');

    this.className = `${attr1?.name || ''}${
      attr2?.name ? ' ' + attr2?.name : ''
    }`;
  }
}

declare global {
  namespace CIcon {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<CTypography.Ref>,
        IconName,
        Colors,
        WeightAttr,
        SizesAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
