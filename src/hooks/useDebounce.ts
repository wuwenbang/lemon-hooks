import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delay: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return state;
}
