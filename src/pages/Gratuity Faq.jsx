import React, { useState } from "react";

const GratuityFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Gratuity?",
      answer:
        "Gratuity is a lump sum amount paid by an employer to an employee as a token of appreciation for the services rendered when the employee leaves the organization after a certain period of service. It is typically provided at the time of retirement, resignation, or death.",
    },
    {
      question: "Who is eligible for Gratuity?",
      answer:
        "Employees who have completed at least 5 years of continuous service in an organization are eligible for gratuity. However, if an employee's termination is due to death or disability, gratuity is payable regardless of the length of service.",
    },
    {
      question: "How is Gratuity calculated?",
      answer:
        "Gratuity is calculated based on the employee's last drawn salary and the number of years of service. The formula for calculating gratuity is:\n\nGratuity = (Last drawn salary × Number of years of service × 15) / 30.\n\nHere, 15 represents the days of gratuity for each completed year of service, and 30 is the standard number of days in a month.",
    },
    {
      question: "Is Gratuity taxable?",
      answer:
        "Yes, gratuity is taxable under the Income Tax Act; however, there are exemptions available. For employees covered under the Payment of Gratuity Act, gratuity is exempt from tax up to ₹20 lakh. The exemption is subject to conditions such as the employee's tenure and the amount of gratuity received.",
    },
    {
      question: "What is the maximum limit of Gratuity?",
      answer:
        "The maximum limit of gratuity is ₹20 lakh. Any gratuity amount exceeding this limit is taxable as per the prevailing tax laws. The limit of ₹20 lakh applies to employees covered under the Payment of Gratuity Act, 1972.",
    },
    {
      question: "When is Gratuity paid?",
      answer:
        "Gratuity is typically paid when an employee leaves the company, either through retirement, resignation, or termination. It is generally paid within 30 days of the employee's last working day with the company. In case of death or disability, gratuity is paid to the nominee or legal heirs.",
    },
    {
      question: "Can an employee forfeit Gratuity?",
      answer:
        "Yes, an employee's gratuity can be forfeited if they are dismissed from service due to misconduct, fraud, or if they fail to complete the minimum 5 years of service. However, if the termination is voluntary or due to reasons like illness or death, gratuity is not forfeited.",
    },
    {
      question: "Can Gratuity be transferred between employers?",
      answer:
        "Yes, gratuity can be transferred between employers. If an employee switches jobs and has already completed a minimum of 5 years of service with the previous employer, they can transfer their gratuity balance to the new employer. The employee must request the transfer, and the new employer will facilitate the process.",
    },
    {
      question: "How is Gratuity different from Provident Fund (PF)?",
      answer:
        "Gratuity and Provident Fund (PF) are both forms of employee benefits, but they differ in terms of purpose and calculation:\n\n1. Gratuity is paid when an employee leaves the company after 5 years of service. It is a one-time payment based on the salary and years of service.\n2. Provident Fund (PF) is a retirement savings scheme where both the employer and employee contribute regularly. The employee receives the accumulated amount, along with interest, at the time of retirement or resignation.",
    },
    {
      question: "Is Gratuity applicable to private sector employees?",
      answer:
        "Yes, gratuity is applicable to private sector employees as well. The Payment of Gratuity Act, 1972, covers employees of establishments with 10 or more employees. Private sector employees who meet the criteria of minimum 5 years of continuous service are entitled to gratuity.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Gratuity
      </h2>

      {/* FAQ Section */}
      <div className="space-y-2">
        {questions.map((item, index) => (
          <div key={index} className="overflow-hidden border-b">
            <div
              className="flex justify-between items-center px-2 py-2 md:py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`${
                  activeIndex === index ? "" : "truncate"
                } text-[15px] md:text-base font-medium`}
              >
                {item.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="text-[14px] md:text-[15px] px-2 py-1 md:py-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GratuityFAQ;
