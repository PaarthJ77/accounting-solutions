// src/components/ScrollToTop.jsx

import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollToTop Component
 * Displays a button that scrolls the page to the top when clicked.
 * Styled to match the header's Contact button.
 */
const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-transparent hover:bg-darkGreenDarker text-darkGreenDarker hover:text-OffWhite font-bold py-2 px-4 rounded border border-darkGreenDarker focus:outline-none uppercase text-sm transition-colors duration-200"
      aria-label="Scroll to Top"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      ↑
    </motion.button>
  );
};

export default ScrollToTop;
