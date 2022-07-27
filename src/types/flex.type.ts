import {SIZES} from './sizes.types';

export const FLEX_ALIGNS = [
  'start',
  'center',
  'end',
  'stretch',
  'around',
  'between',
  'evenly',
] as const;

export type FlexLayoutAttr = Partial<
  Record<'column' | 'row' | 'inline', Boolean>
>;

export type JustifyAttr = Partial<
  Record<`justify-${typeof FLEX_ALIGNS[number]}`, boolean>
>;

export type ItemsAttr = Partial<
  Record<`items-${typeof FLEX_ALIGNS[number]}`, boolean>
>;

export type RowGapAttr = Partial<
  Record<`row-${typeof SIZES[number]}`, boolean>
>;

export type ColGapAttr = Partial<
  Record<`col-${typeof SIZES[number]}`, boolean>
>;

export type FlexGrowAttr = Partial<
  Record<`grow-${typeof SIZES[number]}` | 'grow', boolean>
>;

export type FlexWrapAttr = Partial<
  Record<'wrap' | 'wrap-reverse' | 'nowrap', Boolean>
>;

export type FlexShrinkAttr = Partial<
  Record<`shrink-${typeof SIZES[number]}`, boolean>
>;

export type FlexBasisAttr = Partial<
  Record<`basis-${typeof SIZES[number]}`, boolean>
>;

export interface FlexAttr
  extends JustifyAttr,
    FlexLayoutAttr,
    JustifyAttr,
    ItemsAttr,
    ColGapAttr,
    RowGapAttr,
    FlexGrowAttr,
    FlexWrapAttr,
    FlexShrinkAttr,
    FlexBasisAttr {}
