import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  // SEO variables
  const pageTitle = "Disclaimer | SIPGo Financial Calculators";
  const pageDescription =
    "Legal disclaimer for SIPGo's financial calculators. Our tools provide estimates only, not financial advice.";
  const canonicalUrl = "https://www.sipgo.in/disclaimer";
  const effectiveDate = "2025-01-15";
  const lastUpdated = "2025-06-06";
  const logoUrl = "https://www.sipgo.in/images/logo.png";

  return (
    <section className="bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8 text-[15px] md:text-base">
      <Helmet>
        {/* Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Disclaimer, SIPGo, Financial Calculators, SIPGo disclaimer"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hreflang */}
        <link rel="alternate" hreflang="en" href={canonicalUrl} />
        <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={logoUrl} />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={logoUrl} />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Disclaimer",
            description: "Legal disclaimer for SIPGo financial tools",
            url: canonicalUrl,
            datePublished: effectiveDate,
            dateModified: lastUpdated,
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
              },
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl leading-relaxed mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          Disclaimer
        </h1>
        <p className="mb-6">
          <strong>Effective Date</strong>: 6th June, 2025
        </p>

        <div className="space-y-6 sm:space-y-6">
          <div>
            <p className="mb-2">
              The information, tools, and calculators provided on Sipgo.in are
              intended solely for informational and educational purposes. While
              we strive to ensure the accuracy and reliability of the content,
              Sipgo.in and its affiliates do not guarantee the completeness,
              accuracy, or timeliness of the information presented.
            </p>
            <p className="mb-2">
              Please read this disclaimer carefully before using our website or
              any of our calculators.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              1. Informational Purposes Only
            </h2>
            <p className="mb-2">
              Sipgo.in is not a financial advisor, broker, or professional
              financial services provider. All content provided on Sipgo.in,
              including our investment calculators, charts, projections,
              articles, and scheme descriptions, is intended solely for
              informational and educational purposes. We do not offer any kind
              of financial, legal, tax, or investment advice. Please consult a
              registered financial advisor before making investment decisions.
            </p>
            <p className="mb-2">
              The calculators and tools available on this platform are designed
              to give you a basic understanding and a general estimate of
              investment outcomes under certain assumptions. They should not be
              considered a substitute for professional advice.
            </p>
            <p className="mb-2">
              If you are planning to invest, modify your investment strategy, or
              make financial decisions based on these tools, we strongly
              recommend consulting a certified financial advisor, tax
              consultant, or investment professional.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              2. No Guarantees on Accuracy or Results
            </h2>
            <p className="mb-2">
              While we strive to ensure that the information and calculations
              provided on Sipgo.in are up-to-date, accurate, and based on
              current financial norms, we do not guarantee the accuracy,
              completeness, or reliability of any information or results
              produced by our calculators.
            </p>
            <p className="mb-2">
              Actual investment results may vary significantly from the
              estimates provided due to various factors, including but not
              limited to:
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>Market conditions</li>
              <li>Government regulations or policy changes</li>
              <li>Inflation rates</li>
              <li>Fund performance</li>
              <li>Individual financial behavior or decisions</li>
              <li>Tax implications</li>
              <li>Timing and duration of investments</li>
            </ul>
            <p className="mb-2">
              We are not liable for any discrepancies between projected and
              actual outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              3. No Liability
            </h2>
            <p className="mb-2">
              Sipgo.in, its owners, developers, and affiliates disclaim all
              responsibility and liability for any direct, indirect, incidental,
              consequential, or special damages arising out of or in any way
              connected with the use of this website, the calculators, or the
              information contained herein.
            </p>
            <p className="mb-2">
              Your use of the website and any action you take based on our tools
              and information is strictly at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              4. Not a Financial Institution
            </h2>
            <p className="mb-2">
              Sipgo.in is not a bank, financial institution, mutual fund
              distributor, or a SEBI-registered entity. We do not accept
              investments, provide portfolio management, or offer any kind of
              brokerage or distribution services.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              5. External Links and References
            </h2>
            <p className="mb-2">
              Sipgo.in may contain links to third-party websites, resources, or
              financial tools. These are provided for convenience only. We do
              not endorse or take responsibility for the accuracy, content, or
              security of external sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              6. Assumptions in Calculators
            </h2>
            <p className="mb-2">
              Each calculator on our platform is based on certain preset
              assumptions, which may include fixed interest rates, contribution
              timelines, compounding frequency, inflation rates, and more. These
              assumptions are often idealized or generalized for simplicity and
              may not reflect your individual circumstances or real-world
              variability.
            </p>
            <p className="mb-2">
              We encourage users to carefully read the detailed explanation
              provided with each calculator to understand how the estimates are
              generated.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              7. Changes and Updates
            </h2>
            <p className="mb-2">
              The content, tools, data, and calculations on Sipgo.in are subject
              to change at any time without notice. We reserve the right to
              modify or remove features, update assumptions, or correct errors
              and omissions as needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              8. User Responsibility
            </h2>
            <p className="mb-2">By using this website, you acknowledge that:</p>
            <ul className="list-disc pl-6">
              <li>
                You understand the tools are for illustrative purposes only.
              </li>
              <li>
                You will not rely solely on the calculators for making financial
                decisions.
              </li>
              <li>
                You will consult qualified professionals before making any
                investment decisions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions, concerns, or feedback about this
              disclaimer or any other aspect of Sipgo.in, feel free to contact
              us at: support@sipgo.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
