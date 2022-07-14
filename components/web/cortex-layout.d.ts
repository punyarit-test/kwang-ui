import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "cortex-layout";
export declare class Layout extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    namespace CLayout {
        interface Ref extends CBaseElement.Ref<string> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CLayout.Ref;
        }
    }
}
export {};
