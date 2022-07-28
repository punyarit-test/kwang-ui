export declare type ThemeSizeAttr = Partial<Record<'normal' | 'big' | 'large', Boolean>>;
export declare type ThemeColorAttr = Partial<Record<'light' | 'dark', Boolean>>;
export interface ThemeAttr extends ThemeSizeAttr, ThemeColorAttr {
}
export declare enum ThemeIndex {
    size = 0,
    color = 1
}
export declare type ThemeSizeKey = keyof ThemeSizeAttr;
export declare type ThemeColorKey = keyof ThemeColorAttr;
declare global {
    namespace CX {
        type ThemeSize = ThemeSizeKey;
        type ThemeColor = ThemeColorKey;
    }
}
