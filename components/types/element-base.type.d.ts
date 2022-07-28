export interface ElementBaseAttr {
}
export declare type ElementBaseKey = keyof ElementBaseAttr;
declare global {
    namespace CX {
        type ElementBase = ElementBaseKey;
    }
}
