import React, { useState } from "react";

const NSCFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the National Savings Certificate (NSC)?",
      answer:
        "The NSC is a government-backed fixed-income investment scheme in India that offers assured returns and tax benefits under Section 80C. It is considered a low-risk savings option.",
    },
    {
      question: "Who is eligible to invest in NSC?",
      answer:
        "Any Indian resident individual, including minors above 10 years of age, can invest in NSC. However, NRIs (Non-Resident Indians) are not eligible.",
    },
    {
      question: "What is the minimum and maximum amount I can invest in NSC?",
      answer:
        "The minimum investment is ₹100, and there is no maximum limit. You can invest in multiples of ₹100 as per your convenience.",
    },
    {
      question: "How long is the investment term in NSC?",
      answer:
        "NSC currently comes with a fixed maturity period of 5 years. It offers guaranteed returns for the entire duration.",
    },
    {
      question: "Is the interest earned on NSC taxable?",
      answer:
        "Yes, interest on NSC is taxable. However, the interest accrued each year is considered reinvested and qualifies for tax deduction under Section 80C, up to ₹1.5 lakh annually.",
    },
    {
      question: "Can I transfer my NSC to someone else?",
      answer:
        "Yes, NSC can be transferred to another person after 6 months from the date of issue, through proper endorsement. Transfers are allowed to close family members or eligible individuals.",
    },
    {
      question: "Can I withdraw my NSC before maturity?",
      answer:
        "Premature withdrawal of NSC is not allowed except in exceptional cases like the holder's death or court order. However, you can use NSC as collateral for a secured loan.",
    },
    {
      question: "What happens after the maturity of my NSC?",
      answer:
        "On maturity, the invested amount along with accrued interest is paid out. You may choose to reinvest in a new NSC to continue earning fixed returns.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/nsc-calculator#faq",
          "name": "NSC FAQs",
          "headline": "NSC FAQs",
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
        Frequently Asked Questions - NSC
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

export default NSCFAQ;
