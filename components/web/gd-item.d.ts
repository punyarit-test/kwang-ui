import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "gd-item";
export declare class GdItem extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CGdItem {
        interface Ref extends CBaseElement.Ref<any,any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CGdItem.Ref;
        }
    }
}
export {};
