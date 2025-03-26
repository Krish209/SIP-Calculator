import React from "react";

function GratuityInfo() {
  return (
    <div className="p-1 sm:p-0 text-primary text-[15px] md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center mb-6 text-blue-600">
        Gratuity- A Comprehensive Guide
      </h1>

      {/* Introduction Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
           What is Gratuity?
        </h2>
        <p className="text-gray-">
          Gratuity is a form of financial benefit provided by an employer to an
          employee as a reward for long-term service. In India, it is governed
          by the{" "}
          <span className="font-semibold">Payment of Gratuity Act, 1972</span>,
          which ensures that employees who have worked for an organization for a
          certain number of years are entitled to a lump sum payment once they
          leave the company, either due to retirement, resignation, or other
          reasons such as death or disability.
        </p>
      </section>

      {/* Eligibility Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Eligibility for Gratuity
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold">Minimum Service Period:</span> The
            employee must have completed a minimum of 5 years of continuous
            service with the same employer.
          </li>
          <li>
            <span className="font-semibold">Termination of Employment:</span>
            Gratuity is payable on resignation, retirement, or death/disability.
          </li>
          <li>
            <span className="font-semibold">Exclusions:</span> Employees working
            in seasonal or temporary establishments or unorganized sectors may
            not be eligible for gratuity.
          </li>
        </ul>
      </section>

      {/* Calculation Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          How Gratuity is Calculated
        </h2>
        <p className="text-gray-600">
          Gratuity is calculated based on the following formula:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-lg font-semibold text-gray-700 mt-4 mb-4">
          Gratuity = (Last Drawn Salary × Years of Service × 15) / 30
        </div>
        <p className="text-gray-600">
          <span className="font-semibold">Last Drawn Salary:</span> The salary
          the employee was drawing at the time of leaving the company, which
          includes basic salary and dearness allowance (DA).
        </p>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Years of Service:</span> The number of
          completed years of service with the organization.
        </p>
        <p className="text-gray-600 mt-2">
          The constant multiplier used in this formula is 15, and 30 is the
          assumed number of days in a month.
        </p>
      </section>

      {/* Example Calculation Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Example Calculation
        </h2>
        <p className="text-gray-600">Let’s say an employee:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
          <li>Has completed 10 years of service in the company.</li>
          <li>The last drawn salary (basic + DA) is ₹40,000.</li>
        </ul>
        <p className="text-gray-600 mt-4">The gratuity can be calculated as:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-lg font-semibold text-gray-700 mt-4 mb-4">
          Gratuity = (40,000 × 10 × 15) / 30 = ₹2,00,000
        </div>
      </section>

      {/* Taxation Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Taxation on Gratuity
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold">For Government Employees:</span>
            Gratuity received by government employees is fully exempt from tax.
          </li>
          <li>
            <span className="font-semibold">For Private Sector Employees:</span>
            If the amount of gratuity is below ₹10,00,000, it is exempt from
            tax. However, if the gratuity amount exceeds ₹10,00,000, the excess
            amount is taxable.
          </li>
        </ul>
      </section>

      {/* Death or Disability Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Gratuity in Case of Death or Disability
        </h2>
        <p className="text-gray-600">
          If an employee passes away or becomes physically disabled before
          completing the required years of service, the gratuity will be paid to
          the nominee or legal heir of the employee, even if they haven’t
          completed 5 years of service.
        </p>
      </section>

      {/* Gratuity Payment Process Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Gratuity Payment Process
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold">Application for Gratuity:</span>
            The employee must submit an application for gratuity to the
            employer.
          </li>
          <li>
            <span className="font-semibold">Verification:</span> The employer
            verifies the service record of the employee and confirms
            eligibility.
          </li>
          <li>
            <span className="font-semibold">Payment:</span> The gratuity amount
            is paid as a lump sum.
          </li>
        </ul>
      </section>

      {/* Employer's Obligation Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Employer’s Obligation
        </h2>
        <p className="text-gray-600">
          Employers are obligated under the{" "}
          <span className="font-semibold">Payment of Gratuity Act</span> to
          provide gratuity to their employees if they meet the eligibility
          conditions. Employers should:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
          <li>Maintain records of employees' service duration.</li>
          <li>Ensure timely payment of gratuity.</li>
          <li>Provide legal recourse if gratuity is not paid.</li>
        </ul>
      </section>

      {/* Key Points Section */}
      <section className="my-4 md:my-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Key Points to Remember
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Gratuity is not a pension scheme; it’s a one-time payment.</li>
          <li>Employers contribute to a Gratuity Fund to ensure payment.</li>
          <li>Employees can seek legal help if gratuity is denied.</li>
        </ul>
      </section>
    </div>
  );
}

export default GratuityInfo;
