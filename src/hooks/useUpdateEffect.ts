import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isMounted = useRef(false);
  if (isMounted.current) {
    useEffect(effect, deps);
  } else {
    isMounted.current = true;
  }
}
