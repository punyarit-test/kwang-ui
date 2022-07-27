import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-effect";
export declare class Effect extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CEffect {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CEffect.Ref;
        }
    }
}
export {};
