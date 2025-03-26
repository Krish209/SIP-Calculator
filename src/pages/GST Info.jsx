import React from 'react';

const GSTInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Goods and Services Tax (GST)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Key Features of GST</h2>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li>Single tax for goods and services, simplifying the tax system.</li>
          <li>GST is a destination-based tax, levied at the point of consumption.</li>
          <li>Input Tax Credit (ITC) allows businesses to claim tax paid on inputs, eliminating cascading tax effects.</li>
          <li>Dual GST system: CGST, SGST for intra-state and IGST for inter-state transactions.</li>
          <li>Ensures uniform tax structure across India.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Types of GST</h2>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>CGST (Central GST):</strong> Levied by the central government for intra-state transactions.</li>
          <li><strong>SGST (State GST):</strong> Levied by the state government for intra-state transactions.</li>
          <li><strong>IGST (Integrated GST):</strong> Levied by the central government for inter-state transactions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. GST Rates</h2>
        <p className="text-lg leading-relaxed mb-4">
          GST is levied at various rates depending on the type of goods and services. These rates are categorized as follows:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>0%:</strong> Essential goods like unprocessed food.</li>
          <li><strong>5%:</strong> Goods of mass consumption such as packaged foods, healthcare items.</li>
          <li><strong>12%:</strong> Goods such as computers and processed food.</li>
          <li><strong>18%:</strong> Common goods like cleaning products, electrical items.</li>
          <li><strong>28%:</strong> Luxury goods like high-end vehicles, demerit goods like aerated drinks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Benefits of GST</h2>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>Eliminates Cascading Tax Effect:</strong> GST allows Input Tax Credit (ITC), reducing the tax burden.</li>
          <li><strong>Simplified Tax Structure:</strong> GST consolidates multiple taxes, making compliance easier.</li>
          <li><strong>Boosts the Economy:</strong> By making goods and services cheaper and more competitive.</li>
          <li><strong>Ease of Doing Business:</strong> Businesses only need to deal with a single tax, improving efficiency.</li>
          <li><strong>Standardized Tax Rates:</strong> The same rates are applied across the country, encouraging interstate trade.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Input Tax Credit (ITC)</h2>
        <p className="text-lg leading-relaxed mb-4">
          Input Tax Credit (ITC) allows businesses to offset the taxes paid on inputs (goods or services) against the taxes collected from sales.
        </p>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li>ITC reduces the overall tax burden, benefiting businesses by lowering their total tax cost.</li>
          <li>Businesses must use the goods/services for business purposes to claim ITC.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. GST Registration</h2>
        <p className="text-lg leading-relaxed mb-4">
          Businesses with a turnover above a certain threshold must register for GST. The threshold varies depending on the type of business and location.
        </p>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>Service Providers:</strong> Must register if turnover exceeds ₹20 lakhs.</li>
          <li><strong>Goods Suppliers:</strong> Must register if turnover exceeds ₹40 lakhs (for most states).</li>
          <li>Businesses below the threshold can opt for voluntary registration.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. GST Returns</h2>
        <p className="text-lg leading-relaxed mb-4">
          GST returns are mandatory for businesses to file, and the filing frequency depends on the business type and turnover.
        </p>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>GSTR-1:</strong> Outward supply (sales) return.</li>
          <li><strong>GSTR-3B:</strong> Summary return for tax liabilities.</li>
          <li><strong>GSTR-9:</strong> Annual return summarizing all monthly returns.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">8. Challenges of GST</h2>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>Initial Implementation Issues:</strong> The switch to GST created confusion and required adjustments.</li>
          <li><strong>Compliance Burden:</strong> Small businesses may struggle with detailed documentation and reporting.</li>
          <li><strong>Technological Infrastructure:</strong> Issues with the GSTN portal have caused delays and problems with online filings.</li>
          <li><strong>Rate Structure Confusion:</strong> The multiple GST rates can confuse businesses when categorizing products and services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">9. GST and E-commerce</h2>
        <ul className="list-disc pl-8 space-y-2 text-lg leading-relaxed">
          <li><strong>GST on E-commerce Platforms:</strong> E-commerce platforms must comply with GST regulations and collect tax at the point of sale.</li>
          <li><strong>TCS (Tax Collected at Source):</strong> E-commerce platforms are required to collect GST on behalf of sellers for transactions.</li>
        </ul>
      </section>

      <section className="text-center py-8">
        <h3 className="text-2xl font-semibold text-blue-600">Conclusion</h3>
        <p className="text-lg leading-relaxed">
          GST is a transformative tax reform that has streamlined the indirect tax structure, ensuring ease of business and greater compliance. Despite challenges with implementation, GST's long-term benefits include eliminating cascading tax effects, boosting the economy, and providing a simplified tax system for businesses.
        </p>
      </section>
    </div>
  );
};

export default GSTInfo;
