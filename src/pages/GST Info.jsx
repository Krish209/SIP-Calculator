import React from "react";

const GSTInfo = () => {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/gst-calculator#guide",
          "@id": "https://www.sipgo.in/gst-calculator#guide",
          headline:
            "GST Calculator – Quick Tax Estimator for Goods and Services",
          description:
            "Easily calculate GST amount on sales or purchases with our comprehensive GST Calculator for various rates.",
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
            "@id": "https://www.sipgo.in/gst-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "GST Guide Sections",
            table: [
              "What is GST?",
              "Key Features of GST",
              "Types of GST",
              "GST Calculation Formula",
              "GST Rates",
              "Benefits of GST",
              "Input Tax Credit (ITC)",
              "GST Registration",
              "GST Returns",
              "Challenges of GST",
              "GST and E-commerce",
              "Conclusion",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        GST - A Comprehensive Guide
      </h2>

      {/* What is GST? Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is GST?
        </h3>
        <p className="mb-2">
          <strong>GST (Goods and Services Tax)</strong> is a value-added tax
          applied to the sale of goods and services. It is designed to simplify
          the taxation process by consolidating multiple indirect taxes, such as
          sales tax, excise duty, and VAT (Value Added Tax), into a single tax
          structure. GST is typically levied at different stages of production
          or distribution and is paid by consumers at the point of sale, while
          businesses collect it and remit it to the government.
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Features of GST
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Single tax for goods and services, simplifying the tax system.
          </li>
          <li>
            GST is a destination-based tax, levied at the point of consumption.
          </li>
          <li>
            Input Tax Credit (ITC) allows businesses to claim tax paid on
            inputs, eliminating cascading tax effects.
          </li>
          <li>
            Dual GST system: CGST, SGST for intra-state and IGST for inter-state
            transactions.
          </li>
          <li>Ensures uniform tax structure across India.</li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Types of GST
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>CGST (Central GST)</strong>: Levied by the central
            government for intra-state transactions.
          </li>
          <li>
            <strong>SGST (State GST)</strong>: Levied by the state government
            for intra-state transactions.
          </li>
          <li>
            <strong>IGST (Integrated GST)</strong>: Levied by the central
            government for inter-state transactions.
          </li>
        </ul>
      </section>

      {/* GST Calculation Formula Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          GST Calculation Formula
        </h3>

        {/* GST Exclusive Calculation */}
        <p className="mb-2">
          When the selling price is <strong>GST Exclusive</strong> (i.e., GST is
          not included in the price):
        </p>
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg shadow-md">
          <code>GST amount = (Selling Price × GST Rate) / 100</code>
          <br />
          <code>Net Price = Selling Price + GST amount</code>
        </div>
        <p className="my-2">
          For example, if a product costs ₹1000 and the GST rate is 18%, the GST
          would be:
        </p>
        <code>GST amount = (1000 × 18) / 100 = ₹180</code>
        <p className="my-2">
          So, the final price to the consumer would be ₹1180 (₹1000 + ₹180).
        </p>

        {/* GST Inclusive Calculation */}
        <p className="mb-2 mt-4">
          When the selling price is <strong>GST Inclusive</strong> (i.e., GST is
          included in the price):
        </p>
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg shadow-md">
          <code className="mb-2">
            GST amount = (Selling Price × GST Rate) / (100 + GST Rate)
          </code>
          <br />
          <code>Original Price = Selling Price - GST amount</code>
        </div>
        <p className="my-2">
          For example, if the selling price of a product is ₹1180 (inclusive of
          GST) and the GST rate is 18%, the GST amount would be:
        </p>
        <code>GST amount = (1180 × 18) / (100 + 18) = ₹180</code>
        <p className="my-2">
          The original price (before GST) would be: ₹1180 - ₹180 = ₹1000
        </p>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          GST Rates
        </h3>
        <p className=" mb-4">
          GST is levied at various rates depending on the type of goods and
          services. These rates are categorized as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>0%</strong>: Essential goods like unprocessed food.
          </li>
          <li>
            <strong>5%</strong>: Goods of mass consumption such as packaged
            foods, healthcare items.
          </li>
          <li>
            <strong>12%</strong>: Goods such as computers and processed food.
          </li>
          <li>
            <strong>18%</strong>: Common goods like cleaning products,
            electrical items.
          </li>
          <li>
            <strong>28%</strong>: Luxury goods like high-end vehicles, demerit
            goods like aerated drinks.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Benefits of GST
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Eliminates Cascading Tax Effect</strong>: GST allows Input
            Tax Credit (ITC), reducing the tax burden.
          </li>
          <li>
            <strong>Simplified Tax Structure</strong>: GST consolidates multiple
            taxes, making compliance easier.
          </li>
          <li>
            <strong>Boosts the Economy</strong>: By making goods and services
            cheaper and more competitive.
          </li>
          <li>
            <strong>Ease of Doing Business</strong>: Businesses only need to
            deal with a single tax, improving efficiency.
          </li>
          <li>
            <strong>Standardized Tax Rates</strong>: The same rates are applied
            across the country, encouraging interstate trade.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Input Tax Credit (ITC)
        </h3>
        <p className=" mb-4">
          Input Tax Credit (ITC) allows businesses to offset the taxes paid on
          inputs (goods or services) against the taxes collected from sales.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            ITC reduces the overall tax burden, benefiting businesses by
            lowering their total tax cost.
          </li>
          <li>
            Businesses must use the goods/services for business purposes to
            claim ITC.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          GST Registration
        </h3>
        <p className="mb-2">
          Businesses with a turnover above a certain threshold must register for
          GST. The threshold varies depending on the type of business and
          location.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Providers</strong>: Must register if turnover
            exceeds ₹20 lakhs.
          </li>
          <li>
            <strong>Goods Suppliers</strong>: Must register if turnover exceeds
            ₹40 lakhs (for most states).
          </li>
          <li>
            Businesses below the threshold can opt for voluntary registration.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          GST Returns
        </h3>
        <p className="mb-2">
          GST returns are mandatory for businesses to file, and the filing
          frequency depends on the business type and turnover.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>GSTR-1</strong>: Outward supply (sales) return.
          </li>
          <li>
            <strong>GSTR-3B</strong>: Summary return for tax liabilities.
          </li>
          <li>
            <strong>GSTR-9</strong>: Annual return summarizing all monthly
            returns.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Challenges of GST
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Initial Implementation Issues</strong>: The switch to GST
            created confusion and required adjustments.
          </li>
          <li>
            <strong>Compliance Burden</strong>: Small businesses may struggle
            with detailed documentation and reporting.
          </li>
          <li>
            <strong>Technological Infrastructure</strong>: Issues with the GSTN
            portal have caused delays and problems with online filings.
          </li>
          <li>
            <strong>Rate Structure Confusion</strong>: The multiple GST rates
            can confuse businesses when categorizing products and services.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          GST and E-commerce
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>GST on E-commerce Platforms</strong>: E-commerce platforms
            must comply with GST regulations and collect tax at the point of
            sale.
          </li>
          <li>
            <strong>TCS (Tax Collected at Source)</strong>: E-commerce platforms
            are required to collect GST on behalf of sellers for transactions.
          </li>
        </ul>
      </section>

      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Conclusion
        </h3>
        <p className="mb-2">
          GST is a transformative tax reform that has streamlined the indirect
          tax structure, ensuring ease of business and greater compliance.
          Despite challenges with implementation, GST's long-term benefits
          include eliminating cascading tax effects, boosting the economy, and
          providing a simplified tax system for businesses.
        </p>
      </section>
    </article>
  );
};

export default GSTInfo;
