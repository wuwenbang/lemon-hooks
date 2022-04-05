import { useState } from 'react';
import useUpdateEffect from 'src/hooks/useUpdateEffect';

export default function TestUseUpdateEffect() {
  const [count, setCount] = useState(0);
  useUpdateEffect(() => {
    console.log('Run Effect');
  }, [count]);
  return (
    <div>
      <div> Count:{count}</div>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
}
