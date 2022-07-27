import { BlockAttr } from '../types/block.type';
import { FlexAttr } from '../types/flex.type';
import { GridAttr } from '../types/grid.type';
import { DivBase } from '../base/div-base';
declare const BLOCK_NAME = "c-block";
declare const FLEX_NAME = "c-flex";
declare const GRID_NAME = "c-grid";
declare abstract class DivDisplay extends DivBase {
    connectedCallback(): void;
    private setClassName;
    private getClassName;
    createRenderRoot(): this;
}
export declare class Block extends DivDisplay {
}
export declare class Flex extends DivDisplay {
}
export declare class Grid extends DivDisplay {
}
declare global {
    namespace CDivDisplay {
        interface Ref extends CDivElement.Ref {
        }
        interface CBlockRef extends CDivDisplay.Ref, BlockAttr {
        }
        interface CFlexRef extends CDivDisplay.Ref, FlexAttr {
        }
        interface CGridRef extends CDivDisplay.Ref, GridAttr {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [BLOCK_NAME]: CDivDisplay.CBlockRef;
            [FLEX_NAME]: CDivDisplay.CFlexRef;
            [GRID_NAME]: CDivDisplay.CGridRef;
        }
    }
}
export {};
