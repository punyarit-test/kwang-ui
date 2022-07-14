import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-content";
export declare class Content extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CContent {
        interface Ref extends CBaseElement.Ref<string> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CContent.Ref;
        }
    }
}
export {};
