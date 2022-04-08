import { useState } from 'react';
import useToggle from 'src/hooks/useToggle';

export default function TestUseToggle() {
  const [isOn, toggle] = useToggle(false);
  return (
    <div>
      <div> {isOn ? 'on' : 'off'}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
