import React, { useState } from "react";

const StepUpSIPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a Step-Up SIP?",
      answer:
        "A Step-Up SIP (also known as a Top-Up SIP) is a type of systematic investment plan where you can increase your SIP contribution automatically at regular intervals, such as annually. It helps you grow your investments as your income increases.",
    },
    {
      question: "How is Step-Up SIP different from a regular SIP?",
      answer:
        "In a regular SIP, the monthly investment amount remains constant. In a Step-Up SIP, you can set a fixed increment (like ₹500 or ₹1,000) that increases your SIP amount at fixed intervals, usually yearly, which helps in building a larger corpus.",
    },
    {
      question: "What are the benefits of Step-Up SIP?",
      answer:
        "Step-Up SIP helps you invest more over time without manual effort. It aligns with your increasing income, helps combat inflation, builds a larger corpus, and takes advantage of compounding more effectively than a regular SIP.",
    },
    {
      question: "Can I choose the Step-Up amount and frequency?",
      answer:
        "Yes. Most mutual fund platforms allow you to customize both the Step-Up amount (e.g., ₹500, ₹1000) and the frequency (e.g., yearly, half-yearly) based on your financial goals.",
    },
    {
      question: "Can I modify or stop the Step-Up SIP later?",
      answer:
        "Yes. You can modify, pause, or cancel the Step-Up feature at any time through your mutual fund platform or AMC. It provides complete flexibility.",
    },
    {
      question: "Is Step-Up SIP good for long-term goals?",
      answer:
        "Absolutely. Step-Up SIPs are ideal for long-term financial goals like retirement, children's education, or buying a home. They help build a larger investment corpus in a disciplined and scalable way.",
    },
    {
      question: "How do I start a Step-Up SIP?",
      answer:
        "You can start a Step-Up SIP through mutual fund apps, websites, or directly via AMCs. During setup, choose a fund, enter the starting SIP amount, then select the Step-Up option with desired increment and frequency.",
    },
    {
      question: "Is there a calculator to plan Step-Up SIP returns?",
      answer:
        "Yes. Many online Step-Up SIP calculators let you input your base amount, increment, frequency, duration, and expected return to estimate your future corpus. These tools are free and easy to use.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Step-Up SIP
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

export default StepUpSIPFAQ;
