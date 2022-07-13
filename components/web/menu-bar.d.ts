import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "menu-bar";
export declare class MenuBar extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CMenuBar {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CMenuBar.Ref;
        }
    }
}
export {};
