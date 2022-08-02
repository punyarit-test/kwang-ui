import React, {useRef, useId} from 'react';
import ShadowState from '../shadow/ShadowState';

export const useStx = <T,>(svxId: string, stx: T) => {
  const [state, setState] = React.useState(stx);

  const isUpdated = useRef(false);
  if (!isUpdated.current) {
    ShadowState.setId(svxId);
    ShadowState.setStx(state, svxId);
    isUpdated.current = true;
  }

  const set = (newState: Partial<T>) => {
    ShadowState.setId(svxId);
    ShadowState.setStxKeys(newState);
    let cloneState = {...state} as any;
    for (const key in newState) {
      cloneState[key] = newState[key];
    }
    setState(cloneState);
    ShadowState.setStx(cloneState, svxId);
  };

  return {...state, set};
};
