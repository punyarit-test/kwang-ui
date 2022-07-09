import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {ISizes} from '../types/sizes.type';

const ELEMENT_NAME = 'c-typography';

@customElement(ELEMENT_NAME)
export class Typography extends LitElement {
  @property({type: String}) public p?: string;

  render() {
    return html` <span class="font"><slot></slot>${this.p}</span> `;
  }

  protected setFontSize(fontSize: string): void {
    this.style.fontSize = fontSize;
  }

  protected setFontStyle(): void {
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
