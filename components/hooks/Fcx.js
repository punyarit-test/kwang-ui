"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFcx = void 0;
const Stx_1 = require("./Stx");
const useFcx = (svxId, fcx) => {
    const stx = (0, Stx_1.useStx)('ShadowFunction', {
        fcxCount: 0,
        fnName: '',
        svxId: '',
    });
    let fnWrapper = {};
    for (const key in fcx) {
        fnWrapper[key] = () => {
            stx.set({
                fcxCount: stx.fcxCount + 1,
                fnName: key,
                svxId,
            });
            // @ts-ignore
            fcx[key]();
        };
    }
    return fnWrapper;
};
exports.useFcx = useFcx;
