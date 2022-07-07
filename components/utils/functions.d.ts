export declare const val: <T>(value: T) => string;
export declare const evt: <Y>(component: unknown, eventName: keyof Y, callback: (e: CustomEvent<any>) => void) => void;
export declare const clr: <Y>(component: unknown, eventName: keyof Y, callback: (e: CustomEvent<any>) => void) => void;
