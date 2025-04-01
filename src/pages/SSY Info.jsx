import React from "react";

function SSYInfo() {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold lg:text-center mb-6 text-blue-600">
        SSY - A Comprehensive Guide
      </h1>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Sukanya Samriddhi Yojana?
        </h2>
        <p className="mb-2">
          The <strong>Sukanya Samriddhi Yojana (SSY)</strong> is a
          government-backed savings scheme launched by the Indian government in
          2015 as part of the
          <strong>‘Beti Bachao Beti Padhao’</strong> campaign. Its primary goal
          is to promote the welfare and financial security of the girl child by
          encouraging parents to save for their daughter’s future education and
          marriage expenses. It offers one of the highest interest rates among
          various small savings schemes in India.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of SSY
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Eligibility:</strong> The account can be opened only for a
            girl child under the age of 10. A single girl child or parents with
            multiple daughters can open an account for each child.
          </li>
          <li>
            <strong>Interest Rate:</strong> The interest rate is currently 8.0%
            per annum, compounded annually.
          </li>
          <li>
            <strong>Tenure:</strong> The maturity period is 21 years from the
            date of opening the account or until the girl child turns 21.
          </li>
          <li>
            <strong>Contribution Limit:</strong> Minimum deposit of ₹250 per
            year and a maximum of ₹1.5 lakh per year.
          </li>
          <li>
            <strong>Tax Benefits:</strong> Contributions qualify for tax
            deductions under Section 80C, and the interest earned is tax-free.
          </li>
          <li>
            <strong>Partial Withdrawals:</strong> Partial withdrawals are
            allowed from the 18th year for education or marriage purposes.
          </li>
          <li>
            <strong>Premature Closure:</strong> The account can be closed
            prematurely in case of the girl’s death or in certain medical
            emergencies.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How to Open an SSY Account
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Visit the nearest post office or bank offering SSY.</li>
          <li>
            Fill out the application form with the girl child's birth
            certificate and identity proof of the guardian.
          </li>
          <li>Deposit the minimum required amount (₹250 or more).</li>
          <li>
            Complete the KYC (Know Your Customer) process by submitting identity
            and address proofs.
          </li>
          <li>
            Receive a passbook with your account details, which will help track
            deposits and interest.
          </li>
        </ol>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of SSY
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>High-Interest Rates:</strong> SSY offers one of the highest
            interest rates among government-backed savings schemes.
          </li>
          <li>
            <strong>Tax-Free Interest:</strong> The interest earned is
            completely tax-free, making it an attractive option.
          </li>
          <li>
            <strong>Long-Term Financial Security:</strong> SSY ensures that
            parents can save for their daughter’s future education or marriage
            over a long term.
          </li>
          <li>
            <strong>Low Minimum Deposit:</strong> The minimum deposit
            requirement is very low, starting at just ₹250 annually.
          </li>
          <li>
            <strong>Partial Withdrawals:</strong> Partial withdrawals for
            education or marriage can be made from the 18th year.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of SSY
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Limited to Girls:</strong> This scheme is available only for
            the girl child.
          </li>
          <li>
            <strong>No Joint Accounts:</strong> The account cannot be opened
            jointly, which reduces flexibility.
          </li>
          <li>
            <strong>Long Lock-In Period:</strong> The account has a lock-in
            period of 21 years, which means you cannot access the funds easily.
          </li>
          <li>
            <strong>No Loan Facilities:</strong> SSY does not allow loans or
            overdrafts against the account.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Who Should Invest in SSY?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Parents of Girl Children:</strong> If you have a daughter
            under the age of 10, this scheme is perfect for securing her future.
          </li>
          <li>
            <strong>Conservative Investors:</strong> If you're looking for a
            safe, government-backed investment option, SSY is ideal.
          </li>
          <li>
            <strong>Tax-Conscious Investors:</strong> If you are looking for a
            tax-saving option, SSY offers excellent tax benefits under Section
            80C.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h2>
        <p className="mb-2">
          The Sukanya Samriddhi Yojana (SSY) is one of the best schemes for
          ensuring the future financial security of your daughter. It combines
          high interest rates, tax benefits, and long-term savings with the
          security of a government-backed investment. It’s an excellent scheme
          to plan for your daughter’s education and marriage while contributing
          to the overall empowerment of the girl child in India.
        </p>
      </section>
    </div>
  );
}

export default SSYInfo;
