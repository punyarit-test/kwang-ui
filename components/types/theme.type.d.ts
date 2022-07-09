export interface SizeThemeAttr {
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
export interface ThemeAttr extends SizeThemeAttr, ColorThemeAttr {
}
export declare enum ThemeIndex {
    size = 0,
    color = 1
}
