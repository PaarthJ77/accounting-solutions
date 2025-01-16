// src/components/ContactSection.jsx

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import ContactPopup from './ContactPopup';

function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatedSection id="contact">
      <SectionTitle title="Contact Us" align="center" />
      <p className="mt-4 text-lg font-extrabold max-w-2xl mx-auto text-center text-darkGreenDarker">
        At Accounting Solutions, our goal is to help your business thrive by
        providing the financial expertise and support you need. Contact us today
        to learn how we can assist you in achieving your financial goals.
      </p>
      <div className="mt-12 flex justify-center">
        <button
          onClick={handleButtonClick}
          className="bg-transparent hover:bg-darkGreenDarker text-darkGreenDarker hover:text-OffWhite font-extrabold py-3 px-6 rounded border-2 border-darkGreenDarker focus:outline-none uppercase text-lg transition-colors duration-200"
          aria-label="Get in Touch"
        >
          GET IN TOUCH
        </button>
      </div>
      <ContactPopup show={showPopup} onClose={handleClosePopup} />
    </AnimatedSection>
  );
}

export default ContactSection;
