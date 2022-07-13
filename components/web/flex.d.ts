import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-flex";
export declare class Flex extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CFlex {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlex.Ref;
        }
    }
}
export {};
