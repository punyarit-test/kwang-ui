import { DivElementAttr } from '../types/div-element.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "div-element";
export declare class DivElement extends BaseElement {
}
declare global {
    namespace CDivElement {
        interface Ref extends CBaseElement.Ref<string>, DivElementAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CDivElement.Ref;
        }
    }
}
export {};
