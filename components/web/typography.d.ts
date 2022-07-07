import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { ISizes } from '../types/size.type';
declare enum element {
    name = "c-typography"
}
export declare class Typography extends LitElement {
    static styles: import("lit").CSSResult;
    p?: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private setFontSizeByTagName;
    private setBooleanAttributes;
}
declare global {
    namespace JSX {
        interface CTypography extends Omit<HTMLAttributes<JSX.CTypography>, 'color' | 'placeholder'>, ClassAttributes<JSX.CTypography>, IPrimary, IGray, ISizes {
            p?: string;
        }
        interface IntrinsicElements {
            [element.name]: CTypography;
        }
    }
}
export {};
