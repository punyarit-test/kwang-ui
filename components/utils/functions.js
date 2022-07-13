"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncClr = exports.asyncEvt = exports.attr = exports.clr = exports.evt = exports.val = void 0;
const val = (value) => JSON.stringify(value);
exports.val = val;
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
    for (const key of attrs.split(' ')) {
        attrObj[key] = true;
    }
    return attrObj;
};
exports.attr = attr;
// Async Event
const clearAsyncEvent = (asyncComponent) => {
    clearInterval(asyncComponent);
};
const asyncEvt = (component, eventName, callback, timeout = 5000) => {
    const expire = Date.now() + timeout;
    const asyncComponent = setInterval(() => {
        //@ts-ignore
        if (component.current) {
            clearAsyncEvent(asyncComponent);
            component.current.addEventListener(eventName, callback);
        }
        else if (Date.now() >= expire) {
            clearAsyncEvent(asyncComponent);
            throw new Error('AsyncEvent: Component does not exist.');
        }
    }, 1000);
};
exports.asyncEvt = asyncEvt;
const asyncClr = (component, eventName, callback, timeout = 5000) => {
    const expire = Date.now() + timeout;
    const asyncComponent = setInterval(() => {
        //@ts-ignore
        if (component.current) {
            clearAsyncEvent(asyncComponent);
            component.current.removeEventListener(eventName, callback);
        }
        else if (Date.now() >= expire) {
            clearAsyncEvent(asyncComponent);
            throw new Error('AsyncEvent: Component does not exist.');
        }
    }, 1000);
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
