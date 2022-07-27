import { NavbarPositionAttr } from '../types/navbar.type';
import { BarBase } from '../base/bar-base';
declare const ELEMENT_NAME = "c-navbar";
export declare class Navbar extends BarBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CNavbar {
        interface Ref extends NavbarPositionAttr, CBar.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CNavbar.Ref;
        }
    }
}
export {};
