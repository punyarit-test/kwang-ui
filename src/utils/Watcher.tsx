import {useEffect, useRef} from 'react';
import StateKey from './StateKey';
import StateObserve from './StateObserve';

class State {
  public newValue = StateObserve.newValue();
  public oldValue = StateObserve.oldValue();
  public stateKey = StateKey.get();
}

export const watcher = (watcher: any) => {
  const {newValue, oldValue, stateKey} = new State();
  useEffect(() => {
    if (newValue[stateKey]) {
      watcher[stateKey](oldValue[stateKey], newValue[stateKey]);
    }
  }, [newValue[stateKey]]);
};
