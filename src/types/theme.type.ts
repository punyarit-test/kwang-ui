export type ThemeSizeAttr = Partial<
  Record<'normal' | 'big' | 'large', Boolean>
>;

export type ThemeColorAttr = Partial<Record<'light' | 'dark', Boolean>>;

export interface ThemeAttr extends ThemeSizeAttr, ThemeColorAttr {}

export enum ThemeIndex {
  size,
  color,
}

export type ThemeSizeKey = keyof ThemeSizeAttr;
export type ThemeColorKey = keyof ThemeColorAttr;

declare global {
  namespace CX {
    type ThemeSize = ThemeSizeKey;
    type ThemeColor = ThemeColorKey;
  }
}
