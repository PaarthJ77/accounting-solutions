import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/Accounting-Solutions-logo.png';

const headerText = 'Accounting Solutions';

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (target) => {
    setMobileMenuOpen(false);
    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="md:hidden w-full fixed top-0 left-0 right-0 z-50 bg-OffWhite text-darkGreenDarker shadow-md flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="Accounting Solutions Logo"
            className="h-8 w-8 object-contain cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            onClick={() => handleScrollTo('top')}
          />
          <motion.h1
            className="text-sm font-lobster whitespace-nowrap ml-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headerText.split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScrollTo('contact')}
            className="border-2 border-darkGreenDarker bg-transparent text-darkGreenDarker font-extrabold py-1 px-2 rounded uppercase text-sm focus:outline-none transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#ACBFA8] hover:to-[#C7D9BC] hover:text-OffWhite"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-darkGreenDarker rounded-md focus:outline-none hover:bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] transition-all duration-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 mt-12 bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] overflow-y-auto">
            <div className="px-4 py-2 space-y-4">
              {['services', 'importance-of-accounting', 'why-choose-us', 'our-clients', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => handleScrollTo(section)}
                    className="block w-full px-4 py-3 text-lg font-black text-darkGreenDarker hover:bg-darkGreenDarker hover:text-OffWhite text-left border-b border-gray-200"
                  >
                    {section === 'why-choose-us' ? 'Why Choose Us?' : section.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-OffWhite text-darkGreenDarker shadow-md items-center justify-between px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="Accounting Solutions Logo"
            className="h-12 w-12 object-contain cursor-pointer mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            onClick={() => handleScrollTo('top')}
          />
          <motion.h1
            className="text-2xl font-lobster whitespace-nowrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headerText.split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="flex space-x-6 lg:space-x-8 xl:space-x-10">
          {['services', 'importance-of-accounting', 'why-choose-us', 'our-clients'].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                className="text-sm font-extrabold hover:text-green-800 transition-colors duration-200"
              >
                {section === 'why-choose-us' ? 'Why Choose Us?' : section.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => handleScrollTo('contact')}
          className="border-2 border-darkGreenDarker bg-transparent text-darkGreenDarker font-extrabold py-2 px-6 rounded uppercase text-lg focus:outline-none transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#ACBFA8] hover:to-[#C7D9BC] hover:text-OffWhite"
        >
          Contact
        </button>
      </header>
    </>
  );
}

export default Header;
