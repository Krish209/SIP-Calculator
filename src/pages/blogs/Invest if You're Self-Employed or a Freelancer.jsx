import React from "react";
import img from "../../assets/icons/sip-lumpsum.jpeg";
import Table from "../../consts/Table";

const SelfEmployedOrFreelancer = () => {
  const columns = [
    { key: "goal", header: "Goal" },
    { key: "recommendedOptions", header: "Recommended Investment Options" },
    { key: "idealTimeFrame", header: "Ideal Time Frame" },
  ];

  const data = [
    {
      goal: "Emergency Fund",
      recommendedOptions: "Liquid funds, high-interest savings accounts",
      idealTimeFrame: "Immediate (0–6 months)",
    },
    {
      goal: "Retirement Planning",
      recommendedOptions: "NPS, PPF, Mutual Funds (SIPs)",
      idealTimeFrame: "Long-term (10–30 years)",
    },
    {
      goal: "Tax Saving",
      recommendedOptions: "ELSS, NPS, PPF, Tax-saving FDs",
      idealTimeFrame: "Annual",
    },
    {
      goal: "Health and Life Cover",
      recommendedOptions: "Health Insurance, Term Insurance",
      idealTimeFrame: "Ongoing",
    },
    {
      goal: "Wealth Building",
      recommendedOptions: "Equity mutual funds, stocks, gold ETFs",
      idealTimeFrame: "Medium to Long term",
    },
  ];

  const columns2 = [
    { key: "investmentInstrument", header: "Investment Instrument" },
    { key: "taxBenefit", header: "Tax Benefit" },
    { key: "lockInPeriod", header: "Lock-in Period" },
    { key: "riskLevel", header: "Risk Level" },
    { key: "notes", header: "Notes" },
  ];

  const data2 = [
    {
      investmentInstrument: "PPF",
      taxBenefit: "Up to ₹1.5L under 80C",
      lockInPeriod: "15 years",
      riskLevel: "Low",
      notes: "Government backed, safe",
    },
    {
      investmentInstrument: "ELSS",
      taxBenefit: "Up to ₹1.5L under 80C",
      lockInPeriod: "3 years",
      riskLevel: "High",
      notes: "Market-linked returns",
    },
    {
      investmentInstrument: "NPS (Tier I)",
      taxBenefit: "₹1.5L under 80C + ₹50K under 80CCD(1B)",
      lockInPeriod: "Until retirement",
      riskLevel: "Moderate",
      notes: "Ideal for retirement planning",
    },
    {
      investmentInstrument: "Tax Saving FD",
      taxBenefit: "Up to ₹1.5L under 80C",
      lockInPeriod: "5 years",
      riskLevel: "Low",
      notes: "Fixed returns, taxable",
    },
  ];

  const columns3 = [
    { key: "investmentOption", header: "Investment Option" },
    { key: "pros", header: "Pros" },
    { key: "cons", header: "Cons" },
    { key: "idealFor", header: "Ideal For" },
  ];

  const data3 = [
    {
      investmentOption: "Mutual Funds (SIP)",
      pros: "Diversified, inflation-beating returns",
      cons: "Market volatility",
      idealFor: "Wealth creation, long term",
    },
    {
      investmentOption: "PPF",
      pros: "Safe, tax-free",
      cons: "Long lock-in period",
      idealFor: "Conservative retirement plan",
    },
    {
      investmentOption: "NPS",
      pros: "Pension benefit, extra tax savings",
      cons: "Limited liquidity",
      idealFor: "Retirement",
    },
    {
      investmentOption: "ELSS",
      pros: "Tax-saving + equity exposure",
      cons: "Lock-in of 3 years",
      idealFor: "Aggressive tax savers",
    },
    {
      investmentOption: "Liquid Funds",
      pros: "High liquidity, better than savings account",
      cons: "Lower returns",
      idealFor: "Emergency fund",
    },
    {
      investmentOption: "Gold ETFs / SGBs",
      pros: "Hedge against inflation",
      cons: "No regular income",
      idealFor: "Portfolio diversification",
    },
    {
      investmentOption: "REITs",
      pros: "Real estate exposure with liquidity",
      cons: "Market dependent",
      idealFor: "Passive income source",
    },
  ];

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          How to Invest if You're Self-Employed or a Freelancer in India
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
            Freelancing and self-employment in India have seen a massive rise in
            recent years. Whether you’re a graphic designer, content writer,
            digital marketer, or an independent consultant, one thing is certain
            — financial planning is your own responsibility. Without the cushion
            of employer-provided benefits like EPF, gratuity, or health
            insurance, it becomes essential to plan your investments wisely.
          </p>
        </section>

        {/* Why Investment Planning is Crucial for Freelancers and the Self-Employed */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Why Investment Planning is Crucial for Freelancers and the
            Self-Employed
          </h2>

          <p className="mb-2">
            Being self-employed gives you flexibility, but it also comes with
            financial challenges:
          </p>

          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>Irregular income</li>
            <li>Tax complexities</li>
            <li>Unpredictable expenses</li>
            <li>No employer-backed retirement benefits</li>
            <li>Long-term financial goals like buying a home or retirement</li>
          </ul>

          <p className="mb-2">
            That’s why you need a{" "}
            <strong>structured investment strategy</strong> to ensure long-term
            financial security.
          </p>
        </section>

        {/* Key Financial Goals You Should Plan For */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Key Financial Goals You Should Plan For
          </h2>
          <Table columns={columns} data={data} />
        </section>

        {/* Step-by-Step Investment Strategy for Freelancers in India */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Step-by-Step Investment Strategy for Freelancers in India
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                1. Build an Emergency Fund First
              </h3>
              <p className="mb-2">
                Before you start investing, create an emergency fund that covers
                <strong>6–12 months</strong> of your essential expenses,
                including rent, EMIs, groceries, and medical costs.. This fund
                should be easily accessible and kept in a liquid mutual fund or
                a sweep-in fixed deposit (FD).
              </p>
              <p className="mb-2">
                <strong>Example</strong>: If your average monthly expenses are
                ₹40,000, aim for an emergency corpus of ₹2.5–₹5 lakh in a liquid
                mutual fund or sweep-in FD.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                2. Start SIPs in Mutual Funds
              </h3>

              <p className="mb-2">
                SIPs (Systematic Investment Plans) are ideal for freelancers.
                Even with irregular income, small monthly investments compound
                significantly over time.
              </p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>
                  <strong>Consider Index Funds</strong>: They have lower expense
                  ratios and are tax-efficient.
                </li>
                <li>Start with a flexi-SIP option if available.</li>
                <li>
                  Diversify into equity, hybrid, and debt funds based on your
                  risk profile.
                </li>
                <li>
                  <strong>Use SIP Calculator</strong>: Estimate how much you
                  need to invest monthly to reach your financial goals.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                3. Use Tax-Advantaged Investment Tools
              </h3>
              <p className="mb-2">
                Freelancers are eligible for several tax-saving options under
                <strong>Section 80C and 80CCD</strong>:
              </p>

              <Table columns={columns2} data={data2} />

              <p className="my-2">
                <strong>Example</strong>: A freelancer earning ₹10 lakhs can
                reduce their taxable income to ₹7 lakhs by investing in ELSS
                (₹1.5L) and NPS (₹1.5L including ₹50K under 80CCD(1B)).
              </p>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                4. Retirement Planning Without EPF
              </h3>

              <p className="mb-2">
                As a freelancer, you must plan your own retirement. Begin
                investing early in:
              </p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>
                  <strong>National Pension System (NPS)</strong> for regular
                  pension after retirement.
                </li>
                <li>
                  <strong>Equity mutual funds</strong> via SIPs for long-term
                  growth.
                </li>
                <li>
                  <strong>PPF</strong> as a safe, tax-free investment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[17px] sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                5. Get Insurance: Life + Health
              </h3>
              <p className="mb-2">
                Investing is pointless if your financial future can be derailed
                by a hospital bill.
              </p>
              <ul className="list-disc space-y-1 pl-6 mb-2">
                <li>
                  <strong>Health Insurance</strong>: Get a comprehensive health
                  insurance policy to cover medical expenses.
                </li>
                <li>
                  <strong>Term Insurance</strong>: A must-have for freelancers
                  with dependents. It provides financial security in case of
                  untimely demise.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Invest with Irregular Income */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            How to Invest with Irregular Income
          </h2>
          <p className="mb-2">
            Since freelancers often face uneven cash flow, use these strategies:
          </p>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>
              <strong>Flexible SIPs or manual monthly investments</strong> based
              on actual inflow.
            </li>
            <li>
              <strong>Park surplus in liquid funds</strong> and gradually shift
              to mutual funds or NPS.
            </li>
            <li>
              <strong>Maintain a Buffer</strong>Keep 1–2 months of expenses in a
              liquid fund to manage cash flow.
            </li>
            <li>
              <strong>Review Quarterly</strong>Adjust your SIP amounts based on
              your income and expenses.
            </li>
            <li>
              <strong>Use a Financial Advisor</strong>Consider consulting a
              financial advisor for personalized investment strategies.
            </li>
          </ul>
        </section>

        {/* Best Investment Options for Freelancers in India */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Best Investment Options for Freelancers in India
          </h2>
          <Table columns={columns3} data={data3} />
          <p className="my-2">
            Each investment option has its pros and cons. Choose based on your
            financial goals, risk appetite, and time horizon.
          </p>
        </section>

        {/* Mistakes to Avoid */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Mistakes to Avoid
          </h2>
          <ul className="list-disc space-y-1 pl-6 mb-2">
            <li>
              <strong>Not Having an Emergency Fund</strong>: This is the first
              step before any investment.
            </li>
            <li>
              <strong>Ignoring Tax Implications</strong>: Always consider how
              taxes will affect your returns.
            </li>
            <li>
              <strong>Overlooking Insurance</strong>: Health and life insurance
              are crucial for financial security.
            </li>
            <li>
              <strong>Chasing Returns</strong>: Don’t invest based on past
              performance; focus on your financial goals.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            Freelancing offers independence, but it comes with the
            responsibility of planning your own financial future. By building a
            diversified investment portfolio, saving taxes, and maintaining
            liquidity, you can achieve financial freedom even without a fixed
            salary.
          </p>
          <p className="mb-2">
            Whether you earn ₹50,000 or ₹5 lakhs a month, what matters most is
            how you manage, invest, and grow that money over time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SelfEmployedOrFreelancer;
