import { useState, useEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition(): number {
  return isBrowser ? window.pageYOffset : 0;
}

export function useScroll(): number {
  const [position, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return position;
}
