import React from "react";

const NSCInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/nsc-calculator#guide",
          "@id": "https://www.sipgo.in/nsc-calculator#guide",
          headline: "NSC Calculator – National Savings Certificate Returns",
          description:
            "Easily compute the maturity value and interest on your NSC investments and plan better with this NSC calculator.",
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
            "@id": "https://www.sipgo.in/nsc-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "NSC Guide Sections",
            table: [
              "What is NSC?",
              "Key Features of NSC",
              "How Does NSC Work?",
              "Interest Rates on NSC",
              "Tax Benefits of NSC",
              "Types of NSC",
              "Who Should Invest in NSC?",
              "Pros of NSC",
              "Cons of NSC",
              "How to Buy NSC?",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        NSC - A Comprehensive Guide
      </h2>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is NSC?
        </h3>
        <p className="mb-2">
          The <strong>National Savings Certificate (NSC)</strong> is a
          government-backed savings scheme that offers a safe and reliable
          investment option for individuals aiming to grow their savings while
          enjoying tax benefits. It is ideal for risk-averse investors and
          taxpayers who wish to reduce their taxable income. Despite its lock-in
          period and taxable interest, NSC remains a dependable choice due to
          its fixed returns and sovereign guarantee.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of NSC
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Government-Backed</strong>: Investment scheme offering
            low-risk returns, backed by the Government of India.
          </li>
          <li>
            <strong>Fixed Interest Rate</strong>: Determined by the Government
            of India, typically revised quarterly. (Currently around 7.7% p.a.)
          </li>
          <li>
            <strong>Tax Benefits</strong>: Eligible for tax benefits under{" "}
            <strong>Section 80C</strong> of the Income Tax Act (up to ₹1.5 lakh
            per financial year).
          </li>
          <li>
            <strong>Eligibility</strong>: Open only to Indian residents. NRIs
            are not eligible.
          </li>
          <li>
            <strong>Lock-in Period</strong>: A fixed lock-in period of 5 years
            with interest compounded annually.
          </li>
          <li>
            <strong>Investment Amount</strong>: Minimum of ₹100, with no maximum
            limit.
          </li>
          <li>
            <strong>Interest Payment</strong>: Interest is paid only at
            maturity, but is compounded annually.
          </li>
          <li>
            <strong>Transferability</strong>: Can be transferred from one person
            to another under specific conditions.
          </li>
          <li>
            <strong>Premature Withdrawal</strong>: Not allowed except in cases
            like the death of the investor.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does NSC Work?
        </h3>
        <p className="mb-2">
          When you purchase an NSC at a Post Office, the amount you invest earns
          a fixed interest rate compounded annually. The interest is added to
          the principal every year and is paid out only at maturity (after 5
          years).
        </p>
        <p className="mb-2">
          For example, if you invest ₹1,000 in NSC at an interest rate of 6.8%,
          the interest is calculated every year on the total principal. At the
          end of the 5-year tenure, you will receive the total principal along
          with compounded interest.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Interest Rates on NSC
        </h3>
        <p className="mb-2">
          The interest rate on NSC is fixed by the government and is subject to
          quarterly revisions. As of Q2 FY 2025, the interest rate is 7.7% per
          annum.
        </p>
        <p className="mb-2">
          The interest on NSC is compounded annually, meaning interest is added
          to the principal every year and earns more interest in subsequent
          years. The total interest is paid at maturity.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Tax Benefits of NSC
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Section 80C Deduction</strong>: The principal amount
            invested in NSC is eligible for tax deduction under Section 80C,
            allowing you to save up to ₹1.5 lakh annually.
          </li>
          <li>
            <strong>Taxable Interest</strong>: While the principal investment
            qualifies for a tax deduction, the interest earned on NSC is taxable
            under "Income from Other Sources".
          </li>
          <li>
            <strong>No TDS (Tax Deducted at Source)</strong>: NSC does not
            deduct TDS, but the interest is taxable, and the investor must
            declare it while filing tax returns.
          </li>
          <li>
            <strong>Interest Reinvestment Benefit</strong>: The interest added
            to the principal amount is eligible for tax deduction under Section
            80C, making it a valuable option for tax planning.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of NSC
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>NSC VIII Issue</strong>: This is the standard 5-year NSC,
            which provides interest that is compounded annually and paid only at
            maturity.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who Should Invest in NSC?
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Risk-averse individuals looking for a safe investment option.</li>
          <li>
            Taxpayers looking to reduce taxable income under Section 80C of the
            Income Tax Act.
          </li>
          <li>
            Long-term investors comfortable with a 5-year lock-in period and a
            fixed return.
          </li>
          <li>
            Small investors seeking an affordable and low-risk investment
            option, with a minimum investment of ₹100.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of NSC
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Government-Backed</strong>: The investment is backed by the
            Government of India, making it one of the safest options.
          </li>
          <li>
            <strong>Tax Benefits</strong>: Investment in NSC qualifies for tax
            deductions under Section 80C.
          </li>
          <li>
            <strong>Fixed Returns</strong>: NSC offers fixed returns, providing
            a predictable income over the investment period.
          </li>
          <li>
            <strong>Compounded Interest</strong>: The interest is compounded
            annually, which maximizes returns.
          </li>
          <li>
            <strong>Affordable</strong>: Start investing with just ₹100, making
            it accessible for all income groups.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of NSC
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Taxable Interest</strong>: The interest earned is taxable,
            which can reduce the overall returns depending on your tax bracket.
          </li>
          <li>
            <strong>Liquidity</strong>: NSC has a lock-in period of 5 years, and
            early withdrawal is not allowed except in cases of death.
          </li>
          <li>
            <strong>Interest Paid at Maturity</strong>: You will not receive
            periodic interest payments; it’s only paid out at maturity.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Buy an NSC?
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>You can purchase NSC at any Post Office across India.</li>
          <li>
            Some Post Offices also provide the facility to buy NSC online
            through authorized portals.
          </li>
          <li>
            To purchase, you need to provide KYC documents like Aadhar card, PAN
            card, and passport-sized photographs, address and identity proof (as
            per KYC norms).
          </li>
        </ul>
      </section>
    </article>
  );
};

export default NSCInfo;
