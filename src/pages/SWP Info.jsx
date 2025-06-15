import React from "react";
import Table from "../consts/Table";

const SWPInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();

  const columns = [
    { key: "feature", header: "Feature" },
    { key: "sip", header: "SIP" },
    { key: "swp", header: "SWP" },
  ];

  const data = [
    {
      feature: "Purpose",
      sip: "Invest regularly to grow wealth",
      swp: "Withdraw regularly to generate income",
    },
    {
      feature: "Transaction Type",
      sip: "Investment (fund inflow)",
      swp: "Withdrawal (fund outflow)",
    },
    {
      feature: "Target Audience",
      sip: "Investors looking to build wealth",
      swp: "People needing regular income",
    },
    {
      feature: "Risk",
      sip: "Market risk (growth-oriented)",
      swp: "Market risk (income-focused)",
    },
  ];

  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">

      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "url": "https://www.sipgo.in/swp-calculator#guide",
          "@id": "https://www.sipgo.in/swp-calculator#guide",
          "headline": "SWP Calculator – Systematic Withdrawal Planning Tool",
          "description": "Plan regular withdrawals from your investments with the SWP Calculator. Estimate monthly payout and balance.",
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
            "@id": "https://www.sipgo.in/swp-calculator"
          },
          "mainEntity": {
            "@type": "Table",
            "about": "SWP Guide Sections",
            "table": [
              "What is a SWP?",
              "Key Features of SWP",
              "How Does SWP Work?",
              "Types of SWP",
              "Benefits of SWP",
              "Pros",
              "Cons",
              "Key Considerations for SWP",
              "Tax Implications of SWP",
              "SWP vs SIP",
              "Conclusion"
            ]
          }
        })}
      </script>

      <h2 className="text-2xl md:text-3xl font-bold lg:text-center mb-6 text-blue-600">
        SWP - A Comprehensive Guide
      </h2>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is a SWP?
        </h3>
        <p className="mb-2">
          A <strong>Systematic Withdrawal Plan (SWP)</strong> is a financial
          planning tool that allows investors to withdraw a fixed amount of
          money from their mutual fund investments at regular intervals. It
          works in the opposite way compared to a SIP. While SIPs involve
          regularly investing small amounts, SWPs allow you to withdraw a fixed
          amount periodically, rather than redeeming your entire investment at
          once. SWP enables fixed, periodic withdrawals, thereby ensuring a
          steady cash flow.
        </p>
        <p className="mb-2">
          SWPs are particularly useful for retirees or individuals who need
          regular cash flow from their investments. By setting up an SWP,
          investors can ensure that they receive a consistent amount of money at
          predetermined intervals, which can help in budgeting and managing
          expenses.
        </p>
      </section>

      {/* Key Features */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of SWP
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Flexibility</strong>: Allows withdrawal of fixed amounts
            over time, offering a steady income stream.
          </li>
          <li>
            <strong>Choice of Frequency</strong>: Withdrawals can be scheduled
            monthly, quarterly, or annually based on your liquidity needs.
          </li>
          <li>
            <strong>Taxation</strong>: Only the capital gains portion of each
            withdrawal is subject to tax, not the full amount withdrawn.
          </li>
          <li>
            <strong>Growth Potential</strong>: Even as you withdraw, your
            remaining units stay invested and may benefit from market growth.
          </li>
          <li>
            <strong>Applicability</strong>: Works with most mutual fund schemes
            (equity, debt, hybrid, etc.)
          </li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does SWP Work?
        </h3>
        <p className="mb-2">
          To set up an SWP, you first need to invest a lump sum amount in a
          mutual fund scheme. After that, you can choose the amount you want to
          withdraw and the frequency of withdrawals. For example, if you invest
          ₹10,00,000 in a mutual fund and set up an SWP of ₹10,000 per month,
          you will receive ₹10,000 every month from your investment. The mutual
          fund house redeems a certain number of units to meet your withdrawal
          request, and the remaining units will continue to stay invested in the
          fund.
        </p>
        <p className="mb-2">
          The withdrawn amount may be subject to capital gains tax, depending on
          the type of mutual fund and the holding period of your investment. For
          example, if you withdraw from an equity fund after one year, the
          long-term capital gains (LTCG) tax will apply. If you withdraw from a
          debt fund before three years, the short-term capital gains (STCG) tax
          will apply.
        </p>
        <p className="mb-2">
          SWPs are flexible, allowing investors to adjust the withdrawal amount
          or frequency as needed. You can also stop the SWP at any time, but
          it’s essential to plan your withdrawals carefully to avoid depleting
          your investment too quickly.
        </p>
        <p className="mb-2">
          Since mutual funds are market-linked investments, the withdrawal
          amount may vary depending on the{" "}
          <strong>NAV (Net Asset Value)</strong> of the scheme at the time of
          withdrawal. In simple terms, the amount withdrawn depends on the value
          of your mutual fund units. For example, if the NAV is ₹50, then 200
          units (₹10,000 ÷ ₹50) will be redeemed to meet the withdrawal amount
          of ₹10,000.
        </p>
        <p className="mb-2">
          The formula used to calculate the amount withdrawn is:
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            SWP Return Formula:
          </h3>
          <p className="mb-2 md:mb-4">
            The formula used to calculate SWP returns is:
          </p>
          <code className="font-bold">A = B × [(1 + r/n)^n - 1] / (r/n)</code>
          <p className="mt-2">
            Where:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>A</strong> = Final Amount (after interest)
            </li>
            <li>
              <strong>B</strong> = Periodic Withdrawal Amount
            </li>

            <li>
              <strong>r</strong> = Annual Interest Rate
            </li>
            <li>
              <strong>n</strong> = Investment Period in Years
            </li>
          </ul>
        </div>
      </section>

      {/* Type of SWP */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of SWP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Fixed Amount SWP</strong>: The investor sets a fixed amount
            to be withdrawn periodically. This is the most common type of SWP,
            where you receive a fixed sum every month or year.
          </li>
          <li>
            <strong>Fixed Percentage SWP</strong>: Instead of withdrawing a
            fixed amount, you can choose to withdraw a fixed percentage of your
            mutual fund's balance at regular intervals. This method is more
            dynamic as it adjusts with the performance of your mutual fund and
            market conditions.
          </li>
          <li>
            <strong>Variable SWP</strong>: In this type of SWP, the amount
            withdrawn varies based on certain criteria, such as market
            conditions, fund performance, and investor preferences.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Benefits of SWP
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Steady Income</strong>: SWP provides a predictable income
            stream, making it ideal for people in need of regular cash flow.
          </li>
          <li>
            <strong>Tax Efficiency</strong>: Depending on the type of mutual
            fund and duration of investment, SWP can be tax-efficient compared
            to lump sum withdrawals.
          </li>
          <li>
            <strong>Capital Preservation</strong>: SWP allows you to withdraw
            money without fully depleting your capital, as the remaining
            investment continues to grow.
          </li>
          <li>
            <strong>Flexible Amount & Frequency</strong>: Choose how much you
            want to withdraw and how often. Customize your withdrawals based on
            your needs.
          </li>
        </ul>
      </section>

      {/* Pros */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Pros</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provides a regular income without depleting investments</li>
          <li>Perfect for retirees or those needing steady cash flow</li>
          <li>Allows continued growth of the invested corpus</li>
          <li>Customizable withdrawal amount and frequency</li>
          <li>There is no tax deducted at source for SWPs. </li>
        </ul>
      </section>

      {/* Cons */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Cons</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Subject to market volatility, which can affect withdrawal amounts
          </li>
          <li>Risk of capital depletion if not planned properly</li>
          <li>
            Tax implications on capital gains may reduce the withdrawal amount
          </li>
          <li>Requires careful planning to avoid running out of funds</li>
        </ul>
      </section>

      {/* Key Considerations for SWP */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Considerations for SWP
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Market Risk</strong>: NAVs fluctuate; during market
            downturns, more units are redeemed to maintain fixed withdrawal.
          </li>
          <li>
            <strong>Discipline Required</strong>: Avoid impulsive changes; plan
            for long-term sustainability.
          </li>
          <li>
            <strong>Capital Depletion</strong>: If withdrawal exceeds returns,
            the corpus will deplete over time. So, never exceed 4-6% of corpus
            annually to avoid depletion.
          </li>
          <li>
            <strong>Taxation</strong>: Short-term vs long-term capital gains
            taxation applies depending on holding period and fund type.
          </li>
          <li>
            <strong>Inflation</strong>: Fixed withdrawals may lose value in real
            terms over time.
          </li>
        </ul>
      </section>

      {/* Tax Implications of SWP */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Tax Implications of SWP
        </h3>
        <p className="mb-2 md:mb-4">
          SWPs from mutual funds are subject to capital gains tax on the gains
          portion of the withdrawal, not the entire amount. Here’s a breakdown
          of the tax structure for various types of mutual funds:
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Tax on Equity Funds
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Short-Term Capital Gains (STCG)</strong>: If you sell equity
            mutual fund units within 1 year, the gains are taxed at 15%.{" "}
          </li>
          <li>
            <strong>Long-Term Capital Gains (LTCG)</strong>: If you hold equity
            mutual funds for more than 1 year, gains over ₹1 lakh are taxed at
            10%, with no indexation benefits.
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Tax on Debt Funds
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            For investments made <strong>before April 1, 2023</strong>, if you
            sell debt mutual fund units within 3 years, the gains are taxed at
            your income tax slab rate. If held for more than 3 years, the gains
            are taxed at 20% with indexation benefits.
          </li>
          <li>
            For investments made on or <strong>after April 1, 2023</strong>, all
            gains from debt mutual funds are taxed at your income tax slab rate,
            irrespective of the holding period, and there are no indexation
            benefits.
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. Tax on ELSS (Equity Linked Savings Schemes)
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>ELSS funds</strong> offer tax benefits under Section 80C,
            allowing you to claim deductions up to ₹1.5 lakh in a financial
            year. It has a 3-year lock-in.
          </li>
          <li>
            The tax treatment of gains from ELSS is the same as that of equity
            funds, i.e., 10% LTCG above ₹1 lakh in a financial year.
          </li>
        </ul>
      </section>

      {/* Comparison with SIP */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          SWP vs SIP
        </h3>

        <p className="mb-2">
          While both Systematic Investment Plan (SIP) and Systematic Withdrawal
          Plan (SWP) are regular, disciplined financial tools, their purposes
          are opposite.
        </p>

        <Table columns={columns} data={data} />
        
      </section>

      {/* Conclusion */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          Systematic Withdrawal Plans (SWPs) provide an excellent way to create
          a consistent income stream from mutual fund investments. Whether you
          are a retiree or just looking for regular withdrawals, SWP can provide
          the right balance between income and capital preservation. When
          implemented wisely—considering tax implications, market conditions,
          and withdrawal rates—SWPs can help maintain financial stability while
          preserving your investment corpus.
        </p>
      </section>
    </article>
  );
};

export default SWPInfo;
