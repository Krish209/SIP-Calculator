import React from "react";

const PPFInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600">
        Public Provident Fund (PPF) - A Comprehensive Guide
      </h1>

      {/* What is PPF? Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is PPF?
        </h2>
        <p className="mb-2">
          <strong>The Public Provident Fund (PPF)</strong> is a
          government-backed investment scheme aimed at promoting long-term
          savings. It offers a combination of tax benefits, good guaranteed
          returns, and safety, making it one of the most preferred savings
          instruments in India. The Ministry of Finance sets the interest rate,
          which is subject to change.
        </p>
        <p className="mb-2">
          To maximize the benefits of your PPF investment, it is beneficial to
          make your deposit{" "}
          <strong>between April 1st and April 5th of a financial year</strong>.
          This ensures that your deposit is accounted for in the current
          financial year, and you begin earning interest from the start of the
          year. If it is not possible to make a full year's deposit at once, you
          can make monthly deposits by the 5th of each month to maximize
          interest accrual.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of PPF
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tenure:</strong> The PPF has a lock-in period of 15 years,
            which can be extended in blocks of 5 years.
          </li>
          <li>
            <strong>Interest Rate:</strong> The interest rate is set by the
            government and revised quarterly. It is usually higher than most
            fixed deposits and is tax-free.
          </li>
          <li>
            <strong>Tax Benefits:</strong> Contributions are eligible for tax
            deductions under Section 80C (up to ₹1.5 lakh per year) of the
            Income Tax Act. The interest earned is tax-free.
          </li>
          <li>
            <strong>Investment Limit:</strong> Minimum contribution is ₹500
            annually, and maximum is ₹1.5 lakh annually. Contributions can be
            made in a lump sum or in installments (maximum 12 installments per
            year).
          </li>
          <li>
            <strong>Loan and Partial Withdrawal:</strong> Loans can be taken
            after the 3rd year. Partial withdrawals are allowed after the 6th
            year.
          </li>
        </ul>
      </section>

      {/* How to Open a PPF Account Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Open a PPF Account
        </h2>
        <p className="mb-2">
          You can open a PPF account through any designated bank or post office
          in India. Here's how:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Eligibility:</strong> Individuals and minors (with a
            guardian) can open a PPF account. Only Indian citizens who are
            residents of India can open a PPF account. NRIs (Non-Resident
            Indians) are not eligible to open new PPF accounts. However, if an
            NRI holds a PPF account and later becomes an NRI, they can continue
            the account till maturity.
          </li>
          <li>
            <strong>Documents Required:</strong> Proof of identity, proof of
            address, passport-size photo, PAN card (for large investments).
          </li>
          <li>
            <strong>Process:</strong> Visit a bank/post office, fill out the
            application form, and submit the required documents. Make the
            initial deposit to activate the account.
          </li>
          <li>
            <strong>Online Process:</strong> Many banks now allow opening PPF
            accounts online via their mobile apps or websites.
          </li>
        </ul>
      </section>

      {/* Maturity Period Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Maturity Period
        </h2>
        <p className="mb-2">
          The PPF account has a lock-in period of 15 years, after which you can
          either withdraw the balance or extend the account.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Lock-in Period:</strong> The PPF account has a mandatory
            15-year lock-in period, and early withdrawal is not allowed. After
            15 years, you can either withdraw the entire balance or extend the
            account.
          </li>
          <li>
            <strong>Extension:</strong> After 15 years, account holders can
            extend the PPF account in blocks of 5 years with or without making
            further contributions. If no contributions are made, the balance
            continues to earn interest.
          </li>
          <li>
            <strong>Premature Withdrawal:</strong> Partial withdrawals are
            allowed after the 6th year and up to 50% of the balance under
            certain conditions, but premature closure is generally not allowed.
          </li>
        </ul>
      </section>

      {/* Pros and Cons Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of PPF
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Risk-Free:</strong> Backed by the government, making it a
            safe investment option.
          </li>
          <li>
            <strong>Tax Benefits:</strong> Contributions are eligible for tax
            deductions, and interest is tax-free.
          </li>
          <li>
            <strong>Attractive Interest Rates:</strong> Offers higher returns
            compared to regular savings accounts.
          </li>
          <li>
            <strong>Compounding Interest:</strong> Interest is compounded
            annually, helping your savings grow faster over time.
          </li>
          <li>
            <strong>Loan Facility:</strong> You can take loans against your PPF
            balance in case of an emergency.
          </li>
          <li>
            <strong>Transferability:</strong> A PPF account can be transferred
            from one branch to another, even between different banks and post
            offices, within India.
          </li>
          <li>
            <strong>Nomination Facility:</strong> Account holders can nominate
            one or more persons to receive the balance in the PPF account in
            case of their death.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of PPF
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Lock-in Period:</strong> The 15-year lock-in may not be
            ideal for those looking for short-term liquidity.
          </li>
          <li>
            <strong>Contribution Limit:</strong> The maximum annual contribution
            is ₹1.5 lakh, which may be limiting for higher-income earners.
          </li>
          <li>
            <strong>Partial Withdrawal Restrictions:</strong> While partial
            withdrawals are allowed after 6 years, they are subject to certain
            rules.
          </li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="my-4 md:my-6">
        <p className="mb-2 md:mb-4">
          Overall, the PPF is an excellent long-term investment option for
          anyone looking to save and earn tax-free returns, especially for
          retirement planning. Its safety and guaranteed returns make it one of
          the most trusted financial tools in India.
        </p>
      </section>
    </div>
  );
};

export default PPFInfo;
