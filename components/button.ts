import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('c-button')
export class Button extends LitElement {
  static styles = css``;

  render() {
    return html` <div>c-button component was created!!</div> `;
  }
}
