import { LitElement } from 'lit';
import { SidebarPosition } from '../types/sidebar.type';
declare const ELEMENT_NAME = "c-sidebar";
export declare class Sidebar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CSidebar {
        interface Ref extends CBar.Ref, SidebarPosition {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CSidebar.Ref;
        }
    }
}
export {};
