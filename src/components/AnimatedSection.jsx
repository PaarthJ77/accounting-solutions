// src/components/AnimatedSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Animation Variants for Sections
 */
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/**
 * AnimatedSection Component
 * Wraps sections with a fade-in animation on scroll.
 * @param {React.ReactNode} children - The content of the section
 * @param {string} id - The HTML id attribute for navigation
 * @param {string} bgColor - Tailwind CSS class for the background color
 */
function AnimatedSection({ children, id, bgColor = 'bg-transparent' }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.section
      id={id}
      className={`${bgColor} py-32 text-darkGreenDarker flex flex-col justify-center`}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

export default AnimatedSection;
