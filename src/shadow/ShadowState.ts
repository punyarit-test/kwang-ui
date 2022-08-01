export default class ShadowState {
  static #stxKeys = {} as any;
  static #newValue = {} as any;
  static #oldValue = {} as any;
  static #svxId: string;
  static #setStxKeys: string[] = [];

  static setStx(state: any, stxId: any) {
    this.#oldValue[stxId] = this.#newValue[stxId];
    this.#newValue[stxId] = state;
    this.#stxKeys[stxId] = Object.keys(state);
  }

  static newValue() {
    return this.#newValue;
  }

  static oldValue() {
    return this.#oldValue;
  }

  static setStxKeys(stx: any) {
    this.#setStxKeys = Object.keys(stx);
  }

  public getSetStxKeys() {
    return ShadowState.#setStxKeys;
  }

  static setId(svxId: string) {
    this.#svxId = svxId;
  }

  static getId() {
    return this.#svxId;
  }

  public getAll() {
    return {
      stxKeys: ShadowState.#stxKeys,
      newValue: ShadowState.#newValue,
      oldValue: ShadowState.#oldValue,
      svxId: ShadowState.#svxId,
      setStxKeys: ShadowState.#setStxKeys,
    };
  }
}
