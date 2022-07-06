import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { ISizes } from '../types/size.type';
declare enum Element {
    name = "header-xl"
}
export declare class HeaderXl extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
declare global {
    namespace JSX {
        interface CTxtHeader extends Omit<HTMLAttributes<JSX.CTxtHeader>, 'color' | 'placeholder'>, ClassAttributes<JSX.CTxtHeader>, IPrimary, IGray, ISizes {
        }
        interface IntrinsicElements {
            [Element.name]: CTxtHeader;
        }
    }
}
export {};
