import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IColors } from '../types/colors.type';
import { IFontSize } from '../types/font-sizes.type';
import { IWeights } from '../types/weights.type';
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
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, IColors, IWeights, IFontSize {
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
