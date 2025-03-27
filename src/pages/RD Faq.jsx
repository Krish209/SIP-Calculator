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
        "A Recurring Deposit (RD) is a type of fixed deposit where you contribute a fixed sum of money regularly for a specified period. It helps you save a fixed amount regularly, and the interest is paid at the end of the term or periodically as per the RD scheme.",
    },
    {
      question: "Who is eligible to open an RD account?",
      answer:
        "Any Indian resident individual, and minors can open a Recurring Deposit account. NRIs (Non-Resident Indians) may also open an RD account under specific conditions.",
    },
    {
      question: "What is the minimum and maximum amount I can invest in RD?",
      answer:
        "The minimum deposit amount for an RD account typically starts from ₹100 to ₹500 per month depending on the bank's terms. There is no upper limit on the amount you can invest, but the deposit amount should be in multiples of ₹10 or ₹100 depending on the bank.",
    },
    {
      question: "What is the interest rate on RD?",
      answer:
        "The interest rate on Recurring Deposits is set by the bank and is usually in the range of 5.5% to 7.5% per annum (subject to change). The interest rate is fixed at the time of opening the RD and does not change during the tenure.",
    },
    {
      question: "How long is the tenure for an RD?",
      answer:
        "The tenure for an RD usually ranges from 6 months to 10 years, depending on the bank and the scheme you choose. The most common tenure is 1 year to 5 years.",
    },
    {
      question: "Is the interest earned on RD taxable?",
      answer:
        "Yes, the interest earned on RD is taxable as per your income tax slab. However, TDS (Tax Deducted at Source) is applicable if the interest income exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year.",
    },
    {
      question: "Can I withdraw my RD before maturity?",
      answer:
        "Yes, you can withdraw your RD before maturity. However, premature withdrawal is subject to penalty charges, and the interest paid on the premature withdrawal is reduced based on the time you have invested in the deposit.",
    },
    {
      question: "Can I take a loan against my RD?",
      answer:
        "Yes, you can take a loan against your RD. Banks offer loans up to 90% of the RD balance, depending on their terms and conditions. The loan is usually provided at a rate higher than the RD interest rate.",
    },
    {
      question: "How is the RD interest calculated?",
      answer:
        "The interest on RD is calculated quarterly and compounded quarterly as well. The rate is fixed at the time of opening the RD, and the interest is paid either monthly or at maturity based on the bank's terms.",
    },
    {
      question: "What happens after the maturity of an RD?",
      answer:
        "After the RD matures, the principal amount along with the accumulated interest is credited to your account. You can either withdraw the amount or reinvest it in another RD or fixed deposit. The bank may also offer to automatically renew the RD for another term.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RDFAQ;
