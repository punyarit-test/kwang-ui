import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "menu-bar";
export declare class MenuBar extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CMenuBar {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CMenuBar.Ref;
        }
    }
}
export {};
