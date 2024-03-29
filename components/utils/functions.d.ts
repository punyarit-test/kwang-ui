import { FunctionPacks } from '../types/FunctionStore.type';
export declare const val: <T>(value: T) => string;
export declare const ex: <T>(events: FunctionPacks<Function> | T) => string;
export declare const sx: <SX = void | undefined>(component: React.RefObject<unknown>, styles: SX) => void;
export declare const cx: <SX = void | undefined>(component: React.RefObject<unknown>, styles: SX) => void;
export declare const evt: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void) => void;
export declare const clr: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void) => void;
export declare const attr: (attrs: Array<CAttr.Key | Array<CAttr.Key>>) => Record<string, boolean>;
export declare const asyncEvt: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void, timeout?: number) => void;
export declare const asyncClr: <Y>(component: React.RefObject<unknown>, eventName: keyof Y, callback: (e: CustomEvent) => void, timeout?: number) => void;
export declare const shake: () => void;
