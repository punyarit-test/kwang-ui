import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { FlagAttr } from '../types/flag.type';
declare const ELEMENT_NAME = "c-flag";
export declare class Flag extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private removeFlag;
}
declare global {
    namespace CFlag {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, FlagAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlag.Ref;
        }
    }
}
export {};
