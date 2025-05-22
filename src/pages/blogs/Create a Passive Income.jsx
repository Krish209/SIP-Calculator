import React from "react";
import img from "../../assets/icons/sip-lumpsum.jpeg";
import Table from "../../consts/Table";

const CreatePassiveIncome = () => {
  const columns = [
    { key: "investmentOption", header: "Investment Option" },
    { key: "riskLevel", header: "Risk Level" },
    { key: "returnType", header: "Return Type" },
    { key: "expectedReturn", header: "Expected Annual Return" },
    { key: "liquidity", header: "Liquidity" },
    { key: "taxation", header: "Taxation" },
  ];

  const data = [
    {
      investmentOption: "Dividend Stocks",
      riskLevel: "Medium",
      returnType: "Dividends + Growth",
      expectedReturn: "8-15%",
      liquidity: "High",
      taxation: "Taxed as per income slab",
    },
    {
      investmentOption: "Mutual Funds (SWP)",
      riskLevel: "Medium",
      returnType: "Capital + Withdrawal",
      expectedReturn: "6-12%",
      liquidity: "Moderate",
      taxation: "LTCG after 1 year (10%)",
    },
    {
      investmentOption: "Fixed Deposits",
      riskLevel: "Low",
      returnType: "Fixed Interest",
      expectedReturn: "5-7%",
      liquidity: "Medium",
      taxation: "Interest taxed as income",
    },
    {
      investmentOption: "Real Estate (Rental)",
      riskLevel: "Medium",
      returnType: "Monthly Rent",
      expectedReturn: "3-8%",
      liquidity: "Low",
      taxation: "Rental income taxed",
    },
    {
      investmentOption: "P2P Lending",
      riskLevel: "High",
      returnType: "Interest Income",
      expectedReturn: "10-16%",
      liquidity: "Medium",
      taxation: "Taxed as income",
    },
    {
      investmentOption: "Bonds (Tax-Free)",
      riskLevel: "Low",
      returnType: "Interest (Tax-Free)",
      expectedReturn: "5-7%",
      liquidity: "Medium",
      taxation: "No tax on specific bonds",
    },
  ];

  const columns2 = [
    { key: "investmentOption", header: "Investment Option" },
    { key: "monthlyAmount", header: "Monthly Amount" },
    { key: "purpose", header: "Purpose" },
    { key: "expectedReturn", header: "Expected Return" },
  ];

  const data2 = [
    {
      investmentOption: "Mutual Funds (SWP)",
      monthlyAmount: "₹10,000",
      purpose: "Long-term income",
      expectedReturn: "10-12%",
    },
    {
      investmentOption: "Fixed Deposits",
      monthlyAmount: "₹5,000",
      purpose: "Stability & fixed return",
      expectedReturn: "6-7%",
    },
    {
      investmentOption: "Dividend Stocks",
      monthlyAmount: "₹5,000",
      purpose: "Growth + dividends",
      expectedReturn: "8-15%",
    },
    {
      investmentOption: "P2P Lending",
      monthlyAmount: "₹3,000",
      purpose: "High-risk, high return",
      expectedReturn: "12-16%",
    },
    {
      investmentOption: "Bonds (Tax-Free)",
      monthlyAmount: "₹2,000",
      purpose: "Tax-efficient safety",
      expectedReturn: "5-7%",
    },
  ];

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          How to Create a Passive Income with Investments: A Complete Guide for
          Indians
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
            In today’s fast-paced world, creating passive income is no longer
            just a financial aspiration—it has become a necessity for achieving
            long-term financial freedom. Whether you're planning for early
            retirement, aiming to supplement your current income, or looking to
            secure your future, building a steady stream of passive income
            through strategic investments can help you reach your goals.
          </p>
          <p className="mb-2">
            In today’s fast-paced world, creating passive income is no longer
            just a financial aspiration—it has become a necessity for achieving
            long-term financial freedom. Whether you're planning for early
            retirement, aiming to supplement your current income, or looking to
            secure your future, building a steady stream of passive income
            through strategic investments can help you reach your goals.
          </p>
        </section>

        {/* What is Passive Income? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            What is Passive Income?
          </h2>

          <p className="mb-2">
            Passive income is the money you earn with little to no daily effort.
            Unlike active income—where you trade your time for money (like a job
            or business)—passive income continues to generate even while you're
            asleep, traveling, or pursuing hobbies.
          </p>
          <p className="mb-2">
            Common sources of passive income include rental properties,
            dividends from stocks, interest from savings accounts, and income
            from online businesses. The key to building a successful passive
            income stream is to invest wisely and choose the right investment
            vehicles that align with your financial goals.
          </p>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Dividends from stocks</li>
            <li>Interest from fixed deposits or bonds</li>
            <li>Rental income from real estate</li>
            <li>Mutual fund returns (especially SWPs)</li>
            <li>Royalties or online digital products</li>
          </ul>
        </section>

        {/* Why Should You Create Passive Income? */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Why Should You Create Passive Income?
          </h2>

          <p className="mb-2">
            Creating multiple streams of income shields you against
            uncertainties like job loss or economic downturns. Passive income
            allows:
          </p>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Financial independence</li>
            <li>Early retirement</li>
            <li>Wealth creation over time</li>
            <li>Better work-life balance</li>
          </ul>
          <p className="mb-2">
            Moreover, thanks to India’s evolving financial ecosystem—growing
            fintech, ease of investing, and better financial literacy—anyone can
            begin creating passive income with as little as ₹500.
          </p>
        </section>

        {/* Best Investment Options in India for Passive Income */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Best Investment Options in India for Passive Income
          </h2>

          <p className="mb-2">
            Here’s a comparison table of popular investment options suitable for
            generating passive income in India:
          </p>

          <Table columns={columns} data={data} />

          <p className="my-2">
            Let’s now explore how you can get started on each and create a
            passive income strategy.
          </p>
        </section>

        {/* Why Risk Is Inevitable in Investing */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Step-by-Step: How to Create Passive Income with Investments
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                1. Assess Your Financial Situation
              </h3>
              <p className="mb-2">Start by understanding:</p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Your current income and expenses</li>
                <li>Your savings and investments</li>
                <li>Your financial goals (short-term and long-term)</li>
                <li>Your risk tolerance</li>
                <li>Investment time horizon</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                2. Set Clear Financial Goals
              </h3>
              <p className="mb-2">Are you investing to:</p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Replace your salary in 10 years?</li>
                <li>Earn ₹10,000/month in passive income?</li>
                <li>Retire by 50?</li>
              </ul>

              <p className="mb-2">
                Setting clear goals helps you choose the right investment
                vehicles and strategies. For example, if your goal is to retire
                early, you might focus on high-growth stocks or real estate. If
                you want to earn a steady monthly income, dividend stocks or
                mutual funds with Systematic Withdrawal Plans (SWPs) may be more
                suitable.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                3. Start with Low-Risk Options
              </h3>
              <p className="mb-2">
                If you’re new to investing, begin with low-risk, fixed-return
                options such as:
              </p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Fixed Deposits</li>
                <li>Post Office Monthly Income Scheme (POMIS)</li>
                <li>Government Bonds</li>
              </ul>

              <p className="mb-2">
                If you invest ₹5,00,000 in POMIS at 7.4%, you can earn
                ₹3,083/month as passive income.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                4. Diversify with Mutual Funds Using SWP
              </h3>
              <p className="mb-2">
                A Systematic Withdrawal Plan (SWP) in mutual funds allows you to
                invest a lump sum and withdraw a fixed amount monthly.
              </p>

              <p className="mb-2">
                <strong>Example</strong>: Invest ₹10,00,000 in a balanced mutual
                fund. Set an SWP of ₹7,000/month. Your principal stays invested
                while your money grows and provides income.
              </p>

              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Tax-efficient</li>
                <li>Regular monthly income</li>
                <li>Professional fund management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                5. Invest in Dividend Stocks
              </h3>
              <p className="mb-2">
                Blue-chip Indian companies like HDFC Bank, Infosys, or ITC
                regularly pay dividends. Holding such stocks can earn you
                quarterly income while your capital appreciates.
              </p>

              <p className="mb-2">
                Focus on companies with a stable dividend history and strong
                fundamentals. Track the dividend yield metric—it tells you how
                much income you earn relative to the stock price.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                6. Explore Real Estate for Rental Income
              </h3>
              <p className="mb-2">
                If you have surplus funds, consider buying a flat or commercial
                property in growing cities like Hyderabad, Pune, or Ahmedabad.
              </p>

              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Residential rent yield: ~2-4%</li>
                <li>Commercial rent yield: ~5-8%</li>
              </ul>

              <p className="mb-2">
                <strong>Example</strong>: A 2BHK apartment bought for ₹50 lakhs
                could fetch ₹15,000–₹25,000/month depending on location.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                7. Try Peer-to-Peer (P2P) Lending
              </h3>
              <p className="mb-2">
                Platforms like Faircent and LendenClub let you lend money to
                borrowers and earn interest (10-16%). Start with ₹5,000 per
                borrower to spread your risk.
              </p>

              <p className="mb-2">
                High returns, but also higher risk. Don’t allocate more than
                5-10% of your portfolio.
              </p>

              <p className="mb-2">
                <strong>Example</strong>: If you lend ₹1 lakh across 20 borrowers at 12%
                interest, you could earn ₹12,000/year.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                8. Automate and Monitor
              </h3>
              <p className="mb-2">Automation is key to passive income. Use:</p>

              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Auto-debit to invest monthly</li>
                <li>SWP to withdraw systematically</li>
                <li>Alerts to track dividends or maturity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                9. Reinvest Your Income
              </h3>
              <p className="mb-2">
                The power of compounding works best when you reinvest your
                earnings. For example, if you earn ₹5,000/month from
                investments, reinvesting it could grow your portfolio 2–3x over
                10 years.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                10. Stay Informed and Optimized
              </h3>
              <p className="mb-2">
                Markets and interest rates change. Periodically:
              </p>

              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>Review returns</li>
                <li>Adjust asset allocation</li>
                <li>Check for better tax-saving instruments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Passive Income Portfolio (Monthly Budget: ₹25,000) */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Example Passive Income Portfolio (Monthly Budget: ₹25,000)
          </h2>

          <Table columns={columns2} data={data2} />
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            Creating passive income with investments in India is not just for
            the wealthy. With disciplined investing, smart planning, and tools
            like your investment calculator app, anyone can build a reliable
            stream of income over time.
          </p>
          <p className="mb-2">
            Whether you’re a salaried employee, freelancer, homemaker, or
            entrepreneur, the path to financial freedom is within reach—start
            today, invest smartly, and let your money work for you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CreatePassiveIncome;
