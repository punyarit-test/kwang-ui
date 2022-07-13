import { FlagAttr } from '../types/flag.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-flag";
export declare class Flag extends BaseElement {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private removeFlag;
}
declare global {
    namespace CFlag {
        interface Ref extends CBaseElement.Ref, FlagAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlag.Ref;
        }
    }
}
export {};
