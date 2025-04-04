import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const accountingServices = [
  { keyword: 'Financial Reporting', description: 'Generate detailed reports, including balance sheets, profit & loss statements, and cash flow insights.' },
  { keyword: 'Bank Reconciliation', description: 'Implementing and streamlining your financial records with bank statements for accurate bookkeeping.' },
  { keyword: 'General Ledger Account Reconciliation', description: 'Transaction entry/classification.' },
  { keyword: 'Income and Expense Tracking', description: 'Track and categorize transactions in real time.' },
  { keyword: 'Invoicing and Billing', description: 'Create, send, and manage professional invoices to get paid faster.' },
  { keyword: 'Financial Review', description: 'Monthly or Quarterly Consulting and Review of Financial Statements.' },
  { keyword: 'Tax Preparation', description: 'Simplify tax season with organized records and automated tax calculations.' },
  { keyword: 'Sales Tax Returns', description: 'Making Monthly Sales Tax Pre-payments and Filing Quarterly returns.' },
  { keyword: 'Property Tax Returns', description: 'Filing and payments of Unsecured Property Tax annually.' },
  { keyword: 'Catch-Up Accounting', description: 'We strive to help you get caught up & stay up to date on your records.' },
];

const payrollServices = [
  { keyword: 'Salary and Wages', description: 'Automate calculations for hourly, salaried, and commission-based pay.' },
  { keyword: 'Direct Deposit', description: "Ensure timely payments directly to employees' bank accounts." },
  { keyword: 'Tax Withholding', description: 'Calculate and deduct payroll taxes, including federal and state taxes.' },
  { keyword: 'Employee Self-Service Portal', description: 'Access to an online portal where employees can view/download pay stubs, W-2s, and other documents anytime.' },
  { keyword: 'Additional Deductions', description: 'Calculating, processing and paying CalSavers and other deductions.' },
  { keyword: 'Payroll Tax Efiling', description: 'Generating and efiling Payroll Taxes per Payroll.' },
  { keyword: 'Payroll Tax Returns', description: 'Manage and file Federal and State Payroll Tax Returns quarterly/annually.' },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ACBFA8', borderRadius: '50%', right: '-10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ACBFA8', borderRadius: '50%', left: '-10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const NextArrowDesktop = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ACBFA8', borderRadius: '50%', right: '-25px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrowDesktop = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ACBFA8', borderRadius: '50%', left: '-25px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

function Services() {
  useEffect(() => {
    console.log("Services component mounted!");
  }, []);

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrowDesktop />,
    prevArrow: <PrevArrowDesktop />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="mt-20 pt-16 sm:pt-24 md:pt-28">
      <SectionTitle title="Accounting and Payroll Services" align="center" />

      <p className="mt-6 text-lg sm:text-xl md:text-2xl font-black text-center max-w-4xl mx-auto">
        At Accounting Solutions, we provide comprehensive accounting and payroll solutions designed to streamline your business operations and ensure compliance with financial regulations.
      </p>

      <div className="mt-12">
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center text-darkGreenDarker">
            Accounting Services
          </h3>
          <div className="max-w-4xl mx-auto px-4">
            <div className="block md:hidden">
              <Slider {...mobileSettings}>
                {accountingServices.map((service, index) => (
                  <div key={index} className="px-2">
                    <div className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[150px] w-[90%] mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
                      <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                        {service.keyword}
                      </span>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="hidden md:block">
              <Slider {...desktopSettings}>
                {accountingServices.map((service, index) => (
                  <div key={index} className="px-2">
                    <div className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[150px] shadow-lg hover:shadow-2xl transition-all duration-300">
                      <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                        {service.keyword}
                      </span>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center text-darkGreenDarker">
            Payroll Services
          </h3>
          <div className="max-w-4xl mx-auto px-4">
            <div className="block md:hidden">
              <Slider {...mobileSettings}>
                {payrollServices.map((service, index) => (
                  <div key={index} className="px-2">
                    <div className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[150px] w-[90%] mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
                      <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                        {service.keyword}
                      </span>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="hidden md:block">
              <Slider {...desktopSettings}>
                {payrollServices.map((service, index) => (
                  <div key={index} className="px-2">
                    <div className="relative group bg-gradient-to-br from-[#ACBFA8] to-[#C7D9BC] text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[150px] shadow-lg hover:shadow-2xl transition-all duration-300">
                      <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                        {service.keyword}
                      </span>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-gradient-to-br from-[#C7D9BC] to-[#ACBFA8] text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
