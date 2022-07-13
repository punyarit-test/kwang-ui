import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "right-click";
export declare class RightClick extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CRightClick {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CRightClick.Ref;
        }
    }
}
export {};
