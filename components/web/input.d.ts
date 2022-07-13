import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-input";
export declare class Input extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CInput {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CInput.Ref;
        }
    }
}
export {};
