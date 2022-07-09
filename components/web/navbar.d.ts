import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { INavbarMenus, INavbarPosition } from '../types/navbar';
declare const ELEMENT_NAME = "c-navbar";
export declare class Navbar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CNavbar {
        interface Menu extends INavbarMenus {
        }
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, INavbarPosition {
            menu: Menu[];
            img: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CNavbar.Ref;
        }
    }
}
export {};
