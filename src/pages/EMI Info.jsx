import React from "react";

function EMIInfo() {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/emi-calculator#guide",
          "@id": "https://www.sipgo.in/emi-calculator#guide",
          headline: "EMI Calculator – Estimate Monthly Loan Repayments",
          description:
            "Find your monthly EMI, total interest payable, and amortization schedule with SIPGo's EMI Calculator.",
          image: "https://www.sipgo.in/images/logo.png",
          author: {
            "@type": "Organization",
            name: "SIPGo",
            url: "https://www.sipgo.in/",
          },
          datePublished: datePublished,
          dateModified: dateModified,
          publisher: {
            "@type": "Organization",
            name: "SIPGo",
            logo: {
              "@type": "ImageObject",
              url: "https://www.sipgo.in/images/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.sipgo.in/emi-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "EMI Guide Sections",
            table: [
              "What is EMI?",
              "Components of EMI",
              "How does EMI Work?",
              "Types of EMI Calculation",
              "Types of Loans That Use EMIs",
              "Loan Amortization",
              "Prepayment and Loan Foreclosure",
              "Advantages of EMI",
              "Disadvantages of EMI",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        EMI - A Comprehensive Guide
      </h2>
      {/* Introduction Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is EMI?
        </h3>
        <p className="mb-2">
          <strong>EMI (Equated Monthly Installment)</strong> is a fixed monthly
          payment made by a borrower to a lender for a loan over a specified
          period of time. It is commonly used for home loans, personal loans,
          auto loans, and more. EMI consists of both principal and interest
          components.
        </p>
      </section>
      {/* Components of EMI */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Components of EMI
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Principal Amount</strong>: The actual loan amount borrowed.
            The total loan amount affects the EMI, as the higher the loan, the
            higher the EMI.
          </li>
          <li>
            <strong>Interest</strong>: The amount charged by the lender on the
            principal loan amount. A higher interest rate increases the EMI.
          </li>
          <li>
            <strong>Loan Tenure</strong>: The duration for which the loan is
            borrowed, typically in months. The shorter the tenure, the higher
            the EMI, but you’ll pay less interest overall.
          </li>
        </ul>
      </section>

      {/* EMI Calculation */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How does EMI Work?
        </h3>
        <p className="mb-2">
          When you take a loan, interest is earned or paid on the principal.
          With compound interest, this interest is added to the principal, and
          future interest is then calculated based on this larger amount. Over
          time, this process results in exponential growth of your investment.
        </p>

        <p className="mb-2">
          For example, if you take a loan of ₹1,00,000 (P) at an interest rate
          of 8% (r) per year, after 5 year (n) you would have to pay ₹1,21,658
          (₹1,00,000 + ₹21,658). So, monthly EMI would be ₹2,027.64. This means
          you would pay ₹2,027.64 every month for 5 years.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            EMI Return Formula:
          </h4>
          <p className="mb-2 md:mb-4">The formula to calculate EMI is:</p>

          <code className="font-bold">
            EMI = (P × r × (1 + r)^n) / ((1 + r)^n - 1)
          </code>

          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>P</strong> = Principal loan amount
            </li>
            <li>
              <strong>r</strong> = Monthly interest rate (annual rate / 12)
            </li>
            <li>
              <strong>n</strong> = Loan tenure in months
            </li>
          </ul>
        </div>
      </section>

      {/* Types of EMI Calculation */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of EMI Calculation
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reducing Balance Method</strong>: The EMI is calculated
            based on the outstanding loan balance, which reducing as the loan
            principal is repaid.
          </li>
          <li>
            <strong>Flat Rate Method</strong>: EMI is calculated on the entire
            principal amount throughout the loan tenure. This leads to higher
            EMIs compared to the reducing balance method.
          </li>
        </ul>
      </section>

      {/* Types of Loans Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of Loans That Use EMIs
        </h3>
        <p className="mb-2">
          EMI-based loans are common for various types of borrowing. Below are
          some of the most popular types of loans where EMI is used as the
          repayment method:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Home Loans</strong>: Used to purchase property or refinance
            existing mortgages. Home loans usually have long tenures (up to 30
            years) and relatively low-interest rates.
          </li>
          <li>
            <strong>Personal Loans</strong>: Typically unsecured loans used for
            personal expenses, like medical bills or weddings. They come with
            higher interest rates but offer flexibility in usage.
          </li>
          <li>
            <strong>Auto Loans</strong>: Used for purchasing vehicles. Auto
            loans typically have shorter repayment tenures, and the vehicle
            itself often serves as collateral for the loan.
          </li>
          <li>
            <strong>Education Loans</strong>: Specifically for financing
            education, often with a grace period before the EMI starts. Interest
            rates are relatively low, and repayment can be extended to match
            career or post-graduation timelines.
          </li>
          <li>
            <strong>Business Loans</strong>: For small businesses or
            entrepreneurs to meet business-related expenses. These loans may
            have higher interest rates, but EMIs provide a structured repayment
            plan.
          </li>
          <li>
            <strong>Gold Loans</strong>: Secured loans where gold is used as
            collateral. These loans usually come with lower interest rates but
            are typically short-term.
          </li>
          <li>
            <strong>Credit Card EMIs</strong>: Many credit card providers allow
            users to convert their outstanding balances into EMIs, which is
            particularly helpful for high-value purchases.
          </li>
        </ul>
      </section>

      {/* Loan Amortization Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Loan Amortization
        </h3>
        <p className="mb-2">
          Loan amortization refers to the process of gradually repaying a loan
          over time through regular payments (EMIs). With each EMI, a portion
          goes toward paying off the principal loan amount, while the rest
          covers the interest.
        </p>
        <p className="mb-2">
          At the beginning of the loan term, most of the EMI goes towards paying
          the interest, and a smaller portion goes toward the principal. As the
          loan matures, the principal portion of the EMI increases, while the
          interest portion decreases. This process is known as the amortization
          of the loan.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mt-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            How Amortization Works
          </h3>
          <p className="mb-2">
            The amortization schedule is a table that shows the breakdown of
            each EMI, indicating how much is paid toward the principal and how
            much is paid toward interest over time.
          </p>
          <p className="mb-2">
            For example, consider a ₹1,00,000 loan with an interest rate of 10%
            and a tenure of 2 years:
          </p>
          <p className="mb-2">
            - In the early months, the majority of the EMI goes toward paying
            off the interest (₹833.33 for each month for a 10% annual rate on
            ₹1,00,000). - Towards the end of the tenure, the principal portion
            increases as the remaining loan balance decreases, reducing the
            amount paid toward interest.
          </p>
          {/* <p className="mb-2">
            You can view this amortization breakdown for each month, which is
            often given by lenders when you take out a loan.
          </p> */}
        </div>
        {/* example of an amortization table */}
        {/* <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 mt-6">
            Example of an Amortization Table
          </h3>
          <table className="table-auto w-full text-left border-collapse mb-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">EMI</th>
                <th className="border px-4 py-2">Principal</th>
                <th className="border px-4 py-2">Interest</th>
                <th className="border px-4 py-2">Outstanding Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">₹5,818.46</td>
                <td className="border px-4 py-2">₹2,318.46</td>
                <td className="border px-4 py-2">₹3,500.00</td>
                <td className="border px-4 py-2">₹97,681.54</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">₹5,818.46</td>
                <td className="border px-4 py-2">₹2,345.11</td>
                <td className="border px-4 py-2">₹3,473.35</td>
                <td className="border px-4 py-2">₹95,336.43</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-2">
            The amortization table allows borrowers to see how their loan
            balance decreases over time, and how much interest they pay in the
            early stages of the loan compared to later stages.
          </p>
        </div> */}
      </section>

      {/* Prepayment Benefits */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Prepayment and Loan Foreclosure
        </h3>
        <p className="mb-2">
          Prepaying part of your loan early can reduce the outstanding principal
          and thus lower the EMI amount or shorten the loan tenure. It's a great
          way to save on interest costs.
        </p>
        <p className="mb-2">
          Some lenders charge fees for loan foreclosure (closing the loan
          early), so it's important to check the terms before making prepayments
          or foreclosures.
        </p>
      </section>
      {/* Advantages of EMI */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Advantages of EMI
        </h3>
        <p className="mb-4">
          Paying for big-ticket items or services upfront can be difficult for
          many, but EMI offers a way to manage large payments by splitting them
          into smaller, more affordable monthly installments. Here are some key
          advantages of choosing EMI as your payment option:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Easy Financial Management</strong>: EMI breaks down large
            payments into smaller amounts, making it easier to manage your
            monthly budget without straining your finances.
          </li>
          <li>
            <strong>Better Cash Flow Planning</strong>: With fixed monthly
            payments, you can plan your finances better and avoid surprises at
            the end of the month.
          </li>
          <li>
            <strong>Improvement in Credit Score</strong>: Regular and timely EMI
            payments can help improve your credit score, making you eligible for
            better loan offers in the future.
          </li>
          <li>
            <strong>Access to Larger Loans</strong>: EMI makes it possible to
            access larger loans, such as home or car loans, which might
            otherwise be unaffordable if you had to pay upfront.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Disadvantages of EMI
        </h3>
        <p className="mb-4">
          While EMI offers flexibility, it's essential to understand its
          disadvantages before committing. Here are some potential downsides to
          consider when opting for EMI:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Higher Total Loan Cost</strong>: While EMI makes monthly
            payments more affordable, the interest charged on the loan can
            significantly increase the total cost of the loan over time.
          </li>
          <li>
            <strong>Penalties for Missed Payments</strong>: If you miss an EMI
            payment, you may incur late fees or penalties. Continued missed
            payments can damage your credit score and lead to default.
          </li>
          <li>
            <strong>Multiple EMIs Can Be Overwhelming</strong>: If you have
            multiple loans with separate EMIs, managing all the payments and due
            dates can become overwhelming and lead to financial stress.
          </li>
          <li>
            <strong>Early Repayment Fees</strong>: Some lenders charge
            additional fees if you wish to pay off your loan early, which can
            reduce the financial benefit of clearing the debt faster.
          </li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          EMI is a practical way to repay loans in manageable monthly amounts,
          but it’s important to consider the interest rate, tenure, and type of
          loan before committing. Always ensure you can comfortably manage the
          EMI payments to avoid any financial strain.
        </p>
      </section>
    </article>
  );
}

export default EMIInfo;
