import React, { useState } from "react";

const SimpleInterestFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Simple Interest?",
      answer:
        "Simple Interest is a method of calculating the interest charged or earned on a principal amount over a certain period of time. The interest is calculated only on the principal amount, not on the interest accumulated over time.",
    },

    {
      question:
        "What is the difference between Simple Interest and Compound Interest?",
      answer:
        "The key difference between Simple Interest and Compound Interest is:\n\n1. Simple Interest: Interest is calculated only on the principal amount throughout the loan or investment period.\n2. Compound Interest: Interest is calculated on both the principal amount and the accumulated interest. This means the interest earned or paid is added to the principal for future interest calculations.",
    },

    {
      question: "What is the meaning of Rate of Interest?",
      answer:
        "The Rate of Interest is the percentage charged or paid on the principal amount for a specific time period. It is typically expressed as an annual percentage rate (APR). The rate may vary depending on the investment or loan type and the terms agreed upon.",
    },
    
    {
      question: "Can I calculate Simple Interest for part of a year?",
      answer:
        "Yes, Simple Interest can be calculated for part of a year. If the time is in months or days, you just need to convert it to a fraction of a year. For example, if the time period is 6 months, you would use 0.5 years in the formula:\n\nSI = (Principal × Rate × Time) / 100\n\nFor days, you would calculate the fraction of the year (e.g., 30 days / 365 days).",
    },
    {
      question: "Is Simple Interest always calculated annually?",
      answer:
        "No, Simple Interest is not always calculated annually. While interest is often calculated on an annual basis, it can also be calculated monthly, quarterly, or for any other time period. In such cases, the time period in the formula should reflect the number of years, months, or days as appropriate.",
    },
    {
      question: "Can Simple Interest be negative?",
      answer:
        "Simple Interest is usually a positive value because it represents the cost of borrowing or the return on investment. However, in special cases (e.g., negative interest rates in the financial market), the interest could be negative, meaning you might owe less money or earn less from your investment.",
    },
    {
      question: "What are the advantages of Simple Interest?",
      answer:
        "The advantages of Simple Interest include:\n\n1. Simplicity: The calculation is straightforward and easy to understand.\n2. Fixed Payments: For loans or investments, the amount of interest remains fixed over the term.\n3. Easy to Plan: Since the interest does not compound, it is easier to calculate the total interest and repayment amounts.\n4. Lower Cost of Borrowing: Compared to compound interest, the cost of borrowing is generally lower in simple interest.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Simple Interest
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

export default SimpleInterestFAQ;
