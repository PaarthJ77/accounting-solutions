import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const sections = [
  {
    heading: 'Initial Assessment',
    description: (
      <ul className="list-none text-lg font-extrabold">
        <li className="font-black">We review your current financial records to understand where you stand.</li>
        <li className="font-black">Identify missing or incomplete data, including bank statements, invoices, and receipts.</li>
      </ul>
    ),
  },
  {
    heading: 'Data Gathering and Organization',
    description: (
      <ul className="list-none text-lg font-extrabold">
        <li className="font-black">Collaborate with you to collect the necessary documents.</li>
        <li className="font-black">Organize and categorize expenses, income, and other transactions.</li>
      </ul>
    ),
  },
  {
    heading: 'Reconciliation',
    description: (
      <ul className="list-none text-lg font-extrabold">
        <li className="font-black">Match your records with bank statements to ensure accuracy.</li>
        <li className="font-black">Resolve discrepancies or errors in your books.</li>
      </ul>
    ),
  },
  {
    heading: 'Financial Reporting',
    description: (
      <ul className="list-none text-lg font-extrabold">
        <li className="font-black">Generate up-to-date reports, including profit & loss statements, balance sheets, and cash flow reports.</li>
        <li className="font-black">Highlight areas for improvement or potential savings.</li>
      </ul>
    ),
  },
  {
    heading: 'Compliance Check',
    description: (
      <ul className="list-none text-lg font-extrabold">
        <li className="font-black">Ensure your records meet tax and regulatory requirements.</li>
        <li className="font-black">Provide support for tax filing if needed.</li>
      </ul>
    ),
  },
];

function CatchUp() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <AnimatedSection id="catch-up-accounting">
      <h2 className="text-6xl font-black mb-12 text-center text-darkGreenDarker">
        How Does Catch-up Accounting Work?
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left flex justify-between items-center text-2xl font-black text-darkGreenDarker py-4 border-b border-darkGreenDarker focus:outline-none"
            >
              {section.heading}
              <span className="text-darkGreenDarker text-2xl">
                {expandedSection === index ? '-' : '+'}
              </span>
            </button>
            {expandedSection === index && (
              <div className="mt-4 text-darkGreenDarker">
                {section.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default CatchUp;
