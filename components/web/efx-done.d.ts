import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
declare enum element {
    name = "efx-done"
}
export declare class EfxDone extends LitElement {
    static styles: import("lit").CSSResult;
    disabled?: boolean;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    private initEfx;
    private animateEfx;
    private setTimeEfx;
}
declare global {
    namespace JSX {
        interface CEfxDone extends Omit<HTMLAttributes<JSX.CEfxDone>, 'color' | 'placeholder'>, ClassAttributes<JSX.CEfxDone> {
            disabled?: boolean;
        }
        interface IntrinsicElements {
            [element.name]: CEfxDone;
        }
    }
}
export {};
