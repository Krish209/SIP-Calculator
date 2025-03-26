import React from "react";

function EMIInfo() {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Compound Interest - A Comprehensive Guide
      </h1>

      {/* Introduction Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is EMI?
        </h2>
        <p className="mb-2">
          EMI (Equated Monthly Installment) is a fixed monthly payment made by a
          borrower to a lender for a loan over a specified period of time. It is
          commonly used for home loans, personal loans, auto loans, and more.
          EMI consists of both principal and interest components.
        </p>
      </section>

      {/* Components of EMI */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Components of EMI
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Principal Amount:</strong> The actual loan amount borrowed.
          </li>
          <li>
            <strong>Interest:</strong> The amount charged by the lender on the
            principal loan amount.
          </li>
          <li>
            <strong>Loan Tenure:</strong> The duration for which the loan is
            borrowed, typically in months.
          </li>
        </ul>
      </section>

      {/* EMI Calculation */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How EMI is Calculated?
        </h2>
        <p className="mb-2">
          When you take a loan, interest is earned or paid
          on the principal. With compound interest, this interest is added to
          the principal, and future interest is then calculated based on this
          larger amount. Over time, this process results in exponential growth
          of your investment.
        </p>

        <p className="mb-2">
          For example, if you take a loan of ₹1,00,000 (P) at an interest rate of 8% (r)
          per year, after 5 year (n) you would have to pay ₹1,21,658 (₹1,00,000 + ₹21,658). So, monthly emi would be ₹2,027.64.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            EMI Return Formula:
          </h3>
          <p className="mb-2 md:mb-4">The formula to calculate EMI is:</p>

          <code>EMI = (P × r × (1 + r)^n) / ((1 + r)^n - 1)</code>

          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>P</strong> = Principal loan amount
            </li>
            <li>
              <strong>r</strong> = Monthly interest rate (annual rate / 12)
            </li>
            <li>
              <strong>n</strong> = Loan tenure in months
            </li>
          </ul>
        </div>
        
      </section>

      {/* Types of EMI Calculation */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of EMI Calculation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reducing Balance Method:</strong> The EMI is calculated on
            the outstanding loan balance, reducing as the loan principal is
            repaid.
          </li>
          <li>
            <strong>Flat Rate Method:</strong> EMI is calculated on the entire
            principal amount throughout the loan tenure. This leads to higher
            EMIs compared to the reducing balance method.
          </li>
        </ul>
      </section>

      {/* Advantages of EMI */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Advantages of EMI
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Breaks down large payments into manageable amounts.</li>
          <li>Helps in planning monthly finances effectively.</li>
          <li>Timely payments can improve credit score.</li>
          <li>
            Access to larger loans, such as home or car loans, that would be
            difficult to pay upfront.
          </li>
        </ul>
      </section>

      {/* Disadvantages of EMI */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Disadvantages of EMI
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Interest payments can increase the total loan cost significantly.
          </li>
          <li>Missed EMI payments can lead to penalties or defaults.</li>
          <li>
            If you have multiple loans, managing various EMIs can be
            overwhelming.
          </li>
          <li>Some lenders charge early repayment fees.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h2>
        <p className="mb-2">
          EMI is a practical way to repay loans in manageable monthly amounts,
          but it’s important to consider the interest rate, tenure, and type of
          loan before committing. Always ensure you can comfortably manage the
          EMI payments to avoid any financial strain.
        </p>
      </section>
    </div>
  );
}

export default EMIInfo;
