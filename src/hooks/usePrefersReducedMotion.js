// src/hooks/usePrefersReducedMotion.js

import { useEffect, useState } from 'react';

/**
 * Custom Hook: usePrefersReducedMotion
 * Detects if the user has enabled the 'prefers-reduced-motion' setting.
 *
 * @returns {boolean} - True if the user prefers reduced motion, else false.
 */
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
