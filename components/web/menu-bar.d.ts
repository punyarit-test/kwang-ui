import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "menu-bar";
export declare class MenuBar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CMenuBar {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CMenuBar.Ref;
        }
    }
}
export {};
