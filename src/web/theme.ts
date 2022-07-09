import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {colors} from '../theme/colors.theme';
import {fonts} from '../theme/fonts.theme';
import {ColorThemeAttr, SizeThemeAttr, ThemeAttr} from '../types/theme.type';

const ELEMENT_NAME = 'c-theme';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/
enum ThemeIndex {
  size,
  color,
}
@customElement(ELEMENT_NAME)
export class Theme extends LitElement {
  static styles = [colors, fonts];

  render() {
    return html` <slot></slot> `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setThemeStyles();
  }

  public onSetSize(size: keyof SizeThemeAttr): void {
    const currentColor = this.getClassName(
      ThemeIndex.color
    ) as keyof ColorThemeAttr;
    this.setClassName(size, currentColor);
  }

  public onSetTheme(color: keyof ColorThemeAttr): void {
    const currentSize = this.getClassName(
      ThemeIndex.size
    ) as keyof SizeThemeAttr;
    this.setClassName(currentSize, color);
  }

  private getClassName(index: number): keyof ThemeAttr {
    return this.className.split(' ')[index] as keyof ThemeAttr;
  }

  private setThemeStyles(): void {
    const [sizeTheme, colorTheme] = this.attributes;
    this.setClassName(
      sizeTheme?.name as keyof SizeThemeAttr,
      colorTheme?.name as keyof ColorThemeAttr
    );
  }

  private setClassName(
    sizeTheme?: keyof SizeThemeAttr,
    colorTheme?: keyof ColorThemeAttr
  ): void {
    this.className = `${sizeTheme || 'normal'} ${colorTheme || 'standard'}`;
  }
}

declare global {
  namespace CTheme {
    interface Ref
      extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>,
        ClassAttributes<Ref>,
        ThemeAttr {
      onSetTheme?: (color: keyof ColorThemeAttr) => void;
      onSetSize?: (size: keyof SizeThemeAttr) => void;
    }
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
