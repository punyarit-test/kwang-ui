import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-state";
export declare class State extends BaseElement {
    function: {};
    state: {};
    createRenderRoot(): this;
}
declare global {
    namespace CState {
        interface Ref extends CBaseElement.Ref<any,any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CState.Ref;
        }
    }
}
export {};
