import { ColorsAttr } from './colors.type';
export declare type TxColorKeys = `tx-${keyof ColorsAttr}`;
export declare type TxColorAttr = Partial<Record<TxColorKeys, boolean>>;
