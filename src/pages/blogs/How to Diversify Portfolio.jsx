import React from "react";
import Table from "../../consts/Table";
import BlogLayout from "../../consts/BlogLayout";
import img from "../../assets/icons/blogs/diversify.jpeg";

// In your DiversifyPortfolio.jsx or other blog pages:
export const meta = {
  title: "How to Diversify Your Investment Portfolio - Complete Guide",
  description: "Step-by-step guide to portfolio diversification for Indian investors with asset allocation strategies and risk management tips.",
  slug: "how-to-diversify-your-investment-portfolio", // New URL-friendly slug
  image: "https://sipgo.in/assets/icons/blogs/diversify.jpeg",
  tags: ["Investing", "Portfolio Diversification", "Asset Allocation", "Risk Management"],
  date: "2025-05-29", // ISO format better for SEO
};

const DiversifyPortfolio = () => {
  const columns = [
    { key: "assetClass", header: "Asset Class" },
    { key: "examples", header: "Examples" },
    { key: "riskLevel", header: "Risk Level" },
    { key: "idealAllocation", header: "Ideal Allocation (General)" },
  ];

  const data = [
    {
      assetClass: "Equities (Stocks)",
      examples: "Direct stocks, Equity MFs",
      riskLevel: "High",
      idealAllocation: "40%",
    },
    {
      assetClass: "Debt Instruments",
      examples: "PPF, FDs, Bonds, Debt MFs",
      riskLevel: "Low-Medium",
      idealAllocation: "30%",
    },
    {
      assetClass: "Gold",
      examples: "Physical gold, Sovereign Gold Bonds, Gold ETFs",
      riskLevel: "Medium",
      idealAllocation: "10%",
    },
    {
      assetClass: "Real Estate",
      examples: "Property, REITs",
      riskLevel: "Medium-High",
      idealAllocation: "10%",
    },
    {
      assetClass: "Cash/Liquid Assets",
      examples: "Savings account, Liquid funds",
      riskLevel: "Low",
      idealAllocation: "10%",
    },
  ];

  const columns2 = [
    { key: "riskLevel", header: "Risk Level" },
    { key: "portfolioMix", header: "Portfolio Mix" },
    { key: "suitableFor", header: "Suitable For" },
  ];

  const data2 = [
    {
      riskLevel: "Conservative",
      portfolioMix:
        "20% Equity, 50% Debt, 10% Gold, 10% Real Estate, 10% Liquid",
      suitableFor: "Retirees, Risk-averse",
    },
    {
      riskLevel: "Moderate",
      portfolioMix: "40% Equity, 30% Debt, 10% Gold, 10% REITs, 10% Liquid",
      suitableFor: "Mid-career professionals",
    },
    {
      riskLevel: "Aggressive",
      portfolioMix: "60% Equity, 20% Debt, 10% Gold, 5% REITs, 5% Liquid",
      suitableFor: "Young investors, High risk appetite",
    },
  ];

  return (
    <BlogLayout
      {...meta} // Spread all meta properties
      title="How to Diversify Your Portfolio — A Complete Guide for Indian Investors"
      author="Vrinda Jain"
      role="Financial Advisor"
      date="May 29, 2025"
      readTime="4 min read"
      image={img}
      tags={["Investing", "Inflation", "Finance", "Wealth"]}
      isPremium={true} // set as per your requirement
      isWeeklyUpdated={false}
    >
      {/* Blog content here */}
      <div className="max-w-screen-lg md:mx-auto text-night">
        {/* Introduction */}
        <section className="my-4 md:my-6">
          <p className="mb-2">
            When it comes to investing, one golden rule always holds true —
            <strong>don’t put all your eggs in one basket</strong>. This age-old
            saying captures the essence of{" "}
            <strong>portfolio diversification</strong>. Whether you're a
            seasoned investor or just starting with mutual funds or stocks,
            diversifying your portfolio is key to reducing risk and improving
            long-term returns. In this post, we'll explore how to diversify your
            investment portfolio in India, with actionable strategies, real-life
            examples, and expert tips.
          </p>
        </section>

        {/* What is Portfolio Diversification? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is Portfolio Diversification?
          </h2>

          <p className="mb-2">
            <strong>Portfolio diversification</strong> means spreading your
            investments across various asset classes, sectors, and geographies
            to reduce risk. The idea is simple: different investments perform
            differently under the same economic conditions. When one asset
            underperforms, another might outperform, balancing the overall
            returns.
          </p>
        </section>

        {/* Why is Diversification Important? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Why is Diversification Important?
          </h2>

          <p className="mb-2">
            Imagine you invest your entire savings in a single company’s stock.
            If that company performs poorly or faces a crisis, your entire
            investment could be at risk. However, if you had invested in
            multiple companies across sectors like IT, pharma, and FMCG, your
            losses in one area could be offset by gains in another.
          </p>
        </section>

        {/* Benefits of Diversification: */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Benefits of Diversification:
          </h2>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>
              <strong>Risk Reduction</strong>: Minimizes exposure to one type of
              asset or market.
            </li>
            <li>
              <strong>Stable Returns</strong>: Reduces volatility in your
              portfolio.
            </li>
            <li>
              <strong>Capital Preservation</strong>: Protects your wealth from
              market downturns.
            </li>
            <li>
              <strong>Long-Term Growth</strong>: Enhances your chance of
              consistent, compounded returns.
            </li>
            <li>
              <strong>Flexibility</strong>: Allows you to adjust your portfolio
              based on changing market conditions and personal financial goals.
            </li>
          </ul>
        </section>

        {/* How to Diversify Your Investment Portfolio in India */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            How to Diversify Your Investment Portfolio in India
          </h2>

          <p className="mb-2">
            Here’s a practical approach to diversifying your investments in the
            Indian market:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-2">
                1. Invest Across Different Asset Classes
              </h3>
              <p className="mb-2">
                Each asset class reacts differently to economic events. Here's
                how you can spread your investments:
              </p>
              <Table columns={columns} data={data} />
              <p className="my-2">
                <strong>Example</strong>: Suppose you have ₹10,00,000 to invest.
                Instead of putting the entire amount into mutual funds, you
                could allocate ₹4,00,000 into equity mutual funds, ₹3,00,000
                into fixed deposits or PPF, ₹1,00,000 in SGBs, ₹1,00,000 in
                REITs, and ₹1,00,000 in liquid funds.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-2">
                2. Diversify Within Asset Classes
              </h3>

              <h3 className="text-base sm:text-base md:text-lg font-semibold mb-2">
                a. Equity Diversification:
              </h3>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>
                  <strong>Across Sectors</strong>: Invest in IT, banking,
                  pharma, FMCG, energy, etc.
                </li>
                <li>
                  <strong>Across Market Caps</strong>: Large-cap, mid-cap, and
                  small-cap stocks or mutual funds.
                </li>
                <li>
                  <strong>Active vs Passive</strong>: Combine actively managed
                  mutual funds with index funds and ETFs.
                </li>
              </ul>

              <h3 className="text-base sm:text-base md:text-lg font-semibold mb-2">
                b. Debt Diversification:
              </h3>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>
                  Combine long-term (PPF, bonds) and short-term (liquid/debt
                  mutual funds) instruments.
                </li>
                <li>
                  Include both government-backed (NSC, SGB) and private sector
                  (corporate bonds) options.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-2">
                3. Geographic Diversification
              </h3>
              <p className="mb-2">
                Most Indian investors ignore international exposure. Investing
                in <strong>global mutual funds</strong> or{" "}
                <strong>US ETFs</strong> (via Indian platforms) can protect your
                portfolio against domestic downturns.
              </p>

              <p className="mb-2">
                <strong>Example</strong>: During 2020–21, while Indian markets
                were recovering from COVID-19, tech-heavy US indices like NASDAQ
                delivered strong returns. Having some exposure to such markets
                would have balanced losses.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-2">
                4. Rebalance Regularly
              </h3>
              <p className="mb-2">
                Diversification isn't a one-time task. Your asset allocation can
                change due to market fluctuations. Review and{" "}
                <strong>rebalance your portfolio annually</strong> to maintain
                your ideal mix.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes to Avoid While Diversifying */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Common Mistakes to Avoid While Diversifying
          </h2>

          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>
              <strong>Over-diversification</strong>: Spreading too thin can
              dilute returns. <strong>Focus on quality over quantity</strong>.
            </li>
            <li>
              <strong>Ignoring Costs</strong>: High fees can eat into returns.
              Choose low-cost index funds or ETFs where possible.
            </li>
            <li>
              <strong>Neglecting Risk Profile</strong>: Always align
              diversification with your age, goals, and risk tolerance.
            </li>

            <li>
              <strong>Chasing Trends</strong>: Avoid jumping into hot sectors
              without research. Stick to your long-term strategy.
            </li>
            <li>
              <strong>Lack of Research</strong>: Diversification should be based
              on informed decisions, not just random choices. Use tools like
              investment calculators to analyze potential returns.
            </li>
          </ul>
        </section>

        {/* Tools to Help You Diversify */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Tools to Help You Diversify
          </h2>

          <p className="mb-2">
            An investment calculator on your website can be a powerful tool to
            help users diversify:
          </p>

          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>
              <strong>Asset Allocation Calculator</strong>: Helps users
              visualize their current
            </li>
            <li>
              <strong>Portfolio Diversification Tool</strong>: Allows users to
              input their investments and see how diversified they are across
              asset classes and sectors.
            </li>
            <li>
              <strong>Risk Assessment Tool</strong>: Evaluates the risk level of
              a user's portfolio and suggests adjustments for better
              diversification.
            </li>
            <li>
              <strong>Performance Tracking</strong>: Enables users to track the
              performance of their diversified portfolio over time, helping them
              make informed decisions.
            </li>
            <li>
              <strong>Educational Resources</strong>: Provide articles, videos,
              and guides on diversification strategies, asset classes, and
              market trends.
            </li>
          </ul>
        </section>

        {/* Sample Diversified Portfolios Based on Risk Profiles */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Sample Diversified Portfolios Based on Risk Profiles
          </h2>

          <Table columns={columns2} data={data2} />
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            A well-diversified portfolio is your shield against market
            uncertainties. It enables you to invest smartly while balancing risk
            and reward. As an Indian investor, you have a wide range of
            financial instruments — from mutual funds and stocks to gold, PPF,
            and REITs. The key is to choose the right mix and periodically
            review your strategy.
          </p>
        </section>
      </div>
    </BlogLayout>
  );
};

export default DiversifyPortfolio;
