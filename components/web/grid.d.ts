import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-grid";
export declare class Grid extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CGrid {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CGrid.Ref;
        }
    }
}
export {};
