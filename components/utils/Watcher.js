"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watcher = void 0;
const react_1 = require("react");
const StateKey_1 = __importDefault(require("./StateKey"));
const StateObserve_1 = __importDefault(require("./StateObserve"));
class State {
    constructor() {
        this.newValue = StateObserve_1.default.newValue();
        this.oldValue = StateObserve_1.default.oldValue();
        this.stateKey = StateKey_1.default.get();
    }
}
const watcher = (watcher) => {
    const { newValue, oldValue, stateKey } = new State();
    (0, react_1.useEffect)(() => {
        if (newValue[stateKey]) {
            watcher[stateKey](oldValue[stateKey], newValue[stateKey]);
        }
    }, [newValue[stateKey]]);
};
exports.watcher = watcher;
