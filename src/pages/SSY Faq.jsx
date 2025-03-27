import React, { useState } from "react";

const SSYFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is Sukanya Samriddhi Yojana (SSY)?",
      answer:
        "The Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme designed for the girl child in India. It aims to provide financial support for the education and marriage of the girl child. It offers one of the highest interest rates among government schemes, along with tax benefits.",
    },
    {
      question: "Who is eligible to open an SSY account?",
      answer:
        "An SSY account can be opened by the parents or legal guardians of a girl child who is under the age of 10 years. A maximum of two accounts can be opened for two different girls. The account can be opened at any post office or authorized bank.",
    },
    {
      question: "What is the minimum and maximum amount I can invest in SSY?",
      answer:
        "The minimum amount that can be invested in SSY is ₹250 per year. The maximum annual investment is ₹1.5 lakh. Contributions should be made for a minimum of 14 years, and the account matures after 21 years from the date of opening.",
    },
    {
      question: "What is the interest rate on SSY?",
      answer:
        "The interest rate on SSY is set by the Government of India and is revised quarterly. As of 2025, the interest rate is 7.6% per annum, compounded annually. This rate is one of the highest among small savings schemes in India.",
    },
    {
      question: "Can I withdraw from SSY before maturity?",
      answer:
        "Partial withdrawals are allowed from the 21st year of the account, but withdrawals before that are not permitted except in cases of extreme conditions like the death of the account holder. The account remains active even after the completion of 21 years, but no further contributions are required.",
    },
    {
      question: "Is the interest earned on SSY taxable?",
      answer:
        "No, the interest earned on SSY is tax-free. Additionally, investment made in the SSY are eligible for tax deductions under Section 80C of the Income Tax Act, up to ₹1.5 lakh. This makes it an attractive option for tax savings as well.",
    },
    {
      question: "What is the tenure of an SSY account?",
      answer:
        "The tenure of an SSY account is 21 years from the date of opening. However, contributions must be made for the first 14 years. After 14 years, the account continues to earn interest, but no further contributions are required.",
    },
    {
      question: "Can I transfer my SSY account to another post office or bank?",
      answer:
        "Yes, you can transfer your SSY account to another post office or bank. The transfer can be done through a simple application process, ensuring the continuity of the scheme across locations.",
    },
    {
      question: "Can I make the SSY account a joint account?",
      answer:
        "No, an SSY account can only be opened in the name of the girl child, and it must be operated by the parent or legal guardian. It is a single-holder account and cannot be a joint account.",
    },
    {
      question: "What happens after the maturity of SSY?",
      answer:
        "After 21 years, the account matures, and the balance can be withdrawn. The girl child can either withdraw the entire amount or choose to continue the account for further interest accrual (without contributions).",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - SSY
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

export default SSYFAQ;
