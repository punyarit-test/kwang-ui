export default class StateKey {
  static #key = '';

  static set(state: any) {
    this.#key = state;
  }

  static get() {
    return this.#key;
  }
}
