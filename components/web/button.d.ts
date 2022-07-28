import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-button";
export declare class Button extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CButton {
        interface Ref extends CElementBase.Ref<any, any> {
        }
        type Key = keyof Omit<CButton.Ref, keyof HTMLAttributes<CButton.Ref> | keyof ClassAttributes<CButton.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CButton.Ref;
        }
    }
}
export {};
