// src/components/SectionTitle.jsx

import React from 'react';

const SectionTitle = ({ title, align }) => {
  return (
    <h2 className={`text-5xl font-bold mb-8 ${align === 'center' ? 'text-center' : 'text-left'} text-darkGreenDarker`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
