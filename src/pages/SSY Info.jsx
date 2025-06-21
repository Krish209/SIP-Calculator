import React from "react";

function SSYInfo() {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/ssy-calculator#guide",
          "@id": "https://www.sipgo.in/ssy-calculator#guide",
          headline: "SSY Calculator – Sukanya Samriddhi Yojana Growth Planner",
          description:
            "Plan your daughter's future with the SSY Calculator. Calculate interest and maturity value for Sukanya Samriddhi Yojana.",
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
            "@id": "https://www.sipgo.in/ssy-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "SSY Guide Sections",
            table: [
              "What is Sukanya Samriddhi Yojana?",
              "Key Features of SSY",
              "How to Open an SSY Account",
              "Pros of SSY",
              "Cons of SSY",
              "Who Should Invest in SSY?",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        SSY - A Comprehensive Guide
      </h2>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Sukanya Samriddhi Yojana?
        </h3>
        <p className="mb-2">
          The <strong>Sukanya Samriddhi Yojana (SSY)</strong> is a
          government-backed savings scheme launched by the Indian government in
          2015 as part of the <strong>‘Beti Bachao Beti Padhao’</strong>{" "}
          initiative. Its primary goal is to promote the welfare and financial
          security of the girl child by encouraging parents to save for their
          daughter’s future education and marriage expenses. It offers{" "}
          <strong>one of the highest interest rates</strong> among various small
          savings schemes in India.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of SSY
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Eligibility</strong>: The account can be opened only for a
            girl child <strong>below the age of 10</strong>. Parents or legal
            guardians can open one account per girl child, with a maximum of two
            accounts for two girls (exception: more than two daughters in case
            of twin or triplet daughters).
          </li>
          <li>
            <strong>Interest Rate</strong>: The interest rate is currently 8.0%
            per annum, compounded annually (subject to quarterly revision by the
            government).
          </li>
          <li>
            <strong>Tenure</strong>: The maturity period is 21 years from the
            date of opening the account or until the girl child turns 21,
            whichever is earlier.
          </li>
          <li>
            <strong>Contribution Limit</strong>: Minimum deposit of ₹250 per
            year and a maximum of ₹1.5 lakh per year.
          </li>
          <li>
            <strong>Tax Benefits</strong>: Contributions qualify for tax
            deductions under Section 80C, and the interest earned and maturity
            proceeds are tax-free.
          </li>
          <li>
            <strong>Partial Withdrawals</strong>: Partial withdrawals are
            allowed from the 18th year for education or marriage purposes.
          </li>
          <li>
            <strong>Premature Closure</strong>: The account can be closed
            prematurely in case of the girl’s death or in certain medical
            emergencies.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Open an SSY Account
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Visit the nearest post office or bank offering SSY scheme.</li>
          <li>
            Fill out the application form with the girl child's birth
            certificate and identity proof of the guardian.
          </li>
          <li>Deposit the minimum required amount (₹250 or more).</li>
          <li>
            Complete the KYC (Know Your Customer) process by submitting identity
            and address proof documents.
          </li>
          <li>
            Receive a passbook with your account details, which will help track
            deposits and interest.
          </li>
        </ol>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of SSY
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>High-Interest Rates</strong>: It offers one of the highest
            interest rates among government-backed savings schemes.
          </li>
          <li>
            <strong>Tax-Free Returns</strong>: Both interest and maturity amount
            are completely tax-free, making it an attractive option.
          </li>
          <li>
            <strong>Long-Term Security</strong>: SSY ensures that parents can
            save for their daughter’s future education or marriage over a long
            term.
          </li>
          <li>
            <strong>Low Minimum Deposit</strong>: The minimum deposit
            requirement is very low, starting at just ₹250 annually.
          </li>
          <li>
            <strong>Partial Withdrawals</strong>: Partial withdrawals for
            education or marriage can be made from the 18th year.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of SSY
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Limited to Girls</strong>: This scheme is available only for
            the girl child.
          </li>
          <li>
            <strong>No Joint Accounts</strong>: The account cannot be opened
            jointly, which reduces flexibility.
          </li>
          <li>
            <strong>Long Lock-In Period</strong>: The account has a lock-in
            period of 21 years, which means you cannot access the funds easily.
          </li>
          <li>
            <strong>No Loan Facilities</strong>: SSY does not allow loans or
            overdrafts against the account.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who Should Invest in SSY?
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Parents of Girl Children</strong>: If you have a daughter
            under the age of 10, this scheme is perfect for securing her future.
          </li>
          <li>
            <strong>Conservative Investors</strong>: If you're looking for a
            safe, government-backed investment option, SSY is ideal.
          </li>
          <li>
            <strong>Tax-Conscious Investors</strong>: If you are looking for a
            tax-saving option, SSY offers excellent tax benefits under Section
            80C.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          The SSY is one of the best schemes for ensuring the future financial
          security of your daughter. It combines high returns, tax benefits, and
          long-term savings with the security of a government-backed investment.
          It’s one of the best options available for parents to invest in their
          girl child’s future.
        </p>
        <p className="mb-2">
          By contributing to this scheme, you not only build a financial cushion
          for her education and marriage but also take an important step toward
          empowering the girl child in India.
        </p>
      </section>
    </article>
  );
}

export default SSYInfo;
