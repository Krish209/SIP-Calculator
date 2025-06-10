import React, { useState } from "react";

const KVPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "Can I withdraw my KVP before maturity?",
      answer:
        "Yes, premature withdrawal is allowed after 2.5 years (30 months), subject to applicable conditions.",
    },
    {
      question: "Is KVP taxable?",
      answer:
        "Yes, the interest earned on KVP is fully taxable according to your income tax slab.",
    },
    {
      question: "Is KVP better than Fixed Deposit (FD)?",
      answer:
        "KVP offers returns similar to fixed deposits but does not provide tax benefits. It may be suitable for long-term conservative investors.",
    },
    {
      question: "Can NRIs invest in KVP?",
      answer:
        "No, Non-Resident Indians (NRIs) are not eligible to invest in KVP. Only resident Indians can invest.",
    },
    {
      question: "Is the KVP calculator free to use?",
      answer:
        "Yes, KVP calculators available online are generally free and easy to access.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/kvp-calculator#faq",
          "name": "KVP FAQs",
          "headline": "KVP FAQs",
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
        Frequently Asked Questions - KVP
      </h2>

      {/* FAQ Section */}
      <div className="space-y-2">
        {questions.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden border-b"
          >
            <div
              className="flex justify-between items-center px-2 py-2 md:py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={`${activeIndex === index ? "" : "truncate"} text-[15px] md:text-base font-medium`}>
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

export default KVPFAQ;
