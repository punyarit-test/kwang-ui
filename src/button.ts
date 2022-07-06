import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';

enum Element {
  name = 'c-button',
}

@customElement('c-button')
export class Button extends LitElement {
  static styles = css``;

  @property({
    type: String,
  })
  efx?: string;

  render() {
    return html` <div><slot></slot></div> `;
  }
}

declare global {
  namespace JSX {
    interface CButton
      extends Omit<HTMLAttributes<JSX.CButton>, ''>,
        ClassAttributes<JSX.CButton> {}

    interface IntrinsicElements {
      [Element.name]: CButton;
    }
  }
}
