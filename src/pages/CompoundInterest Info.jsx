import React from "react";

const CompoundingInterestInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/compound-interest-calculator#guide",
          "@id": "https://www.sipgo.in/compound-interest-calculator#guide",
          headline: "Compound Interest Calculator – Wealth Growth Tool",
          description:
            "Understand the power of compounding with this Compound Interest Calculator. Estimate long-term returns.",
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
            "@id": "https://www.sipgo.in/compound-interest-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "Compound Interest Guide Sections",
            table: [
              "What is Compound Interest?",
              "How Compound Interest Works",
              "Benefits of Compound Interest",
              "Types of Compound Interest",
              "Compound Interest vs. Simple Interest",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Compound Interest - A Comprehensive Guide
      </h2>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Compound Interest?
        </h3>
        <p className="mb-2">
          <strong>Compound interest</strong> is the interest on a loan or
          deposit that is calculated based on both the initial principal and the
          accumulated interest from previous periods. In simpler terms, it's
          "interest on interest" – the longer you let your money sit, the more
          interest you earn.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Compound Interest Works
        </h3>
        <p className="mb-2">
          When you invest your money or take a loan, interest is earned or paid
          on the principal. With compound interest, this interest is added to
          the principal, and future interest is then calculated based on this
          larger amount. Over time, this process results in exponential growth
          of your investment.
        </p>

        <p className="mb-2">
          For example, if you invest ₹1,000 (P) at an interest rate of 5% (r)
          per year, after 1 year (n) you would have ₹1,050 (₹1,000 + ₹50). In
          the second year, interest is calculated on ₹1,050, so the total amount
          grows to ₹1,102.50. The longer you keep your money invested, the
          greater the effect of compounding.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Compound Interest Return Formula:
          </h4>
          <p className="mb-2 md:mb-4">
            The formula to calculate Compound Interest is:
          </p>

          <code className="font-bold">A = P × (1 + r/n)^(nt)</code>

          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>A</strong> = Amount of money accumulated after{" "}
              <strong>n</strong> years, including interest
            </li>
            <li>
              <strong>P</strong> = Principal amount (initial deposit)
            </li>
            <li>
              <strong>r</strong> = Annual interest rate
            </li>
            <li>
              <strong>n</strong> = Number of times that interest is compounded
              per year
            </li>
            <li>
              <strong>t</strong> = Number of years the money is invested or
              borrowed for
            </li>
          </ul>
        </div>

        <p className="mt-4">
          Let's break this down with the actual values to simplify the
          understanding:
        </p>

        <ul className="space-y-2">
          <li>- Principal Investment (P) = ₹50,000</li>
          <li>- Annual Return Rate (r) = 10% (0.10)</li>
          <li>- Number of times interest is compounded per year (n) = 1</li>
          <li>- Total Number of years the money is invested (t) = 5 years</li>
        </ul>

        <p className="mt-4">
          Applying the compound interest formula with the above values:
        </p>

        <code className="">
          A = ₹50,000 × (1 + 0.10/1)^(1 × 5) = ₹50,000 × (1.10)^5
        </code>

        <p className="mt-4">
          After solving the equation, the final amount after 5 years would be
          approximately ₹80,525.25. This final amount includes both your
          principal investment amount = ₹50,000 and the estimated returns =
          ₹30,525.25 earned due to compounding.
        </p>

        <p className="mt-4">
          As you can see, the interest earned is based not just on your initial
          investment but also on the interest accumulated each year. The longer
          you let your money grow, the more the compound interest will
          contribute to your returns.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Benefits of Compound Interest
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Exponential Growth</strong>: Compound interest helps your
            money grow at a faster rate over time, especially with frequent
            compounding.
          </li>
          <li>
            <strong>Maximizes Returns</strong>: The more often interest is
            compounded (monthly or daily), the higher your returns will be.
          </li>
          <li>
            <strong>Long-Term Gains</strong>: Compound interest benefits those
            who start saving or investing early, as the gains increase with
            time.
          </li>
          <li>
            <strong>Time is on Your Side</strong>: One of the most important
            factors in benefiting from compound interest is time. The earlier
            you start investing, the greater the growth you’ll see over time.
            This is why starting a retirement fund early can make a significant
            difference in the amount of money you'll have when you retire.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of Compound Interest
        </h3>
        <p className="mb-2">
          Compound interest can be categorized based on the frequency of
          compounding:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Annually</strong>: Interest is compounded once per year.
          </li>
          <li>
            <strong>Semi-Annually</strong>: Interest is compounded twice per
            year.
          </li>
          <li>
            <strong>Quarterly</strong>: Interest is compounded four times per
            year.
          </li>
          <li>
            <strong>Monthly</strong>: Interest is compounded twelve times per
            year.
          </li>
          <li>
            <strong>Daily</strong>: Interest is compounded every day.
          </li>
        </ul>

        <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-4 shadow-md">
          <p>
            <strong>Important Note</strong>: The more frequently the interest is
            compounded, the more you will earn.
          </p>
        </div>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Compound Interest vs. Simple Interest
        </h3>
        <p className="mb-2">
          While compound interest grows at an exponential rate, simple interest
          is calculated only on the principal amount throughout the investment
          period. With compound interest, you earn interest on both the
          principal and the previously earned interest. In contrast, simple
          interest only pays on the original amount you invested.
        </p>

        <p className="mb-2">
          If you invest ₹1,000 at 5% simple interest, you will earn ₹50 every
          year. Over 10 years, you would have earned ₹500. However, if the same
          ₹1,000 is invested with 5% compound interest, your investment would
          grow to ₹1,628.89 after 10 years (compounded annually). This makes
          compound interest a better option for long-term investments since your
          earnings grow exponentially over time.
        </p>
      </section>
    </article>
  );
};

export default CompoundingInterestInfo;
