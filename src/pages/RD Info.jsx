import React from "react";

const RDInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Recurring Deposit (RD) - A Comprehensive Guide
      </h1>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does an RD Work?
        </h2>
        <p className="mb-2">
          In a Recurring Deposit (RD), you deposit a fixed amount regularly for
          a specified time period. In return, the bank provides interest on the
          deposited amount, which is compounded periodically (usually
          quarterly). This type of investment encourages disciplined savings and
          can offer good returns with minimal risk. While it may not offer the
          highest returns compared to other investment options, it is perfect
          for risk-averse individuals and those who want a disciplined, low-risk
          way of saving for medium-term goals.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Benefits of Recurring Deposits
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Easy to start with no large initial investment required.</li>
          <li>Safe and risk-free with guaranteed returns.</li>
          <li>
            Helps develop a disciplined saving habit with regular contributions.
          </li>
          <li>
            Flexible tenure and deposit amount based on your financial goals.
          </li>
          <li>
            Loan facility available against the RD balance in case of emergency.
          </li>
          <li>
            Premature withdrawal allowed with some penalties and reduced
            interest rates.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Interest Rates on RDs
        </h2>
        <p className="mb-2">
          Interest rates for RDs vary from bank to bank and can range between 5%
          to 7% per annum. The interest is compounded quarterly, meaning that
          the interest earned gets added to the principal amount at the end of
          each quarter, which increases the total interest over time.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Tax on Recurring Deposits
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>TDS (Tax Deducted at Source):</strong> If the interest
            earned exceeds ₹40,000 in a financial year (₹50,000 for senior
            citizens), TDS is deducted at 10%.
          </li>
          <li>
            <strong>Taxable Interest:</strong> The interest earned is subject to
            tax under the head "Income from Other Sources".
          </li>
          <li>
            <strong>Form 15G/15H:</strong> You can submit these forms to avoid
            TDS if you fall below the tax threshold.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Open an RD?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Eligibility: Any individual (single or joint) can open an RD, with
            or without a guardian for minors.
          </li>
          <li>
            Documents Required: Basic KYC documents such as Aadhar, passport,
            address proof, and photographs.
          </li>
          <li>
            Online Opening: Most banks offer the ability to open RDs online
            through their websites or apps.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Early Withdrawal and Penalty
        </h2>
        <p className="mb-2">
          Early withdrawal from an RD is possible but usually comes with a
          penalty. This typically involves a reduction in the interest rate
          (usually 1% lower than the original rate). Some banks may not allow
          partial withdrawals, so it's important to plan accordingly.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Example of an RD Calculation
        </h2>
        <p className="mb-2">
          For example, if you deposit ₹5,000 every month for a year at 6%
          interest, the maturity amount (including interest) will be calculated
          based on the monthly compounding. You can use an RD calculator for
          precise figures, but you can expect to receive approximately ₹60,000
          in principal + interest after one year.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Suitability of Recurring Deposits
        </h2>
        <p className="mb-2">
          RDs are ideal for conservative investors who want to save money
          regularly while earning guaranteed returns. It is also suitable for
          individuals looking to accumulate funds for short to medium-term goals
          like buying a car, a vacation, or building an emergency fund.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Alternatives to RDs
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Fixed Deposits (FDs):</strong> Similar to RDs, but with a
            lump-sum deposit for a higher interest rate.
          </li>
          <li>
            <strong>Mutual Funds (SIP):</strong> If you're open to more risk for
            potentially higher returns, you could consider mutual funds through
            SIPs.
          </li>
          <li>
            <strong>Post Office Monthly Income Scheme:</strong> A fixed-income
            alternative with different terms than RDs.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RDInfo;
