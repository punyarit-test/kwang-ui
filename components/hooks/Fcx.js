"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFcx = exports.FCX_SVX_ID = void 0;
const Stx_1 = require("./Stx");
const beforeFcx = () => { };
const afterFcx = (e) => { };
exports.FCX_SVX_ID = 'FcxSvx';
const useFcx = (svxId, fcx) => {
    const stx = (0, Stx_1.useStx)(exports.FCX_SVX_ID, {
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
            // set timeout(0) becoz waiting for WFC init inter function
            setTimeout(() => {
                const beforeValue = beforeFcx();
                // @ts-ignore
                let fnValue = fcx[key](beforeValue || undefined);
                afterFcx(fnValue || undefined);
            }, 0);
        };
    }
    return fnWrapper;
};
exports.useFcx = useFcx;
