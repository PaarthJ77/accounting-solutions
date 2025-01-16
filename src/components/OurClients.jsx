// src/components/OurClients.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';

const clients = [
  'Nekter Juice Bar',
  "Handel's Homemade Ice Cream",
  'Slice House by Tony Gemignani',
  'Subway',
  'Shell',
  'Chevron',
  'Plant Power',
  'Postal Annex',
  'Etech Pest Solutions',
];

/**
 * OurClients Component
 * Displays a list of client names in two columns with big, bold, and underlined text.
 */
const OurClients = () => {
  return (
    <AnimatedSection id="our-clients">
      <h2 className="text-6xl font-extrabold text-center mb-16 text-darkGreenDarker">
        Our Clients
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-24">
          {clients.map((client, index) => (
            <div key={index} className="text-center space-y-6">
              <p className="text-3xl font-extrabold text-darkGreenDarker">{client}</p>
              <hr className="mt-4 border-darkGreenDarker" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OurClients;
