import { DivDisplay } from './div-display';
declare const ELEMENT_NAME = "c-block";
export declare class Block extends DivDisplay {
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
