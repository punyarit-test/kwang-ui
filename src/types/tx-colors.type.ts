import {ColorAttr} from './colors.type';

export type TxColorKey = `tx-${keyof ColorAttr}`;

export type TxColorAttr = Partial<Record<TxColorKey, boolean>>;

declare global {
  namespace CX {
    type TxColor = TxColorKey;
  }
}
