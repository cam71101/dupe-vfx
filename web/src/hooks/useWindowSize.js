import { useState, useEffect } from 'react';

export default function useWindowSize() {
  // let getSize = {
  //   width: 0,
  //   height: 0,
  // };

  function getSize() {
    if (typeof window !== `undefined`) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return {
        width: 200,
        height: 100,
      };
    }
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
