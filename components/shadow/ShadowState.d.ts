export default class ShadowState {
    #private;
    static setStx(state: any, stxId: any): void;
    static newValue(): any;
    static oldValue(): any;
    static setStxKeys(stx: any): void;
    getSetStxKeys(): string[];
    static setId(svxId: string): void;
    static getId(): string;
    getAll(): {
        stxKeys: any;
        newValue: any;
        oldValue: any;
        svxId: string;
        setStxKeys: string[];
    };
}
