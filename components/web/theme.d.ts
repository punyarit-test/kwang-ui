import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-theme";
export declare class Theme extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CTheme {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTheme.Ref;
        }
    }
}
export {};