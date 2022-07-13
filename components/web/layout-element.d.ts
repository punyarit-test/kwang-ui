import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "layout-element";
export declare class LayoutElement extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CLayoutElement {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CLayoutElement.Ref;
        }
    }
}
export {};
