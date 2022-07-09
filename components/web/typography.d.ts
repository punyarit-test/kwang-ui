import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IColors } from '../types/colors.type';
import { IWeights } from '../types/weights.type';
declare const ELEMENT_NAME = "c-typography";
export declare class Typography extends LitElement {
    static styles: import("lit").CSSResult;
    p?: string;
    render(): import("lit-html").TemplateResult<1>;
    protected setFontStyle(fontSize: string): void;
}
declare global {
    namespace CTypography {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<CTypography.Ref>, IColors, IWeights {
            p?: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
