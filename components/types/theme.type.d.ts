export declare type SizeThemeAttr = Partial<Record<'normal' | 'big' | 'large', Boolean>>;
export declare type ColorThemeAttr = Partial<Record<'light' | 'dark', Boolean>>;
export interface ThemeAttr extends SizeThemeAttr, ColorThemeAttr {
}
export declare enum ThemeIndex {
    size = 0,
    color = 1
}
