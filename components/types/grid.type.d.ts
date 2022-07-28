export declare type GridAttr = Partial<Record<'inline-grid', boolean>>;
export declare type GridKey = keyof GridAttr;
declare global {
    namespace CX {
        type Grid = GridKey;
    }
}
