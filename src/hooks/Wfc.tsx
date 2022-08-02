import {useEffect} from 'react';
import ShadowState from '../shadow/ShadowState';
import {FCX_SVX_ID} from './Fcx';

export type WFC<SVX> = Partial<{
  [T in keyof SVX]: (fcx: {
    inter?: {
      [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]: (
        e?: (e?: any) => void
      ) => void;
    };
  }) => void;
}>;

export class FCX {
  static #fcx: any;
  static #returnValue: any;
  static #parameterValue: any;

  static setFcx(fn: any) {
    this.#fcx = fn;
  }

  static inter(param?: any) {
    if (this.#fcx) {
      this.#fcx(param || undefined);
      return this.#returnValue;
    }
  }

  static setReturnValue(returnValue: any) {
    this.#returnValue = returnValue;
  }

  static setParameter(parameterValue: any) {
    this.#parameterValue = parameterValue;
  }

  static getParameter() {
    return this.#parameterValue;
  }
}

export const WfcEffect = (fcx: any) => {
  const {newValue} = new ShadowState().getAll();
  useEffect(() => {
    if (
      fcx[newValue?.[FCX_SVX_ID]?.['svxId']] &&
      newValue?.[FCX_SVX_ID]?.['fnName']
    ) {
      const fnString = fcx[newValue?.[FCX_SVX_ID]?.['svxId']].toString();

      const findinterFn = /(?<=inter.?)\w+/g;
      const found = fnString.match(findinterFn);
      const fnNames = [...new Set(found)];

      const fnStore = {} as any;
      for (const fnName of fnNames) {
        // @ts-ignore
        fnStore[fnName] = () => {};
      }

      fnStore[newValue?.[FCX_SVX_ID]?.['fnName']] = (fnc: (e?: any) => any) => {
        const returnValue = fnc(FCX.getParameter() || undefined);
        FCX.setReturnValue(returnValue);
      };
      const fcxFn = (e: any) => {
        FCX.setParameter(e);
        fcx[newValue?.[FCX_SVX_ID]?.['svxId']]({
          inter: fnStore,
        });
      };

      FCX.setFcx(fcxFn);
    }
  }, [newValue[FCX_SVX_ID]['fcxCount']]);
};
