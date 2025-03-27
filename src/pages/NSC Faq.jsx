import React, { useState } from "react";

const NSCFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is the National Savings Certificate (NSC)?",
      answer:
        "The National Savings Certificate (NSC) is a government-backed savings scheme in India that offers fixed returns and tax benefits. It is a popular investment option for individuals seeking a safe, low-risk investment with regular interest payments.",
    },
    {
      question: "Who is eligible to invest in NSC?",
      answer:
        "Any Indian resident individual, or a minor above 10 years of age can invest in NSC. It is not available for Non-Resident Indians (NRIs).",
    },
    {
      question: "What is the minimum and maximum amount I can invest in NSC?",
      answer:
        "The minimum investment amount for NSC is ₹100, with no upper limit on the investment. You can invest in multiples of ₹100. The maximum investment amount depends on the investor's preference, as there is no cap on the investment.",
    },
    
    {
      question: "How long is the investment term in NSC?",
      answer:
        "NSC has two main maturity periods: 5 years and 10 years. Both options offer fixed returns, but the 5-year NSC is more commonly chosen by investors.",
    },
    {
      question: "Is the interest earned on NSC taxable?",
      answer:
        "Yes, the interest earned on NSC is taxable under Income Tax. However, the interest is deemed to be reinvested and qualifies for a tax deduction under Section 80C up to ₹1.5 lakh, which reduces your taxable income.",
    },
    {
      question: "Can I transfer my NSC to someone else?",
      answer:
        "Yes, NSCs can be transferred to another person. The transfer can be done through an endorsement on the certificate itself, but only after the first 6 months from the date of issue. The transfer can be done to a family member or to any other eligible person.",
    },
    {
      question: "Can I withdraw my NSC before the maturity period?",
      answer:
        "No, NSCs cannot be redeemed before the maturity period. However, you can use your NSC as collateral to take a loan from a bank or financial institution.",
    },
    {
      question: "How can I purchase an NSC?",
      answer:
        "You can purchase NSCs at any post office in India. The application can be done by filling out a form and submitting the required documents. You will receive the NSC certificate after completing the purchase formalities.",
    },
    {
      question: "What happens after the maturity of my NSC?",
      answer:
        "After the maturity of your NSC, the principal amount along with the accrued interest is paid to you. If you wish to continue investing, you can invest in a new NSC with the same or a different term.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - NSC
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

export default NSCFAQ;
