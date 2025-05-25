import React, { useState } from "react";

const PPFFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question:
        "What is the minimum investment required to activate a PPF account?",
      answer:
        "To activate a PPF account, you must invest a minimum of ₹500 annually.",
    },
    {
      question:
        "Is there a limit on the maximum amount I can invest in a PPF account?",
      answer:
        "Yes, the maximum annual investment allowed in a PPF account is ₹1.5 lakh. Any amount above this limit will not earn interest or tax benefits.",
    },
    {
      question: "Can I withdraw money from my PPF account before maturity?",
      answer:
        "Partial withdrawals are allowed from the 6th financial year. However, premature closure is permitted only under specific conditions such as serious illness or higher education.",
    },
    {
      question: "Can I take a loan against my PPF balance?",
      answer:
        "Yes, loans can be taken from the 3rd to the 6th financial year. The loan amount can be up to 25% of the balance at the end of the second preceding year.",
    },
    {
      question: "What happens after the maturity period of a PPF account?",
      answer:
        "After the 15-year maturity, you can withdraw the full balance or extend the account in blocks of 5 years, with or without further contributions.",
    },
    {
      question: "What is the interest rate on PPF?",
      answer:
        "The PPF interest rate is set by the Government of India and is revised quarterly. Interest earned is completely tax-free under Section 10 of the Income Tax Act.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - PPF
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

export default PPFFAQ;
