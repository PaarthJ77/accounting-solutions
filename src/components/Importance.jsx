import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const sections = [
  {
    heading: 'Financial Clarity and Decision-Making',
    description: (
      <div className="text-lg font-extrabold">
        <p>Accounting helps you track your revenue, expenses, and overall financial performance.</p>
        <p>With accurate financial reports, you can make data-driven decisions about investments, budgeting, and resource allocation.</p>
        <p>Understanding your cash flow ensures that you’re prepared for both opportunities and challenges.</p>
      </div>
    ),
  },
  {
    heading: 'Compliance and Legal Obligations',
    description: (
      <div className="text-lg font-extrabold">
        <p>Proper accounting ensures your business complies with tax laws, labor regulations, and financial reporting requirements.</p>
        <p>Avoid penalties and legal issues by maintaining accurate records for audits and tax filings.</p>
      </div>
    ),
  },
  {
    heading: 'Business Growth and Scalability',
    description: (
      <div className="text-lg font-extrabold">
        <p>Detailed accounting helps you identify profitable areas of your business and areas that need improvement.</p>
        <p>With clear financial data, you can develop strategies for growth, secure loans, or attract investors.</p>
        <p>Budgeting and forecasting allow you to plan for expansion while managing risks.</p>
      </div>
    ),
  },
  {
    heading: 'Monitoring Performance',
    description: (
      <div className="text-lg font-extrabold">
        <p>Accounting provides key performance indicators (KPIs) that show how your business is doing over time.</p>
        <p>You can compare your financial performance to industry standards or historical data to evaluate progress.</p>
      </div>
    ),
  },
  {
    heading: 'Building Credibility',
    description: (
      <div className="text-lg font-extrabold">
        <p>Accurate financial records build trust with stakeholders, investors, and partners.</p>
        <p>They demonstrate professionalism and financial responsibility, which are essential for long-term relationships.</p>
      </div>
    ),
  },
  {
    heading: 'Tax Efficiency',
    description: (
      <div className="text-lg font-extrabold">
        <p>Accounting helps you identify deductions, credits, and other tax-saving opportunities.</p>
        <p>Organizing your finances minimizes errors and ensures timely tax filing, avoiding costly penalties.</p>
      </div>
    ),
  },
];

function Importance() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <AnimatedSection id="importance-of-accounting">
      <h2 className="text-6xl font-extrabold mb-12 text-center text-darkGreenDarker">
        Why Is Accounting Important To Your Business?
      </h2>
      <p className="max-w-5xl mx-auto text-xl font-extrabold text-center text-darkGreenDarker mb-8">
        Accounting is the backbone of any successful business. It goes beyond simply tracking income and expenses—accounting provides the financial insights and structure needed to make informed decisions, ensure compliance, and drive long-term growth. Here are the key reasons why accounting is vital to your business:
      </p>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left flex justify-between items-center text-2xl font-extrabold text-darkGreenDarker py-4 border-b border-darkGreenDarker focus:outline-none"
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

export default Importance;
