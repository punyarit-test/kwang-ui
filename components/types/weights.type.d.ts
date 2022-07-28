export declare type WeightAttr = Partial<Record<'tx-thin' | 'tx-extralight' | 'tx-light' | 'tx-regular' | 'tx-medium' | 'tx-semibold' | 'tx-bold' | 'tx-extrabold', Boolean>>;
export declare type WeightKey = keyof WeightAttr;
declare global {
    namespace CX {
        type Weight = WeightKey;
    }
}
