import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IStartScreenAttr } from '../types/start-screen.type';
declare const ELEMENT_NAME = "start-screen";
export declare class StartScreen extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CStartScreen {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref>, IStartScreenAttr {
            img?: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CStartScreen.Ref;
        }
    }
}
export {};
