import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="pt-12 pb-12 md:pt-64 md:pb-64"
    >
      <SectionTitle title="Contact Us" align="center" />
      <p className="mt-4 text-lg font-extrabold max-w-2xl mx-auto text-center text-darkGreenDarker">
        At Accounting Solutions, our mission is to help your business thrive by
        providing the specialized financial expertise and support you need.
        <br />
        <br />
        Contact us at:
        <br />
        <strong> email: komal@accountingsolutionz.org </strong>
        <br />
        <strong> phone: (909)-559-9247 </strong>
        <br />
        <br />
        Schedule a consultation today to learn how we can assist you in achieving
        your financial goals.
      </p>

      {/* Mobile-only button */}
      <div className="mt-12 flex justify-center md:hidden">
        <button
          onClick={() => {
            window.location.href = 'mailto:accountingsolutionz@yahoo.com';
          }}
          className="
            border-2 border-darkGreenDarker
            bg-transparent
            text-darkGreenDarker
            font-extrabold
            py-3 px-6
            rounded
            uppercase
            text-lg
            focus:outline-none
            transition-colors duration-200
            hover:bg-gradient-to-r
            hover:from-[#ACBFA8]
            hover:to-[#C7D9BC]
            hover:text-OffWhite
          "
          aria-label="Get in Touch"
        >
          GET IN TOUCH
        </button>
      </div>
    </AnimatedSection>
  );
}

export default ContactSection;
