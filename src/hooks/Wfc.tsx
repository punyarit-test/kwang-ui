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
  // fcx function
  static #fcxInter: any;
  static #fcxBefore: any;
  static #fcxAfter: any;

  // fcx return value
  static #returnInterValue: any;
  static #returnBeforeValue: any;

  // fcx parameter
  static #interParameter: any;
  static #afterParameter: any;

  static before() {
    if (this.#fcxBefore) {
      this.#fcxBefore?.();
      return this.#returnBeforeValue;
    }
  }

  static inter(param?: any) {
    if (this.#fcxInter) {
      this.#fcxInter?.(param || undefined);
      return this.#returnInterValue;
    }
  }

  static after(param?: any) {
    if (this.#fcxAfter) {
      this.#fcxAfter?.(param);
    }
  }

  static setInterFn(fn: any) {
    this.#fcxInter = fn;
  }

  static setBeforeFn(fn: any) {
    this.#fcxBefore = fn;
  }

  static setAfterFn(fn: any) {
    this.#fcxAfter = fn;
  }

  static setInterReturn(returnValue: any) {
    this.#returnInterValue = returnValue;
  }

  static setBeforeReturn(returnValue: any) {
    this.#returnBeforeValue = returnValue;
  }

  static setInterParameter(parameterValue: any) {
    this.#interParameter = parameterValue;
  }

  static setAfterParameter(parameterValue: any) {
    this.#afterParameter = parameterValue;
  }

  static getInterParameter() {
    return this.#interParameter;
  }

  static getAfterParameter() {
    return this.#afterParameter;
  }
}

export const WfcEffect = (fcx: any) => {
  const newValue = ShadowState.newValue();
  React.useEffect(() => {
    if (
      fcx[newValue?.[FCX_SVX_ID]?.['svxId']] &&
      newValue?.[FCX_SVX_ID]?.['fnName']
    ) {
      FCX.setBeforeFn(wrapBeforeFcx(fcx, newValue, storeBeforeFcx(newValue)));
      FCX.setInterFn(wrapInterFcx(fcx, newValue, storeInterFcx(newValue)));
      FCX.setAfterFn(wrapAfterFcx(fcx, newValue, storeAfterFcx(newValue)));
    }
  }, [newValue[FCX_SVX_ID]['fcxCount']]);
};

const storeAfterFcx = (newValue: any) => {
  const fcxAftereStore = {} as any;
  fcxAftereStore[newValue?.[FCX_SVX_ID]?.['fnName']] = (
    fn: (e?: any) => any
  ) => {
    fn(FCX.getAfterParameter());
  };
  return fcxAftereStore;
};

const storeBeforeFcx = (newValue: any) => {
  const fcxBeforeStore = {} as any;
  fcxBeforeStore[newValue?.[FCX_SVX_ID]?.['fnName']] = (fn: () => any) => {
    FCX.setBeforeReturn(fn());
  };
  return fcxBeforeStore;
};

const storeInterFcx = (newValue: any) => {
  const fcxStore = {} as any;
  fcxStore[newValue?.[FCX_SVX_ID]?.['fnName']] = (fnc: (e?: any) => any) => {
    FCX.setInterReturn(fnc(FCX.getInterParameter()));
  };
  return fcxStore;
};

const wrapInterFcx =
  (fcx: any, newValue: any, fcxInterStore: any) => (wfcParam: any) => {
    FCX.setInterParameter(wfcParam);
    fcx[newValue?.[FCX_SVX_ID]?.['svxId']]?.({
      inter: fcxInterStore,
    });
  };

const wrapBeforeFcx = (fcx: any, newValue: any, fcxBeforeStore: any) => () => {
  fcx[newValue?.[FCX_SVX_ID]?.['svxId']]?.({
    before: fcxBeforeStore,
  });
};

const wrapAfterFcx =
  (fcx: any, newValue: any, fcxAftereStore: any) => (wfcParam: any) => {
    FCX.setAfterParameter(wfcParam);
    fcx[newValue?.[FCX_SVX_ID]?.['svxId']]?.({
      after: fcxAftereStore,
    });
  };
