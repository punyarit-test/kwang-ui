import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "profile-bar";
export declare class ProfileBar extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CProfileBar {
        interface Ref extends CBaseElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CProfileBar.Ref;
        }
    }
}
export {};
