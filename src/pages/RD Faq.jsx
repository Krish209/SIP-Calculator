import React, { useState } from "react";

const RDFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Recurring Deposit (RD)?",
      answer:
        "A Recurring Deposit (RD) is a fixed deposit investment where you deposit a fixed amount monthly for a set period. It encourages disciplined savings and earns interest, which is paid at maturity or as per the scheme.",
    },
    {
      question: "Who is eligible to open an RD account?",
      answer:
        "Indian residents, including minors with a guardian, can open an RD account. NRIs (Non-Resident Indians) may also open one under specific terms set by the bank.",
    },
    {
      question: "What is the minimum and maximum investment in RD?",
      answer:
        "The minimum monthly deposit typically starts from ₹100 to ₹500, depending on the bank. There’s usually no maximum limit, but deposits must be in multiples of ₹10 or ₹100, as per bank rules.",
    },
    {
      question: "What is the interest rate on an RD account?",
      answer:
        "Recurring Deposit interest rates generally range from 5.5% to 7.5% per annum and are fixed at the time of account opening. Rates may vary by bank and scheme.",
    },
    {
      question: "What is the typical tenure for an RD?",
      answer:
        "The tenure for an RD ranges from 6 months to 10 years. Most banks offer terms of 1 to 5 years as the standard investment duration.",
    },
    {
      question: "Is RD interest taxable in India?",
      answer:
        "Yes, interest earned on an RD is taxable as per your income tax slab. TDS is deducted if annual interest exceeds ₹40,000 (₹50,000 for senior citizens).",
    },
    {
      question: "Can I withdraw my RD before maturity?",
      answer:
        "Yes, premature RD withdrawal is allowed but may attract a penalty. Also, interest is recalculated at a lower rate based on the actual holding period.",
    },
    {
      question: "Is it possible to take a loan against an RD?",
      answer:
        "Yes, most banks allow loans up to 90% of the RD amount. The loan interest rate is slightly higher than the RD rate and is subject to bank terms.",
    },
    {
      question: "How is interest on RD calculated?",
      answer:
        "RD interest is calculated and compounded quarterly. It remains fixed throughout the tenure and is paid either monthly or at maturity, based on the scheme.",
    },
    {
      question: "What happens after an RD matures?",
      answer:
        "At maturity, the principal and interest are credited to your linked bank account. You can reinvest the amount or opt for automatic renewal, if offered by the bank.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/rd-calculator#faq",
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
        Frequently Asked Questions - RD
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

export default RDFAQ;
