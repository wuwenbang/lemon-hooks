import useUnmount from 'src/hooks/useUnmount';
import useToggle from 'src/hooks/useToggle';

const MyComponent = () => {
  useUnmount(() => {
    console.log('unmount');
  });

  return <p>Hello World!</p>;
};

export default function TestUseUnmount() {
  const [state, toggle] = useToggle(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
}
