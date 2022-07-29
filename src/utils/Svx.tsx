import {createContext, useContext} from 'react';

const Context = createContext({});

const SvxProvider = (props: any) => {
  return (
    <Context.Provider
      value={{
        ...props.svx(),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default SvxProvider;

export function SvxStore<T>() {
  return useContext(Context) as T;
}
