import React, { useRef } from 'react';
import useHover from 'src/hooks/useHover';

export default () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  return <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>;
};
