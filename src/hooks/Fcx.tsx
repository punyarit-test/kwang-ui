import {useStx} from './Stx';

const beforeFcx = () => {};

const afterFcx = (e: any) => {};

export const FCX_SVX_ID = 'FcxSvx';

export const useFcx = <T,>(svxId: string, fcx: T): T => {
  const stx = useStx(FCX_SVX_ID, {
    fcxCount: 0,
    fnName: '',
    svxId: '',
  });
  let fnWrapper = {} as any;

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
