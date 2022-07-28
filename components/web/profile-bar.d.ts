import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "profile-bar";
export declare class ProfileBar extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CProfileBar {
        interface Ref extends CElementBase.Ref<any, any> {
        }
        type Key = keyof Omit<CProfileBar.Ref, keyof HTMLAttributes<CProfileBar.Ref> | keyof ClassAttributes<CProfileBar.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CProfileBar.Ref;
        }
    }
}
export {};
