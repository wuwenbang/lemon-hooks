import React, { RefObject, useEffect, useState } from 'react';

export default function useScroll(ref: RefObject<Element>) {
  let element = ref.current || window.document.body;

  const [scroll, setScroll] = useState({ left: element.scrollLeft, top: element.scrollTop });

  useEffect(() => {
    const onScroll = () => {
      setScroll({ left: element.scrollLeft, top: element.scrollTop });
    };
      ref.current?.addEventListener('scroll', onScroll);
    return () => {
      ref.current?.removeEventListener('scroll', onScroll);
    };
  }, [ref.current]);

  return scroll;
}
