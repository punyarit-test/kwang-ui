import {FunctionBind, FunctionPacks} from '../types/FunctionStore.type';

export default class FunctionStore {
  static #store = {} as FunctionPacks<{[key: string]: Function}>;

  static set(events: FunctionPacks<Function>): {
    [key: string]: FunctionBind;
  } {
    let fnFlags = {} as {[key: string]: FunctionBind};
    for (const key in events) {
      if (!FunctionStore.#store[key]) {
        FunctionStore.#store[key] = {};
      }
      FunctionStore.#store[key][events[key].name] = events[key];
      fnFlags[key] = {event: key, trigger: events[key].name};
    }
    return fnFlags;
  }

  static call(ex: FunctionBind, value: unknown = null): void {
    if (FunctionStore.#store[ex.event][ex.trigger]) {
      FunctionStore.#store[ex.event][ex.trigger](value);
    }
  }
}
