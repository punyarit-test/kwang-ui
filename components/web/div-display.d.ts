import { DivElement } from './div-element';
declare const ELEMENT_NAME = "div-display";
export declare class DivDisplay extends DivElement {
    connectedCallback(): void;
    private setClassName;
    private getClassName;
    createRenderRoot(): this;
}
declare global {
    namespace CDivDisplay {
        interface Ref extends CDivElement.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CDivDisplay.Ref;
        }
    }
}
export {};
