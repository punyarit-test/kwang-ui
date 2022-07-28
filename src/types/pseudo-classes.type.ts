import {ColorAttr} from './colors.type';
import {TxColorKey} from './tx-colors.type';

export type HoverColorKeys = `hover-${keyof ColorAttr}`;
export type ActiveColorKeys = `active-${TxColorKey}`;

export type HoverColorAttr = Partial<Record<HoverColorKeys, boolean>>;
export type ActiveColorAttr = Partial<Record<ActiveColorKeys, boolean>>;
