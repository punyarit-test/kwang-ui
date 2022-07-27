import {ColorsAttr} from './colors.type';

export type TxColorKeys = `tx-${keyof ColorsAttr}`;

export type TxColorAttr = Partial<Record<TxColorKeys, boolean>>;
