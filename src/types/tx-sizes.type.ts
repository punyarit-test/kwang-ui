import {SIZES} from './sizes.types';

export type TxSizeAttr = Partial<Record<`tx-${typeof SIZES[number]}`, boolean>>;

export type TxSizeKey = keyof TxSizeAttr;

declare global {
  namespace CX {
    type TxSize = TxSizeKey;
  }
}
