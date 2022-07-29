import {useEffect, useRef} from 'react';

export const mounted = (method: any) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      method();
      isMounted.current = true;
    }
  }, []);
};
