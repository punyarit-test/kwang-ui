import {css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ColorAttr} from '../types/colors.type';
import {TxSizeAttr} from '../types/tx-sizes.type';
import {IconName} from '../types/icons.type';
import {WeightAttr} from '../types/weights.type';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-icon';

@customElement(ELEMENT_NAME)
export class Icon extends ElementBase {
  static styles = css`
    .icon {
      font-family: var(--icon);
    }
  `;

  render = () => html` <span class="icon">&#xe800;</span> `;

  connectedCallback() {
    super.connectedCallback();
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
      extends CElementBase.Ref<any, any>,
        IconName,
        ColorAttr,
        WeightAttr,
        TxSizeAttr {}
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CIcon.Ref;
    }
  }
}
