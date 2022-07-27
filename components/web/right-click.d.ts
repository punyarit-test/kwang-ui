import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "right-click";
export declare class RightClick extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CRightClick {
        interface Ref extends CElementBase.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CRightClick.Ref;
        }
    }
}
export {};
