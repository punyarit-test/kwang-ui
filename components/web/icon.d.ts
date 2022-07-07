import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { TIcons } from '../types/icons.type';
declare enum element {
    name = "c-icon"
}
export declare class Icon extends LitElement {
    static styles: import("lit").CSSResult;
    icon: string;
    size: string;
    color: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace JSX {
        interface CIcon extends Omit<HTMLAttributes<JSX.CIcon>, 'color' | 'placeholder'>, ClassAttributes<JSX.CIcon> {
            icon: TIcons;
            size?: string;
            color?: IPrimary | IGray;
        }
        interface IntrinsicElements {
            [element.name]: CIcon;
        }
    }
}
export {};
