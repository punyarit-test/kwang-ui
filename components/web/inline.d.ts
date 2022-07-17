import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-inline";
export declare class Inline extends BaseElement {
}
declare global {
    namespace CInline {
        interface Ref extends CDivDisplay.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CInline.Ref;
        }
    }
}
export {};
