import React from "react";
import Table from "../../consts/Table";
import BlogLayout from "../../consts/BlogLayout";
import img from "../../assets/icons/blogs/stocketf.jpeg";

const StockEtfMfBond = () => {
  const columns = [
    { key: "feature", header: "Feature" },
    { key: "stocks", header: "Stocks" },
    { key: "etfs", header: "ETFs" },
    { key: "mutualFunds", header: "Mutual Funds" },
    { key: "bonds", header: "Bonds" },
  ];

  const data = [
    {
      feature: "Ownership",
      stocks: "Direct equity ownership",
      etfs: "Indirect ownership through a pooled fund",
      mutualFunds: "Indirect ownership via fund units",
      bonds: "Lending to issuer (no ownership)",
    },
    {
      feature: "Diversification",
      stocks: "Low (depends on individual stock)",
      etfs: "High (basket of securities)",
      mutualFunds: "High (professionally diversified)",
      bonds: "Moderate to High (varies by bond type)",
    },
    {
      feature: "Management",
      stocks: "Self-directed",
      etfs: "Passive or active fund-managed",
      mutualFunds: "Actively managed by professionals",
      bonds:
        "Passive – no active management; follows fixed terms set by issuer",
    },
    {
      feature: "Risk Level",
      stocks: "High (volatile and market-sensitive)",
      etfs: "Moderate (diversification reduces risk)",
      mutualFunds: "Moderate (managed risk exposure)",
      bonds: "Low to Moderate (credit and interest rate risks)",
    },
    {
      feature: "Liquidity",
      stocks: "High (traded in real-time)",
      etfs: "High (traded like stocks on exchanges)",
      mutualFunds: "Medium (redeemable at NAV once daily)",
      bonds: "Medium (depends on type and market conditions)",
    },
    {
      feature: "Income",
      stocks: "Dividends (not guaranteed)",
      etfs: "Dividends or interest (if applicable)",
      mutualFunds: "Dividends or capital gains (if distributed)",
      bonds: "Fixed interest (coupon payments)",
    },
    {
      feature: "Cost/Fees",
      stocks: "Low (may include brokerage fees)",
      etfs: "Low (expense ratios apply)",
      mutualFunds: "Medium to High (management fees, exit loads)",
      bonds: "Low to Medium (brokerage or fund fees)",
    },
  ];

  return (
    <BlogLayout
      title="What Are Stocks, ETFs, Mutual Funds, and Bonds? | A Beginner’s Guide
          to Investing in India"
      author="Your Name"
      role="Financial Advisor"
      date="May 26, 2025"
      readTime="10 min read"
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
            If you're just starting your investment journey or using an
            investment calculator in India to plan your finances, you’ve
            probably come across terms like{" "}
            <strong>stocks, ETFs, mutual funds, and bonds</strong>. These are
            the core building blocks of most investment portfolios.
            Understanding what each one is, how they work, and when to use them
            can make a huge difference in your financial strategy.
          </p>
        </section>

        {/* What is a Stock? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is a Stock?
          </h2>

          <p className="mb-2 md:mb-4">
            A <strong>stock</strong> represents a share in the ownership of a
            company. When you buy a stock, you become a partial owner (also
            called a shareholder) of that company. This ownership may entitle
            you to a share of the company’s assets and earnings, typically
            through capital appreciation and dividends.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Example:
          </h3>
          <p className="mb-2 md:mb-4">
            If you buy 10 shares of Reliance Industries at ₹2,500 per share, you
            invest ₹25,000. If the stock price increases to ₹3,000, your
            investment becomes ₹30,000, giving you a capital gain of ₹5,000.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Key Features:
          </h3>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>High potential return, but with high risk</li>
            <li>Prices can be volatile</li>
            <li>
              Stocks are traded on exchanges like the NSE (National Stock
              Exchange) and BSE (Bombay Stock Exchange)
            </li>
            <li>Ideal for long-term growth investors</li>
          </ul>
        </section>

        {/* What is an ETF? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is an ETF (Exchange-Traded Fund)?
          </h2>

          <p className="mb-2 md:mb-4">
            An <strong>ETF</strong> is a basket of securities—such as stocks or
            bonds—which can be bought or sold through a brokerage just like
            individual stocks. ETFs in India typically track the performance of
            a specific index like the Nifty 50 or Sensex, or sectors such as
            banking or IT.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Example:
          </h3>
          <p className="mb-2 md:mb-4">
            Nippon India Nifty 50 ETF mirrors the performance of the Nifty 50
            index. When the Nifty rises, so does the value of the ETF, and vice
            versa.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Key Features:
          </h3>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Diversification in one purchase</li>
            <li>Traded like stocks throughout the day</li>
            <li>Lower fees compared to mutual funds</li>
            <li>Potential returns depend on market performance</li>
            <li>Suitable for medium- to long-term investors</li>
            <li>Transparent and tax-efficient</li>
          </ul>
        </section>

        {/* What is a Mutual Fund? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is a Mutual Fund?
          </h2>

          <p className="mb-2 md:mb-4">
            A <strong>mutual fund</strong> pools money from many investors to
            invest in a diversified portfolio of stocks, bonds, or other
            securities. These funds are managed by professional portfolio
            managers who decide which assets to buy or sell and are regulated by
            SEBI (Securities and Exchange Board of India).
          </p>

          <p className="mb-2 md:mb-4">
            Actively managed funds usually have higher expense ratios since fund
            managers actively select investments. In contrast, passive funds,
            such as index funds, aim to replicate a market index and come with
            lower costs.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Example:
          </h3>

          <p className="mb-2 md:mb-4">
            If you invest ₹10,000 in Axis Bluechip Fund, your money is combined
            with that of other investors and invested in large-cap stocks. The
            value of your units will fluctuate based on the performance of these
            stocks.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Key Features:
          </h3>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Actively or passively managed</li>
            <li>Bought/sold at end-of-day price</li>
            <li>Higher fees than ETFs (especially actively managed ones)</li>
            <li>Good for hands-off investors</li>
          </ul>
        </section>

        {/* What is a Bond? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is a Bond?
          </h2>

          <p className="mb-2 md:mb-4">
            A <strong>bond</strong> represents a loan you provide to a company
            or government in return for periodic interest payments and the
            repayment of principal at maturity. Bonds are considered
            fixed-income securities because they provide predictable returns in
            the form of interest payments, making them suitable for conservative
            investors.
          </p>

          <p className="mb-2 md:mb-4">
            In India, government bonds can be bought via RBI Retail Direct or
            through brokers on the stock exchange.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Example:
          </h3>

          <p className="mb-2 md:mb-4">
            Suppose the RBI issues a 10-year government bond with a 7% annual
            interest rate. If you invest ₹1 lakh, you’ll receive ₹7,000 every
            year and the ₹1 lakh principal after 10 years.
          </p>

          <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">
            Key Features:
          </h3>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Generally lower risk than stocks</li>
            <li>Provide regular income</li>
            <li>Used to balance risk in a portfolio</li>
            <li>Can lose value if interest rates rise</li>
          </ul>
        </section>

        {/* Summary Table */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Summary Table
          </h2>

          <Table columns={columns} data={data} />
        </section>

        {/* Final Thoughts: Which One Should You Choose? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Final Thoughts: Which One Should You Choose?
          </h2>
          <p className="mb-2">
            Whether you're a new investor or looking to diversify your
            portfolio, understanding the difference between stocks, ETFs, mutual
            funds, and bonds is essential. Each of these investment options
            serves a unique role in a well-balanced financial plan. If you're
            aiming for long-term growth and are comfortable with risk, stocks or
            ETFs might be a good fit. If you prefer a more hands-off approach,
            mutual funds managed by professionals can be a better choice. If
            your goal is stable income and capital preservation, bonds are your
            go-to.
          </p>
          <p className="mb-2">
            You don’t need to stick to just one investment type. In fact, many
            successful investors in India build diversified portfolios that
            include a mix of stocks, mutual funds, ETFs, and bonds to balance
            risk and return.
          </p>
        </section>
      </div>
    </BlogLayout>
  );
};

export default StockEtfMfBond;
