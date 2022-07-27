import { ColorsAttr } from './colors.type';
import { TxColorKeys } from './tx-colors.type';
export declare type HoverColorKeys = `hover-${keyof ColorsAttr}`;
export declare type ActiveColorKeys = `active-${TxColorKeys}`;
export declare type HoverColorAttr = Partial<Record<HoverColorKeys, boolean>>;
export declare type ActiveColorAttr = Partial<Record<ActiveColorKeys, boolean>>;
