import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { SizesAttr } from '../types/sizes.type';
declare const ELEMENT_NAME = "c-bar";
export declare class Bar extends LitElement {
}
declare global {
    namespace CBar {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, SizesAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBar.Ref;
        }
    }
}
export {};
