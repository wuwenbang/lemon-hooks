import { useState } from 'react';
import useAsyncEffect from 'src/hooks/useAsyncEffect';

export default function TestUseAsyncEffect() {
  const [message, setMessage] = useState('');
  useAsyncEffect(async () => {
    const res = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('hello world!');
      }, 1000);
    });
    setMessage(res);
  });
  return <div>{message}</div>;
}
