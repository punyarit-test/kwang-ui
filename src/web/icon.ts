import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {Colors} from '../types/colors.type';
import {TxSizesAttr} from '../types/tx-sizes.type';
import {IconNames} from '../types/icons.type';
import {WeightAttr} from '../types/weights.type';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon extends BaseElement {
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

    this.className = `${attr1?.name ? 'tx-' + attr1?.name : ''}${
      attr2?.name ? ' tx-' + attr2?.name : ''
    }`;
  }
}

declare global {
  namespace CIcon {
    interface Ref
      extends CBaseElement.Ref,
        IconNames,
        Colors,
        WeightAttr,
        TxSizesAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
