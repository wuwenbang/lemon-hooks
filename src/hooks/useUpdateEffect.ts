import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isMounted = useRef(false);
  useEffect(isMounted.current ? effect : () => {}, deps);
  if(isMounted.current === false) isMounted.current = true
}
