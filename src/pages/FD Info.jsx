import React from "react";

const FdInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/fd-calculator#guide",
          "@id": "https://www.sipgo.in/fd-calculator#guide",
          headline:
            "FD Calculator – Fixed Deposit Maturity and Interest Estimator",
          description:
            "Calculate your fixed deposit interest and maturity amount based on deposit amount, tenure, and interest rate with SIPGo's FD Calculator.",
          image: "https://www.sipgo.in/images/logo.png",
          author: {
            "@type": "Organization",
            name: "SIPGo",
            url: "https://www.sipgo.in/",
          },
          datePublished: datePublished,
          dateModified: dateModified,
          publisher: {
            "@type": "Organization",
            name: "SIPGo",
            logo: {
              "@type": "ImageObject",
              url: "https://www.sipgo.in/images/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.sipgo.in/fd-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "FD Guide Sections",
            table: [
              "What is an FD?",
              "Key Features of FD",
              "Advantages of FDs",
              "Deposit Insurance Coverage",
              "Types of FDs",
              "Choosing the Right FD Investment",
              "Things to Consider",
              "Is an FD Investment Right for You?",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold lg:text-center mb-6 text-blue-600">
        FD - A Comprehensive Guide
      </h2>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is an FD?
        </h3>
        <p className="mb-2">
          A <strong>Fixed Deposit (FD)</strong> is one of the safest and most
          reliable investment options available, allowing you to invest a lump
          sum amount of money for a fixed tenure at a predetermined interest
          rate. During this period, the investment remains locked, and premature
          withdrawal is allowed in most banks but with a penalty or reduced
          interest. In return, you earn assured returns at fixed intervals
          (monthly, quarterly, annually) or at maturity.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of FDs
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Safety</strong>: FDs are considered one of the safest
            investment options, as they are backed by banks and regulated
            financial institutions.
          </li>
          <li>
            <strong>Predictability</strong>: You know exactly how much you will
            earn at the end of the investment period, thanks to the fixed
            interest rate.
          </li>
          <li>
            <strong>Risk-Free Returns</strong>: FD returns are not influenced by
            market fluctuations, making them an ideal investment for
            conservative investors or those looking for steady income.
          </li>
          <li>
            <strong>Flexible Tenure</strong>: FDs offer flexibility in terms of
            investment tenure, ranging from a few months to several years
            (typically from 1 to 10 years).
          </li>
          <li>
            <strong>Interest Options</strong>: Interest can be compounded
            quarterly, monthly, semi-annually, or annually, depending on the
            terms of your FD. The more frequently interest is compounded, the
            higher your returns.
          </li>
          <li>
            <strong>Joint FD Accounts Options</strong>: FDs can be held jointly
            by two or more individuals. Joint FDs are popular among couples and
            senior citizens who want hassle-free inheritance.
          </li>
          <li>
            <strong>FD Laddering Strategy</strong>: This is an advanced
            investment approach where you split your FD investment into multiple
            FDs with different tenures. This helps balance liquidity and
            long-term returns by spreading maturity dates.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How FD Investment Works
        </h3>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Initial Investment</strong>: You begin by depositing a lump
            sum amount in a bank or financial institution for a fixed period.
          </li>
          <li>
            <strong>Interest Rate</strong>: The bank offers a fixed interest
            rate, which remains constant throughout the term of your FD. The
            rate is usually higher than a regular savings account but lower than
            riskier investment options.
            <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-2 shadow-md">
              <p>
                <strong>Important Note</strong>: The interest rate offered on an
                FD can vary based on the tenure chosen, with longer tenures
                generally offering higher interest rates. It's always advisable
                to check with your specific bank or financial institution for
                their exact FD tenure options and terms and conditions.
              </p>
            </div>
          </li>
          <li>
            <strong>Interest Payment</strong>: Interest is paid at periodic
            intervals or at the end of the tenure, depending on your preference.
            The interest earned is added to your principal and is compounded at
            regular intervals, enhancing your returns.
          </li>
          <li>
            <strong>Maturity</strong>: At the end of the investment period
            (maturity date), you receive your principal amount along with the
            accrued interest. You can either renew the FD or choose to withdraw
            the amount.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Advantages of FDs
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Guaranteed Returns</strong>: Unlike stocks or mutual funds,
            FDs offer assured returns, making them a preferred option for
            risk-averse investors.
          </li>
          <li>
            <strong>Tax Benefits</strong>: In India, if you invest in a 5-year
            FD, you can claim a deduction under Section 80C of the Income Tax
            Act. However, the interest earned is taxable.
          </li>
          <li>
            <strong>Loan Against FD</strong>: In case of an emergency, many
            banks offer loans against your FD, which can help you meet immediate
            financial needs without breaking the FD.
          </li>
          <li>
            <strong>No Market Risk</strong>: FD returns are not affected by
            market conditions, making them a low-risk option.
          </li>
          <li>
            <strong>Nomination Facility</strong>: You can nominate a family
            member or any individual to receive the FD proceeds in the event of
            the depositor’s demise.
          </li>
          <li>
            <strong>Auto-Renewal Facility</strong>: Many banks offer an
            auto-renewal option when booking an FD. At maturity, the FD is
            automatically renewed for the same tenure at the prevailing interest
            rate.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Deposit Insurance Coverage
        </h3>
        <p className="mb-2">
          In India, Fixed Deposits placed with scheduled banks are protected by
          the Deposit Insurance and Credit Guarantee Corporation (DICGC), a
          subsidiary of the Reserve Bank of India (RBI). Under this scheme:
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Coverage Limit</strong>: Deposits (including principal and
            interest) up to ₹5 lakh per depositor per bank are insured.
          </li>
          <li>
            <strong>Applicability</strong>: This insurance covers savings,
            fixed, current, and recurring deposits.
          </li>
          <li>
            <strong>No Additional Cost</strong>: The insurance is automatic and
            free for the depositor.
          </li>
        </ul>
        <p className="mb-2">
          This makes FDs with banks even more secure, especially for risk-averse
          investors.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of FDs
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Regular FD</strong>: This is the most common type, where you
            invest for a fixed period at a fixed interest rate.
          </li>
          <li>
            <strong>Tax-Saving FD</strong>: These FDs offer tax deductions under
            Section 80C of the Income Tax Act, 1961, investors can claim a tax
            deduction of up to ₹1.5 lakh per year. They have a lock-in period of
            5 years.
          </li>
          <li>
            <strong>Senior Citizens FD</strong>: Senior citizens generally get
            higher interest rates than regular FDs as a benefit.
          </li>
          <li>
            <strong>Cumulative FD</strong>: Interest is compounded quarterly and
            paid at maturity, which means the interest is added to your
            principal, and you earn more returns.
          </li>
          <li>
            <strong>Non-Cumulative FD</strong>: Interest is paid out at regular
            intervals (quarterly, annually, etc.) rather than being reinvested.
            This is ideal for investors looking for regular income.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Choosing the Right FD Investment
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Interest Rate</strong>: Compare interest rates offered by
            various banks and financial institutions to ensure the best returns.
          </li>
          <li>
            <strong>Tenure</strong>: Consider your financial goals before
            selecting the tenure. Shorter tenures might be better for liquidity,
            while longer tenures can offer higher returns.
          </li>
          <li>
            <strong>Compounding Frequency</strong>: Opt for FDs that offer
            quarterly or monthly compounding to maximize your returns.
          </li>
          <li>
            <strong>Liquidity Needs</strong>: If you anticipate needing your
            funds before maturity, consider a flexible FD that allows partial
            withdrawals without penalties.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Things to Consider
        </h3>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Penalty for Early Withdrawal</strong>: If you break your FD
            before its maturity date, you may incur a penalty and receive a
            lower interest rate.
          </li>
          <li>
            <strong>Taxation</strong>: The interest earned on FD is taxable
            according to your income tax slab. TDS (Tax Deducted at Source) is
            deducted on the interest earned if it exceeds ₹40,000 in a financial
            year (₹50,000 for senior citizens).
          </li>
          <li>
            <strong>Interest Rate Fluctuations</strong>: While FD rates are
            fixed, it's important to review them periodically as interest rates
            change with economic conditions.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Is an FD Investment Right for You?
        </h3>
        <p className="mb-2">
          Fixed Deposits (FDs) are ideal for investors who:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Prefer low-risk investments with guaranteed returns.</li>
          <li>Want to park their funds for a fixed period.</li>
          <li>Wish to avoid the uncertainties of market volatility.</li>
          <li>Need a steady income at regular intervals (e.g., retirees).</li>
        </ul>
        <p className="mt-4 mb-2">However, FDs may not be suitable if you:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Are seeking higher returns compared to traditional savings.</li>
          <li>Need quick access to your funds (higher liquidity).</li>
        </ul>
      </section>
    </article>
  );
};

export default FdInfo;
