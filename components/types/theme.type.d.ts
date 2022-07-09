export interface IFontTheme {
    normal?: boolean;
    large?: boolean;
    huge?: boolean;
}
export interface IColorTheme {
    standard?: boolean;
    warm?: boolean;
    dim?: boolean;
    dark?: boolean;
}
export interface ITheme extends IFontTheme, IColorTheme {
}
