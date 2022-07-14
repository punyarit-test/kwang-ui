import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Colors} from '../types/colors.type';
import {WeightAttr} from '../types/weights.type';
import {BaseElement} from './base-element';

const ELEMENT_NAME = 'c-typography';

@customElement(ELEMENT_NAME)
export class Typography extends BaseElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({type: String}) public p?: string;

  render() {
    return html`<slot></slot>${this.p}`;
  }

  protected setFontStyle(fontSize: string): void {
    const [attr1, attr2] = this.attributes;
    this.className = `${fontSize} ${attr1?.name ? 'tx-' + attr1?.name : ''}${
      attr2?.name ? ' tx-' + attr2?.name : ''
    }`;
  }
}

declare global {
  namespace CTypography {
    interface Ref extends CBaseElement.Ref<string>, Colors, WeightAttr {
      p?: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
