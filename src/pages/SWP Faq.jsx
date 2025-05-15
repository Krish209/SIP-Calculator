import React, { useState } from "react";

const SWPFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is SWP (Systematic Withdrawal Plan)?",
      answer:
        "A Systematic Withdrawal Plan (SWP) allows investors to withdraw a fixed amount of money from their mutual fund investments at regular intervals, providing a steady stream of income. It's the reverse of a Systematic Investment Plan (SIP), where you invest regularly into mutual funds.",
    },
    {
      question: "How does SWP work?",
      answer:
        "With SWP, you invest a lump sum in a mutual fund and then choose to withdraw a fixed amount periodically (e.g., monthly, quarterly, or annually). The mutual fund house redeems a certain number of units to meet your withdrawal request, and the remaining units stay invested in the fund.",
    },
    {
      question: "Can I change the withdrawal amount or frequency in SWP?",
      answer:
        "Yes, you can modify the withdrawal amount or frequency of SWP based on your needs. Most mutual fund platforms allow you to update your SWP instructions anytime.",
    },
    {
      question: "Is SWP taxable?",
      answer:
        "Yes, SWP withdrawals are subject to tax. The tax depends on the type of mutual fund (equity or debt) and the duration of your investment. For equity funds, long-term capital gains (LTCG) tax applies if held for more than a year, and short-term capital gains (STCG) tax is applicable if sold before a year.",
    },
    {
      question: "Can I use SWP for retirement planning?",
      answer:
        "Yes, SWP is an excellent tool for retirement planning. It allows you to create a steady stream of income post-retirement by withdrawing fixed amounts from your mutual fund investments. SWP helps retirees manage their expenses while preserving their capital for future growth.",
    },
    {
      question: "How can I set up an SWP?",
      answer:
        "You can set up an SWP by investing in a mutual fund and choosing the SWP option. You will need to specify the amount and frequency of withdrawals. This can typically be done via the mutual fund's website, online investment platforms, or through your financial advisor.",
    },
    {
      question: "What happens if my mutual fund performs poorly during SWP?",
      answer:
        "If the mutual fund's performance is poor, the value of your investment may decline, and you may need to redeem more units to maintain your withdrawal amount. This could potentially deplete your corpus faster, especially if the market continues to underperform.",
    },
    {
      question: "Is there a minimum amount for SWP?",
      answer:
        "Most mutual fund houses have a minimum SWP amount requirement, usually around ₹500 or ₹1,000 per month, depending on the scheme. Always check with your fund house for specific details.",
    },
    {
      question: "Can I stop my SWP anytime?",
      answer:
        "Yes, you can stop your SWP at any time. Simply inform the mutual fund house or update your SWP preferences through the platform. However, make sure to review the potential impact of stopping the SWP on your long-term financial goals.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SWPFAQ;
