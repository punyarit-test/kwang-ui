"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WtxEffect = void 0;
const react_1 = __importDefault(require("react"));
const ShadowState_1 = __importDefault(require("../shadow/ShadowState"));
const action = (stx) => {
    const shadowState = new ShadowState_1.default();
    return (JSON.stringify(stx.sort()) ===
        JSON.stringify(shadowState.getSetStxKeys().sort()));
};
const WtxEffect = (wtx) => {
    const { newValue, oldValue, stxKeys, svxId } = new ShadowState_1.default().getAll();
    react_1.default.useEffect(() => {
        for (const key in wtx) {
            if (svxId === key) {
                const stxStore = {};
                for (const stxKey of stxKeys[key]) {
                    stxStore[stxKey] = {
                        oldValue: oldValue[key][stxKey],
                        newValue: newValue[key][stxKey],
                    };
                }
                wtx[key](stxStore, (...stx) => action(stx));
            }
        }
    }, [newValue[svxId]]);
};
exports.WtxEffect = WtxEffect;
