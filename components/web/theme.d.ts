import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { ColorThemeAttr, SizeThemeAttr, ThemeAttr } from '../types/theme.type';
declare const ELEMENT_NAME = "c-theme";
export declare class Theme extends LitElement {
    static styles: import("lit").CSSResult[];
    render: () => import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    onSetSize(size: keyof SizeThemeAttr): void;
    onSetTheme(color: keyof ColorThemeAttr): void;
    private getClassName;
    private setThemeStyles;
    private setClassName;
}
declare global {
    namespace CTheme {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, ThemeAttr {
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
export {};
