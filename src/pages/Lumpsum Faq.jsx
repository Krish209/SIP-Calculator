import { useState } from "react";

const LumpsumFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a lump sum investment?",
      answer:
        "A one-time investment of a large amount into mutual funds or other financial instruments, rather than investing in smaller amounts over time.",
    },
    {
      question: "Who should choose lump sum investing?",
      answer:
        "It’s ideal for investors with a sizable amount of money ready to invest and those comfortable with market fluctuations.",
    },
    {
      question: "Is lump sum better than SIP?",
      answer:
        "Lump sum may offer higher returns if invested during market lows, while SIP spreads risk over time. The best choice depends on your financial situation and market conditions.",
    },
    {
      question: "What are the risks of lump sum investing?",
      answer:
        "The main risk is market timing—investing during a high may lead to short-term losses. It’s also more exposed to market volatility.",
    },
    {
      question: "Can I save tax with lump sum investments?",
      answer:
        "Yes, investing a lump sum in ELSS mutual funds can provide tax benefits under Section 80C, with a deduction limit of ₹1.5 lakh per year.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Lumpsum
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

export default LumpsumFAQ;
