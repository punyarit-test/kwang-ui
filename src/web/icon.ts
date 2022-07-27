import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ColorsAttr} from '../types/colors.type';
import {TySizesAttr} from '../types/tx-sizes.type';
import {IconNames} from '../types/icons.type';
import {WeightAttr} from '../types/weights.type';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon extends ElementBase {
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

    this.className = `${attr1?.name ? '' + attr1?.name : ''}${
      attr2?.name ? ' tx-' + attr2?.name : ''
    }`;
  }
}

declare global {
  namespace CIcon {
    interface Ref
      extends CBaseElement.Ref<any, any>,
        IconNames,
        ColorsAttr,
        WeightAttr,
        TySizesAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
