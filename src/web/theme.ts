import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {colors} from '../theme/colors.theme';
import {sizes} from '../theme/sizes.theme';
import {fontWeights} from '../theme/font-weights.theme';
import {
  ColorThemeAttr,
  SizeThemeAttr,
  ThemeAttr,
  ThemeIndex,
} from '../types/theme.type';
import {ElementBase} from '../base/element-base';

const ELEMENT_NAME = 'c-theme';

@customElement(ELEMENT_NAME)
export class Theme extends ElementBase {
  static styles = [colors, fontWeights, sizes];

  render = () => html` <slot></slot> `;

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
    this.className = `${sizeTheme || 'normal'} ${colorTheme || 'light'}`;
  }
}

declare global {
  namespace CTheme {
    interface Ref extends CBaseElement.Ref<any, any>, ThemeAttr {
      onSetTheme?: (color: keyof ColorThemeAttr) => void;
      onSetSize?: (size: keyof SizeThemeAttr) => void;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTheme.Ref;
    }
  }
}
