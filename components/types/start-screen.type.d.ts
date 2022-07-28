export declare type StartScreenAttr = Partial<Record<'fade', Boolean>>;
export declare type StartScreenKey = keyof StartScreenAttr;
declare global {
    namespace CX {
        type StartScreen = StartScreenKey;
    }
}
