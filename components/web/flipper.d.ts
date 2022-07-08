import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IFlipper } from '../types/flipper.type';
declare const ELEMENT_NAME = "c-flipper";
export declare class Flipper extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CFlipper {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, IFlipper {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlipper.Ref;
        }
    }
}
export {};
