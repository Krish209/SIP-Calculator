import React from "react";

const NPSInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        National Pension System (NPS) - A Comprehensive Guide
      </h1>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is NPS?
        </h2>
        <p>
          The National Pension System (NPS) is a government-sponsored pension
          scheme that allows individuals to contribute towards their retirement
          savings during their working years. The NPS offers individuals an
          opportunity to accumulate funds for their retirement, with the option
          to manage and grow the funds based on different investment options.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How does NPS Work?
        </h2>
        <p className="mb-2">
          NPS works by allowing individuals to contribute to their retirement
          account during their working years. The contributions are invested in
          different asset classes (equity, corporate bonds, government
          securities) according to the investor's risk preference. The
          accumulated amount can be used to provide a monthly pension after the
          individual reaches the age of 60.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            NPS Formula:
          </h3>
          <p className="mb-2 md:mb-4">
            The formula to calculate NPS Corpus is:
          </p>

          <code>A = P × (1 + r/n)^(nt)</code>

          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>A</strong> = Amount of money accumulated after{" "}
              <strong>n</strong> years, including interest
            </li>
            <li>
              <strong>P</strong> = Invested amount
            </li>
            <li>
              <strong>r</strong> = Annual interest rate
            </li>
            <li>
              <strong>n</strong> = Number of times that interest is compounded
              per year
            </li>
            <li>
              <strong>t</strong> = Number of years the money is invested or
              borrowed for
            </li>
          </ul>
        </div>

        <p className="mb-2 mt-4">
          Let's take an example of <strong>Mr. Shyam</strong>, a 30-year-old
          employee working in a government sector. He decides to invest in the{" "}
          <strong>National Pension Scheme (NPS)</strong> to secure his
          retirement. Mr. Shyam will make monthly contributions of ₹5,000
          towards the scheme with expected annual return rate of 8%, which he
          plans to do until he reaches the age of 60.
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          <li>- Monthly Investment (P) = ₹5,000</li>
          <li>- Expected Annual Return Rate (r) = 8% (0.08)</li>
          <li>- Number of times interest is compounded per year (n) = 1</li>
          <li>
            - Total Number of years the money is invested (t) = 60 - 30 = 30
            years
          </li>
        </ul>

        <p className="mb-4">
          Mr. Shyam will contribute ₹5,000 every month for 30 years. His total
          contribution over the entire period will be ₹18,00,000 (₹5,000 × 12
          months × 30 years).
        </p>

        <p className="mb-4">
          Using the NPS formula, the projected corpus at retirement will be
          ₹75,01,476. This means Mr. Shyam earned ₹57,01,476 in interest over
          the investment period.
        </p>

        <p className="mb-4">
          At retirement, Mr. Shyam decides to allocate 40% of his corpus to buy
          an annuity, which will provide him with a steady monthly pension. The
          amount allocated to the annuity is ₹30,00,590, and the annuity return
          rate is 6%.
        </p>

        <p className="mb-4">
          Based on these figures, Mr. Shyam can expect an estimated monthly
          pension of ₹15,003. The remaining ₹45,00,886 can be withdrawn as a
          lump sum, tax-free.
        </p>

        <p className="mb-4">
          This ensures that Mr. Shyam will have both a lump sum to access
          immediately and a monthly pension that will help him manage his
          expenses throughout retirement.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Structure of NPS
        </h2>
        <p className="mb-2">The NPS operates on a two-tier system:</p>

        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Tier 1 Account:</strong> This is the primary account used
            for retirement savings. The contributions made in this account are
            subject to withdrawal only upon retirement or in special cases such
            as the death of the subscriber (account holder).
          </li>
          <li>
            <strong>Tier 2 Account:</strong> This is a voluntary savings account
            that offers more flexibility in terms of withdrawals. It is not
            mandatory and can be opened alongside Tier 1.
          </li>
        </ul>

        <p className="mb-2">
          You can invest as much or as little as you like, based on your
          earnings and financial goals. Each subscriber to NPS is assigned a
          unique identifier called the{" "}
          <strong>Permanent Retirement Account Number (PRAN)</strong>, which
          tracks the contributions and status of the account.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Contributions to NPS
        </h2>
        <p className="mb-2">
          NPS is open to all Indian citizens between the ages of 18 and 60. Here
          are the details on contributions:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Minimum Contribution:</strong> In Tier 1, it costs ₹500 for
            opening, and a minimum of ₹1,000 annually thereafter. For Tier 2,
            there is no minimum contribution for opening, but regular deposits
            can be made.
          </li>
          <li>
            <strong>Voluntary Contributions:</strong> NPS allows flexible
            contributions. These can be made as lump sums or on a regular basis
            depending on the subscriber’s financial situation.
          </li>
        </ul>

        <div className="bg-blue-50 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <p>
            <strong>Important Note:</strong> if minimum annual contribution not
            contributed the account will be frozen. In order to unfreeze the
            account, the customer has to pay the total of minimum contributions
            for the period of freeze, the minimum contribution for the year in
            which the account is reactivated and a penalty of Rs.100/-.
          </p>
        </div>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Investment Options in NPS
        </h2>
        <p className="mb-2">
          NPS provides subscribers with several investment options. They can
          allocate their contributions across different asset classes based on
          their risk appetite. The main asset classes are:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Equity (E):</strong> Investment in stocks, limited to 50% of
            the total corpus.
          </li>
          <li>
            <strong>Corporate Bonds (C):</strong> Investment in corporate debt
            instruments.
          </li>
          <li>
            <strong>Government Securities (G):</strong> Investment in government
            bonds.
          </li>
          <li>
            <strong>Alternative Investment Funds (AIF):</strong> Investment in
            alternative assets.
          </li>
        </ul>

        <p className="mb-2">Subscribers can choose between:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Active Choice:</strong> The subscriber decides the
            proportion of their contribution to be invested in each asset class.
          </li>
          <li>
            <strong>Auto Choice:</strong> The funds are automatically allocated
            based on the subscriber's age.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Tax Benefits of NPS
        </h2>
        <p className="mb-2">
          NPS offers various tax benefits under the Income Tax Act:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tax Deduction under Section 80C:</strong> Contributions are
            eligible for tax deduction of up to ₹1.5 lakh per financial year
            (including other eligible deductions).
          </li>
          <li>
            <strong>Additional Deduction under Section 80CCD(1B):</strong> An
            additional tax benefit of up to ₹50,000 is available over and above
            the ₹1.5 lakh limit under Section 80C.
          </li>
          <li>
            <strong>Tax Benefits for Employers (Section 80CCD(2)):</strong>{" "}
            Employers who contribute on behalf of their employees can claim tax
            deductions.
          </li>
          <li>
            <strong>Tax on Withdrawals:</strong> 60% of the corpus withdrawn at
            retirement is tax-free (lump sum withdrawal). The remaining 40% must
            be used to purchase an annuity, which is taxable based on income tax
            brackets.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Exit and Withdrawal Rules
        </h2>
        <p className="mb-2">
          NPS is primarily intended for retirement savings, but there are
          provisions for exit and withdrawal under certain conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Normal Exit:</strong> At the age of 60, a subscriber must
            use at least 40% of their NPS corpus to purchase an annuity from an
            Annuity Service Provider (ASP) that will provide a monthly pension.
            The remaining 60% of their NPS corpus can be withdrawn as a tax-free
            lump sum.
          </li>
          <li>
            <strong>Premature Exit:</strong> If a subscriber exits before 60, at
            least 80% of the accumulated pension corpus must be used to purchase
            an annuity, and the rest must be used for lumpsum withdrawal. The
            subscriber must have contributed for{" "}
            <strong>at least 10 years</strong>.
          </li>
          <li>
            <strong>Deferment:</strong> If subscriber prefer to continue
            investing in NPS after 60, you can defer your exit and withdrawal
            until the age of 75. You can choose to defer the lump sum
            withdrawal, the annuity purchase, or both.
          </li>
          <li>
            <strong>Death of Subscriber:</strong> In case of death, the entire
            accumulated corpus (100%) is paid to the nominee and there would not
            be any purchase of annuity/monthly pension.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of NPS
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Low-Cost Management:</strong> NPS has one of the lowest fund
            management costs in the industry, ensuring higher returns for
            investors.
          </li>
          <li>
            <strong>Transparency:</strong> Governed by the Pension Fund
            Regulatory and Development Authority (PFRDA), ensuring transparency
            in operations.
          </li>
          <li>
            <strong>Flexibility:</strong> NPS allows individuals to choose their
            investment mix, giving them more control over their retirement
            savings.
          </li>
          <li>
            <strong>Diversification:</strong> The scheme offers exposure to a
            wide range of asset classes, such as equity, bonds, and government
            securities, ensuring a balanced investment portfolio.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of NPS
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tax on Annuity:</strong> The annuity portion of the NPS
            withdrawal is taxable based on the subscriber’s income tax bracket.
          </li>
          <li>
            <strong>Limited Withdrawal Options:</strong> NPS has restrictions on
            when and how much can be withdrawn before retirement, which may
            limit flexibility for some investors.
          </li>
          <li>
            <strong>Market Risk:</strong> Since a part of the investment is
            allocated to equities, there is a market risk that could affect
            returns, especially in volatile periods.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h2>
        <p className="mb-2">
          The National Pension System (NPS) is a robust and flexible retirement
          savings option that provides tax benefits and allows individuals to
          create a retirement corpus by investing in a diversified portfolio. It
          is designed to ensure financial security after retirement while
          offering transparency and low-cost management.
        </p>
        <p className="mb-2">
          While it offers numerous advantages, such as low-cost management and a
          diversified investment approach, individuals should consider its
          limitations, including the tax on annuity and restrictions on
          withdrawals. Overall, NPS can be an important component of long-term
          retirement planning in India.
        </p>
      </section>
    </div>
  );
};

export default NPSInfo;
