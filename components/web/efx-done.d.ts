import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
declare enum element {
    name = "efx-done"
}
export declare class EfxDone extends ElementBase {
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
        interface Ref extends CElementBase.Ref<any, any> {
            disabled?: boolean;
        }
        type Key = keyof Omit<CEfxDone.Ref, keyof HTMLAttributes<CEfxDone.Ref> | keyof ClassAttributes<CEfxDone.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [element.name]: CEfxDone.Ref;
        }
    }
}
export {};
