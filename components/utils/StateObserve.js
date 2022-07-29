"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _StateObserve_newValue, _StateObserve_oldValue;
Object.defineProperty(exports, "__esModule", { value: true });
class StateObserve {
    static set(state) {
        __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _StateObserve_newValue), "f", _StateObserve_oldValue);
        __classPrivateFieldSet(this, _a, state, "f", _StateObserve_newValue);
    }
    static newValue() {
        return __classPrivateFieldGet(this, _a, "f", _StateObserve_newValue);
    }
    static oldValue() {
        return __classPrivateFieldGet(this, _a, "f", _StateObserve_oldValue);
    }
}
exports.default = StateObserve;
_a = StateObserve;
_StateObserve_newValue = { value: {} };
_StateObserve_oldValue = { value: {} };
