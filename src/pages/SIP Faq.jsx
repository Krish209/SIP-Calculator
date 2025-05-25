import { useState } from "react";

const SIPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the best time to start an SIP?",
      answer:
        "The best time to start a Systematic Investment Plan (SIP) is now. Starting early gives your investments more time to grow through compounding.",
    },
    {
      question: "Can I stop or change my SIP?",
      answer:
        "Yes, SIPs are flexible. You can modify or stop your SIP at any time, including changing the amount, fund, or investment period.",
    },
    {
      question: "What are the benefits of SIP?",
      answer:
        "SIP benefits include disciplined investing, compounding returns, rupee cost averaging, and low entry points—starting from as little as ₹500.",
    },
    {
      question: "Is SIP safe?",
      answer:
        "SIP investments are subject to market risks. However, SIPs promote long-term investing, which helps manage volatility and reduce risk over time.",
    },
    {
      question: "Can I invest in multiple SIPs?",
      answer:
        "Yes, you can invest in multiple SIPs across different mutual funds to diversify your portfolio based on your goals and risk appetite.",
    },
    {
      question: "What happens if I miss an SIP payment?",
      answer:
        "Missing an SIP payment usually results in a skipped installment. No penalties are charged, and your SIP continues from the next scheduled date.",
    },
    {
      question: "What is the minimum amount required for SIP?",
      answer:
        "Most mutual funds allow you to start an SIP with a minimum of ₹500 per month, making it accessible to all types of investors.",
    },
    {
      question: "Is SIP a long-term investment?",
      answer:
        "Yes, SIP is best suited for long-term goals. It allows your investment to benefit from compounding and market fluctuations over time.",
    },
    {
      question: "What is the tax benefit of investing in SIP?",
      answer:
        "SIPs in ELSS (Equity Linked Savings Schemes) qualify for tax deductions up to ₹1.5 lakh under Section 80C of the Income Tax Act.",
    },
    {
      question: "Can I change the amount of my SIP investment?",
      answer:
        "Yes, you can increase or decrease your SIP amount anytime by modifying your mandate or creating a new SIP with the desired amount.",
    },
    {
      question: "What is NAV in SIP?",
      answer:
        "NAV (Net Asset Value) is the per-unit value of a mutual fund scheme. SIP units are allotted based on the NAV on the day of your investment.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - SIP
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

export default SIPFAQ;
