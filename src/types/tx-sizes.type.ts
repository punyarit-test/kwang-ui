import {SIZES} from './sizes.types';

export type TxSizeAttr = Partial<Record<`tx-${typeof SIZES[number]}`, boolean>>;

export type TxSizeAttrKey = keyof TxSizeAttr;
