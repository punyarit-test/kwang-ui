export declare type WFC<SVX> = Partial<{
    [T in keyof SVX]: (fcx: {
        after?: {
            [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]: (e?: (e?: unknown) => void) => void;
        };
    }) => void;
}>;
export declare const WfcEffect: (fcx: any) => void;
