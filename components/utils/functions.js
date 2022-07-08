"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clr = exports.evt = exports.val = void 0;
const val = (value) => JSON.stringify(value);
exports.val = val;
const evt = (component, eventName, callback) => {
    component.addEventListener(eventName, callback);
};
exports.evt = evt;
const clr = (component, eventName, callback) => {
    component.removeEventListener(eventName, callback);
};
exports.clr = clr;
