import React from "react";

function GratuityInfo() {
  const datePublished = new Date("2025-04-01").toISOString();
  const dateModified = new Date("2025-06-01").toISOString();
  return (
    <article className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      {/* Article as information Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          url: "https://www.sipgo.in/gratuity-calculator#guide",
          "@id": "https://www.sipgo.in/gratuity-calculator#guide",
          headline: "Gratuity Calculator – Estimate Employee Gratuity Payout",
          description:
            "Use our Gratuity Calculator to determine your gratuity based on years of service and last drawn salary.",
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
            "@id": "https://www.sipgo.in/gratuity-calculator",
          },
          mainEntity: {
            "@type": "Table",
            about: "Gratuity Guide Sections",
            table: [
              "What is Gratuity?",
              "Eligibility for Gratuity",
              "How Gratuity is Calculated",
              "Taxation on Gratuity",
              "Gratuity in Case of Death or Disability",
              "Gratuity Payment Process",
              "Employer’s Obligation",
              "Key Points to Remember",
            ],
          },
        })}
      </script>

      <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Gratuity - A Comprehensive Guide
      </h2>

      {/* Introduction Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          What is Gratuity?
        </h3>
        <p className="mb-2">
          <strong>Gratuity</strong> is a form of financial benefit provided by
          an employer to an employee as a reward for long-term service. In
          India, it is governed by the{" "}
          <strong>Payment of Gratuity Act, 1972</strong>, which ensures that
          employees who have worked for an organization for a certain number of
          years are entitled to a lump sum payment once they leave the company,
          either due to retirement, resignation, or other reasons such as death
          or disability.
        </p>
      </section>

      {/* Eligibility Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Eligibility for Gratuity
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Minimum Service Period</strong>: The employee must have
            completed a minimum of 5 years of continuous service with the same
            employer.
          </li>
          <li>
            <strong>Termination of Employment</strong>: Gratuity is payable on
            resignation, retirement, or death/disability.
          </li>
          <li>
            <strong>Exclusions</strong>: Employees working in seasonal or
            temporary establishments or unorganized sectors may not be eligible
            for gratuity.
          </li>
        </ul>
      </section>

      {/* Calculation Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Gratuity is Calculated
        </h3>

        <p className="">
          The calculation of gratuity can vary depending on the laws in
          different countries, but the basic formula remains quite similar. In
          India, the formula typically involves the employee's last drawn
          salary, years of service, and a fixed multiplier.
        </p>

        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mt-4 shadow-md">
          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Gratuity Formula:
          </h4>
          <p className="mb-2 md:mb-4">
            Gratuity is calculated based on the following formula:
          </p>
          <code className="font-bold">
            Gratuity = (Last Drawn Salary × Years of Service × 15) / 26
          </code>
          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Last Drawn Salary</strong>: The salary the employee was
              drawing at the time of leaving the company, which includes basic
              salary and dearness allowance (DA).
            </li>
            <li>
              <strong>Years of Service</strong>: The number of completed years
              of service with the organization.
            </li>
          </ul>

          <p className="mt-2">
            The constant multiplier (15/26) represents 15 days of wages for each
            completed year of service, calculated based on the standard number
            of working days in a month (26).
          </p>
        </div>

        <p className="mt-4 mb-2">
          Let’s take example of Mr. Shyam has completed 10 years of service in
          the XYZ company. And, his last drawn salary along with dearness
          allowance (basic + DA) is ₹40,000.
        </p>

        <p className="mb-2">The gratuity can be calculated as:</p>
        <code>
          Gratuity = (n × b × 15) / 26
          <br />
          Gratuity = (10 × 40,000 × 15) / 26
          <br />
          Gratuity = ₹2,30,769.23
        </code>

        <p className="mt-4">
          Based on this calculation, Mr. Shyam will receive a gratuity of{" "}
          ₹2,30,769.23. This gratuity amount is a one-time payment that he is
          entitled to as per his years of service and salary at the time of
          leaving the company.
        </p>
      </section>

      {/* Taxation Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Taxation on Gratuity
        </h3>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>
            <strong>For Government Employees</strong>: Gratuity received by
            government employees is fully exempt from tax.
          </li>
          <li>
            <strong>For Private Sector Employees</strong>: If the amount of
            gratuity is below ₹10,00,000, it is exempt from tax. However, if the
            gratuity amount exceeds ₹10,00,000, the excess amount is taxable.
          </li>
        </ul>
      </section>

      {/* Death or Disability Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Gratuity in Case of Death or Disability
        </h3>
        <p className="">
          If an employee passes away or becomes physically disabled before
          completing the required years of service, the gratuity will be paid to
          the nominee or legal heir of the employee, even if they haven’t
          completed 5 years of service.
        </p>
      </section>

      {/* Gratuity Payment Process Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Gratuity Payment Process
        </h3>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>
            <strong>Application for Gratuity</strong>: The employee must submit
            an application for gratuity to the employer.
          </li>
          <li>
            <strong>Verification</strong>: The employer verifies the service
            record of the employee and confirms eligibility.
          </li>
          <li>
            <strong>Payment</strong>: The gratuity amount is paid as a lump sum.
          </li>
        </ul>
      </section>

      {/* Employer's Obligation Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Employer’s Obligation
        </h3>
        <p className="mb-2">
          Employers are obligated under the{" "}
          <strong>Payment of Gratuity Act</strong> to provide gratuity to their
          employees if they meet the eligibility conditions. Employers should:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Maintain records of employees' service duration.</li>
          <li>Ensure timely payment of gratuity.</li>
          <li>Provide legal recourse if gratuity is not paid.</li>
        </ul>
      </section>

      {/* Key Points Section */}
      <section className="my-4 md:my-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Points to Remember
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gratuity is not a pension scheme; it’s a one-time payment.</li>
          <li>Employers contribute to a Gratuity Fund to ensure payment.</li>
          <li>Employees can seek legal help if gratuity is denied.</li>
        </ul>
      </section>
    </article>
  );
}

export default GratuityInfo;
