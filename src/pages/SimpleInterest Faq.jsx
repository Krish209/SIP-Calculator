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
        "Simple Interest is a method of calculating interest on a fixed principal amount over a specific period. It is calculated only on the original principal, not on any accumulated interest.",
    },
    {
      question:
        "What is the difference between Simple Interest and Compound Interest?",
      answer:
        "1. Simple Interest: Calculated only on the principal amount throughout the investment or loan period.\n2. Compound Interest: Calculated on both the principal and the accumulated interest, resulting in higher returns or costs over time.",
    },
    {
      question: "What does Rate of Interest mean?",
      answer:
        "The Rate of Interest is the percentage charged or earned on a principal amount annually. It may vary depending on the type of investment or loan and the agreed terms.",
    },
    {
      question: "Can I calculate Simple Interest for a partial year?",
      answer:
        "Yes, you can calculate Simple Interest for part of a year. Convert the time into a fraction of a year, such as 6 months = 0.5 years. For days, divide the number of days by 365:\n\nSI = (Principal × Rate × Time) / 100",
    },
    {
      question: "Is Simple Interest always calculated annually?",
      answer:
        "No, Simple Interest can be calculated monthly, quarterly, or for any custom period. Adjust the time in the formula to reflect the correct time unit in years.",
    },
    {
      question: "Can Simple Interest be negative?",
      answer:
        "Simple Interest is usually positive, representing earnings or cost. However, in rare scenarios like negative interest rate environments, it can become negative, reducing what you owe or earn.",
    },
    {
      question: "What are the benefits of Simple Interest?",
      answer:
        "Benefits of Simple Interest include:\n\n1. Simple and easy to calculate.\n2. Fixed interest amount throughout the term.\n3. Clear and predictable repayments.\n4. Lower cost compared to compound interest in most cases.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/simple-interest-calculator#faq",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
            },
          })),
        })}
      </script>

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

export default SimpleInterestFAQ;
