import React from "react";
import Table from "../../consts/Table";
import BlogLayout from "../../consts/BlogLayout";
import img from "../../assets/icons/blogs/registration2.jpeg";

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
    <BlogLayout
      title="How to Achieve a Monthly Pension of ₹50,000 with NPS"
      author="Tarun Kumar"
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
            Retirement isn’t just about stopping work—it’s about gaining peace
            of mind, achieving financial freedom, and enjoying the lifestyle
            you've worked hard to build. One of the most effective retirement
            planning tools in India today is the{" "}
            <strong>National Pension System (NPS)</strong>. If you're aiming for
            a monthly pension of ₹50,000 after retirement, this article explains
            how much you need to invest, how NPS works, and how to plan your
            contributions to make it a reality.
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
            steady pension post-retirement.
          </p>

          <p className="mb-2">
            Your contributions are invested in a mix of equity, corporate debt,
            and government securities, helping your money grow over time.
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
            If you're planning to retire at 60 and want a monthly pension of
            ₹50,000 (₹6 lakh per year), you'll need a large enough corpus to
            generate this amount via annuity returns. Annuities under NPS
            typically offer around 6% annual returns, though this can vary based
            on market conditions and the provider.
          </p>
          <p className="mb-2">
            To generate ₹6 lakh per year at a 6% return, you'll need to invest ₹1 crore
            in an annuity plan. Since only 40% of your NPS corpus is used to buy
            the annuity, your target NPS corpus should be ₹2.5 crore at
            retirement.
          </p>
        </section>

        {/* Real-Life Example: Planning at Age 30 */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Real-Life Example: Planning at Age 30
          </h2>
          <p className="mb-2">
            Let’s take an example. Suppose you're 30 years old and start
            investing ₹13,500 per month in NPS for the next 30 years. Assuming
            an annual return of 9%, your investments will grow to around ₹2.5
            crore by age 60. At that point:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>You can withdraw ₹1.5 crore tax-free (60%)</li>
            <li>
              You’ll allocate ₹1 crore (40% of the corpus) to purchase an
              annuity that pays lifelong pension
            </li>
            <li>
              The annuity will pay ₹6 lakh per year or ₹50,000 per month—for
              life
            </li>
          </ul>
          <p className="mb-2">
            These are <strong>conservative estimates</strong>, assuming stable
            returns and disciplined, long-term contributions. The final pension
            may vary based on annuity interest rates at retirement.
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
            NPS Pension Estimate Table
          </h2>

          <Table columns={columns} data={data} />
        </section>

        {/* Conclusion */}
        <section className="my-4 md:my-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Conclusion
          </h2>
          <p className="mb-2">
            Achieving a monthly pension of ₹50,000 through the National Pension
            System is entirely possible with disciplined investing and proper
            planning. Starting early, like at age 30, allows you to take full
            advantage of <strong>compounding and tax benefits</strong>. NPS
            offers a secure, regulated, and tax-efficient path toward
            retirement, making it one of the best options for long-term wealth
            building in India. Use our NPS Calculator to find out exactly how
            much you need to invest monthly to reach your retirement goals.
          </p>
        </section>
      </div>
    </BlogLayout>
  );
};

export default NpsMonthlyPension;
