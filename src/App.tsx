import { useState } from 'react';
import './App.css';
import useAsyncEffect from './hooks/useAsyncEffect';
import useUpdateEffect from './hooks/useUpdateEffect';

function App() {
  // const [message, setMessage] = useState('');
  // useAsyncEffect(async () => {
  //   const res = await new Promise<string>((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('hello world!');
  //     }, 1000);
  //   });
  //   setMessage(res);
  // });
  const [count, setCount] = useState(0);
  useUpdateEffect(() => {
    console.log('Effect');
  }, [count]);
  return (
    <div>
      <div> Count:{count}</div>
      <button onClick={() => setCount(count+1)}>Add Count</button>
    </div>
  );
}

export default App;
