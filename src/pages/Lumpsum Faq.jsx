import { useState } from "react";

const LumpsumFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is a lump sum investment?",
      answer:
        "A lump sum investment is a one-time payment made into mutual funds or other financial instruments instead of spreading investments over time.",
    },
    {
      question: "Who should choose lump sum investing?",
      answer:
        "Lump sum investing suits those with a substantial amount of money ready to invest and who are comfortable with market fluctuations.",
    },
    {
      question: "Is lump sum better than SIP?",
      answer:
        "Lump sum can yield higher returns if invested during market lows, while SIPs spread risk by investing regularly over time. The best option depends on your financial goals and market conditions.",
    },
    {
      question: "What are the risks of lump sum investing?",
      answer:
        "The main risk is market timing—investing at market highs may cause short-term losses. Lump sum investments are also more vulnerable to market volatility.",
    },
    {
      question: "Can I save tax with lump sum investments?",
      answer:
        "Yes, lump sum investments in ELSS mutual funds offer tax benefits under Section 80C, with deductions up to ₹1.5 lakh per year.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/lumpsum-calculator#faq",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
            },
          })),
        })}
      </script>

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
