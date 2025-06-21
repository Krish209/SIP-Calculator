import React from "react";

const PPFInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/ppf-calculator#guide",
          "@id": "https://www.sipgo.in/ppf-calculator#guide",
          headline:
            "PPF Calculator – Plan Your Public Provident Fund Investment",
          description:
            "Use our PPF Calculator to estimate returns, maturity value, and benefits from your Public Provident Fund investments effectively.",
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
            "@id": "https://www.sipgo.in/ppf-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "PPF Guide Sections",
            table: [
              "What is PPF?",
              "Key Features of PPF",
              "Who is Eligible?",
              "How to Open a PPF Account",
              "Maturity Period",
              "Pros of PPF",
              "Cons of PPF",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        PPF - A Comprehensive Guide
      </h2>

      {/* What is PPF? Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is PPF?
        </h3>
        <p className="mb-2">
          The <strong>Public Provident Fund (PPF)</strong> is a
          government-backed investment scheme aimed at promoting long-term
          savings. It offers a combination of{" "}
          <strong>tax benefits, guaranteed and attractive returns,</strong> and{" "}
          <strong>safety</strong>, making it one of the most preferred savings
          instruments in India. The Ministry of Finance sets the interest rate,
          which is subject to change.
        </p>
        <p className="mb-2">
          To maximize the benefits of your PPF investment, it is beneficial to
          make your deposit{" "}
          <strong>between April 1st and April 5th each financial year</strong>.
          This ensures that your deposit is accounted for in the current
          financial year, and you begin earning interest from the start of the
          year. If a lump-sum deposit isn't feasible to make a full year's
          deposit at once, you can make{" "}
          <strong>monthly deposits by the 5th of each month</strong> to maximize
          interest accrual.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of PPF
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tenure</strong>: 15 years (extendable in blocks of 5 years
            after maturity)
          </li>
          <li>
            <strong>Interest Rate</strong>: Revised quarterly by the government;
            generally higher than most fixed deposits and entirely tax-free
          </li>
          <li>
            <strong>Tax Benefits</strong>: Contributions are eligible for tax
            deductions under Section 80C (up to ₹1.5 lakh per year) of the
            Income Tax Act. The interest earned is tax-free.
          </li>
          <li>
            <strong>Investment Limit</strong>: Minimum contribution is ₹500
            annually, and maximum is ₹1.5 lakh annually. Contributions can be
            made in a lump sum or in installments (maximum 12 installments per
            year).
          </li>
          <li>
            <strong>Loan and Partial Withdrawal</strong>: Loans can be taken
            after the 3rd year. Partial withdrawals are allowed after the 6th
            year.
          </li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who is Eligible?
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Indian citizens (residents)</li>
          <li>Minors (operated by a parent or legal guardian)</li>
          <li>
            <strong>NRIs (Non-Resident Indians)</strong> are not eligible to
            open new PPF accounts. However, if an NRI holds a PPF account and
            later becomes an NRI, they can continue the account till maturity.
          </li>
        </ul>
      </section>

      {/* How to Open a PPF Account Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Open a PPF Account
        </h3>
        <p className="mb-2">
          You can open a PPF account through any designated bank or post office
          in India. Here's how:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Documents Required</strong>: Proof of identity, proof of
            address, Aadhar card, passport-size photo, PAN card.
          </li>
          <li>
            <strong>Process</strong>: Visit a bank/post office, fill out the
            application form, and submit the required documents. Make the
            initial deposit to activate the account.
          </li>
          <li>
            <strong>Online Process</strong>: Many banks now allow opening PPF
            accounts online via their mobile apps or websites.
          </li>
        </ul>
      </section>

      {/* Maturity Period Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Maturity Period
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Lock-in Period</strong>: The PPF account has a mandatory
            15-year lock-in period, and early withdrawal is not allowed. After
            15 years, you can either withdraw the entire balance or extend the
            account.
          </li>
          <li>
            <strong>Extension</strong>: After 15 years, account holders can
            extend the PPF account in blocks of 5 years with or without making
            further contributions. If no contributions are made, the balance
            continues to earn interest.
          </li>
          <li>
            <strong>Premature Withdrawal</strong>: Partial withdrawals are
            allowed after the 6th year and up to 50% of the balance under
            certain conditions, but premature closure is generally not allowed.
          </li>
        </ul>
      </section>

      {/* Pros and Cons Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of PPF
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Risk-Free</strong>: Backed by the government, making it a
            safe investment option.
          </li>
          <li>
            <strong>Tax Benefits</strong>: Contributions are eligible for tax
            deductions, and interest is tax-free.
          </li>
          <li>
            <strong>Attractive Interest Rates</strong>: Offers higher returns
            compared to regular savings accounts.
          </li>
          <li>
            <strong>Compounding Interest</strong>: Interest is compounded
            annually, helping your savings grow faster over time.
          </li>
          <li>
            <strong>Loan Facility</strong>: You can take loans against your PPF
            balance in case of an emergency.
          </li>
          <li>
            <strong>Transferability</strong>: A PPF account can be transferred
            from one branch to another, even between different banks and post
            offices, within India.
          </li>
          <li>
            <strong>Nomination Facility</strong>: Account holders can nominate
            one or more persons to receive the balance in the PPF account in
            case of their death.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of PPF
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Lock-in Period</strong>: The 15-year lock-in may not be
            ideal for those looking for short-term liquidity.
          </li>
          <li>
            <strong>Contribution Limit</strong>: The maximum annual contribution
            is ₹1.5 lakh, which may be limiting for higher-income earners.
          </li>
          <li>
            <strong>Partial Withdrawal Restrictions</strong>: While partial
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
    </article>
  );
};

export default PPFInfo;
