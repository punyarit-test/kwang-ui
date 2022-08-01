export declare const useStx: <T>(svxId: string, stx: T) => T & {
    set: (newState: Partial<T>) => void;
};
