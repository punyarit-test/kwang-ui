import { FlexAttr } from '../types/div-display.type';
import { DivDisplay } from './div-display';
declare const ELEMENT_NAME = "c-flex";
export declare class Flex extends DivDisplay {
}
declare global {
    namespace CFlex {
        interface Ref extends CDivDisplay.Ref, FlexAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CFlex.Ref;
        }
    }
}
export {};
