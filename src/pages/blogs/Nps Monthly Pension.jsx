import React from "react";
import Table from "../../consts/Table";

const NpsMonthlyPension = () => {
  const columns = [
    { key: "corpus", header: "NPS Corpus" },
    { key: "annual", header: "Annual Pension" },
    { key: "monthly", header: "Monthly Pension" },
  ];

  const data = [
    {
      corpus: "₹50 Lakhs",
      annual: "₹3,00,000",
      monthly: "₹25,000",
    },
    {
      corpus: "₹1 Crore",
      annual: "₹6,00,000",
      monthly: "₹50,000",
    },
    {
      corpus: "₹1.5 Crore",
      annual: "₹9,00,000",
      monthly: "₹75,000",
    },
    {
      corpus: "₹2 Crore",
      annual: "₹12,00,000",
      monthly: "₹1,00,000",
    },
  ];

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          How to Achieve a Monthly Pension of ₹50,000 with NPS
        </h1>

        {/* Introduction */}
        <section className="my-4 md:my-6">
          <p className="mb-2">
            Retirement is not just about stopping work; it’s about securing
            peace of mind, financial freedom, and a lifestyle you’ve earned. One
            of the most effective tools for retirement planning in India today
            is the National Pension System (NPS). If you're aiming to receive a
            monthly pension of ₹50,000 after retirement, this article will
            explain exactly how much you need to invest, how NPS works, and how
            to structure your contributions to make it happen.
          </p>
        </section>

        {/* Understanding NPS: A Quick Overview */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Understanding NPS: A Quick Overview
          </h2>

          <p className="mb-2">
            The National Pension System (NPS) is a government-backed,
            market-linked retirement savings scheme. It allows individuals to
            invest systematically during their working years and provides a
            steady pension after retirement. The scheme invests your
            contributions into a mix of equity, corporate debt, and government
            securities, helping your savings grow over the long term.
          </p>

          <p className="mb-2">
            At the age of 60 (or retirement), you are allowed to withdraw up to
            60% of your total NPS corpus tax-free, while the remaining 40% must
            be used to purchase an annuity—which provides you with a regular
            pension for life.
          </p>
        </section>

        {/* The Goal: ₹50,000 Monthly Pension */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            The Goal: ₹50,000 Monthly Pension
          </h2>
          <p className="mb-2">
            If you’re planning to retire at 60 and want a pension of ₹50,000 per
            month (₹6 lakh per year), you need to build a sufficiently large NPS
            corpus that can generate this amount through annuity returns.
            Typically, annuity products offered under NPS provide around 6%
            annual returns (subject to market conditions and the annuity
            provider).
          </p>
          <p className="mb-2">
            To generate ₹6 lakh annually at 6% return, you will need to invest
            ₹1 crore in an annuity plan (₹1 crore x 6% = ₹6 lakh/year). Since
            only 40% of your NPS corpus is used to purchase the annuity, the
            total NPS corpus required would be ₹2.5 crore.
          </p>
        </section>

        {/* Real-Life Example: Planning at Age 30 */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Real-Life Example: Planning at Age 30
          </h2>
          <p className="mb-2">
            Let’s take a simple example. Suppose you’re 30 years old and start
            investing ₹13,500 per month in NPS for 30 years. Assuming a return
            of 9% annually, your investments will grow to around ₹2.5 crore by
            age 60. At that point:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You can withdraw ₹1.5 crore tax-free (60%)</li>
            <li>You’ll use ₹1 crore (40%) to buy an annuity</li>
            <li>
              The annuity will pay ₹6 lakh per year or ₹50,000 per month—for
              life
            </li>
          </ul>
          <p className="mb-2">
            This is a conservative estimate, assuming stable returns and
            consistent investing. The final pension may vary based on annuity
            interest rates at retirement.
          </p>
        </section>

        {/* Why NPS is a Strong Retirement Tool */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Why NPS is a Strong Retirement Tool
          </h2>
          <p className="mb-2 md:mb-4">
            There are several reasons why NPS is becoming one of the most
            recommended retirement schemes in India. First, it offers a
            long-term compounding benefit by investing in a mix of equities and
            debt. Second, it provides flexibility—you can choose your asset
            allocation or let it auto-adjust with age.
          </p>
          <p className="mb-2 md:mb-4">
            Third, and very importantly, NPS comes with attractive tax benefits.
            You can claim up to ₹1.5 lakh under Section 80C, and an additional
            ₹50,000 under Section 80CCD(1B)—totalling ₹2 lakh in deductions each
            year, making it one of the most tax-efficient investments in India.
          </p>
          <p className="mb-2 md:mb-4">
            Another key advantage is that NPS is regulated by the Pension Fund
            Regulatory and Development Authority (PFRDA), ensuring safety,
            transparency, and regular monitoring.
          </p>
        </section>

        {/* How Pension is Calculated from NPS Corpus */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            How Pension is Calculated from NPS Corpus
          </h2>

          <Table columns={columns} data={data} />
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            Systematic Withdrawal Plans (SWPs) provide an excellent way to
            create a consistent income stream from mutual fund investments.
            Whether you are a retiree or just looking for regular withdrawals,
            SWP can provide the right balance between income and capital
            preservation. When implemented wisely—considering tax implications,
            market conditions, and withdrawal rates—SWPs can help maintain
            financial stability while preserving your investment corpus.
          </p>
        </section>
      </div>
    </div>
  );
};

export default NpsMonthlyPension;
