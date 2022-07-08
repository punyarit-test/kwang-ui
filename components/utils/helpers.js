"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customEvent = void 0;
const customEvent = (element, event, data) => {
    element.dispatchEvent(new CustomEvent(event, {
        detail: {
            ...data,
        },
        bubbles: true,
    }));
};
exports.customEvent = customEvent;
