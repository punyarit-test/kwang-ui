"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _FCX_fcx, _FCX_returnValue, _FCX_parameterValue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WfcEffect = exports.FCX = void 0;
const react_1 = __importDefault(require("react"));
const ShadowState_1 = __importDefault(require("../shadow/ShadowState"));
const Fcx_1 = require("./Fcx");
class FCX {
    static setFcx(fn) {
        __classPrivateFieldSet(this, _a, fn, "f", _FCX_fcx);
    }
    static inter(param) {
        if (__classPrivateFieldGet(this, _a, "f", _FCX_fcx)) {
            __classPrivateFieldGet(this, _a, "f", _FCX_fcx)?.call(this, param || undefined);
            return __classPrivateFieldGet(this, _a, "f", _FCX_returnValue);
        }
    }
    static setReturnValue(returnValue) {
        __classPrivateFieldSet(this, _a, returnValue, "f", _FCX_returnValue);
    }
    static setParameter(parameterValue) {
        __classPrivateFieldSet(this, _a, parameterValue, "f", _FCX_parameterValue);
    }
    static getParameter() {
        return __classPrivateFieldGet(this, _a, "f", _FCX_parameterValue);
    }
}
exports.FCX = FCX;
_a = FCX;
_FCX_fcx = { value: void 0 };
_FCX_returnValue = { value: void 0 };
_FCX_parameterValue = { value: void 0 };
const WfcEffect = (fcx) => {
    const { newValue } = new ShadowState_1.default().getAll();
    react_1.default.useEffect(() => {
        if (fcx[newValue?.[Fcx_1.FCX_SVX_ID]?.['svxId']] &&
            newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']) {
            const fcxStore = storeFcx(newValue);
            const fcxFn = wrapFcx(fcx, newValue, fcxStore);
            FCX.setFcx(fcxFn);
        }
    }, [newValue[Fcx_1.FCX_SVX_ID]['fcxCount']]);
};
exports.WfcEffect = WfcEffect;
const wrapFcx = (fcx, newValue, fcxStore) => {
    return (e) => {
        FCX.setParameter(e);
        fcx[newValue?.[Fcx_1.FCX_SVX_ID]?.['svxId']]?.({
            inter: fcxStore,
        });
    };
};
const storeFcx = (newValue) => {
    const fcxStore = {};
    fcxStore[newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']] = (fnc) => {
        const returnValue = fnc(FCX.getParameter() || undefined);
        FCX.setReturnValue(returnValue);
    };
    return fcxStore;
};
