import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { Colors } from '../types/colors.type';
import { TxSizes } from '../types/tx-sizes.type';
import { WeightAttr } from '../types/weights.type';
declare const ELEMENT_NAME = "c-txt";
export declare class Txt extends LitElement {
    static styles: import("lit").CSSResult;
    p?: string;
    render: () => import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    private setFontStyle;
}
declare global {
    namespace CTxt {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, Colors, WeightAttr, TxSizes {
            p?: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTxt.Ref;
        }
    }
}
export {};
