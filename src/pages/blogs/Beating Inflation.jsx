import React from "react";
import Table from "../../consts/Table";
import img from "../../assets/icons/sip-lumpsum.jpeg";

const BeatingInflation = () => {
  const columns = [
    { key: "assetClass", header: "Asset Class" },
    { key: "allocation", header: "Suggested Allocation" },
    { key: "rationale", header: "Rationale" },
  ];

  const data = [
    {
      assetClass: "Equity Mutual Funds",
      allocation: "40%",
      rationale: "High potential returns to outpace inflation",
    },
    {
      assetClass: "TIPS or Inflation Bonds",
      allocation: "20%",
      rationale: "Guaranteed real returns above inflation",
    },
    {
      assetClass: "Gold",
      allocation: "15%",
      rationale: "Hedge against currency depreciation and economic instability",
    },
    {
      assetClass: "Real Estate / REITs",
      allocation: "15%",
      rationale: "Capital appreciation and rental income",
    },
    {
      assetClass: "Commodities",
      allocation: "10%",
      rationale: "Protection against rising prices of essential goods",
    },
  ];

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Beating Inflation: How Smart Investing Protects Your Money
        </h1>

        {/* Image Section */}
        {/* <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Investment tools"
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[500px] h-auto object-contain"
            loading="lazy"
          />
        </div> */}

        {/* Introduction */}
        <section className="my-4 md:my-6">
          <p className="mb-2">
            Inflation is a silent wealth eroder. In India, the Consumer Price
            Index (CPI) has averaged around 8.07% over the past decade . This
            means that ₹100 today will be worth only ₹91.93 in purchasing power
            a decade from now. If your investments don't outpace inflation, your
            real returns could be negative. So, how can you protect your money
            and even grow it in an inflationary environment?
          </p>
        </section>

        {/* Understanding Inflation's Impact */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Understanding Inflation's Impact
          </h2>

          <p className="mb-2">
            Inflation leads to a rise in the general price level of goods and
            services, diminishing the purchasing power of money. For instance,
            if inflation is at 6% annually, a ₹1,000 item will cost ₹1,060 the
            following year. If your investment returns don't exceed this rate,
            you're effectively losing money.
          </p>
        </section>

        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Investment Strategies to Hedge Against Inflation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                1. Equity Mutual Funds
              </h3>

              <p className="mb-2">
                Historically, equities have provided returns that outpace
                inflation. In India, equity mutual funds have offered returns
                between 12-15% over the long term . By investing in sectors with
                strong growth potential, you can achieve real returns that beat
                inflation.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                2. Treasury Inflation-Protected Securities (TIPS)
              </h3>

              <p className="mb-2">
                TIPS are government bonds that adjust their principal value with
                inflation. While primarily available in the U.S., similar
                instruments exist in other countries. They provide a guaranteed
                real return above inflation, making them a safe choice for
                conservative investors.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                3. Gold and Precious Metals
              </h3>

              <p className="mb-2">
                Gold has traditionally been a hedge against inflation. In India,
                investing in gold through Sovereign Gold Bonds or gold ETFs can
                provide protection against currency depreciation and rising
                prices.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                4. Real Estate and REITs
              </h3>

              <p className="mb-2">
                Real estate often appreciates with inflation. For those unable
                to invest directly, Real Estate Investment Trusts (REITs) offer
                a way to gain exposure to property markets. REITs have
                historically provided returns that outpace inflation, especially
                in growing urban areas.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                5. Commodities
              </h3>

              <p className="mb-2">
                Investing in commodities like oil, natural gas, and agricultural
                products can provide a hedge against inflation. These assets
                often rise in value when inflation accelerates, offering
                protection to investors.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                6. Diversified Investment Portfolio
              </h3>

              <p className="mb-2">
                A diversified portfolio that includes a mix of equities, bonds,
                real estate, and commodities can reduce risk and enhance
                returns. Regular rebalancing ensures that your investments align
                with your financial goals and risk tolerance.
              </p>
            </div>
          </div>
        </section>

        {/* Warren Buffett's Inflation Advice */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Warren Buffett's Inflation Advice
          </h2>

          <p className="mb-2">
            Warren Buffett, CEO of Berkshire Hathaway, emphasizes investing in
            oneself as the best hedge against inflation. He advises that
            personal skills and expertise are the ultimate inflation-proof
            assets, as they can command increasing wages regardless of currency
            fluctuations. Additionally, Buffett recommends investing in
            businesses with strong pricing power and low capital requirements,
            as they can maintain profitability during inflationary periods.
          </p>

          <Table columns={columns} data={data} />
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            Inflation is an inevitable economic factor, but with strategic
            investing, you can protect and grow your wealth. By diversifying
            your investments across various asset classes and focusing on those
            that historically outperform inflation, you can ensure that your
            money works for you, not against you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BeatingInflation;
