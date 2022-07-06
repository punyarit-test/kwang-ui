import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { Gray, Primary } from './types/colors.type';
declare enum Element {
    name = "txt-header"
}
export declare class TxtHeader extends LitElement {
    static styles: import("lit").CSSResult;
    xl?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
    xs?: boolean;
    light?: boolean;
    thin?: boolean;
    regular?: boolean;
    medium?: boolean;
    semibold?: boolean;
    bold?: boolean;
    color?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace JSX {
        interface CTxtHeader extends Omit<HTMLAttributes<JSX.CTxtHeader>, ''>, ClassAttributes<JSX.CTxtHeader> {
            xl?: boolean;
            lg?: boolean;
            md?: boolean;
            sm?: boolean;
            xs?: boolean;
            light?: boolean;
            thin?: boolean;
            regular?: boolean;
            medium?: boolean;
            semibold?: boolean;
            bold?: boolean;
            color?: Gray | Primary;
        }
        interface IntrinsicElements {
            [Element.name]: CTxtHeader;
        }
    }
}
export {};
