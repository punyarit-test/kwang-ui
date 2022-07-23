import {SIZES} from './sizes.types';

export type TySizesAttr = Partial<
  Record<`tx-${typeof SIZES[number]}`, boolean>
>;
