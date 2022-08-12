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
    static before(): any;
    static inter(param?: any): any;
    static after(param?: any): void;
    static setInterFn(fn: any): void;
    static setBeforeFn(fn: any): void;
    static setAfterFn(fn: any): void;
    static setInterReturn(returnValue: any): void;
    static setBeforeReturn(returnValue: any): void;
    static setInterParameter(parameterValue: any): void;
    static setAfterParameter(parameterValue: any): void;
    static getInterParameter(): any;
    static getAfterParameter(): any;
}
export declare const WfcEffect: (fcx: any) => void;
