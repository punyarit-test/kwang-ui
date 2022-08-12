import {useStx} from './Stx';
import {FCX} from './Wfc';

export const FCX_SVX_ID = 'FcxSvx';

export const useFcx = <T,>(svxId: string, fcx: T): T => {
  const stx = useStx(FCX_SVX_ID, {
    fcxCount: 0,
    fnName: '',
    svxId: '',
  });
  let fnWrapper = {} as any;

  for (const key in fcx) {
    fnWrapper[key] = (fcxParam: any) => {
      stx.set({
        fcxCount: stx.fcxCount + 1,
        fnName: key,
        svxId,
      });

      // set timeout(0) becoz waiting for WFC init inter function
      setTimeout(() => {
        // @ts-ignore
        const fnValue = fcx[key](fcxParam, FCX.before());
        FCX.after(fnValue);
      }, 0);
    };
  }

  return fnWrapper;
};
