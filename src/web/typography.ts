import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {ISizes} from '../types/size.type';

enum element {
  name = 'c-typography',
}

@customElement(element.name)
export class Typography extends LitElement {
  static styles = css`
    .font {
      font-weight: var(--font-weight);
      color: var(--color);
      font-size: var(--font-size);
    }
  `;

  @property({type: String}) public p?: string;

  render() {
    return html` <span class="font"><slot></slot>${this.p}</span> `;
  }

  firstUpdated() {
    // set size
    this.setFontSizeByTagName();
    this.setBooleanAttributes();
  }

  private setFontSizeByTagName(): void {
    switch (this.tagName) {
      case 'DISPLAY-MD':
        this.style.setProperty(`--font-size`, 'var(--fs-124)');
        break;

      case 'DISPLAY-SM':
        this.style.setProperty(`--font-size`, 'var(--fs-96)');
        break;

      case 'DISPLAY-XS':
        this.style.setProperty(`--font-size`, 'var(--fs-72)');
        break;

      case 'HEADER-XL':
        this.style.setProperty(`--font-size`, 'var(--fs-60)');
        break;

      case 'HEADER-LG':
        this.style.setProperty(`--font-size`, 'var(--fs-48)');
        break;

      case 'HEADER-MD':
        this.style.setProperty(`--font-size`, 'var(--fs-36)');
        break;

      case 'HEADER-SM':
        this.style.setProperty(`--font-size`, 'var(--fs-32)');
        break;

      case 'HEADER-XS':
        this.style.setProperty(`--font-size`, 'var(--fs-24)');
        break;

      case 'BODY-XL':
        this.style.setProperty(`--font-size`, 'var(--fs-20)');
        break;

      case 'BODY-LG':
        this.style.setProperty(`--font-size`, 'var(--fs-18)');
        break;

      // Default is body-md.
      default:
      case 'BODY-MD':
        this.style.setProperty(`--font-size`, 'var(--fs-16)');
        break;

      case 'BODY-SM':
        this.style.setProperty(`--font-size`, 'var(--fs-14)');
        break;

      case 'BODY-XS':
        this.style.setProperty(`--font-size`, 'var(--fs-12)');
        break;
    }
  }

  private setBooleanAttributes(): void {
    const [fontWeight, color] = this.attributes;
    // set font weight from type of Sarabun such as Sarabun <Regular> | <Bold> ..
    this.style.setProperty(`--font-weight`, fontWeight?.name || 'regular');
    this.style.setProperty(`--color`, color?.name || 'gray-500');
  }
}

declare global {
  namespace JSX {
    interface CTypography
      extends Omit<HTMLAttributes<JSX.CTypography>, 'color' | 'placeholder'>,
        ClassAttributes<JSX.CTypography>,
        IPrimary,
        IGray,
        ISizes {
      p?: string;
    }

    interface IntrinsicElements {
      [element.name]: CTypography;
    }
  }
}
