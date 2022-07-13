import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "div-display";
export declare class DivDisplay extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CDivDisplay {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CDivDisplay.Ref;
        }
    }
}
export {};
