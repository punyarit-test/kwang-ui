export declare type WFC<SVX> = Partial<{
    [T in keyof SVX]: (fcx: {
        before?: {
            [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (e?: (e?: any) => void) => void;
        };
        inter?: {
            [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (e?: (e?: any) => void) => void;
        };
        after?: {
            [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (e?: (e?: any) => void) => void;
        };
    }) => void;
}>;
export declare class FCX {
    #private;
    static setFcx(fn: any): void;
    static inter(param?: any): any;
    static setReturnValue(returnValue: any): void;
    static setParameter(parameterValue: any): void;
    static getParameter(): any;
}
export declare const WfcEffect: (fcx: any) => void;
