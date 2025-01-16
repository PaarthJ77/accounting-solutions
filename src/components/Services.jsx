import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const accountingServices = [
  { keyword: 'Financial Reporting', description: 'Generate detailed reports, including balance sheets, profit & loss statements, and cash flow insights. Financial Statement Analysis and consulting.' },
  { keyword: 'Bank Reconciliation', description: 'Automating, implementing and streamlining your financial records with bank statements for accurate bookkeeping.' },
  { keyword: 'General Ledger Account Reconciliation', description: 'Transaction entry/classification.' },
  { keyword: 'Income and Expense Tracking', description: 'Track and categorize transactions in real time.' },
  { keyword: 'Invoicing and Billing', description: 'Create, send, and manage professional invoices to get paid faster.' },
  { keyword: 'Financial Review', description: 'Monthly or Quarterly Consulting and Review of Financial Statements.' },
  { keyword: 'Tax Preparation', description: 'Simplify tax season with organized records and automated tax calculations.' },
  { keyword: 'Sales Tax Returns', description: 'Making Monthly Sales Tax Pre-payments and Filing Quarterly returns.' },
  { keyword: 'Property Tax Returns', description: 'Filing and payments of Unsecured Property Tax annually.' },
];

const payrollServices = [
  { keyword: 'Salary and Wages', description: 'Automate calculations for hourly, salaried, and commission-based pay.' },
  { keyword: 'Direct Deposit', description: "Ensure timely payments directly to employees' bank accounts. No paper checks, no delays, just reliable payments." },
  { keyword: 'Tax Withholding', description: 'Calculate and deduct payroll taxes, including federal, state, and local taxes. Handle all withholdings, ensuring compliance with ever-changing tax laws.' },
  { keyword: 'Employee Self-Service Portal', description: 'Access to an online portal where employees can view/download pay stubs, W-2s, and other documents anytime.' },
  { keyword: 'Additional Deductions', description: 'Calculating, processing and paying CalSavers Deductions.' },
  { keyword: 'Pay Stub Generation', description: 'Provide employees with detailed, downloadable paystubs.' },
  { keyword: 'Payroll Tax Efiling', description: 'Generating and efiling Payroll Taxes per Payroll.' },
  { keyword: 'Payroll Tax Returns', description: 'Manage and file Federal and State Payroll Tax Returns quarterly/annually.' },
];

function Services() {
  return (
    <AnimatedSection id="services">
      <SectionTitle title="Accounting and Payroll Services" align="center" />
      <p className="mt-4 text-2xl font-black text-center">
        At Accounting Solutions, we provide comprehensive accounting and payroll solutions designed to streamline your business operations and ensure compliance with financial regulations. Our platform offers a user-friendly experience with advanced tools tailored to meet the needs of small businesses, entrepreneurs, and growing enterprises.
      </p>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-24">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-4xl font-black mb-4 text-center text-darkGreenDarker">Accounting Services</h3>
          <p className="mb-4 text-center text-lg font-black text-darkGreenDarker">
            Our accounting tools help you gain full visibility into your financial health:
          </p>
          <div className="grid grid-cols-1 gap-6">
            {accountingServices.map((service, index) => (
              <div key={index} className="relative group bg-offWhite text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center h-28 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
                <span className="text-center font-black px-4 text-xl transition-opacity duration-300 group-hover:opacity-0">{service.keyword}</span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-lg bg-offWhite text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-4xl font-black mb-4 text-center text-darkGreenDarker">Payroll Services</h3>
          <p className="mb-4 text-center text-lg font-black text-darkGreenDarker">
            Manage payroll seamlessly while staying compliant with labor laws and tax regulations:
          </p>
          <div className="grid grid-cols-1 gap-6">
            {payrollServices.map((service, index) => (
              <div key={index} className="relative group bg-offWhite text-darkGreenDarker border border-gray-300 rounded-lg flex items-center justify-center h-28 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
                <span className="text-center font-black px-4 text-xl transition-opacity duration-300 group-hover:opacity-0">{service.keyword}</span>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-lg bg-offWhite text-darkGreenDarker p-6 font-black shadow-lg hover:shadow-2xl">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Services;
