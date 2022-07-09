import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {colors} from '../theme/colors.theme';
import {fonts} from '../theme/fonts.theme';
import {ITheme} from '../types/theme.type';

const ELEMENT_NAME = 'c-theme';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class Theme extends LitElement {
  static styles = [colors, fonts];

  render() {
    return html` <slot></slot> `;
  }

  firstUpdated() {
    this.setThemeStyles();
  }

  private setThemeStyles(): void {
    const [fontTheme, colorTheme] = this.attributes;
    this.className = `${fontTheme.name || 'normal'} ${
      colorTheme.name || 'standard'
    }`;
  }
}

declare global {
  namespace CTheme {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        ITheme {}
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTheme.Ref;
    }
  }
}
