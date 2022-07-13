import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-bar";
export declare class Bar extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBar {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBar.Ref;
        }
    }
}
export {};
