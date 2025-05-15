import React from "react";

const StepUpSIPInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold lg:text-center mb-6 text-blue-600">
        Step-Up SIP - A Comprehensive Guide
      </h1>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is a Step-Up SIP?
        </h2>
        <p className="mb-2">
          A <strong>Step-Up SIP</strong> (also called a <em>Top-Up SIP</em>) is
          a flexible investment strategy in mutual funds where you can
          automatically increase your SIP contribution at fixed intervals (e.g., yearly).
          Unlike a regular SIP where the investment amount stays constant, a
          Step-Up SIP allows you to grow your investment periodically—usually
          every year.
        </p>
        <p className="mb-2">
          This strategy is ideal for investors whose income is expected to rise
          over time (e.g., salaried individuals), enabling them to invest more
          and build wealth faster.
        </p>
      </section>

      {/* Key Features */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Auto-increase SIP amount at set intervals (e.g., ₹500 every year)
          </li>
          <li>Start with a minimum of ₹500 per month</li>
          <li>Choose custom increment and frequency (yearly, half-yearly)</li>
          <li>Available in most mutual fund platforms and apps</li>
          <li>Can be modified or stopped anytime</li>
          <li>Returns depend on chosen mutual fund scheme</li>
        </ul>
      </section>

      {/* How it Works */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does Step-Up SIP Work?
        </h2>
        <p className="mb-2">
          When you set up a Step-Up SIP, you choose an initial investment amount
          and a fixed increment. For example, if you start with a SIP of ₹2,000
          per month and decide to increase it by ₹500 every year, your SIP
          contributions will look like this:
        </p>
        <p className="mb-2">
          Year 1: ₹2,000/month <br />
          Year 2: ₹2,500/month <br />
          Year 3: ₹3,000/month <br />
          …and so on.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md mb-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Step-Up SIP Return Formula:
          </h3>
          <p className="mb-2 md:mb-4">
            The formula used to calculate Step-Up SIP returns is:
          </p>
          <code className="font-bold">
            A = P × [(1 + r)^n - 1] / (r/n) + S × [(1 + r)^n - 1] / (r/n)
          </code>
          <p className="mt-2">
            Where:
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>A</strong> = Final Amount (after interest)
              </li>
              <li>
                <strong>P</strong> = Monthly Investment
              </li>
              <li>
                <strong>r</strong> = Monthly Interest Rate (Annual Interest Rate
                ÷ 12)
              </li>
              <li>
                <strong>n</strong> = Total Number of Months (Investment Period
                in Years × 12)
              </li>
              <li>
                <strong>S</strong> = Increase in investment amount
              </li>
            </ul>
          </p>
        </div>

        <p className="mb-2">
          Let's say you invest ₹5,000 every month in a mutual fund with an
          expected annual return of 12%. At the end of 10 years (120 months),
          total value would be approximately ₹10,55,000. This includes ₹6,00,000
          as your principal (monthly contributions) and ₹4,55,000 as the return
          on investment generated through compounding.
        </p>
        <p className="mb-2">
          Now, if you increase your SIP by ₹500 every year for the same scheme,
          then your total corpus at the end of 10 years would be approximately
          ₹14,40,000. This includes ₹7,50,000 as your principal (monthly
          contributions) and ₹6,90,000 as the return on investment generated
          through compounding.
        </p>

        <div className="bg-gray-100 p-2 vs:p-4 rounded-lg mt-6">
          <table className="table-auto w-full overflow-x-auto">
            <thead>
              <tr>
                <th className="px-0.5 py-2 text-left">Details</th>
                <th className="px-0.5 py-2 text-left">SIP</th>
                <th className="px-0.5 py-2 text-left">Step-Up SIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-0.5 py-2">Starting Amount</td>
                <td className="px-0.5 py-2">₹5,000/month</td>
                <td className="px-0.5 py-2">₹5,000/month</td>
              </tr>
              <tr>
                <td className="px-0.5 py-2">Yearly Increment</td>
                <td className="px-0.5 py-2">No</td>
                <td className="px-0.5 py-2">₹500/year</td>
              </tr>
              <tr>
                <td className="px-0.5 py-2">Total Invested</td>
                <td className="px-0.5 py-2">₹6,00,000</td>
                <td className="px-0.5 py-2">₹7,50,000</td>
              </tr>
              <tr>
                <td className="px-0.5 py-2">Estimated Returns</td>
                <td className="px-0.5 py-2">₹4,55,000</td>
                <td className="px-0.5 py-2">₹6,90,000</td>
              </tr>
              <tr>
                <td className="px-0.5 py-2">Final Value</td>
                <td className="px-0.5 py-2">₹10,55,000</td>
                <td className="px-0.5 py-2">₹14,40,000</td>
              </tr>
              <tr>
                <td className="px-0.5 py-2">Return on Investment (ROI)</td>
                <td className="px-0.5 py-2">~76%</td>
                <td className="px-0.5 py-2">~92%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Benefits of Step-Up SIP
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Increased Wealth Creation:</strong> As your investment
            increases regularly, you accumulate more units over time, leading to
            higher long-term returns through the power of compounding.
          </li>
          <li>
            <strong>Income Matching:</strong> Ideal for professionals and
            salaried individuals whose incomes increase annually, allowing your
            savings to scale with your earnings.
          </li>
          <li>
            <strong>Helps Combats Inflation:</strong> A fixed SIP might fall
            short in the long run due to inflation. Step-Up SIP helps you stay
            ahead of inflation by investing more gradually.
          </li>
          <li>
            <strong>Automatic & Disciplined:</strong> You don’t need to remember
            to increase your investment—it happens automatically, helping you
            stay disciplined in your financial planning.
          </li>
          <li>
            <strong>Customizable:</strong> You can set the increment amount and
            frequency based on your financial goals and comfort level. You can
            choose both the increment amount and the frequency based on your
            preferences.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Considerations for Step-Up SIP
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Income stability:</strong> Ensure you can afford increased
            contributions in future years.
          </li>
          <li>
            <strong>Stay Consistent:</strong> Stick to your SIP investment even
            if the market goes down. Consistency is key, and it allows you to
            take advantage of market volatility through rupee-cost averaging.
          </li>
          <li>
            <strong>Investment horizon:</strong> Longer periods benefit more
            from step-ups.
          </li>
          <li>
            <strong>Goal-based planning:</strong> Use for long-term goals like
            retirement, child’s education, etc.
          </li>
          <li>
            <strong>Fund performance:</strong> Choose consistently performing
            mutual funds.
          </li>
          <li>
            <strong>Diversify Your Portfolio:</strong> By allocating funds to
            different asset classes, you reduce the risk of any single
            investment impacting your overall returns.
          </li>
        </ul>
      </section>

      {/* Pros */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Pros</h2>

        <ul className="list-disc pl-6 space-y-1">
          <li>Boosts returns with rising contributions</li>
          <li>Perfect for long-term goals like retirement or education</li>
          <li>No need to create new SIPs manually each year</li>
          <li>Fully customizable and easy to manage</li>
        </ul>
      </section>

      {/* Cons */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Cons</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Requires steady income growth</li>
          <li>May stretch your monthly budget if not planned well</li>
          <li>Returns depend on mutual fund performance (market-linked)</li>
          <li>
            May not be suitable for short-term financial goals due to market
            volatility.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who Should Invest in Step-Up SIP?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Salaried individuals expecting annual raises</li>
          <li>Young professionals starting with a modest income</li>
          <li>
            Investors planning for long-term goals like retirement, a child's
            education, or buying a home
          </li>
          <li>People who want to start small but gradually build wealth</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h2>
        <p className="mb-2">
          A Step-Up SIP is one of the smartest ways to align your investments
          with your income growth. It helps you save more efficiently over time.
          It's a flexible, disciplined, and powerful wealth-building strategy
          tailored for long-term goals like retirement, homeownership, or
          education.
        </p>
        <p className="mb-2">
          By gradually increasing your SIP contributions, you can keep pace with
          inflation and increase your wealth potential. Whether you're a
          beginner or an experienced investor, including a Step-Up SIP in your
          portfolio can significantly improve your financial future.
        </p>
      </section>
    </div>
  );
};

export default StepUpSIPInfo;
