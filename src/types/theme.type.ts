export interface FontThemeAttr {
  normal?: boolean;
  large?: boolean;
  huge?: boolean;
}

export interface ColorThemeAttr {
  standard?: boolean;
  warm?: boolean;
  dim?: boolean;
  dark?: boolean;
}

export interface ThemeAttr extends FontThemeAttr, ColorThemeAttr {}
