import { ThemeColorAttr, ThemeSizeAttr, ThemeAttr } from '../types/theme.type';
import { ElementBase } from '../base/element-base';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-theme";
export declare class Theme extends ElementBase {
    static styles: import("lit").CSSResult[];
    render: () => import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    onSetSize(size: keyof ThemeSizeAttr): void;
    onSetTheme(color: keyof ThemeColorAttr): void;
    private getThemeClassName;
    private setThemeStyles;
    private setClassName;
}
declare global {
    namespace CTheme {
        interface Ref extends CElementBase.Ref<any, any>, ThemeAttr {
            onSetTheme?: (color: keyof ThemeColorAttr) => void;
            onSetSize?: (size: keyof ThemeSizeAttr) => void;
        }
        type Key = keyof Omit<CTheme.Ref, keyof HTMLAttributes<CTheme.Ref> | keyof ClassAttributes<CTheme.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTheme.Ref;
        }
    }
}
export {};
