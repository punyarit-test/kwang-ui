import {ColorAttr} from './colors.type';
import {ActiveColorAttr, HoverColorAttr} from './pseudo-classes.type';
import {SIZES} from './sizes.types';
import {TxColorAttr} from './tx-colors.type';
import {TxSizeAttr} from './tx-sizes.type';

export type BorderRadiusAttr = Partial<
  Record<`round-${typeof SIZES[number]}` | 'round-full', boolean>
>;
export type BorderRadiusKey = keyof BorderRadiusAttr;

export type HeightAttr = Partial<
  Record<`h-${typeof SIZES[number]}` | 'h-full', boolean>
>;
export type HeightKey = keyof HeightAttr;

export type WidthAttr = Partial<
  Record<`w-${typeof SIZES[number]}` | 'w-full', boolean>
>;
export type WidthKey = keyof WidthAttr;

export type PaddingAttr = Partial<Record<`p-${typeof SIZES[number]}`, boolean>>;
export type PaddingKey = keyof PaddingAttr;

export type MarginAttr = Partial<Record<`m-${typeof SIZES[number]}`, boolean>>;
export type MarginKey = keyof MarginAttr;

export type TopAttr = Partial<Record<`top-${typeof SIZES[number]}`, boolean>>;
export type TopKey = keyof TopAttr;

export type RightAttr = Partial<
  Record<`right-${typeof SIZES[number]}`, boolean>
>;
export type RightKey = keyof RightAttr;

export type BottomAttr = Partial<
  Record<`bottom-${typeof SIZES[number]}`, boolean>
>;
export type BottomKey = keyof BottomAttr;

export type LeftAttr = Partial<Record<`left-${typeof SIZES[number]}`, boolean>>;
export type LeftKey = keyof LeftAttr;

export type PositionAttr = Partial<
  Record<'absolute' | 'relative' | 'fixed' | 'static' | 'sticky', Boolean>
>;
export type PositionKey = keyof PositionAttr;

export interface DivBaseAttr
  extends MarginAttr,
    PaddingAttr,
    BorderRadiusAttr,
    PositionAttr,
    TopAttr,
    RightAttr,
    BottomAttr,
    LeftAttr,
    WidthAttr,
    HeightAttr,
    ColorAttr,
    TxColorAttr,
    TxSizeAttr,
    HoverColorAttr,
    ActiveColorAttr {}

export type DivBaseKey = keyof DivBaseAttr;
declare global {
  namespace CX {
    type DivBase = DivBaseKey;
  }
}
