import { ColorAttr } from './colors.type';
import { TxColorKey } from './tx-colors.type';
export declare type HoverColorKeys = `hover-${keyof ColorAttr}`;
export declare type ActiveColorKeys = `active-${TxColorKey}`;
export declare type HoverColorAttr = Partial<Record<HoverColorKeys, boolean>>;
export declare type ActiveColorAttr = Partial<Record<ActiveColorKeys, boolean>>;
