import { RefObject, useEffect, useState } from 'react';

export default function useHover(ref: RefObject<HTMLElement>) {
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => setIsHover(true);
  const onMouseOut = () => setIsHover(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.addEventListener('mouseover', onMouseOver);
    node.addEventListener('mouseout', onMouseOut);
    return () => {
      node.removeEventListener('mouseover', onMouseOver);
      node.removeEventListener('mouseout', onMouseOut);
    };
  }, [ref.current]);

  return isHover;
}
