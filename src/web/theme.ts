import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {colors} from '../theme/colors.theme';
import {sizes} from '../theme/sizes.theme';
import {fontWeights} from '../theme/font-weights.theme';
import {
  ThemeColorAttr,
  ThemeSizeAttr,
  ThemeAttr,
  ThemeIndex,
} from '../types/theme.type';
import {ElementBase} from '../base/element-base';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'c-theme';

@customElement(ELEMENT_NAME)
export class Theme extends ElementBase {
  static styles = [colors, fontWeights, sizes];

  render = () => html` <slot></slot> `;

  connectedCallback() {
    super.connectedCallback();
    this.setThemeStyles();
  }

  public onSetSize(size: keyof ThemeSizeAttr): void {
    const currentColor = this.getThemeClassName(
      ThemeIndex.color
    ) as keyof ThemeColorAttr;
    this.setClassName(size, currentColor);
  }

  public onSetTheme(color: keyof ThemeColorAttr): void {
    const currentSize = this.getThemeClassName(
      ThemeIndex.size
    ) as keyof ThemeSizeAttr;
    this.setClassName(currentSize, color);
  }

  private getThemeClassName(index: number): keyof ThemeAttr {
    return this.className.split(' ')[index] as keyof ThemeAttr;
  }

  private setThemeStyles(): void {
    const [sizeTheme, colorTheme] = this.attributes;
    this.setClassName(
      sizeTheme?.name as keyof ThemeSizeAttr,
      colorTheme?.name as keyof ThemeColorAttr
    );
  }

  private setClassName(
    sizeTheme?: keyof ThemeSizeAttr,
    colorTheme?: keyof ThemeColorAttr
  ): void {
    this.className = `${sizeTheme || 'normal'} ${colorTheme || 'light'}`;
  }
}

declare global {
  namespace CTheme {
    interface Ref extends CElementBase.Ref<any, any>, ThemeAttr {
      onSetTheme?: (color: keyof ThemeColorAttr) => void;
      onSetSize?: (size: keyof ThemeSizeAttr) => void;
    }
    type Key = keyof Omit<
      CTheme.Ref,
      keyof HTMLAttributes<CTheme.Ref> | keyof ClassAttributes<CTheme.Ref>
    >;
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTheme.Ref;
    }
  }
}
