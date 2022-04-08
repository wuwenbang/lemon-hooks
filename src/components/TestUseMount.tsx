import { useState } from 'react';
import useMount from 'src/hooks/useMount';

export default function TestUseMount() {
  const [count, setCount] = useState(1);
  useMount(() => {
    console.log('mount');
  });
  return (
    <div>
      <div> Current Count: {count}</div>
      <button onClick={() => setCount((x) => x + 1)}>Add Count</button>
    </div>
  );
}
