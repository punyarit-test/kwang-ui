export default class StateObserve {
  static #newValue = {} as any;
  static #oldValue = {} as any;

  static set(state: any) {
    this.#oldValue = this.#newValue;
    this.#newValue = state;
  }

  static newValue() {
    return this.#newValue;
  }

  static oldValue() {
    return this.#oldValue;
  }
}
