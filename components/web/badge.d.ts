import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-badge";
export declare class Badge extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBadge {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBadge.Ref;
        }
    }
}
export {};
