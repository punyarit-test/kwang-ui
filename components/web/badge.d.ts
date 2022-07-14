import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-badge";
export declare class Badge extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBadge {
        interface Ref extends CBaseElement.Ref<string> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBadge.Ref;
        }
    }
}
export {};
