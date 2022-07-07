import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {IGray, IPrimary} from '../types/colors.type';
import {TIcons} from '../types/icons.type';

enum element {
  name = 'c-icon',
}

@customElement(element.name)
export class Icon extends LitElement {
  static styles = css`
    .icon {
      font-family: var(--icon);
      font-size: var(--size);
      color: var(--color);
    }
  `;

  @property({type: String}) public icon!: string;
  @property({type: String}) public size = '16px';
  @property({type: String}) public color = 'gray-500';

  render() {
    return html`
      <style>
        :host {
          --icon: ${this.icon};
          --size: ${this.size};
          --color: ${this.color};
        }
      </style>

      <span class="icon">&#xe800;</span>
    `;
  }
}

declare global {
  namespace JSX {
    interface CIcon
      extends Omit<HTMLAttributes<JSX.CIcon>, 'color' | 'placeholder'>,
        ClassAttributes<JSX.CIcon> {
      icon: TIcons;
      size?: string;
      color?: IPrimary | IGray;
    }

    interface IntrinsicElements {
      [element.name]: CIcon;
    }
  }
}
