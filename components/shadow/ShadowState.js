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
var _a, _ShadowState_stxKeys, _ShadowState_newValue, _ShadowState_oldValue, _ShadowState_svxId, _ShadowState_setStxKeys;
Object.defineProperty(exports, "__esModule", { value: true });
class ShadowState {
    static setStx(state, stxId) {
        __classPrivateFieldGet(this, _a, "f", _ShadowState_oldValue)[stxId] = __classPrivateFieldGet(this, _a, "f", _ShadowState_newValue)[stxId];
        __classPrivateFieldGet(this, _a, "f", _ShadowState_newValue)[stxId] = state;
        __classPrivateFieldGet(this, _a, "f", _ShadowState_stxKeys)[stxId] = Object.keys(state);
    }
    static newValue() {
        return __classPrivateFieldGet(this, _a, "f", _ShadowState_newValue);
    }
    static oldValue() {
        return __classPrivateFieldGet(this, _a, "f", _ShadowState_oldValue);
    }
    static setStxKeys(stx) {
        __classPrivateFieldSet(this, _a, Object.keys(stx), "f", _ShadowState_setStxKeys);
    }
    getSetStxKeys() {
        return __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_setStxKeys);
    }
    static setId(svxId) {
        __classPrivateFieldSet(this, _a, svxId, "f", _ShadowState_svxId);
    }
    static getId() {
        return __classPrivateFieldGet(this, _a, "f", _ShadowState_svxId);
    }
    getAll() {
        return {
            stxKeys: __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_stxKeys),
            newValue: __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_newValue),
            oldValue: __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_oldValue),
            svxId: __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_svxId),
            setStxKeys: __classPrivateFieldGet(ShadowState, _a, "f", _ShadowState_setStxKeys),
        };
    }
}
exports.default = ShadowState;
_a = ShadowState;
_ShadowState_stxKeys = { value: {} };
_ShadowState_newValue = { value: {} };
_ShadowState_oldValue = { value: {} };
_ShadowState_svxId = { value: void 0 };
_ShadowState_setStxKeys = { value: [] };
