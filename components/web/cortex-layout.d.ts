import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "cortex-layout";
export declare class Layout extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    namespace CLayout {
        interface Ref extends CBaseElement.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CLayout.Ref;
        }
    }
}
export {};
