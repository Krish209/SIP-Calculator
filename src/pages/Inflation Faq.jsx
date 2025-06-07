import React, { useState } from "react";

const InflationFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What causes inflation?",
      answer:
        "1. Demand-pull inflation: When demand exceeds supply.\n2. Cost-push inflation: When production costs rise, leading to higher prices.\n3. Built-in inflation: When businesses raise prices anticipating future inflation, causing wage increases.",
    },
    {
      question: "How is inflation measured?",
      answer:
        "Inflation is measured using price indices like the Consumer Price Index (CPI), which tracks changes in prices paid by consumers, and the Producer Price Index (PPI), which measures price changes at the wholesale level.",
    },
    {
      question: "What are the effects of inflation?",
      answer:
        "Inflation impacts the economy in several ways:\n\nNegative effects:\n- Reduces purchasing power.\n- Creates economic uncertainty.\n- Hurts those on fixed incomes.\n\nPositive effects:\n- Lowers real debt burden.\n- Encourages spending and investment.",
    },
    {
      question: "What is hyperinflation?",
      answer:
        "Hyperinflation is an extremely rapid inflation rate, often over 50% per month, causing currency collapse and making basic goods unaffordable. It usually results from monetary system failure or excessive money printing.",
    },
    {
      question: "What is deflation?",
      answer:
        "Deflation is a sustained drop in general prices, which can lead to lower wages, higher unemployment, and economic recession as spending and investments are delayed.",
    },
    {
      question:
        "What is the relationship between inflation and interest rates?",
      answer:
        "Central banks raise interest rates to curb inflation by making borrowing costlier and saving more attractive, reducing spending. Conversely, low interest rates can boost inflation by encouraging borrowing and spending.",
    },
    {
      question: "What is a good inflation rate?",
      answer:
        "A moderate inflation rate of 2-3% annually is considered healthy, promoting steady economic growth by encouraging spending and investment.",
    },
    {
      question: "How does inflation affect my savings?",
      answer:
        "Inflation reduces the real value of savings if interest earned is lower than inflation. For example, 6% inflation with 4% interest means a 2% loss in purchasing power each year.",
    },
    {
      question: "Can inflation be controlled?",
      answer:
        "Yes, central banks control inflation using monetary policies like adjusting interest rates and regulating money supply. However, managing inflation depends on many complex economic factors.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/inflation-calculator#faq",
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
        Frequently Asked Questions - Inflation
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

export default InflationFAQ;
