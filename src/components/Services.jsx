import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';

const accountingServices = [
  { keyword: 'Financial Reporting', description: 'Generate detailed reports, including balance sheets, profit & loss statements, and cash flow insights.' },
  { keyword: 'Bank Reconciliation', description: 'Automating, implementing and streamlining your financial records with bank statements for accurate bookkeeping.' },
  { keyword: 'General Ledger Account Reconciliation', description: 'Transaction entry/classification.' },
  { keyword: 'Income and Expense Tracking', description: 'Track and categorize transactions in real time.' },
  { keyword: 'Invoicing and Billing', description: 'Create, send, and manage professional invoices to get paid faster.' },
];

const payrollServices = [
  { keyword: 'Salary and Wages', description: 'Automate calculations for hourly, salaried, and commission-based pay.' },
  { keyword: 'Direct Deposit', description: "Ensure timely payments directly to employees' bank accounts." },
  { keyword: 'Tax Withholding', description: 'Calculate and deduct payroll taxes, including federal, state, and local taxes.' },
  { keyword: 'Employee Self-Service Portal', description: 'Access to an online portal where employees can view/download pay stubs, W-2s, and other documents anytime.' },
];

function Services() {
  useEffect(() => {
    console.log("Services component mounted!");
  }, []);

  return (
    <div id="services" className="mt-20 pt-16 sm:pt-24 md:pt-28">
      <SectionTitle title="Accounting and Payroll Services" align="center" />

      <p className="mt-6 text-lg sm:text-xl md:text-2xl font-black text-center max-w-4xl mx-auto">
        At Accounting Solutions, we provide comprehensive accounting and payroll solutions designed to streamline your business operations.
      </p>

      <div className="mt-12 flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-12">
        {/* Accounting Services Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center text-darkGreenDarker">
            Accounting Services
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {accountingServices.map((service, index) => (
              <div key={index} className="relative group bg-OffWhite text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[100px] shadow-lg hover:shadow-2xl transition-shadow">
                <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                  {service.keyword}
                </span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-OffWhite text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payroll Services Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-3xl sm:text-4xl font-black mb-6 text-center text-darkGreenDarker">
            Payroll Services
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {payrollServices.map((service, index) => (
              <div key={index} className="relative group bg-OffWhite text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center min-h-[100px] shadow-lg hover:shadow-2xl transition-shadow">
                <span className="text-center font-black px-4 text-lg sm:text-xl transition-opacity duration-300 group-hover:opacity-0">
                  {service.keyword}
                </span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base sm:text-lg bg-OffWhite text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
