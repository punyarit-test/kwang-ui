import { ElementBase } from '../base/element-base';
import { BlockAttr } from '../types/block.type';
import { FlexAttr } from '../types/flex.type';
import { GridAttr } from '../types/grid.type';
declare const ELEMENT_NAME = "c-attr";
export declare class Attr extends ElementBase {
}
declare global {
    namespace CAttr {
        interface Ref extends CDivElement.Ref, FlexAttr, GridAttr, BlockAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CAttr.Ref;
        }
    }
}
export {};
