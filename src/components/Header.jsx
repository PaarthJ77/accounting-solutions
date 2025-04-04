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
      {/* =========================== MOBILE HEADER =========================== */}
      <header className="md:hidden w-full fixed top-0 left-0 right-0 z-50 bg-OffWhite text-darkGreenDarker shadow-md flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-darkGreenDarker rounded-md focus:outline-none hover:bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] transition-all duration-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Contact Us + Hover Dropdown (Mobile) */}
          <div className="relative group">
            <button
              onClick={() => handleScrollTo('contact')}
              className="
                border-2 border-darkGreenDarker
                bg-transparent
                text-darkGreenDarker
                font-extrabold
                py-1 px-2
                rounded
                uppercase
                text-sm
                focus:outline-none
                transition-colors duration-200
                hover:bg-gradient-to-r
                hover:from-[#ACBFA8]
                hover:to-[#C7D9BC]
                hover:text-OffWhite
              "
            >
              Contact Us
            </button>

            {/* Smaller dropdown for MOBILE */}
            <div
              className="
                hidden
                group-hover:block
                absolute
                left-0
                top-full
                mt-1
                w-max
                bg-OffWhite
                border
                border-darkGreenDarker
                p-2
                z-50
              "
            >
              <p className="text-sm font-bold">Email: komal@accountingsolutionz.org</p>
              <p className="text-sm font-bold">Phone: (909)-559-9247</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <motion.h1
            className="text-sm font-lobster mr-2 whitespace-nowrap"
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
          <motion.img
            src={logo}
            alt="Accounting Solutions Logo"
            className="h-8 w-8 object-contain cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            onClick={() => handleScrollTo('top')}
          />
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 mt-12 bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] overflow-y-auto">
            <div className="px-4 py-2 space-y-4">
              {['services', 'why-choose-us', 'our-clients', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => handleScrollTo(section)}
                    className="block w-full px-4 py-3 text-lg font-black text-darkGreenDarker hover:bg-darkGreenDarker hover:text-OffWhite text-left border-b border-gray-200"
                  >
                    {section
                      .replace(/-/g, ' ')
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* =========================== DESKTOP HEADER =========================== */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-OffWhite text-darkGreenDarker shadow-md items-center px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex items-center p-3 text-lg lg:text-xl font-bold text-darkGreenDarker hover:bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] focus:outline-none rounded-md transition-all duration-300"
            >
              <Bars3Icon className="h-7 w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10" />
            </Menu.Button>
          </div>
          <Menu.Items className="absolute left-0 mt-3 w-56 lg:w-64 xl:w-72 rounded-lg shadow-lg bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] ring-1 ring-gray-300 focus:outline-none z-50">
            <div className="py-3 space-y-3">
              {['services', 'why-choose-us', 'our-clients', 'contact'].map(
                (section, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleScrollTo(section);
                        }}
                        className={`block w-full px-4 py-2 text-xl font-extrabold text-left ${
                          active
                            ? 'bg-darkGreenDarker text-OffWhite'
                            : 'text-darkGreenDarker'
                        }`}
                      >
                        {section
                          .replace(/-/g, ' ')
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </button>
                    )}
                  </Menu.Item>
                )
              )}
            </div>
          </Menu.Items>
        </Menu>

        {/* Desktop "Contact Us" + Larger Hover Dropdown */}
        <div className="relative group ml-3">
          <button
            onClick={() => handleScrollTo('contact')}
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
          >
            Contact Us
          </button>

          {/* Much larger dropdown for DESKTOP */}
          <div
            className="
              hidden
              group-hover:block
              absolute
              left-0
              top-full
              mt-2
              bg-OffWhite
              border
              border-darkGreenDarker
              p-4
              z-50
              w-max
            "
          >
            <p className="text-xl font-bold mb-2">
              Email: komal@accountingsolutionz.org
            </p>
            <p className="text-xl font-bold">
              Phone: (909)-559-9247
            </p>
          </div>
        </div>

        <div className="flex-1" />
        <motion.h1
          className="text-3xl font-lobster whitespace-nowrap mr-4"
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
        <motion.img
          src={logo}
          alt="Accounting Solutions Logo"
          className="h-16 w-16 object-contain cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onClick={() => handleScrollTo('top')}
        />
      </header>
    </>
  );
}

export default Header;
