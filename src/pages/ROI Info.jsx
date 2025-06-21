import React from "react";

const ROIInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/roi-calculator#guide",
          "@id": "https://www.sipgo.in/roi-calculator#guide",
          headline: "ROI Calculator – Calculate Return on Investment",
          description:
            "Evaluate the profitability of your investments by calculating ROI using our easy and accurate calculator.",
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
            "@id": "https://www.sipgo.in/roi-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "ROI Guide Sections",
            table: [
              "What is an ROI?",
              "How does ROI work?",
              "Who Should Use ROI?",
              "Types & Variations of ROI",
              "Limitations of ROI",
              "Best Practices",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Return on Investment (ROI) - Complete Guide
      </h2>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is ROI?
        </h3>
        <p className="mb-2">
          Return on Investment (ROI) is a popular financial metric used to
          evaluate the profitability of an investment. It shows the percentage
          return gained relative to the cost of the investment. ROI is widely
          used across personal finance, business, and marketing to determine the
          efficiency of spending and investment strategies.
        </p>
      </section>

      {/* How does ROI work */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How does ROI work?
        </h3>
        <p className="mb-4">
          Return on Investment (ROI) is a basic profitability metric that helps
          evaluate the performance of an investment. It calculates how much
          return you earned compared to what you spent. It does not consider
          compounding, time, or risk — it’s purely a profit-to-cost ratio
          expressed as a percentage.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            ROI Formula:
          </h4>
          <code className="font-bold">
            ROI = ((Gain from Investment - Cost of Investment) / Cost of
            Investment) × 100
          </code>
          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Gain from Investment</strong>: Total amount received from
              the investment
            </li>
            <li>
              <strong>Cost of Investment</strong>: The amount initially spent
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="mb-2 font-semibold">Example:</p>
          <p>
            If you invest ₹10,000 in a stock and later sell it for ₹12,000 after
            5 years, the ROI would be:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Net Gain = ₹12,000 - ₹10,000 = ₹2,000</li>
            <li>ROI = (₹2,000 / ₹10,000) × 100 = 20%</li>
            <li>
              CAGR = [(12,000 / 10,000)<sup>1/5</sup> - 1] × 100 ≈ 3.71%
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-4 shadow-md">
          <p className="">
            <strong>Important Note</strong>: CAGR helps understand annual growth
            rate over time, making it useful for comparing investments with
            different durations. ROI is great for quick comparisons, but for
            long-term investments, consider using CAGR (Compound Annual Growth
            Rate) for a time-adjusted return.
          </p>
        </div>
      </section>

      {/* Who Should Use ROI */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who Should Use ROI?
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Individual investors assessing stock or real estate returns</li>
          <li>Businesses measuring project or marketing performance</li>
          <li>Startups justifying product development costs</li>
          <li>Anyone comparing multiple investment options</li>
        </ul>
      </section>

      {/* Variants */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types & Variations of ROI
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Annualized ROI</strong>: Adjusts ROI for time, helpful for
            comparing long vs short-term investments.
          </li>
          <li>
            <strong>Marketing ROI (MROI)</strong>: Used to track revenue
            generated from marketing spend.
          </li>
          <li>
            <strong>Social ROI (SROI)</strong>: Evaluates social/environmental
            returns along with monetary ones.
          </li>
        </ul>
      </section>

      {/* Limitations */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Limitations of ROI
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Does not account for time value of money</li>
          <li>Ignores risk, external market factors, or inflation</li>
          <li>Can be manipulated based on how gains or costs are reported</li>
          <li>Not always reliable for comparing long-term investments</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Best Practices
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compare ROI with investment duration</li>
          <li>Use with other metrics like IRR, Payback Period, and NPV</li>
          <li>Adjust for inflation or opportunity cost if needed</li>
          <li>Make sure to include all relevant costs and gains</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p>
          ROI is a straightforward yet powerful tool for analyzing the
          efficiency of any investment. It helps investors and businesses make
          informed decisions. However, it should be used in conjunction with
          other financial metrics to get a complete picture of the investment's
          potential.
        </p>
      </section>
    </article>
  );
};

export default ROIInfo;
