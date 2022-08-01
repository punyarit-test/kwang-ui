import {FunctionBind, FunctionPacks} from '../types/FunctionStore.type';

export default class ShadowEventStore {
  static #eventStore = {} as FunctionPacks<{[key: string]: Function}>;

  static set(events: FunctionPacks<Function>): {
    [key: string]: FunctionBind;
  } {
    let fnFlags = {} as {[key: string]: FunctionBind};
    for (const key in events) {
      if (!ShadowEventStore.#eventStore[key]) {
        ShadowEventStore.#eventStore[key] = {};
      }
      ShadowEventStore.#eventStore[key][events[key].name] = events[key];
      fnFlags[key] = {event: key, trigger: events[key].name};
    }
    return fnFlags;
  }

  static call(ex: FunctionBind, value: unknown = null): void {
    if (ShadowEventStore.#eventStore[ex.event][ex.trigger]) {
      ShadowEventStore.#eventStore[ex.event][ex.trigger](value);
    }
  }
}
