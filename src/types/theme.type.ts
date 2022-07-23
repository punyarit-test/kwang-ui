export type SizeThemeAttr = Partial<
  Record<'normal' | 'big' | 'large', Boolean>
>;

export type ColorThemeAttr = Partial<Record<'light' | 'dark', Boolean>>;

export interface ThemeAttr extends SizeThemeAttr, ColorThemeAttr {}

export enum ThemeIndex {
  size,
  color,
}
