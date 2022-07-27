import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-skeleton";
export declare class Skeleton extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CSkeleton {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CSkeleton.Ref;
        }
    }
}
export {};
