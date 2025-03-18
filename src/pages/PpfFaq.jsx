import React, { useState } from "react";

const PPFFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the minimum investment required to active a PPF account?",
      answer: "The minimum annual investment required to active a PPF account is ₹500.",
    },
    {
      question: "Is there any limit on the maximum amount I can invest in PPF?",
      answer: "Yes, the maximum annual contribution to a PPF account is ₹1.5 lakh. Contributions above this limit are not allowed.",
    },
    {
      question: "Can I withdraw from my PPF account before maturity?",
      answer: "Partial withdrawals are allowed from the 6th year of the account, but early closure of the account is generally not allowed.",
    },
    {
      question: "Can I take a loan against my PPF balance?",
      answer: "Yes, you can take a loan against your PPF balance from the 3rd year. The loan amount can be up to 25% of the balance at the end of the previous year.",
    },
    {
      question: "What happens after the maturity period of PPF?",
      answer: "After the initial 15-year period, you can either withdraw the entire balance or extend the account in blocks of 5 years.",
    },
    {
      question: "What is the interest rate on PPF?",
      answer: "The interest rate on PPF is set by the government and is revised quarterly. The interest earned is tax-free.",
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPFFAQ;
