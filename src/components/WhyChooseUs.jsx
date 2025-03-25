import React from 'react';
import AnimatedSection from './AnimatedSection';

const leftColumn = [
  { keyword: 'Expert Support', description: 'Our team of specialists is available to assist you with accounting and payroll questions.' },
  { keyword: 'Affordable Pricing', description: 'Flexible plans tailored to your business size and needs.' },
  { keyword: 'Automation', description: (
    <div className="text-sm font-black">
      <ul className="list-none mt-2">
        <li>Connect with accounting software like QuickBooks.</li>
        <li>Sync directly with your bank accounts for real-time updates.</li>
        <li>Automate recurring transactions, payroll schedules, and reminders.</li>
      </ul>
    </div>
  ) },
];

const rightColumn = [
  { keyword: 'All-in-One Solution', description: 'Simplify your financial management with a single, intuitive platform.' },
  { keyword: 'Reliability', description: 'Providing timely and accurate financial reports.' },
  { keyword: 'Confidentiality', description: (
    <div className="text-sm font-black">
      <ul className="list-none mt-2">
        <li><strong>Secure and Scalable</strong> – YOUR TRUST IS OUR PRIORITY</li>
        <li>Data Encryption: Protect sensitive information with enterprise-grade security.</li>
        <li>User Access: Provide controlled access to employees.</li>
      </ul>
    </div>
  ) },
];

const bigRectangle = {
  keyword: 'Why Choose Accounting Solutions for Payroll Processing?',
  description: (
    <ul className="list-none md:text-lg text-base font-black">
      <li><strong>Accuracy Guaranteed:</strong> Automated calculations reduce errors.</li>
      <li><strong>Save Time:</strong> Focus on your business, not payroll.</li>
      <li><strong>Scalable for Growth:</strong> Our platform grows with you.</li>
      <li><strong>Secure and Confidential:</strong> Advanced encryption protects your data.</li>
    </ul>
  ),
};

function WhyChooseUs() {
  return (
    <AnimatedSection id="why-choose-us">
      <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-darkGreenDarker">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column */}
          {leftColumn.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[12rem] w-full md:w-[30rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-center font-black px-4 text-xl md:text-2xl transition-opacity duration-300 group-hover:opacity-0">
                {item.keyword}
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-darkGreenDarker p-4 md:p-6 text-sm md:text-base font-black bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] shadow-lg hover:shadow-2xl">
                {item.description}
              </div>
            </div>
          ))}

          {/* Right Column */}
          {rightColumn.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[12rem] w-full md:w-[30rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-center font-black px-4 text-xl md:text-2xl transition-opacity duration-300 group-hover:opacity-0">
                {item.keyword}
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-darkGreenDarker p-4 md:p-6 text-sm md:text-base font-black bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] shadow-lg hover:shadow-2xl">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Rectangle */}
      <div className="mt-16 flex justify-center">
        <div className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[14rem] w-full md:w-[80rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="text-center font-black px-6 text-xl md:text-3xl transition-opacity duration-300 group-hover:opacity-0">
            {bigRectangle.keyword}
          </span>
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-darkGreenDarker p-4 md:p-8 font-black bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] shadow-lg hover:shadow-2xl">
            <div className="text-sm md:text-lg">
              {bigRectangle.description}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default WhyChooseUs;
