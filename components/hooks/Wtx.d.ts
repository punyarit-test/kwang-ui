export declare type WTX<SVX> = Partial<{
    [T in keyof SVX]: (stx: {
        [K in keyof Omit<SVX[T & keyof SVX], 'set' | 'fcx'>]: SVX[T & keyof SVX][K & keyof SVX[T]] extends Function ? never : {
            oldValue: unknown;
            newValue: unknown;
        };
    }, act: (...set: Exclude<keyof SVX[T & keyof SVX], 'set' | 'fcx'>[]) => boolean) => void;
}>;
export declare const WtxEffect: (wtx: any) => void;
