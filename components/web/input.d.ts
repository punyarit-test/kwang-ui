import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-input";
export declare class Input extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CInput {
        interface Ref extends CElementBase.Ref<any, any> {
        }
        type Key = keyof Omit<CInput.Ref, keyof HTMLAttributes<CInput.Ref> | keyof ClassAttributes<CInput.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CInput.Ref;
        }
    }
}
export {};
