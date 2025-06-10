import React, { useState } from "react";

const ROIFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Return on Investment (ROI)?",
      answer:
        "ROI is a financial metric used to measure the profitability of an investment. It is expressed as a percentage and calculated by dividing net profit by the cost of the investment.",
    },
    {
      question: "How is ROI calculated?",
      answer:
        "ROI = (Net Profit / Cost of Investment) × 100\n\nNet Profit = Final Value of Investment - Initial Cost.",
    },
    {
      question: "Why is ROI important?",
      answer:
        "ROI helps investors compare the efficiency and profitability of different investments, making it easier to decide where to put money.",
    },
    {
      question: "Does ROI consider the time period of investment?",
      answer:
        "Basic ROI does not consider time. For time-adjusted performance, metrics like annualized ROI or CAGR (Compound Annual Growth Rate) are used.",
    },
    {
      question: "Can ROI be negative?",
      answer:
        "Yes, a negative ROI indicates a loss on the investment.",
    },
    {
      question: "Is ROI the only metric to evaluate investments?",
      answer:
        "No, ROI is simple but does not capture risk, time value of money, or cash flow timing. Other metrics like IRR, NPV, and payback period provide deeper insights.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/roi-calculator#faq",
          "name": "ROI FAQs",
          "headline": "ROI FAQs",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
              "dateCreated": "2025-04-01",
            },
          })),
        })}
      </script>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - ROI Calculator
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
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="text-[14px] md:text-[15px] px-2 py-1 md:py-3 whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ROIFAQ;
