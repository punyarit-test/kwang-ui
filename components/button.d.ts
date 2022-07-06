import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare enum Element {
    name = "c-button"
}
export declare class Button extends LitElement {
    static styles: import("lit").CSSResult;
    efx?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace JSX {
        interface CButton extends Omit<HTMLAttributes<JSX.CButton>, ''>, ClassAttributes<JSX.CButton> {
        }
        interface IntrinsicElements {
            [Element.name]: CButton;
        }
    }
}
export {};
