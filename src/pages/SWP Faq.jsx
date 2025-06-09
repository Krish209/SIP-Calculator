import React, { useState } from "react";

const SWPFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is SWP (Systematic Withdrawal Plan)?",
      answer:
        "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund investment at regular intervals. It provides steady income and is the reverse of a Systematic Investment Plan (SIP).",
    },
    {
      question: "How does SWP work?",
      answer:
        "In SWP, you invest a lump sum in a mutual fund and schedule fixed periodic withdrawals—monthly, quarterly, or annually. The fund redeems the required number of units, while the remaining investment continues to earn returns.",
    },
    {
      question: "Can I change the withdrawal amount or frequency in SWP?",
      answer:
        "Yes, most mutual fund platforms allow you to modify the withdrawal amount and frequency at any time based on your financial needs.",
    },
    {
      question: "Is SWP taxable?",
      answer:
        "Yes. SWP withdrawals are subject to capital gains tax. For equity funds, LTCG tax applies if held for over 1 year, while STCG tax applies for shorter periods. Taxation varies for debt funds based on holding period and fund type.",
    },
    {
      question: "Can I use SWP for retirement planning?",
      answer:
        "Absolutely. SWP is widely used in retirement planning to generate a regular income stream while keeping the remaining capital invested for long-term growth.",
    },
    {
      question: "How can I set up an SWP?",
      answer:
        "You can start an SWP by investing a lump sum in a mutual fund and selecting the SWP option via the fund’s website, investment platform, or financial advisor. Set the withdrawal amount and frequency as per your preference.",
    },
    {
      question: "What happens if my mutual fund performs poorly during SWP?",
      answer:
        "If fund performance declines, more units may be redeemed to maintain your withdrawal amount. This may reduce your corpus faster, especially in prolonged market downturns.",
    },
    {
      question: "Is there a minimum amount for SWP?",
      answer:
        "Yes, most mutual fund houses require a minimum SWP withdrawal amount—usually ₹500 or ₹1,000 per installment. Check with your fund for exact details.",
    },
    {
      question: "Can I stop my SWP anytime?",
      answer:
        "Yes, you can cancel or pause your SWP anytime by notifying your mutual fund or updating your request online. Ensure this aligns with your financial goals before making changes.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/swp-calculator#faq",
          "name": "SWP FAQs",
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
        Frequently Asked Questions - SWP
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

export default SWPFAQ;
