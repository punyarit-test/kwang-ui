import { IconAttr } from '../types/icons.type';
import { ClassAttributes, HTMLAttributes } from 'react';
import { DivBase } from '../base/div-base';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon extends DivBase {
    render: () => import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends CDivElement.Ref, IconAttr {
        }
        type Key = keyof Omit<CIcon.Ref, keyof HTMLAttributes<CIcon.Ref> | keyof ClassAttributes<CIcon.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
