import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-sidebar";
export declare class Sidebar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CSidebar {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CSidebar.Ref;
        }
    }
}
export {};
