"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStx = void 0;
const react_1 = __importStar(require("react"));
const ShadowState_1 = __importDefault(require("../shadow/ShadowState"));
const useStx = (svxId, stx) => {
    const [state, setState] = react_1.default.useState(stx);
    const isUpdated = (0, react_1.useRef)(false);
    if (!isUpdated.current) {
        ShadowState_1.default.setId(svxId);
        ShadowState_1.default.setStx(state, svxId);
        isUpdated.current = true;
    }
    const set = (newState) => {
        ShadowState_1.default.setId(svxId);
        ShadowState_1.default.setStxKeys(newState);
        let cloneState = { ...state };
        for (const key in newState) {
            cloneState[key] = newState[key];
        }
        setState(cloneState);
        ShadowState_1.default.setStx(cloneState, svxId);
    };
    return { ...state, set };
};
exports.useStx = useStx;
