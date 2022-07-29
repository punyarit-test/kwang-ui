export declare const useStx: <T>(stx: T) => T & {
    set: (newState: Partial<T>) => void;
};
