import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare enum element {
    name = "c-theme"
}
export declare class Theme extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace JSX {
        interface CTheme extends Omit<HTMLAttributes<JSX.CTheme>, 'color' | 'placeholder'>, ClassAttributes<JSX.CTheme> {
        }
        interface IntrinsicElements {
            [element.name]: CTheme;
        }
    }
}
export {};
