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
        "Yes, premature withdrawal is allowed after 2.5 years (30 months), with applicable conditions.",
    },
    {
      question: "Is KVP taxable?",
      answer: "Yes. Interest earned is fully taxable as per your income tax slab.",
    },
    {
      question: "Is KVP better than FD?",
      answer:
        "KVP offers similar returns to fixed deposits but without tax benefits. It may suit long-term conservative investors.",
    },
    {
      question: "Can NRIs invest in KVP?",
      answer:
        "No, Non-Resident Indians (NRIs) are not eligible to invest in KVP. Only resident Indians are eligible.",
    },

    {
      question: "Is the KVP calculator free to use?",
      answer:
        "Yes, KVP calculators available online are generally free and accessible to all.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - KVP
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KVPFAQ;
