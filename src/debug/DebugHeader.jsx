// src/debug/DebugHeader.jsx
import React from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

function DebugHeader() {
  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center z-50 relative">
      {/* Left side: a minimal Headless UI Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            type="button"
            className="inline-flex items-center px-3 py-2 bg-white border border-gray-400 shadow-sm"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Menu.Items
          className="z-50 origin-top-left absolute left-0 mt-2 w-40 bg-white
                     rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    active ? 'bg-blue-200' : ''
                  }`}
                  onClick={() => console.log('Clicked Services')}
                >
                  Services
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    active ? 'bg-blue-200' : ''
                  }`}
                  onClick={() => console.log('Clicked Why Choose Us')}
                >
                  Why Choose Us
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      {/* Right side: minimal text */}
      <span>Debug Header (scrolls with page)</span>
    </header>
  );
}

export default DebugHeader;
