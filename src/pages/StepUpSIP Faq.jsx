import React, { useState } from "react";

const StepUpSIPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Step-Up SIP?",
      answer:
        "A Step-Up SIP (also called a Top-Up SIP) is a systematic investment plan where your SIP amount increases automatically at regular intervals—typically annually. It allows your investments to grow in line with your rising income.",
    },
    {
      question: "How is Step-Up SIP different from a regular SIP?",
      answer:
        "In a regular SIP, the investment amount stays fixed. A Step-Up SIP lets you increase your SIP amount periodically (e.g., by ₹500 or ₹1,000 every year), helping you build a larger corpus over time.",
    },
    {
      question: "What are the benefits of Step-Up SIP?",
      answer:
        "- Investing more as your income grows\n- Better protection against inflation\n- Accelerated wealth creation through compounding\n- No need for manual increases",
    },
    {
      question: "Can I choose the Step-Up amount and frequency?",
      answer:
        "Yes. Most mutual fund platforms let you customize both the Step-Up amount (e.g., ₹500, ₹1,000) and frequency (annually or semi-annually), based on your financial goals.",
    },
    {
      question: "Can I modify or stop the Step-Up SIP later?",
      answer:
        "Yes. You can pause, modify, or cancel the Step-Up option anytime via your mutual fund platform or directly with the Asset Management Company (AMC).",
    },
    {
      question: "Is Step-Up SIP good for long-term goals?",
      answer:
        "Yes. Step-Up SIPs are ideal for long-term financial goals like retirement planning, child’s education, or buying a home. They help you grow your investments steadily and effectively.",
    },
    {
      question: "How do I start a Step-Up SIP?",
      answer:
        "You can start a Step-Up SIP via mutual fund apps, websites, or AMCs. Choose your fund, set the initial SIP amount, then select the Step-Up option with the desired increment and frequency.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/step-up-sip-calculator#faq",
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
        Frequently Asked Questions - Step-Up SIP
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

export default StepUpSIPFAQ;
