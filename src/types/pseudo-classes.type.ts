import {ColorsAttr} from './colors.type';
import {TxColorKeys} from './tx-colors.type';

export type HoverColorKeys = `hover-${keyof ColorsAttr}`;
export type ActiveColorKeys = `active-${TxColorKeys}`;

export type HoverColorAttr = Partial<Record<HoverColorKeys, boolean>>;
export type ActiveColorAttr = Partial<Record<ActiveColorKeys, boolean>>;
