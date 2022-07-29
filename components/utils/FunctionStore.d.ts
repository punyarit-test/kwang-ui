import { FunctionBind, FunctionPacks } from '../types/FunctionStore.type';
export default class FunctionStore {
    #private;
    static set(events: FunctionPacks<Function>): {
        [key: string]: FunctionBind;
    };
    static call(ex: FunctionBind, value?: unknown): void;
}
