import { SIZES } from './sizes.types';
export declare type TxSizeAttr = Partial<Record<`tx-${typeof SIZES[number]}`, boolean>>;
export declare type TxSizeAttrKey = keyof TxSizeAttr;
