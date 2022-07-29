"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _FunctionStore_store;
Object.defineProperty(exports, "__esModule", { value: true });
class FunctionStore {
    static set(events) {
        let fnFlags = {};
        for (const key in events) {
            if (!__classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[key]) {
                __classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[key] = {};
            }
            __classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[key][events[key].name] = events[key];
            fnFlags[key] = { event: key, trigger: events[key].name };
        }
        return fnFlags;
    }
    static call(ex, value = null) {
        if (__classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[ex.event][ex.trigger]) {
            __classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[ex.event][ex.trigger](value);
        }
    }
}
exports.default = FunctionStore;
_a = FunctionStore;
_FunctionStore_store = { value: {} };
