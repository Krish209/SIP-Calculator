import React, { useState } from "react";

const KVPFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
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
      
      {/* FAQ Schema (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        })}
      </script>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - KVP
      </h2>

      <div className="space-y-2" itemScope itemType="https://schema.org/FAQPage">
        {questions.map((item, index) => (
          <div 
            key={index} 
            className="overflow-hidden border-b"
            itemScope 
            itemProp="mainEntity" 
            itemType="https://schema.org/Question"
          >
            <div
              className="flex justify-between items-center px-2 py-2 md:py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
              itemProp="name"
            >
              <h3 className={`${activeIndex === index ? "" : "truncate"} text-[15px] md:text-base font-medium`}>
                {item.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div 
                className="text-[14px] md:text-[15px] px-2 py-1 md:py-3"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  {item.answer.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KVPFAQ;