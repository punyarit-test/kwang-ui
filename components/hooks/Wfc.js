"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WfcEffect = void 0;
const react_1 = require("react");
const ShadowState_1 = __importDefault(require("../shadow/ShadowState"));
const WfcEffect = (fcx) => {
    const { newValue } = new ShadowState_1.default().getAll();
    (0, react_1.useEffect)(() => {
        if (fcx[newValue?.['ShadowFunction']?.['svxId']] &&
            newValue?.['ShadowFunction']?.['fnName']) {
            const fnString = fcx[newValue?.['ShadowFunction']?.['svxId']].toString();
            const findAfter = /(?<=after.?)\w+/g;
            const found = fnString.match(findAfter);
            const fnNames = [...new Set(found)];
            const fnStore = {};
            for (const fnName of fnNames) {
                // @ts-ignore
                fnStore[fnName] = () => { };
            }
            fnStore[newValue?.['ShadowFunction']?.['fnName']] = (fnc) => {
                fnc();
            };
            fcx[newValue?.['ShadowFunction']?.['svxId']]({
                after: fnStore,
            });
        }
    }, [newValue['ShadowFunction']['fcxCount']]);
};
exports.WfcEffect = WfcEffect;
