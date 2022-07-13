import { SidebarPosition } from '../types/sidebar.type';
import { Bar } from './bar';
declare const ELEMENT_NAME = "c-sidebar";
export declare class Sidebar extends Bar {
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
