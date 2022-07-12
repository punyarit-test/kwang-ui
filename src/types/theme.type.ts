export interface SizeThemeAttr {
  standard?: boolean;
  big?: boolean;
  large?: boolean;
}

export interface ColorThemeAttr {
  light?: boolean;
  dark?: boolean;
}

export interface ThemeAttr extends SizeThemeAttr, ColorThemeAttr {}

export enum ThemeIndex {
  size,
  color,
}
