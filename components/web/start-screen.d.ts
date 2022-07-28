import { StartScreenAttr } from '../types/start-screen.type';
import { ElementBase } from '../base/element-base';
import { ClassAttributes, HTMLAttributes } from 'react';
declare const ELEMENT_NAME = "start-screen";
export declare class StartScreen extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CStartScreen {
        interface Ref extends CElementBase.Ref<any, any>, StartScreenAttr {
        }
        type Key = keyof Omit<CStartScreen.Ref, keyof HTMLAttributes<CStartScreen.Ref> | keyof ClassAttributes<CStartScreen.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CStartScreen.Ref;
        }
    }
}
export {};
