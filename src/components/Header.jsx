// src/components/Header.jsx
import React from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import logo from '../assets/Accounting-Solutions-logo.png';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

const headerText = "Accounting Solutions";

// Animation variants
const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Header({ onContactClick }) {
  const handleScrollTo = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -70, // Adjust for header height
    });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-OffWhite text-darkGreenDarker px-4 py-2 flex justify-between items-center z-50 shadow-md"
      aria-label="Main Navigation"
    >
      <div className="relative flex items-center space-x-2">
        {/* Dropdown Menu */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              type="button"
              className="inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-3 py-2
                         bg-transparent text-lg font-bold text-darkGreenDarker
                         hover:bg-darkGreenDarker hover:text-OffWhite focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Menu.Items
            className="z-50 origin-top-left absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-OffWhite
                       ring-1 ring-gray-300 focus:outline-none"
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => handleScrollTo('services')}
                    className={`${
                      active ? 'bg-darkGreenDarker text-OffWhite' : 'text-darkGreenDarker'
                    } block px-6 py-4 text-2xl font-extrabold w-full text-left`}
                  >
                    Services
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => handleScrollTo('why-choose-us')}
                    className={`${
                      active ? 'bg-darkGreenDarker text-OffWhite' : 'text-darkGreenDarker'
                    } block px-6 py-4 text-2xl font-extrabold w-full text-left`}
                  >
                    Why Choose Us
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => handleScrollTo('our-clients')}
                    className={`${
                      active ? 'bg-darkGreenDarker text-OffWhite' : 'text-darkGreenDarker'
                    } block px-6 py-4 text-2xl font-extrabold w-full text-left`}
                  >
                    Our Clients
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => handleScrollTo('contact')}
                    className={`${
                      active ? 'bg-darkGreenDarker text-OffWhite' : 'text-darkGreenDarker'
                    } block px-6 py-4 text-2xl font-extrabold w-full text-left`}
                  >
                    Contact
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        {/* Contact Us Button */}
        <button
          type="button"
          onClick={onContactClick}
          className="bg-transparent hover:bg-darkGreenDarker text-darkGreenDarker hover:text-OffWhite font-extrabold py-3 px-6 rounded
                     border-2 border-darkGreenDarker focus:outline-none uppercase text-lg transition-colors duration-200"
          aria-label="Contact Us"
        >
          CONTACT US
        </button>
      </div>

      {/* Logo and Animated Title */}
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl md:text-3xl font-semibold overflow-hidden">
          <motion.span
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headerText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.img
          src={logo}
          alt="Accounting Solutions Logo"
          className="h-24 w-24 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </header>
  );
}

export default Header;
