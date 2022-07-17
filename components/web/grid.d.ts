import { DivDisplay } from './div-display';
declare const ELEMENT_NAME = "c-grid";
export declare class Grid extends DivDisplay {
}
declare global {
    namespace CGrid {
        interface Ref extends CDivDisplay.Ref {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CGrid.Ref;
        }
    }
}
export {};
