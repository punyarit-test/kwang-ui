import React from 'react';
import ShadowState from '../shadow/ShadowState';
import {FCX_SVX_ID} from './Fcx';

export type WFC<SVX> = Partial<{
  [T in keyof SVX]: (fcx: {
    before?: {
      [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (
        e?: (e?: any) => void
      ) => void;
    };
    inter?: {
      [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (
        e?: (e?: any) => void
      ) => void;
    };
    after?: {
      [P in keyof SVX[T][Extract<keyof SVX[T], 'fcx'>]]?: (
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
      this.#fcx?.(param || undefined);
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
  React.useEffect(() => {
    if (
      fcx[newValue?.[FCX_SVX_ID]?.['svxId']] &&
      newValue?.[FCX_SVX_ID]?.['fnName']
    ) {
      const fcxStore = storeFcx(newValue);
      const fcxFn = wrapFcx(fcx, newValue, fcxStore);
      FCX.setFcx(fcxFn);
    }
  }, [newValue[FCX_SVX_ID]['fcxCount']]);
};

const wrapFcx = (fcx: any, newValue: any, fcxStore: any) => {
  return (e: any) => {
    FCX.setParameter(e);
    fcx[newValue?.[FCX_SVX_ID]?.['svxId']]?.({
      inter: fcxStore,
    });
  };
};

const storeFcx = (newValue: any) => {
  const fcxStore = {} as any;
  fcxStore[newValue?.[FCX_SVX_ID]?.['fnName']] = (fnc: (e?: any) => any) => {
    const returnValue = fnc(FCX.getParameter() || undefined);
    FCX.setReturnValue(returnValue);
  };
  return fcxStore;
};
