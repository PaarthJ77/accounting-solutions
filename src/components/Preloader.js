// src/components/preloader.js

import React from 'react';
import preloaderGif from '../assets/ACCTG-SOLUTIONS-PRELOADER.gif'; // Updated GIF filename
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={preloaderGif} alt="Loading..." className="preloader-gif" />
    </div>
  );
};

export default Preloader;
