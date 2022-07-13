import { StartScreenAttr } from '../types/start-screen.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "start-screen";
export declare class StartScreen extends BaseElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CStartScreen {
        interface Ref extends CBaseElement.Ref, StartScreenAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CStartScreen.Ref;
        }
    }
}
export {};
