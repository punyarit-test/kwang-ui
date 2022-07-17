import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-method";
export declare class Method extends BaseElement {
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
}
declare global {
    namespace CMethod {
        interface Ref extends CBaseElement.Ref<any,any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CMethod.Ref;
        }
    }
}
export {};
