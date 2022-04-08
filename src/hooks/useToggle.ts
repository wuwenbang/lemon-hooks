import { useState } from 'react';

export default function useToggle(initial: boolean) {
  const [state, setState] = useState(initial);
  const toggle = () => {
    setState((x) => !x);
  };
  return [state, toggle] as const;
}
