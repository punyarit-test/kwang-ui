import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { ISizes } from '../types/sizes.type';
declare const ELEMENT_NAME = "c-typography";
export declare class Typography extends LitElement {
    static styles: import("lit").CSSResult;
    p?: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    protected setFontSize(fontSize: string): void;
    private setFontStyle;
}
declare global {
    namespace CTypography {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<CTypography.Ref>, IPrimary, IGray, ISizes {
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
