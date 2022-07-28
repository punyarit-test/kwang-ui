"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _FunctionStore_store;
Object.defineProperty(exports, "__esModule", { value: true });
exports.shake = exports.asyncClr = exports.asyncEvt = exports.attr = exports.clr = exports.evt = exports.cx = exports.sx = exports.ex = exports.val = exports.FunctionStore = void 0;
class FunctionStore {
    static set(event) {
        for (const key in event) {
            __classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[key] = event[key];
        }
    }
    static call(event, value = null) {
        __classPrivateFieldGet(FunctionStore, _a, "f", _FunctionStore_store)[event](value);
    }
}
exports.FunctionStore = FunctionStore;
_a = FunctionStore;
_FunctionStore_store = { value: {} };
// Async Event
const asyncComponent = (component, timeout, errorText, callback) => {
    const expire = Date.now() + timeout;
    const asyncComponent = setInterval(() => {
        if (component.current) {
            clearAsyncComponent(asyncComponent);
            callback();
        }
        else if (Date.now() >= expire) {
            clearAsyncComponent(asyncComponent);
            throw new Error(errorText);
        }
    }, 1000);
};
const clearAsyncComponent = (asyncComponent) => {
    clearInterval(asyncComponent);
};
const val = (value) => JSON.stringify(value);
exports.val = val;
const ex = (events) => {
    FunctionStore.set(events);
};
exports.ex = ex;
const sx = (component, styles) => {
    component.current.sx = styles;
};
exports.sx = sx;
const cx = (component, styles) => {
    component.current.cfx = styles;
};
exports.cx = cx;
const evt = (component, eventName, callback) => {
    component.current.addEventListener(eventName, callback);
};
exports.evt = evt;
const clr = (component, eventName, callback) => {
    component.current.removeEventListener(eventName, callback);
};
exports.clr = clr;
const attr = (attrs) => {
    let attrObj = {};
    for (const key of attrs.flat()) {
        attrObj[key] = true;
    }
    return attrObj;
};
exports.attr = attr;
const asyncEvt = (component, eventName, callback, timeout = 5000) => {
    asyncComponent(component, timeout, 'AsyncEvent: Component does not exist.', () => {
        component.current.addEventListener(eventName, callback);
    });
};
exports.asyncEvt = asyncEvt;
const asyncClr = (component, eventName, callback, timeout = 5000) => {
    asyncComponent(component, timeout, 'AsyncEvent: Component does not exist.', () => {
        component.current.removeEventListener(eventName, callback);
    });
};
exports.asyncClr = asyncClr;
// Effects
const shake = () => {
    const body = document.body;
    body?.classList?.add('efx-shake');
    setTimeout(() => {
        body?.classList?.remove('efx-shake');
    }, 600);
};
exports.shake = shake;
