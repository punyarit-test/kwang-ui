import {SIZES} from './sizes.types';

export type FlexLayoutAttr = Partial<
  Record<'column' | 'row' | 'inline', Boolean>
>;

export type JustifyAttr = Partial<
  Record<
    'justify-start' | 'justify-center' | 'justify-end' | 'justify-stretch',
    Boolean
  >
>;

export type ItemsAttr = Partial<
  Record<
    'items-start' | 'items-center' | 'items-end' | 'items-stretch',
    Boolean
  >
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
  Record<'wrap' | 'items-center' | 'wrap-reverse' | 'nowrap', Boolean>
>;

export interface FlexAttr
  extends JustifyAttr,
    FlexLayoutAttr,
    JustifyAttr,
    ItemsAttr,
    ColGapAttr,
    RowGapAttr,
    FlexGrowAttr,
    FlexWrapAttr {}
