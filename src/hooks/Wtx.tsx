import React from 'react';
import ShadowState from '../shadow/ShadowState';

export type WTX<SVX> = Partial<{
  [T in keyof SVX]: (
    stx: {
      [K in keyof Omit<SVX[T & keyof SVX], 'set' | 'fcx'>]: SVX[T &
        keyof SVX][K & keyof SVX[T]] extends Function
        ? never
        : {oldValue: unknown; newValue: unknown};
    },
    act: (...set: Exclude<keyof SVX[T & keyof SVX], 'set' | 'fcx'>[]) => boolean
  ) => void;
}>;

const action = (stx: string[]) => {
  const shadowState = new ShadowState();
  return (
    JSON.stringify(stx.sort()) ===
    JSON.stringify(shadowState.getSetStxKeys().sort())
  );
};

export const WtxEffect = (wtx: any) => {
  const {newValue, oldValue, stxKeys, svxId} = new ShadowState().getAll();

  React.useEffect(() => {
    for (const key in wtx) {
      if (svxId === key) {
        const stxStore = {} as any;
        for (const stxKey of stxKeys[key]) {
          stxStore[stxKey] = {
            oldValue: oldValue[key][stxKey],
            newValue: newValue[key][stxKey],
          };
        }

        wtx[key](stxStore, (...stx: string[]) => action(stx));
      }
    }
  }, [newValue[svxId]]);
};
