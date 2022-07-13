import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-block";
export declare class Block extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBlock {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBlock.Ref;
        }
    }
}
export {};
