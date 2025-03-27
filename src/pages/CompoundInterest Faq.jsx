import React, { useState } from "react";

const CompoundInterestFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Compound Interest?",
      answer:
        "Compound Interest is the interest calculated on both the principal amount and the accumulated interest. This means that interest is calculated on the initial investment as well as the interest that has been added to it over time, resulting in 'interest on interest'.",
    },
    {
      question: "How is Compound Interest calculated?",
      answer:
        "The formula for Compound Interest is:\n\n**Compound Interest (CI) = P × (1 + r/n)^(nt) - P**\n\nWhere:\n- **P** = Principal amount\n- **r** = Annual interest rate (in decimal)\n- **n** = Number of times interest is compounded per year\n- **t** = Time the money is invested or borrowed for, in years\n\nThe compound interest is the difference between the total amount and the principal.",
    },
    {
      question: "What is the difference between Simple Interest and Compound Interest?",
      answer:
        "The key difference between Simple Interest and Compound Interest is:\n\n1. **Simple Interest**: Interest is calculated only on the initial principal.\n2. **Compound Interest**: Interest is calculated on both the principal and the accumulated interest, leading to 'interest on interest'.",
    },
    {
      question: "How is Compound Interest different from Simple Interest?",
      answer:
        "The primary difference is that **Simple Interest** is calculated only on the principal amount, while **Compound Interest** is calculated on the principal plus any interest that has been added to it. This makes Compound Interest grow exponentially over time, whereas Simple Interest grows linearly.",
    },
    {
      question: "What is the formula for Compound Interest?",
      answer:
        "The formula to calculate Compound Interest is:\n\n**Compound Interest (CI) = P × (1 + r/n)^(nt) - P**\n\nWhere:\n- **P** = Principal amount\n- **r** = Annual interest rate\n- **n** = Number of compounding periods per year\n- **t** = Time period in years\n\nThis formula gives you the interest earned over a specified time period.",
    },
    {
      question: "What is the meaning of compounding frequency?",
      answer:
        "Compounding frequency refers to how often the interest is calculated and added to the principal. Common compounding frequencies include:\n\n1. **Annually** (once per year)\n2. **Semi-Annually** (twice per year)\n3. **Quarterly** (four times per year)\n4. **Monthly** (12 times per year)\n5. **Daily** (365 times per year)\n\nThe more frequent the compounding, the higher the amount of interest accumulated over time.",
    },
    {
      question: "How does Compound Interest work?",
      answer:
        "Compound Interest works by adding the interest earned in each period to the principal amount. This means that in subsequent periods, you earn interest not just on your original principal, but also on the interest that has already been added to the principal. Over time, this causes the investment or loan balance to grow faster than with simple interest.",
    },
    {
      question: "How do you calculate the total amount with Compound Interest?",
      answer:
        "To calculate the total amount (A) after compound interest, use the formula:\n\n**A = P × (1 + r/n)^(nt)**\n\nWhere:\n- P = Principal amount\n- r = Interest rate\n- n = Number of compounding periods per year\n- t = Time in years\n\nOnce you have calculated the total amount (A), subtract the principal (P) to get the compound interest.",
    },
    {
      question: "What is compound interest used for?",
      answer:
        "Compound Interest is commonly used for investments, loans, savings accounts, and credit cards. It helps investors grow their money over time by earning interest on both their principal and accumulated interest. It is also used to calculate the interest on loans, where the borrower must pay interest on the interest as well as the principal.",
    },
    {
      question: "Can Compound Interest be negative?",
      answer:
        "Compound Interest is generally positive, but in certain situations, such as with negative interest rates, compound interest could theoretically be negative. In such cases, instead of growing, the balance would decrease over time.",
    },
    {
      question: "What are the advantages of Compound Interest?",
      answer:
        "Some of the key advantages of Compound Interest include:\n\n1. **Higher Returns**: Compound Interest allows your money to grow faster than with Simple Interest, as it generates interest on the interest.\n2. **Time Factor**: The longer the time period, the greater the impact of Compound Interest.\n3. **Compounding Frequency**: More frequent compounding (such as monthly or daily) can lead to higher returns.\n4. **Wealth Building**: It’s a powerful tool for long-term wealth accumulation, especially for retirement savings or investments.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Compound Interest
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

export default CompoundInterestFAQ;