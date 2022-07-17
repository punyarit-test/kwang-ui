import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-hover";
export declare class Hover extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CHover {
        interface Ref extends CBaseElement.Ref<any,any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CHover.Ref;
        }
    }
}
export {};
