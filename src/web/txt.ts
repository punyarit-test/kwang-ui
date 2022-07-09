import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {Colors} from '../types/colors.type';
import {FontSizeAttr} from '../types/font-sizes.type';
import {WeightAttr} from '../types/weights.type';

const ELEMENT_NAME = 'c-txt';

@customElement(ELEMENT_NAME)
export class Txt extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;
  @property({type: String}) public p?: string;
  render = () => html` <slot></slot>${this.p} `;

  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle();
  }

  private setFontStyle(): void {
    const [attr1, attr2, attr3] = this.attributes;

    this.className = `${attr1?.name || ''}${
      attr2?.name ? ' ' + attr2?.name : ''
    }${attr3?.name ? ' ' + attr3?.name : ''}`;
  }
}

declare global {
  namespace CTxt {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        Colors,
        WeightAttr,
        FontSizeAttr {
      p?: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTxt.Ref;
    }
  }
}
