import React, { useState } from "react";

const FDFaq = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the minimum and maximum tenure for an FD?",
      answer:
        "The minimum FD tenure is usually 7 days, and the maximum can go up to 10 years. Tenures vary by bank or financial institution. Choose a tenure based on your financial goals and liquidity needs.",
    },
    {
      question: "Can I withdraw my FD before maturity?",
      answer:
        "Yes, premature withdrawal is allowed but typically incurs a penalty fee.",
    },
    {
      question: "Are there any tax benefits for FD investments?",
      answer:
        "Yes. Tax-saving Fixed Deposits with a 5-year lock-in qualify for deductions under Section 80C of the Income Tax Act, up to ₹1.5 lakh annually. Interest earned is taxable and TDS applies if interest exceeds ₹40,000 (₹50,000 for senior citizens) per year.",
    },
    {
      question: "What happens if I miss the interest payout on my FD?",
      answer:
        "The bank usually credits the interest to your FD account. If interest payout is due at maturity, it is added to the principal, increasing the maturity amount.",
    },
    {
      question: "Can I take a loan against my Fixed Deposit?",
      answer:
        "Yes, most banks allow loans against your FD at competitive interest rates.",
    },
    {
      question: "How is FD interest paid?",
      answer:
        "Interest can be paid monthly, quarterly, annually, or at maturity. You can choose to receive payouts credited to your bank account or reinvest the interest, which will compound and pay out at maturity.",
    },
    {
      question: "Can I renew my FD after maturity?",
      answer:
        "Yes, you can renew your FD after maturity. Many banks offer auto-renewal, where principal and interest are reinvested for the same or a new tenure at current interest rates.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - FD
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
                {item.answer.split('\n').map((line, i) => (
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

export default FDFaq;
