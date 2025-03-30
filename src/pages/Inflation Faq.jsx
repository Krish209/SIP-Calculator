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
        "Inflation can be caused by various factors, including:\n1. Demand-pull inflation: When demand for goods and services exceeds supply.\n2. Cost-push inflation: When the cost of production increases, leading to higher prices.\n3. Built-in inflation: When businesses increase prices due to previous inflation, leading to higher wage demands.",
    },
    {
      question: "How is inflation measured?",
      answer:
        "Inflation is typically measured using a price index. The Consumer Price Index (CPI) and the Producer Price Index (PPI) are the most commonly used indices. CPI tracks the average change over time in the prices paid by consumers for a basket of goods and services, while PPI measures price changes at the wholesale level.",
    },
    {
      question: "What are the effects of inflation?",
      answer:
        "Inflation can have both positive and negative effects:\n\n1. Negative Effects:\n  - Reduces purchasing power, making goods and services more expensive.\n  - Creates uncertainty in the economy, affecting investment and savings.\n  - Fixed incomes lose value as prices rise.\n\n2. Positive Effects:\n  - Helps reduce the real value of debt (for borrowers).\n  - Encourages spending and investment, as people may try to buy goods before prices rise further.",
    },
    {
      question: "What is hyperinflation?",
      answer:
        "Hyperinflation is an extremely high and typically accelerating inflation rate, often exceeding 50% per month. It leads to a collapse in the value of currency, making basic goods and services unaffordable for most people. Hyperinflation usually occurs due to a collapse in a country's monetary system or uncontrolled money printing.",
    },
    {
      question: "What is deflation?",
      answer:
        "Deflation is the opposite of inflation, characterized by a decrease in the general price level of goods and services. While deflation might sound like a good thing, it can lead to lower wages, higher unemployment, and an economic recession as consumers and businesses postpone spending and investments.",
    },
    {
      question: "What is the relationship between inflation and interest rates?",
      answer:
        "Inflation and interest rates are closely related. Central banks, such as the Reserve Bank of India (RBI) or the Federal Reserve, often raise interest rates to combat high inflation. Higher interest rates make borrowing more expensive and saving more attractive, which can reduce spending and investment, thus lowering inflation. On the other hand, low-interest rates can increase inflation by encouraging borrowing and spending.",
    },
    {
      question: "What is a good inflation rate?",
      answer:
        "A moderate inflation rate of around 2-3% per year is generally considered healthy for an economy. It indicates steady growth and encourages spending and investment. Central banks usually target a low and stable inflation rate to ensure economic stability and growth.",
    },
    {
      question: "How does inflation affect my savings?",
      answer:
        "Inflation erodes the purchasing power of your savings. If your savings do not earn an interest rate that matches or exceeds the inflation rate, the real value of your savings declines over time. For example, if inflation is 6% and your savings account offers 4% interest, the real value of your savings is effectively losing 2% each year.",
    },
    {
      question: "Can inflation be controlled?",
      answer:
        "Yes, inflation can be controlled by central banks using monetary policies. By adjusting interest rates, controlling money supply, and sometimes using fiscal policies, central banks aim to keep inflation in check. However, controlling inflation is a complex task that depends on various external and internal economic factors.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InflationFAQ;
