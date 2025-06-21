import React from "react";

const KVPInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/kvp-calculator#guide",
          "@id": "https://www.sipgo.in/kvp-calculator#guide",
          headline: "Kisan Vikas Patra (KVP) – A Comprehensive Guide",
          description:
            "Learn about KVP interest rates, eligibility, tax implications, and how to invest.",
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
            "@id": "https://www.sipgo.in/kvp-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "KVP Guide Sections",
            table: [
              "What is KVP?",
              "Key Features of KVP",
              "Who is Eligible?",
              "Types of KVP Accounts",
              "How Does KVP Work?",
              "Taxation on KVP",
              "Pros of KVP",
              "Cons of KVP",
              "How to Buy KVP?",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Kisan Vikas Patra (KVP) – A Comprehensive Guide
      </h2>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is KVP?
        </h3>
        <p className="mb-2">
          <strong>Kisan Vikas Patra (KVP)</strong> is a government-backed
          savings scheme aimed at encouraging individuals to save for the future
          while earning a fixed rate of interest. Open to all Indian residents,
          it provides a secure investment option with guaranteed compounded
          returns. Introduced in 1988, KVP promotes long-term financial
          discipline across both rural and urban populations. The scheme is
          available through all post offices and select public sector banks in
          India.
        </p>
      </section>

      {/* Key Features */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of KVP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Interest Rate</strong>: 7.5% p.a., compounded annually (as
            of April–June 2025; subject to quarterly revision)
          </li>
          <li>
            <strong>Minimum Investment</strong>: ₹1,000 (in multiples of ₹100)
          </li>
          <li>
            <strong>Maximum Investment</strong>: No upper limit
          </li>
          <li>
            <strong>Tenure</strong>: 115 months (9 years and 7 months)
          </li>
          <li>
            <strong>Mode of Holding</strong>: Available in physical or digital
            form.
          </li>
          <li>
            <strong>Premature Withdrawal</strong>: Permitted after 2.5 years
            with applicable penalties
          </li>
          <li>
            <strong>Transferability</strong>: Certificates are transferable
            between individuals or across post offices
          </li>
          <li>
            <strong>Nomination Facility</strong>: Available at the time of
            purchase or later
          </li>
          <li>
            <strong>Safety</strong>: Fully government-backed, offering capital
            protection
          </li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who is Eligible?
        </h3>
        <p>Any Indian resident can invest in KVP. Eligibility includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Minors (through a guardian)</li>
          <li>Joint accounts (up to 3 individuals)</li>
          <li>Trusts (excluding Hindu Undivided Families)</li>
          <li>
            <strong>Not Eligible</strong>: Non-Resident Indians (NRIs) and Hindu
            Undivided Families (HUFs)
          </li>
        </ul>
      </section>

      {/* Account Types */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of KVP Accounts
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Single Holder Account</strong>: For individuals or for a
            minor through a guardian
          </li>
          <li>
            <strong>Joint A Account</strong>: Payable jointly to both holders
          </li>
          <li>
            <strong>Joint B Account</strong>: Payable to either holder (survivor
            receives full rights)
          </li>
        </ul>
      </section>

      {/* How does KVP Work */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does KVP Work?
        </h3>
        <p>
          The maturity amount is calculated using compound interest. The formula
          is:
        </p>
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            KVP Formula:
          </h4>
          <code className="font-bold">
            A = P × (1 + r/n)<sup>nt</sup>
          </code>
          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>A</strong> = Final maturity amount
            </li>
            <li>
              <strong>P</strong> = Principal or initial investment
            </li>
            <li>
              <strong>r</strong> = Annual interest rate
            </li>
            <li>
              <strong>n</strong> = Number of times interest is compounded per
              year
            </li>
            <li>
              <strong>t</strong> = Number of years
            </li>
          </ul>
        </div>
        <p className="mt-4">
          For example, at the current interest rate of 7.5%, an investment of
          ₹1,00,000 approximately grows to ₹2,00,000 in 115 months. Interest is
          compounded annually but paid out only at maturity.
        </p>
        <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-2 shadow-md">
          <p>
            <strong>Important Note</strong>: Even though the interest is paid at
            maturity, it is taxable each year on an accrual basis and must be
            reported in your income tax return.
          </p>
        </div>
      </section>

      {/* Taxation */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Taxation on KVP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>No 80C Deductions</strong>: KVP investments are not eligible
            for deductions under Section 80C
          </li>
          <li>
            <strong>Taxable Interest</strong>: Interest earned is fully taxable
            under the head 'Income from Other Sources'
          </li>
          <li>
            <strong>TDS</strong>: No tax is deducted at source upon maturity;
            however, interest is taxable each year on an accrual basis and must
            be reported in your income tax return
          </li>
        </ul>
      </section>

      {/* Pros */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of KVP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Government-Backed</strong>: Offers safety and capital
            protection
          </li>
          <li>
            <strong>Fixed Returns</strong>: Know your maturity amount in advance
          </li>
          <li>
            <strong>Easy Access</strong>: Available at post offices and
            authorized banks
          </li>
          <li>
            <strong>Transferable</strong>: Can be transferred to another person
            or location
          </li>
          <li>
            <strong>Nomination Facility</strong>: Supports succession planning
          </li>
          <li>
            <strong>Collateral for Loans</strong>: Can be pledged for loans
            (subject to bank approval)
          </li>
        </ul>
      </section>

      {/* Cons */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of KVP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>No Tax Benefits</strong>: Not eligible under Section 80C
          </li>
          <li>
            <strong>Taxable Returns</strong>: Interest is fully taxable each
            financial year
          </li>
          <li>
            <strong>Lock-in Period</strong>: Funds cannot be withdrawn before
            2.5 years
          </li>
          <li>
            <strong>Long Tenure</strong>: Suitable only for long-term goals
          </li>
        </ul>
      </section>

      {/* How to Buy KVP */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Buy KVP?
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Available at all India Post Office branches</li>
          <li>Also available through authorized public sector banks</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p>
          Kisan Vikas Patra is a{" "}
          <strong>secure and stable long-term investment</strong> backed by the
          Indian government. With guaranteed returns and no cap on investment,
          it’s ideal for conservative investors prioritizing capital protection.
          For goals like education, marriage, or general long-term savings, KVP
          offers a predictable and risk-free growth avenue. However, for
          tax-saving or shorter-term options, instruments like PPF or ELSS might
          be more suitable.
        </p>
      </section>
    </article>
  );
};

export default KVPInfo;
