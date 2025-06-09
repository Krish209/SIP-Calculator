import React, { useState } from "react";

const DividendYieldFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Dividend Yield?",
      answer:
        "Dividend Yield is a financial ratio that shows how much a company pays out in dividends each year relative to its stock price. It is expressed as a percentage.",
    },
    {
      question: "How is Dividend Yield calculated?",
      answer:
        "Dividend Yield = (Annual Dividends per Share / Price per Share) × 100",
    },
    {
      question: "Why is Dividend Yield important for investors?",
      answer:
        "Dividend Yield helps investors understand the income generated from their investment in stocks, making it useful for income-focused investors.",
    },
    {
      question: "Can Dividend Yield change over time?",
      answer:
        "Yes, Dividend Yield changes with fluctuations in stock price and dividend payouts. If the stock price drops and dividend remains same, yield increases, and vice versa.",
    },
    {
      question: "Is a higher Dividend Yield always better?",
      answer:
        "Not necessarily. A very high yield could indicate company distress or a falling stock price. It’s important to assess company fundamentals as well.",
    },
    {
      question: "How does Dividend Yield differ from Dividend Payout Ratio?",
      answer:
        "Dividend Yield measures dividend relative to stock price, while Dividend Payout Ratio measures dividends relative to company earnings.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/dividend-yield-calculator#faq",
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
        Frequently Asked Questions - Dividend Yield Calculator
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

export default DividendYieldFAQ;
