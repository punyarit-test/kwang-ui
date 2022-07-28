import { ColorAttr } from './colors.type';
import { ActiveColorAttr, HoverColorAttr } from './pseudo-classes.type';
import { SIZES } from './sizes.types';
import { TxColorAttr } from './tx-colors.type';
import { TxSizeAttr } from './tx-sizes.type';
export declare type BorderRadiusAttr = Partial<Record<`round-${typeof SIZES[number]}` | 'round-full', boolean>>;
export declare type BorderRadiusKey = keyof BorderRadiusAttr;
export declare type HeightAttr = Partial<Record<`h-${typeof SIZES[number]}` | 'h-full', boolean>>;
export declare type HeightKey = keyof HeightAttr;
export declare type WidthAttr = Partial<Record<`w-${typeof SIZES[number]}` | 'w-full', boolean>>;
export declare type WidthKey = keyof WidthAttr;
export declare type PaddingAttr = Partial<Record<`p-${typeof SIZES[number]}`, boolean>>;
export declare type PaddingKey = keyof PaddingAttr;
export declare type MarginAttr = Partial<Record<`m-${typeof SIZES[number]}`, boolean>>;
export declare type MarginKey = keyof MarginAttr;
export declare type TopAttr = Partial<Record<`top-${typeof SIZES[number]}`, boolean>>;
export declare type TopKey = keyof TopAttr;
export declare type RightAttr = Partial<Record<`right-${typeof SIZES[number]}`, boolean>>;
export declare type RightKey = keyof RightAttr;
export declare type BottomAttr = Partial<Record<`bottom-${typeof SIZES[number]}`, boolean>>;
export declare type BottomKey = keyof BottomAttr;
export declare type LeftAttr = Partial<Record<`left-${typeof SIZES[number]}`, boolean>>;
export declare type LeftKey = keyof LeftAttr;
export declare type PositionAttr = Partial<Record<'absolute' | 'relative' | 'fixed' | 'static' | 'sticky', Boolean>>;
export declare type PositionKey = keyof PositionAttr;
export interface DivBaseAttr extends MarginAttr, PaddingAttr, BorderRadiusAttr, PositionAttr, TopAttr, RightAttr, BottomAttr, LeftAttr, WidthAttr, HeightAttr, ColorAttr, TxColorAttr, TxSizeAttr, HoverColorAttr, ActiveColorAttr {
}
export declare type DivBaseKey = keyof DivBaseAttr;
declare global {
    namespace CX {
        type DivBase = DivBaseKey;
    }
}
