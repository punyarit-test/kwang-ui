import { ColorAttr } from './colors.type';
export declare type TxColorKey = `tx-${keyof ColorAttr}`;
export declare type TxColorAttr = Partial<Record<TxColorKey, boolean>>;
