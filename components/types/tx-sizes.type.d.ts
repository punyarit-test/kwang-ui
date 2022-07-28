import { SIZES } from './sizes.types';
export declare type TxSizeAttr = Partial<Record<`tx-${typeof SIZES[number]}`, boolean>>;
export declare type TxSizeKey = keyof TxSizeAttr;
declare global {
    namespace CX {
        type TxSize = TxSizeKey;
    }
}
