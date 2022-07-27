import { SIZES } from './sizes.types';
export declare const FLEX_ALIGNS: readonly ["start", "center", "end", "stretch", "around", "between", "evenly"];
export declare type FlexLayoutAttr = Partial<Record<'column' | 'row' | 'inline', Boolean>>;
export declare type JustifyAttr = Partial<Record<`justify-${typeof FLEX_ALIGNS[number]}`, boolean>>;
export declare type ItemsAttr = Partial<Record<`items-${typeof FLEX_ALIGNS[number]}`, boolean>>;
export declare type RowGapAttr = Partial<Record<`row-${typeof SIZES[number]}`, boolean>>;
export declare type ColGapAttr = Partial<Record<`col-${typeof SIZES[number]}`, boolean>>;
export declare type FlexGrowAttr = Partial<Record<`grow-${typeof SIZES[number]}` | 'grow', boolean>>;
export declare type FlexWrapAttr = Partial<Record<'wrap' | 'wrap-reverse' | 'nowrap', Boolean>>;
export declare type FlexShrinkAttr = Partial<Record<`shrink-${typeof SIZES[number]}`, boolean>>;
export declare type FlexBasisAttr = Partial<Record<`basis-${typeof SIZES[number]}`, boolean>>;
export interface FlexAttr extends JustifyAttr, FlexLayoutAttr, JustifyAttr, ItemsAttr, ColGapAttr, RowGapAttr, FlexGrowAttr, FlexWrapAttr, FlexShrinkAttr, FlexBasisAttr {
}
