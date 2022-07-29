"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watcher = void 0;
const react_1 = require("react");
const StateObserve_1 = __importDefault(require("./StateObserve"));
const watcher = (watcher) => {
    (0, react_1.useEffect)(() => {
        if (StateObserve_1.default.newValue()['number']) {
            const newValue = StateObserve_1.default.newValue();
            const oldValue = StateObserve_1.default.oldValue();
            for (const key in watcher) {
                // @ts-ignore
                watcher[key](oldValue[key], newValue[key]);
            }
        }
    }, [StateObserve_1.default.newValue()['number']]);
};
exports.watcher = watcher;
