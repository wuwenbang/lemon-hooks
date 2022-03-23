import { useState } from 'react';
import './App.css';
import useAsyncEffect from './hooks/useAsyncEffect';

function App() {
  const [message, setMessage] = useState('');
  useAsyncEffect(async () => {
    const res = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('hello world!');
      }, 1000);
    });
    setMessage(res);
  });
  return <div className="App">Message:{message}</div>;
}

export default App;
