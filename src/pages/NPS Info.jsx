import React from "react";

const NPSInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        National Pension System (NPS) - - A Comprehensive Guide
      </h1>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Objective of NPS
        </h2>
        <p>
          The primary objective of NPS is to ensure financial security for
          individuals in their retirement years. By encouraging individuals to
          save during their working years and invest in a variety of asset
          classes, NPS helps to create a corpus for retirement that provides
          income after an individual retires.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Structure of NPS
        </h2>
        <p className="mb-2">The NPS operates on a two-tier system:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tier 1 Account:</strong> This is the primary account used
            for retirement savings. The contributions made in this account are
            subject to withdrawal only upon retirement or in special cases such
            as the death of the subscriber.
          </li>
          <li>
            <strong>Tier 2 Account:</strong> This is a voluntary savings account
            that offers more flexibility in terms of withdrawals. It is not
            mandatory and can be opened alongside Tier 1.
          </li>
        </ul>

        <p className="mb-2">
          Each subscriber to NPS is assigned a unique identifier called the{" "}
          <strong>Permanent Retirement Account Number (PRAN)</strong>, which
          tracks the contributions and status of the account.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Contributions to NPS
        </h2>
        <p className="mb-2">
          NPS is open to all Indian citizens between the ages of 18 and 70
          years. Here are the details on contributions:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Minimum Contribution:</strong>- Tier 1: ₹500 for opening,
            and a minimum of ₹1,000 annually thereafter. - Tier 2: No minimum
            contribution for opening, but regular deposits can be made.
          </li>
          <li>
            <strong>Voluntary Contributions:</strong> NPS allows flexible
            contributions. These can be made as lump sums or on a regular basis
            depending on the subscriber’s financial situation.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Investment Options in NPS
        </h2>
        <p>
          NPS provides subscribers with several investment options. They can
          allocate their contributions across different asset classes based on
          their risk appetite. The main asset classes are:
        </p>

        <ul className="list-disc pl-6 space-y-2">
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
        <p className="mb-2">NPS offers various tax benefits under the Income Tax Act:</p>
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
            retirement is tax-free. The remaining 40% must be used to purchase
            an annuity, which is taxable based on income tax brackets.
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
            <strong>Normal Exit:</strong> At the age of 60, a subscriber can
            withdraw 60% of the corpus as a lump sum (tax-free), while 40% must
            be used to purchase an annuity.
          </li>
          <li>
            <strong>Premature Exit:</strong> If a subscriber exits before 60,
            only 20% of the corpus can be withdrawn in a lump sum, and the rest
            must be used to buy an annuity. The subscriber must have contributed
            for at least 10 years.
          </li>
          <li>
            <strong>Death of Subscriber:</strong> In case of death, the entire
            accumulated corpus is paid to the nominee.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Advantages of NPS
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
          Disadvantages of NPS
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tax on Annuity:</strong> The annuity portion of the NPS
            withdrawal is taxable based on the subscriber’s income tax bracket.
          </li>
          <li>
            <strong>Limited Withdrawal Options:</strong> NPS has restrictions on
            when and how much can be withdrawn before retirement, which could be
            a limitation for some investors.
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
