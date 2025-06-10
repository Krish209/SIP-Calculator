import React, { useState } from "react";

const SimpleInterestInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">

      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "url": "https://www.sipgo.in/simple-interest-calculator#guide",
          "@id": "https://www.sipgo.in/simple-interest-calculator#guide",
          "headline": "Simple Interest Calculator – Quick Interest Computation",
          "description": "Easily compute the interest earned on your investment with our Simple Interest Calculator.",
          "image": "https://www.sipgo.in/images/logo",
          "author": {
            "@type": "Organization",
            "name": "SIPGo",
            "url": "https://www.sipgo.in/"
          },
          "datePublished": datePublished,
          "dateModified":  dateModified,
          "publisher": {
            "@type": "Organization",
            "name": "SIPGo",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sipgo.in/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.sipgo.in/simple-interest-calculator"
          },
          "mainEntity": {
            "@type": "Table",
            "about": "Simple Interest Guide Sections",
            "table": [
              "Real-World Applications",
              "Limitations of Simple Interest"
            ]
          }
        })}
      </script>

      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Simple Interest - A Comprehensive Guide
      </h1>

      <section className="my-4 md:my-6">
        <p className="mb-2">
          A <strong>Simple Interest Calculator</strong> is used to calculate the interest earned
          or paid on a principal amount over a specified period at a fixed
          interest rate. Unlike compound interest, simple interest is calculated
          only on the original principal.
        </p>
      </section>

      <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Formula for Simple Interest:
        </h3>
        <p className="mb-2 md:mb-4">
          The formula used to calculate simple interest is:
        </p>

        <code className="">SI = (P × R × T) / 100</code>

        <p className="mt-2">Where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>P = Principal amount (the initial investment or loan amount)</li>
          <li>R = Rate of interest per annum (in percentage)</li>
          <li>T = Time period (in years)</li>
        </ul>
      </div>

      <p className="mt-4">
        Let's break this down with the actual values to simplify the
        understanding:
      </p>

      <ul className="space-y-2">
        <li>- Principal amount (P) = ₹50,000</li>
        <li>- Annual Return Rate (r) = 12% (0.12)</li>
        <li>- Time Period (t) = 5 years</li>
      </ul>

      <p className="mt-4">
        Applying the simple interest formula with the above values:
      </p>

      <code className="">
        A = P + SI
        <br />
        A = ₹50,000 + (₹50,000 × 0.12 × 5) / 100
        <br />
        A = ₹50,000 + ₹30,000
        <br />A = ₹80,000
      </code>

      <p className="mt-4">
        After solving the equation, the final amount after 5 years would be
        ₹80,000. This final amount includes both your principal investment
        amount = ₹50,000 and the estimated returns = ₹30,000.
      </p>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Real-World Applications
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Loans</strong>: Personal loans, car loans, or student loans
            often use simple interest.
          </li>
          <li>
            <strong>Investments</strong>: Some bonds or fixed deposits use
            simple interest for returns.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Limitations of Simple Interest
        </h2>
        <p>
          Simple interest doesn’t take the compounding effect into account,
          meaning it may not be the best choice for long-term investments. For
          longer periods, compound interest usually provides higher returns or
          costs.
        </p>
      </section>
    </article>
  );
};

export default SimpleInterestInfo;
