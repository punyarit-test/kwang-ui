import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { Colors } from '../types/colors.type';
import { FontSizeAttr } from '../types/font-sizes.type';
import { IconName } from '../types/icons.type';
import { WeightAttr } from '../types/weights.type';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon2 extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private setIconAttr;
}
declare global {
    namespace CIcon {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<CTypography.Ref>, IconName, Colors, WeightAttr, FontSizeAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
}
export {};
