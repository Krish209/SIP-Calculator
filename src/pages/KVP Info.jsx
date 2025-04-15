import React from "react";

const KVPInfo = () => {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold lg:text-center mb-6 text-blue-600">
        Kisan Vikas Patra (KVP) - A Comprehensive Guide
      </h1>

      {/* Introduction */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is KVP?
        </h2>
        <p className="mb-2">
          Kisan Vikas Patra (KVP) is a government-backed savings scheme that encourages individuals to save for the future while earning a fixed interest. It is open to all Indian residents and offers a safe investment avenue with guaranteed, compounded returns. Originally introduced in 1988, KVP aims to inculcate long-term financial discipline among rural and urban investors. The scheme is available at all post offices and select public sector banks across India.
        </p>
      </section>

      {/* Key Features */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of KVP
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interest Rate:</strong> 7.5% p.a. (compounded annually)</li>
          <li><strong>Minimum Investment:</strong> ₹1,000 (in multiples of ₹100)</li>
          <li><strong>Maximum Investment:</strong> No upper limit</li>
          <li><strong>Tenure:</strong> 115 months (9 years and 7 months)</li>
          <li><strong>Mode of Holding:</strong> Available in physical or digital form</li>
          <li><strong>Premature Withdrawal:</strong> Allowed after 2.5 years (30 months) with applicable penalties</li>
          <li><strong>Transferability:</strong> Certificates can be transferred between individuals or from one post office to another</li>
          <li><strong>Nomination Facility:</strong> Yes, available at the time of purchase or later</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Eligibility
        </h2>
        <p>Any Indian resident can invest in KVP. Details include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Minors can invest through a guardian</li>
          <li>Joint accounts (up to 3 people) are permitted</li>
          <li>Trusts are eligible to invest (excluding HUFs)</li>
          <li>NRIs and HUFs are not eligible</li>
        </ul>
      </section>

      {/* Account Types */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of KVP Accounts
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Single Holder Account:</strong> For individuals or on behalf of a minor</li>
          <li><strong>Joint A Account:</strong> Payable jointly to both holders</li>
          <li><strong>Joint B Account:</strong> Payable to either holder (survivor gets full rights)</li>
        </ul>
      </section>

      {/* How does KVP Work */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Does KVP Work?
        </h2>
        <p>The maturity amount is calculated using compound interest. The formula used is:</p>
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            KVP Formula:
          </h3>
          <code className="font-bold">A = P × (1 + r/n)<sup>nt</sup></code>
          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>A</strong> = Final maturity amount</li>
            <li><strong>P</strong> = Principal or initial investment</li>
            <li><strong>r</strong> = Annual interest rate</li>
            <li><strong>n</strong> = Number of times interest is compounded per year</li>
            <li><strong>t</strong> = Number of years</li>
          </ul>
        </div>
        <p className="mt-4">
          The scheme doubles your investment at maturity. For example, investing ₹1,00,000 will yield ₹2,00,000 at the end of 115 months at the current interest rate of 7.5% p.a.
        </p>
      </section>

      {/* Taxation */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Taxation on KVP
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No 80C Deductions:</strong> Investments in KVP are not eligible for deductions under Section 80C.</li>
          <li><strong>Taxable Interest:</strong> Interest earned is fully taxable under 'Income from Other Sources'.</li>
          <li><strong>TDS:</strong> No TDS is deducted on maturity, but interest is taxable.</li>
        </ul>
      </section>

      {/* Pros */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Pros of KVP
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Government Guarantee:</strong> Backed by the Government of India, ensuring capital safety</li>
          <li><strong>Fixed Returns:</strong> Know your maturity amount in advance</li>
          <li><strong>Easy Access:</strong> Available at any post office across the country</li>
          <li><strong>Transferable:</strong> Both person-to-person and location-wise transfers are allowed</li>
          <li><strong>Nomination:</strong> Enables nomination facility for succession planning</li>
        </ul>
      </section>

      {/* Cons */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Cons of KVP
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No Tax Benefits:</strong> Not eligible for tax deductions</li>
          <li><strong>Taxable Returns:</strong> Interest is fully taxable</li>
          <li><strong>Lock-in Period:</strong> Funds locked for 2.5 years minimum</li>
          <li><strong>Long Tenure:</strong> Suitable only for long-term investment horizon</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h2>
        <p>
          Kisan Vikas Patra is a reliable and secure long-term savings scheme backed by the Indian government. With guaranteed returns and no upper limit on investment, it is ideal for conservative investors who value stability over high returns or tax benefits. However, if you are looking for tax savings or short-term liquidity, other options like PPF or ELSS may be more suitable.
        </p>
      </section>
    </div>
  );
};

export default KVPInfo;
