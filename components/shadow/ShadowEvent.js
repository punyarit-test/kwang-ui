"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _ShadowEventStore_eventStore;
Object.defineProperty(exports, "__esModule", { value: true });
class ShadowEventStore {
    static set(events) {
        let fnFlags = {};
        for (const key in events) {
            if (!__classPrivateFieldGet(ShadowEventStore, _a, "f", _ShadowEventStore_eventStore)[key]) {
                __classPrivateFieldGet(ShadowEventStore, _a, "f", _ShadowEventStore_eventStore)[key] = {};
            }
            __classPrivateFieldGet(ShadowEventStore, _a, "f", _ShadowEventStore_eventStore)[key][events[key].name] = events[key];
            fnFlags[key] = { event: key, trigger: events[key].name };
        }
        return fnFlags;
    }
    static call(ex, value = null) {
        if (__classPrivateFieldGet(ShadowEventStore, _a, "f", _ShadowEventStore_eventStore)[ex.event][ex.trigger]) {
            __classPrivateFieldGet(ShadowEventStore, _a, "f", _ShadowEventStore_eventStore)[ex.event][ex.trigger](value);
        }
    }
}
exports.default = ShadowEventStore;
_a = ShadowEventStore;
_ShadowEventStore_eventStore = { value: {} };
