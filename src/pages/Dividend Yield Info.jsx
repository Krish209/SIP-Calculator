import React from "react";

const DividendYieldInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/dividend-calculator#guide",
          "@id": "https://www.sipgo.in/dividend-calculator#guide",
          headline: "Dividend Calculator – Estimate Returns from Dividends",
          description:
            "Calculate your expected dividend income and dividend yield using SIPGo’s Dividend Calculator.",
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
            "@id": "https://www.sipgo.in/dividend-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "Dividend Yield Guide Sections",
            table: [
              "What is Dividend Yield?",
              "Key Things to Understand",
              "Who is Eligible?",
              "How Does Dividend Yield Work?",
              "Taxation on Dividend Income",
              "Pros and Cons of High Dividend Yield",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Dividend Yield - A Comprehensive Guide
      </h2>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Dividend Yield?
        </h3>
        <p className="mb-2">
          Dividend Yield is a financial ratio that shows how much a company pays
          out in dividends each year relative to its stock price. It's expressed
          as a percentage and is a key metric for income investors who want to
          earn cash flow from their stock investments. It's particularly
          valuable for income-focused investors, like retirees or long-term
          holders, who prioritize steady cash flow.
        </p>
      </section>

      {/* Key Things to understand */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Things to Understand
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>If dividends go up, yield goes up</li>
          <li>
            If stock price goes up, yield goes down (unless dividend also rises)
          </li>
          <li>
            If stock price drops, yield goes up — but that might be a warning
            sign
          </li>
          <li>
            High yield is good, but not always. Sometimes a company in trouble
            keeps a high dividend temporarily — but may cut it soon.
          </li>
          <li>
            Low yield doesn’t mean bad — growth companies might reinvest profits
            instead of paying dividends.
          </li>
        </ul>
      </section>

      {/* How Does Dividend Yield Work */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does Dividend Yield Work?
        </h3>
        <p>
          When a company earns profit, it may choose to share a portion of it
          with shareholders in the form of dividends. The dividend yield tells
          you how much return you’re getting from those dividends per INR
          invested in the stock.
        </p>
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Dividend Yield Formula:
          </h4>
          <code className="font-bold">
            Dividend Yield (%) = (Annual Dividend per Share / Price per Share) ×
            100
          </code>
        </div>

        <h3 className="font-semibold mt-6">Example:</h3>
        <p className="mt-2">
          Suppose a company pays an annual dividend of ₹20 per share, and the
          current stock price is ₹400. The dividend yield would be: (20 ÷ 400) ×
          100 = 5%. This means you're earning a 5% return annually just from
          dividends — not including any capital gains or stock price growth.
        </p>
      </section>

      {/* Taxation on Dividend Income */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Taxation on Dividend Income
        </h3>
        <p className="mb-2">
          Dividend income is taxable in the hands of the investor, and tax is
          deducted at source (TDS) depending on the investor’s residency status.
        </p>

        <h3 className="font-semibold mt-4">For Resident Shareholders</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Indian companies must deduct TDS at 10% under Section 194 when the
            total dividend paid to a resident shareholder exceeds ₹5,000 in a
            financial year.
          </li>
          <li>
            For example, if someone receives ₹10,000 in dividends, ₹1,000 will
            be deducted as TDS, and ₹9,000 will be paid to the shareholder.
          </li>
          <li>
            This deducted amount can be claimed while filing the income tax
            return (ITR) as part of your total tax liability.
          </li>
          <li>
            Certain entities such as LIC, GIC, or other insurers holding
            beneficial ownership of shares are exempt from TDS on dividends.
          </li>
        </ul>

        <h3 className="font-semibold mt-4">For Non-Resident Shareholders</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A higher TDS of 20% is applicable under Section 195 for dividends
            paid to non-resident investors or foreign companies.
          </li>
          <li>
            The TDS rate may be lower if a Double Taxation Avoidance Agreement
            (DTAA) exists between India and the investor’s country, subject to
            documentation.
          </li>
          <li>
            To benefit from DTAA rates, non-residents must submit Form 10F,
            proof of beneficial ownership, and a tax residency certificate.
          </li>
          <li>
            If these aren't submitted, the default 20% TDS applies — but it can
            be claimed as a credit while filing tax returns in India.
          </li>
        </ul>

        <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-4 shadow-md">
          <p>
            <strong>Important Note</strong>: Regardless of TDS, all dividend
            income must be reported in your ITR.
          </p>
        </div>
      </section>

      {/* Pros and Cons of High Dividend Yield */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros and Cons of High Dividend Yield
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pro</strong>: Provides steady income even if stock prices
            are flat or falling.
          </li>
          <li>
            <strong>Pro</strong>: Signals mature, stable companies that generate
            consistent profits.
          </li>
          <li>
            <strong>Con</strong>: Extremely high yields can be a red flag —
            possibly due to a dropping stock price or unsustainable dividends.
          </li>
          <li>
            <strong>Con</strong>: Companies paying high dividends may have less
            capital to reinvest in growth.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          Dividend yield is a valuable metric for investors seeking income from
          their investments. However, it's essential to consider other factors,
          such as the company's financial health, growth potential, and market
          conditions, before making investment decisions. Always balance the
          yield with other metrics like payout ratio and growth stability.
        </p>
      </section>
    </article>
  );
};

export default DividendYieldInfo;
