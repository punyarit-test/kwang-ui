import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "profile-bar";
export declare class ProfileBar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CProfileBar {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CProfileBar.Ref;
        }
    }
}
export {};
