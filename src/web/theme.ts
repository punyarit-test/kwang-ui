import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';

enum element {
  name = 'c-theme',
}

@customElement(element.name)
export class Theme extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  namespace JSX {
    interface CTheme
      extends Omit<HTMLAttributes<JSX.CTheme>, 'color' | 'placeholder'>,
        ClassAttributes<JSX.CTheme> {}

    interface IntrinsicElements {
      [element.name]: CTheme;
    }
  }
}
