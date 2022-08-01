import {useStx} from './Stx';

export const useFcx = <T,>(svxId: string, fcx: T): T => {
  const stx = useStx('ShadowFunction', {
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

      // @ts-ignore
      fcx[key]();
    };
  }

  return fnWrapper;
};
