export declare type BlockAttr = Partial<Record<'inline' | 'inline-block', boolean>>;
export declare type BlockKey = keyof BlockAttr;
declare global {
    namespace CX {
        type Block = BlockKey;
    }
}
