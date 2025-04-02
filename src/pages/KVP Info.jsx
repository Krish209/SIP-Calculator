import React from "react";

const KVPDetails = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6 text-center">Kisan Vikas Patra (KVP)</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Kisan Vikas Patra (KVP) is a government-backed savings scheme that encourages individuals to save
          for the future while earning a fixed interest. It is primarily designed for farmers and rural
          individuals but is open to all Indian citizens. It offers a safe investment option with a fixed
          return, compounded quarterly, and provides a tax-free interest.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features of KVP</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interest Rate:</strong> 7.0% p.a. (compounded quarterly)</li>
          <li><strong>Minimum Investment:</strong> ₹1,000 (no maximum limit)</li>
          <li><strong>Tenure:</strong> 9 years and 5 months</li>
          <li><strong>Tax Benefits:</strong> Interest earned is taxable, but there are no tax benefits under Section 80C</li>
          <li><strong>Mode of Investment:</strong> Available in physical or digital certificates, bought from any post office</li>
          <li><strong>Premature Withdrawal:</strong> Allowed with a penalty after 2.5 years</li>
          <li><strong>Transferability:</strong> The certificates are transferable</li>
          <li><strong>Nomination Facility:</strong> Available for the investor’s nominee to receive the amount in case of death</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
        <p>
          Any Indian citizen is eligible to invest in the KVP scheme. Additionally:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Minors can also invest through a guardian.</li>
          <li>Joint accounts are allowed.</li>
        </ul>
      </section>

      {/* Interest Calculation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interest Calculation</h2>
        <p>
          The maturity amount is calculated using compound interest. The formula for compound interest is:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-mono text-lg text-center">
            A = P * (1 + r/n)^(nt)
          </p>
          <p className="text-sm text-center">
            Where:
            <br />
            P = Principal (Investment Amount) <br />
            r = Annual Interest Rate (7%) <br />
            n = Number of compounding periods per year (quarterly = 4) <br />
            t = Time in years (9 years and 5 months)
          </p>
        </div>
        <p>
          For example, if you invest ₹1,00,000, the maturity amount will be calculated after 9 years and 5 months,
          compounded quarterly at an interest rate of 7.0% per annum.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of KVP</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Safety:</strong> Government-backed scheme with guaranteed returns</li>
          <li><strong>Fixed Returns:</strong> Pre-determined maturity amount based on the interest rate</li>
          <li><strong>Easy to Invest:</strong> Available at post offices across India</li>
          <li><strong>Transferability:</strong> You can transfer the certificate to someone else</li>
          <li><strong>Nomination:</strong> You can nominate someone to receive the amount in case of death</li>
        </ul>
      </section>

      {/* Drawbacks */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Drawbacks of KVP</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No Tax Benefits:</strong> KVP does not provide any tax benefits under Section 80C</li>
          <li><strong>Premature Withdrawal Penalty:</strong> Premature withdrawal is allowed but with a penalty</li>
          <li><strong>Interest Taxation:</strong> The interest earned is taxable</li>
          <li><strong>Fixed Tenure:</strong> The lock-in period is long (9 years and 5 months)</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          Kisan Vikas Patra (KVP) is an excellent savings scheme for long-term investors seeking guaranteed returns
          with a low-risk factor. However, it may not be suitable for those looking for short-term liquidity or
          tax savings. If you are someone who prefers a safe, government-backed scheme, KVP can be a reliable
          choice to grow your savings over the years.
        </p>
      </section>
    </div>
  );
};

export default KVPDetails;
