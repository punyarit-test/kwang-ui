"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shake = exports.asyncClr = exports.asyncEvt = exports.attr = exports.clr = exports.evt = exports.cx = exports.sx = exports.ex = exports.val = void 0;
const ShadowEvent_1 = __importDefault(require("../shadow/ShadowEvent"));
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
const ex = (events) => (0, exports.val)(ShadowEvent_1.default.set(events));
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
