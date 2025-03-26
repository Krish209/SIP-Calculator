import { useState } from "react";

const SIPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the best time to start an SIP?",
      answer:
        "The best time to start an SIP is now! The earlier you start, the more time your money has to grow.",
    },
    {
      question: "Can I stop or change my SIP?",
      answer:
        "Yes, you can modify or stop your SIP anytime, allowing flexibility to change the amount, fund, or duration.",
    },
    {
      question: "What are the benefits of SIP?",
      answer:
        "SIP offers benefits such as disciplined investing, compounding, rupee cost averaging, and the ability to start with small amounts.",
    },
    {
      question: "Is SIP safe?",
      answer:
        "SIP investments are subject to market risks, but since they are long-term investments, they are generally considered safer compared to short-term investing.",
    },
    {
      question: "Can I invest in multiple SIPs?",
      answer:
        "Yes, you can invest in multiple SIPs across different mutual funds, depending on your financial goals and risk tolerance.",
    },
    {
      question: "What happens if I miss an SIP payment?",
      answer:
        "If you miss an SIP payment, your investment will be postponed until the next installment. You can also choose to stop or pause your SIP if needed.",
    },
    {
      question: "What is the minimum amount required for SIP?",
      answer:
        "The minimum amount for SIP can vary depending on the mutual fund you choose, but typically it can start from as low as ₹500.",
    },
    // { question: "How do I track my SIP performance?", answer: "You can track your SIP performance through your mutual fund provider's app, website, or by accessing your account statement." },
    // { question: "What is the difference between SIP and lump sum investment?", answer: "SIP involves investing a fixed amount at regular intervals, while lump sum investment involves investing a large sum of money all at once." },
    {
      question: "Is SIP a long-term investment?",
      answer:
        "Yes, SIP is typically considered a long-term investment strategy, allowing you to benefit from the power of compounding.",
    },
    {
      question: "What is the tax benefit of investing in SIP?",
      answer:
        "SIP investments in Equity Linked Savings Schemes (ELSS) are eligible for tax deductions under Section 80C of the Income Tax Act.",
    },
    {
      question: "Can I change the amount of my SIP investment?",
      answer:
        "Yes, you can increase or decrease your SIP amount at any time, based on your financial goals and preferences.",
    },
    // { question: "How does SIP help in rupee cost averaging?", answer: "Rupee cost averaging helps you buy more units when prices are low and fewer units when prices are high, thereby averaging out the cost of your investment over time." },
    // { question: "Can I withdraw money from my SIP investment anytime?", answer: "Yes, you can redeem your SIP units anytime based on the mutual fund’s redemption rules, but it's best to stay invested long-term for optimal growth." },
    {
      question: "What is NAV in SIP?",
      answer:
        "NAV (Net Asset Value) represents the market value of the assets held by a mutual fund. The number of units you own is based on the NAV at the time of investment.",
    },
    // { question: "Can I start SIP in a retirement plan?", answer: "Yes, you can start SIP in a retirement mutual fund plan to build a retirement corpus over time." }
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
