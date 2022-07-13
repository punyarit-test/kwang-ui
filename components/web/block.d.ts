import { DivDisplay } from './div-display';
declare const ELEMENT_NAME = "c-block";
export declare class Block extends DivDisplay {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CBlock {
        interface Ref extends CDivDisplay.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CBlock.Ref;
        }
    }
}
export {};
