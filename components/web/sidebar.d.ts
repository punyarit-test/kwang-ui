import { ClassAttributes, HTMLAttributes } from 'react';
import { SidebarPositionAttr } from '../types/sidebar.type';
import { BarBase } from '../base/bar-base';
declare const ELEMENT_NAME = "c-sidebar";
export declare class Sidebar extends BarBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CSidebar {
        interface Ref extends CBar.Ref, SidebarPositionAttr {
        }
        type Key = keyof Omit<CSidebar.Ref, keyof HTMLAttributes<CSidebar.Ref> | keyof ClassAttributes<CSidebar.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CSidebar.Ref;
        }
    }
}
export {};
