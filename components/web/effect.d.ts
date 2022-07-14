import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-effect";
export declare class Effect extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CEffect {
        interface Ref extends CBaseElement.Ref<string> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CEffect.Ref;
        }
    }
}
export {};
