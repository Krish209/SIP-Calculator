import React from "react";

const InflationInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/inflation-calculator#guide",
          "@id": "https://www.sipgo.in/inflation-calculator#guide",
          headline: "Inflation Calculator – Understand the Real Value of Money",
          description:
            "Calculate the impact of inflation on your money over time to make better financial decisions.",
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
            "@id": "https://www.sipgo.in/inflation-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "Inflation Guide Sections",
            table: [
              "What is Inflation?",
              "Causes of Inflation",
              "Types of Inflation",
              "Measuring Inflation",
              "Consequences of Inflation",
              "Inflation Control Measures",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Inflation - A Comprehensive Guide
      </h2>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Inflation?
        </h3>
        <p className="mb-2">
          <strong>Inflation</strong> is the rate at which the general level of
          prices for goods and services rises over time, leading to a decrease
          in the purchasing power of a currency. In simpler terms, when
          inflation occurs, each unit of currency buys fewer goods and services
          than before.
        </p>

        <p className="mb-2">
          For example, if inflation is at 3% per year, something that costs ₹100
          today would cost ₹103 next year. Over time, if inflation is high,
          everyday things like food, gas, and rent can become more expensive,
          affecting people's cost of living.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Causes of Inflation
        </h3>
        <p className="mb-2">
          Inflation can be caused by several factors, typically categorized into
          demand-pull inflation, cost-push inflation, and built-in inflation:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Demand-Pull Inflation</strong>: This occurs when the demand
            for goods and services exceeds the economy’s productive capacity. It
            typically happens during periods of economic growth, when there’s an
            increase in consumer spending, government expenditure, or business
            investments.
          </li>
          <li>
            <strong>Cost-Push Inflation</strong>: This arises when the cost of
            production increases, leading to higher prices for goods and
            services. This could be due to increased raw materials, wages, or
            energy costs.
          </li>
          <li>
            <strong>Built-In Inflation (Wage-Price Spiral)</strong>: This
            happens when workers demand higher wages to keep up with rising
            living costs, and businesses increase prices to cover the higher
            wage costs.
          </li>
        </ul>

        <p className="mb-2">
          In reality, inflation is often driven by a combination of these
          factors, and policymakers need to consider multiple causes to address
          inflation effectively.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of Inflation
        </h3>
        <p className="mb-2">
          Inflation can be categorized into different types based on its rate
          and impact:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Creeping Inflation</strong>: This type of inflation occurs
            at a rate of 1-3% annually and is considered mild, usually not
            disruptive.
          </li>
          <li>
            <strong>Walking Inflation</strong>: When inflation is between 3% and
            10% annually, it starts to erode purchasing power more noticeably.
          </li>
          <li>
            <strong>Galloping Inflation</strong>: Galloping inflation refers to
            inflation rates exceeding 10%, which can have significant impacts on
            the economy.
          </li>
          <li>
            <strong>Hyperinflation</strong>: This extreme form of inflation
            occurs when prices increase uncontrollably, often due to economic
            collapse or excessive money printing by the government.
          </li>
          <li>
            <strong>Stagflation</strong>: This is a rare but dangerous scenario
            where high inflation coincides with stagnant economic growth and
            high unemployment.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Measuring Inflation
        </h3>
        <p className="mb-2">
          Inflation is measured using price indices. The two primary indices
          are:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Consumer Price Index (CPI)</strong>: The CPI tracks the
            average change in prices paid by consumers for a predefined basket
            of goods and services.
          </li>
          <li>
            <strong>Producer Price Index (PPI)</strong>: The PPI tracks the
            average change in prices received by domestic producers for their
            output.
          </li>
          <li>
            <strong>Core Inflation</strong>: This excludes volatile items like
            food and energy, giving a clearer picture of long-term inflation
            trends.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Consequences of Inflation
        </h3>
        <p className="mb-2">
          Inflation has several consequences on an economy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Erosion of Purchasing Power</strong>: As inflation rises,
            the value of money decreases, meaning people can buy less with the
            same amount of money.
          </li>
          <li>
            <strong>Impact on Savings</strong>: If inflation outpaces interest
            rates, the real value of savings decreases over time.
          </li>
          <li>
            <strong>Interest Rates and Borrowing</strong>: Higher inflation
            often leads central banks to raise interest rates, making borrowing
            more expensive.
          </li>
          <li>
            <strong>Wage-Price Spiral</strong>: A cycle in which higher wages
            lead to higher prices, which then lead to more demands for higher
            wages.
          </li>
          <li>
            <strong>Distorted Price Signals</strong>: Inflation can make it
            difficult for businesses and consumers to make accurate decisions,
            as prices are constantly rising.
          </li>
          <li>
            <strong>Impact on International Trade</strong>: Countries with high
            inflation rates may face reduced competitiveness in international
            markets, as their goods and services become more expensive relative
            to those of other countries.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Inflation Control Measures
        </h3>
        <p className="mb-2">
          Policymakers use several tools to control inflation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Monetary Policy</strong>: Central banks use interest rate
            adjustments and other tools to influence inflation.
          </li>
          <li>
            <strong>Fiscal Policy</strong>: Governments can influence inflation
            through public spending and taxation policies.
          </li>
          <li>
            <strong>Supply-Side Policies</strong>: These policies aim to
            increase the supply of goods and services to reduce inflationary
            pressures.
          </li>
          <li>
            <strong>Exchange Rate Policy</strong>: Countries with high inflation
            may adjust their currency’s exchange rate to make exports cheaper
            and imports more expensive, though this can have long-term risks.
          </li>
        </ul>
      </section>
    </article>
  );
};

export default InflationInfo;
