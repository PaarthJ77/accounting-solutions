import React from 'react';
import AnimatedSection from './AnimatedSection';
import acai from '../assets/acai.png';
import coneIcon from '../assets/cone-icon.png';
import pizzaIcon from '../assets/pizza-icon.png';
import subsandoIcon from '../assets/subsando-icon.png';
import gasIcon1 from '../assets/gas-icon1.png';
import gasIcon2 from '../assets/gas-icon2.png';
import plantIcon from '../assets/plant-icon.png';
import mailIcon from '../assets/mail-icon.png';
import bugSprayIcon from '../assets/bug-spray-icon.png';

const clients = [
  { name: 'Nekter Juice Bar', icon: acai },
  { name: "Handel's Homemade Ice Cream", icon: coneIcon },
  { name: 'Slice House by Tony Gemignani', icon: pizzaIcon },
  { name: 'Subway', icon: subsandoIcon },
  { name: 'Shell', icon: gasIcon1 },
  { name: 'Chevron', icon: gasIcon2 },
  { name: 'Plant Power', icon: plantIcon },
  { name: 'Postal Annex', icon: mailIcon },
  { name: 'Etech Pest Solutions', icon: bugSprayIcon },
];

const OurClients = () => {
  return (
    <AnimatedSection id="our-clients">
      <h2 className="text-6xl font-extrabold text-center mb-16 text-darkGreenDarker">
        Our Clients
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-24">
          {clients.map((client, index) => (
            <div key={index} className="relative text-center space-y-6">
              <div className="flex justify-between items-center">
                <img
                  src={client.icon}
                  alt={client.name}
                  className={`w-16 h-16 ${index % 2 === 1 ? 'md:hidden' : ''}`}
                />
                <p className="text-3xl font-extrabold text-darkGreenDarker flex-grow mx-4">
                  {client.name}
                </p>
                <img
                  src={client.icon}
                  alt={client.name}
                  className={`w-16 h-16 hidden ${index % 2 === 1 ? 'md:block' : 'md:hidden'}`}
                />
              </div>
              <hr className="mt-4 border-darkGreenDarker" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OurClients;
