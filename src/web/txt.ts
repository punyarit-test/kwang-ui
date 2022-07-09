import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IColors} from '../types/colors.type';
import {IFontSize} from '../types/font-sizes.type';
import {ISizes} from '../types/sizes.type';

const ELEMENT_NAME = 'c-txt';

@customElement(ELEMENT_NAME)
export class Txt extends LitElement {
  @property({type: String}) public p?: string;
  render = () => html` <slot></slot>${this.p} `;

  connectedCallback() {
    super.connectedCallback();
    this.setFontStyle();
  }

  private setFontStyle(): void {
    const [fontFamily, fontSize, color] = this.attributes;

    // set font weight from type of Sarabun such as Sarabun <Regular> | <Bold> ..
    this.style.fontFamily = `var(--${fontFamily?.name || 'regular'})`;
    this.style.fontSize = `var(--${fontSize?.name || 'fs-16'})`;
    this.style.color = `var(--${color?.name || 'gray-500'})`;
  }
}

declare global {
  namespace CTxt {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        IColors,
        ISizes,
        IFontSize {
      p?: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTxt.Ref;
    }
  }
}
