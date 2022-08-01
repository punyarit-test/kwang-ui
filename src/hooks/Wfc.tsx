import {useEffect} from 'react';
import ShadowState from '../shadow/ShadowState';

export type WFC<SVX> = Partial<{
  [T in keyof SVX]: (fcx: {
    after?: {
      [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]: (
        e?: (e?: unknown) => void
      ) => void;
    };
  }) => void;
}>;

export const WfcEffect = (fcx: any) => {
  const {newValue} = new ShadowState().getAll();

  useEffect(() => {
    if (
      fcx[newValue?.['ShadowFunction']?.['svxId']] &&
      newValue?.['ShadowFunction']?.['fnName']
    ) {
      const fnString = fcx[newValue?.['ShadowFunction']?.['svxId']].toString();

      const findAfter = /(?<=after.?)\w+/g;
      const found = fnString.match(findAfter);
      const fnNames = [...new Set(found)];

      const fnStore = {} as any;
      for (const fnName of fnNames) {
        // @ts-ignore
        fnStore[fnName] = () => {};
      }

      fnStore[newValue?.['ShadowFunction']?.['fnName']] = (
        fnc: () => unknown
      ) => {
        fnc();
      };

      fcx[newValue?.['ShadowFunction']?.['svxId']]({
        after: fnStore,
      });
    }
  }, [newValue['ShadowFunction']['fcxCount']]);
};
