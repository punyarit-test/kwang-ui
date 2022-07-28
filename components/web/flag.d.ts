import { FlagAttr } from '../types/flag.type';
import { ElementBase } from '../base/element-base';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "c-flag";
export declare class Flag extends ElementBase {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private removeFlag;
}
declare global {
    namespace CFlag {
        interface Ref extends CElementBase.Ref<any, any>, FlagAttr {
        }
        type Key = keyof Omit<CFlag.Ref, keyof HTMLAttributes<CFlag.Ref> | keyof ClassAttributes<CFlag.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlag.Ref;
        }
    }
}
export {};
