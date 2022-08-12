"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFcx = exports.FCX_SVX_ID = void 0;
const Stx_1 = require("./Stx");
const Wfc_1 = require("./Wfc");
exports.FCX_SVX_ID = 'FcxSvx';
const useFcx = (svxId, fcx) => {
    const stx = (0, Stx_1.useStx)(exports.FCX_SVX_ID, {
        fcxCount: 0,
        fnName: '',
        svxId: '',
    });
    let fnWrapper = {};
    for (const key in fcx) {
        fnWrapper[key] = (fcxParam) => {
            stx.set({
                fcxCount: stx.fcxCount + 1,
                fnName: key,
                svxId,
            });
            // set timeout(0) becoz waiting for WFC init inter function
            setTimeout(() => {
                // @ts-ignore
                const fnValue = fcx[key](fcxParam, Wfc_1.FCX.before());
                Wfc_1.FCX.after(fnValue);
            }, 0);
        };
    }
    return fnWrapper;
};
exports.useFcx = useFcx;
