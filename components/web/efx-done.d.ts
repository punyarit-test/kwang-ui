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
    namespace CEfxDone {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
            disabled?: boolean;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CEfxDone.Ref;
        }
    }
}
export {};
