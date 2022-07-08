import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {ISizes} from '../types/size.type';

const ELEMENT_NAME = 'c-typography';

@customElement(ELEMENT_NAME)
export class Typography extends LitElement {
  static styles = css`
    .font {
      font-family: var(--font-family) !important;
      color: var(--color) !important;
      font-size: var(--font-size) !important;
    }
  `;

  @property({type: String}) public p?: string;

  render() {
    return html` <span class="font"><slot></slot>${this.p}</span> `;
  }

  firstUpdated() {
    // set size
    this.setFontSizeByTagName();
    this.setFontStyle();
  }

  private setFontSizeByTagName(): void {
    switch (this.tagName) {
      case 'DISPLAY-MD':
        this.style.fontSize = 'var(--fs-124)';
        break;

      case 'DISPLAY-SM':
        this.style.fontSize = 'var(--fs-96)';
        break;

      case 'DISPLAY-XS':
        this.style.fontSize = 'var(--fs-72)';
        break;

      case 'HEADER-XL':
        this.style.fontSize = 'var(--fs-60)';
        break;

      case 'HEADER-LG':
        this.style.fontSize = 'var(--fs-48)';
        break;

      case 'HEADER-MD':
        this.style.fontSize = 'var(--fs-36)';
        break;

      case 'HEADER-SM':
        this.style.fontSize = 'var(--fs-32)';
        break;

      case 'HEADER-XS':
        this.style.fontSize = 'var(--fs-24)';
        break;

      case 'BODY-XL':
        this.style.fontSize = 'var(--fs-20)';
        break;

      case 'BODY-LG':
        this.style.fontSize = 'var(--fs-18)';
        break;

      // Default is body-md.
      default:
      case 'BODY-MD':
        this.style.fontSize = 'var(--fs-16)';
        break;

      case 'BODY-SM':
        this.style.fontSize = 'var(--fs-14)';
        break;

      case 'BODY-XS':
        this.style.fontSize = 'var(--fs-12)';
        break;
    }
  }

  private setFontStyle(): void {
    const [fontFamily, color] = this.attributes;
    // set font weight from type of Sarabun such as Sarabun <Regular> | <Bold> ..
    this.style.fontFamily = `var(--${fontFamily?.name || 'regular'})`;
    this.style.color = `var(--${color?.name || 'gray-500'})`;
  }
}

declare global {
  namespace CTypography {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<CTypography.Ref>,
        IPrimary,
        IGray,
        ISizes {
      p?: string;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
