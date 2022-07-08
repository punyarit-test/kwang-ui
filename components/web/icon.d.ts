import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IColors } from '../types/colors.type';
import { IIcons } from '../types/icons.type';
import { ISizes } from '../types/sizes.type';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon2 extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<CTypography.Ref>, IIcons, IColors, ISizes {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
