export declare const val: <T>(value: T) => string;
export declare const evt: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void) => void;
export declare const clr: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void) => void;
export declare const attr: (attrs: string) => Record<string, boolean>;
export declare const asyncEvt: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void, timeout?: number) => void;
export declare const asyncClr: <Y>(component: React.RefObject<any>, eventName: keyof Y, callback: (e: CustomEvent) => void, timeout?: number) => void;
