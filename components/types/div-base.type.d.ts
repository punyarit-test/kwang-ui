import { ColorsAttr } from './colors.type';
import { ActiveColorAttr, HoverColorAttr } from './pseudo-classes.type';
import { SIZES } from './sizes.types';
import { TxColorAttr } from './tx-colors.type';
export declare type BorderRadiusAttr = Partial<Record<`round-${typeof SIZES[number]}`, boolean>>;
export declare type HeightAttr = Partial<Record<`h-${typeof SIZES[number]}` | 'h-full', boolean>>;
export declare type WidthAttr = Partial<Record<`w-${typeof SIZES[number]}` | 'w-full', boolean>>;
export declare type PaddingAttr = Partial<Record<`p-${typeof SIZES[number]}`, boolean>>;
export declare type MarginAttr = Partial<Record<`m-${typeof SIZES[number]}`, boolean>>;
export declare type TopAttr = Partial<Record<`top-${typeof SIZES[number]}`, boolean>>;
export declare type RightAttr = Partial<Record<`right-${typeof SIZES[number]}`, boolean>>;
export declare type BottomAttr = Partial<Record<`bottom-${typeof SIZES[number]}`, boolean>>;
export declare type LeftAttr = Partial<Record<`left-${typeof SIZES[number]}`, boolean>>;
export declare type PositionAttr = Partial<Record<'absolute' | 'relative' | 'fixed' | 'static' | 'sticky', Boolean>>;
export interface ElementBaseAttr extends MarginAttr, PaddingAttr, BorderRadiusAttr, PositionAttr, TopAttr, RightAttr, BottomAttr, LeftAttr, WidthAttr, HeightAttr, ColorsAttr, TxColorAttr, HoverColorAttr, ActiveColorAttr {
}
