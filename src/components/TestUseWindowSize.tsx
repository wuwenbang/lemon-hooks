import useWindowSize from 'src/hooks/useWindowSize';

export default function TestUseWindowSize() {
  const windowSize = useWindowSize();
  return (
    <div>
      <div>Height:{windowSize.height}</div>
      <div>Width:{windowSize.width}</div>
    </div>
  );
}
