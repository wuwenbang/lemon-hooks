import { EffectCallback, useEffect } from 'react';

export default function (fn: EffectCallback) {
  return useEffect(() => {
    fn();
  }, []);
}
