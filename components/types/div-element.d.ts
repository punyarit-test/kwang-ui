import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-div-element";
export declare class DivElement extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CDivElement {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CDivElement.Ref;
        }
    }
}
export {};
