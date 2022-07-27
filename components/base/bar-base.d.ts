import { ElementBase } from './element-base';
declare const ELEMENT_NAME = "c-bar";
export declare class BarBase extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBar {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBar.Ref;
        }
    }
}
export {};
