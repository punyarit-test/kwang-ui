import { DivElement } from './div-element';
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
}
