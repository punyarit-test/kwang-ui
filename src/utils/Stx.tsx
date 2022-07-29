import React, {useRef} from 'react';
import StateKey from './StateKey';
import StateObserve from './StateObserve';

export const useStx = <T,>(stx: T) => {
  const [state, setState] = React.useState(stx);
  const isUpdated = useRef(false);
  if (!isUpdated.current) {
    StateObserve.set(state);
    isUpdated.current = true;
  }

  const set = (newState: Partial<T>) => {
    let cloneState = {...state} as any;
    for (const key in newState) {
      StateKey.set(key);
      cloneState[key] = newState[key];
    }
    setState(cloneState);
    StateObserve.set(cloneState);
  };

  return {...state, set};
};
