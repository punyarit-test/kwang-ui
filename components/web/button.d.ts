import { LitElement } from 'lit';
declare const ELEMENT_NAME = "c-button";
export declare class Button extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CButton {
        interface Ref extends CBaseElement.Ref<string> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CButton.Ref;
        }
    }
}
export {};
