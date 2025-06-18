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
        "Gratuity is a lump sum payment made by an employer to an employee as appreciation for their service when they leave the organization, typically at retirement, resignation, or death.",
    },
    {
      question: "Who is eligible for Gratuity?",
      answer:
        "Employees with at least 5 years of continuous service qualify for gratuity. However, if termination is due to death or disability, gratuity is payable regardless of service length.",
    },
    {
      question: "How is Gratuity calculated?",
      answer:
        "Gratuity = (Last drawn salary × Years of service × 15) / 30.\nHere, 15 represents days of gratuity per year, and 30 is the number of days in a month.",
    },
    {
      question: "Is Gratuity taxable?",
      answer:
        "Gratuity is taxable but exemptions apply. Under the Payment of Gratuity Act, gratuity up to ₹20 lakh is tax-exempt, subject to conditions like tenure and amount received.",
    },
    {
      question: "What is the maximum limit of Gratuity?",
      answer:
        "The maximum tax-exempt gratuity limit is ₹20 lakh for employees covered by the Payment of Gratuity Act. Amounts above this are taxable.",
    },
    {
      question: "When is Gratuity paid?",
      answer:
        "Gratuity is paid within 30 days after an employee leaves the company, whether due to retirement, resignation, or termination. In case of death or disability, it is paid to the nominee.",
    },
    {
      question: "Can an employee forfeit Gratuity?",
      answer:
        "Yes, gratuity can be forfeited if the employee is dismissed for misconduct or fraud, or fails to complete 5 years of service. It is not forfeited for voluntary resignation, illness, or death.",
    },
    {
      question: "Can Gratuity be transferred between employers?",
      answer:
        "Yes, gratuity can be transferred if the employee switches jobs and has completed 5 years with the previous employer. The new employer facilitates the transfer upon request.",
    },
    {
      question: "How is Gratuity different from Provident Fund (PF)?",
      answer:
        "Gratuity is a one-time payment after 5 years of service, based on salary and tenure. PF is a retirement savings scheme with regular contributions from employer and employee, payable with interest upon retirement or resignation.",
    },
    {
      question: "Is Gratuity applicable to private sector employees?",
      answer:
        "Yes, private sector employees in organizations with 10 or more employees, who have 5 years of continuous service, are eligible under the Payment of Gratuity Act, 1972.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/gratuity-calculator#faq",
          "name": "Gratuity FAQs",
          "headline": "Gratuity FAQs",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
              "dateCreated": "2025-04-01",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".faq-answer"
              }
            },
          })),
        })}
      </script>

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
              <div className="faq-answer text-[14px] md:text-[15px] px-2 py-1 md:py-3">
                {item.answer.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GratuityFAQ;
