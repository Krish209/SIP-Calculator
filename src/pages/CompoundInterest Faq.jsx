import React, { useState } from "react";

const CompoundInterestFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
  {
    question: "What is Compound Interest?",
    answer:
      "Compound Interest is the interest calculated on both the principal amount and the accumulated interest, meaning you earn 'interest on interest' over time.",
  },
  {
    question: "What is the difference between Simple Interest and Compound Interest?",
    answer:
      "Simple Interest is calculated only on the principal, while Compound Interest is calculated on the principal plus accumulated interest, causing exponential growth over time.",
  },
  {
    question: "What is the meaning of compounding frequency?",
    answer:
      "Compounding frequency is how often interest is added to the principal. Common frequencies are annually, semi-annually, quarterly, monthly, and daily. More frequent compounding leads to higher returns.",
  },
  {
    question: "How does Compound Interest work?",
    answer:
      "Compound Interest adds earned interest to the principal, so future interest is calculated on a larger amount, accelerating growth compared to simple interest.",
  },
  {
    question: "What is compound interest used for?",
    answer:
      "It is used in investments, loans, savings, and credit calculations, helping money grow faster by earning interest on accumulated interest.",
  },
  {
    question: "Can Compound Interest be negative?",
    answer:
      "While typically positive, compound interest can be negative in rare cases such as negative interest rate environments, causing the balance to shrink over time.",
  },
  {
    question: "What are the advantages of Compound Interest?",
    answer:
      "1. Higher returns compared to simple interest.\n2. Greater impact over longer time periods.\n3. Increased growth with more frequent compounding.\n4. Effective for long-term wealth building.",
  },
];

  return (
    <div className="mx-auto mb-4 text-primary">
      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/compound-interest-calculator#faq",
          "name": "Compound Interest FAQs",
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
        Frequently Asked Questions - Compound Interest
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
                {item.answer.split('\n').map((line, i) => (
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

export default CompoundInterestFAQ;