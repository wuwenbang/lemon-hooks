import { useState } from 'react';
import usePrevious from 'src/hooks/usePrevious';

export default function TestUsePrevious() {
  const [count, setCount] = useState(1);
  const previous = usePrevious(count);
  return (
    <div>
      <div> Current Count: {count}</div>
      <div> Previous Count: {previous}</div>
      <button onClick={() => setCount((x) => x + 1)}>Add Count</button>
    </div>
  );
}
