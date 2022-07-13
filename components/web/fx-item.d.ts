import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "fx-item";
export declare class FxItem extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CFxItem {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFxItem.Ref;
        }
    }
}
export {};
