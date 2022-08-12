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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _FCX_fcxInter, _FCX_fcxBefore, _FCX_fcxAfter, _FCX_returnInterValue, _FCX_returnBeforeValue, _FCX_interParameter, _FCX_afterParameter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WfcEffect = exports.FCX = void 0;
const react_1 = __importDefault(require("react"));
const ShadowState_1 = __importDefault(require("../shadow/ShadowState"));
const Fcx_1 = require("./Fcx");
class FCX {
    static before() {
        if (__classPrivateFieldGet(this, _a, "f", _FCX_fcxBefore)) {
            __classPrivateFieldGet(this, _a, "f", _FCX_fcxBefore)?.call(this);
            return __classPrivateFieldGet(this, _a, "f", _FCX_returnBeforeValue);
        }
    }
    static inter(param) {
        if (__classPrivateFieldGet(this, _a, "f", _FCX_fcxInter)) {
            __classPrivateFieldGet(this, _a, "f", _FCX_fcxInter)?.call(this, param || undefined);
            return __classPrivateFieldGet(this, _a, "f", _FCX_returnInterValue);
        }
    }
    static after(param) {
        if (__classPrivateFieldGet(this, _a, "f", _FCX_fcxAfter)) {
            __classPrivateFieldGet(this, _a, "f", _FCX_fcxAfter)?.call(this, param);
        }
    }
    static setInterFn(fn) {
        __classPrivateFieldSet(this, _a, fn, "f", _FCX_fcxInter);
    }
    static setBeforeFn(fn) {
        __classPrivateFieldSet(this, _a, fn, "f", _FCX_fcxBefore);
    }
    static setAfterFn(fn) {
        __classPrivateFieldSet(this, _a, fn, "f", _FCX_fcxAfter);
    }
    static setInterReturn(returnValue) {
        __classPrivateFieldSet(this, _a, returnValue, "f", _FCX_returnInterValue);
    }
    static setBeforeReturn(returnValue) {
        __classPrivateFieldSet(this, _a, returnValue, "f", _FCX_returnBeforeValue);
    }
    static setInterParameter(parameterValue) {
        __classPrivateFieldSet(this, _a, parameterValue, "f", _FCX_interParameter);
    }
    static setAfterParameter(parameterValue) {
        __classPrivateFieldSet(this, _a, parameterValue, "f", _FCX_afterParameter);
    }
    static getInterParameter() {
        return __classPrivateFieldGet(this, _a, "f", _FCX_interParameter);
    }
    static getAfterParameter() {
        return __classPrivateFieldGet(this, _a, "f", _FCX_afterParameter);
    }
}
exports.FCX = FCX;
_a = FCX;
// fcx function
_FCX_fcxInter = { value: void 0 };
_FCX_fcxBefore = { value: void 0 };
_FCX_fcxAfter = { value: void 0 };
// fcx return value
_FCX_returnInterValue = { value: void 0 };
_FCX_returnBeforeValue = { value: void 0 };
// fcx parameter
_FCX_interParameter = { value: void 0 };
_FCX_afterParameter = { value: void 0 };
const WfcEffect = (fcx) => {
    const newValue = ShadowState_1.default.newValue();
    react_1.default.useEffect(() => {
        if (fcx[newValue?.[Fcx_1.FCX_SVX_ID]?.['svxId']] &&
            newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']) {
            // before
            FCX.setBeforeFn(wrapBeforeFcx(fcx, newValue, storeBeforeFcx(newValue)));
            // inter
            FCX.setInterFn(wrapInterFcx(fcx, newValue, storeInterFcx(newValue)));
            // after
            FCX.setAfterFn(wrapAfterFcx(fcx, newValue, storeAfterFcx(newValue)));
        }
    }, [newValue[Fcx_1.FCX_SVX_ID]['fcxCount']]);
};
exports.WfcEffect = WfcEffect;
const storeAfterFcx = (newValue) => {
    const fcxAftereStore = {};
    fcxAftereStore[newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']] = (fn) => {
        fn(FCX.getAfterParameter());
    };
    return fcxAftereStore;
};
const storeBeforeFcx = (newValue) => {
    const fcxBeforeStore = {};
    fcxBeforeStore[newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']] = (fn) => {
        FCX.setBeforeReturn(fn());
    };
    return fcxBeforeStore;
};
const storeInterFcx = (newValue) => {
    const fcxStore = {};
    fcxStore[newValue?.[Fcx_1.FCX_SVX_ID]?.['fnName']] = (fnc) => {
        FCX.setInterReturn(fnc(FCX.getInterParameter()));
    };
    return fcxStore;
};
const wrapInterFcx = (fcx, newValue, fcxInterStore) => (e) => {
    FCX.setInterParameter(e);
    setFcxWithParam(fcx, newValue, 'inter', fcxInterStore);
};
const wrapBeforeFcx = (fcx, newValue, fcxBeforeStore) => () => {
    setFcxWithParam(fcx, newValue, 'before', fcxBeforeStore);
};
const wrapAfterFcx = (fcx, newValue, fcxAftereStore) => (e) => {
    FCX.setAfterParameter(e);
    setFcxWithParam(fcx, newValue, 'after', fcxAftereStore);
};
const setFcxWithParam = (fcx, newValue, param, fcxStore) => {
    fcx[newValue?.[Fcx_1.FCX_SVX_ID]?.['svxId']]?.({
        [param]: fcxStore,
    });
};
