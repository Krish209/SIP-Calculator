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
        "Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme for the girl child in India. It aims to support education and marriage expenses and offers a high interest rate with tax benefits.",
    },
    {
      question: "Who is eligible to open an SSY account?",
      answer:
        "Parents or legal guardians can open an SSY account for a girl child below 10 years of age. A maximum of two accounts is allowed for two different girls. It can be opened at any post office or authorized bank.",
    },
    {
      question: "What is the minimum and maximum investment in SSY?",
      answer:
        "You can invest a minimum of ₹250 and up to ₹1.5 lakh annually in SSY. Contributions are required for 14 years, and the account matures 21 years after opening.",
    },
    {
      question: "What is the interest rate on SSY?",
      answer:
        "As of 2025, the SSY interest rate is 7.6% per annum, compounded annually. The rate is set by the Government of India and revised quarterly.",
    },
    {
      question: "Can I withdraw from SSY before maturity?",
      answer:
        "Partial withdrawal (up to 50%) is allowed after the girl turns 18, usually for education. Early closure is permitted under specific conditions like the account holder’s death.",
    },
    {
      question: "Is the interest earned on SSY taxable?",
      answer:
        "No, the interest earned on SSY is completely tax-free. Contributions up to ₹1.5 lakh per year are eligible for tax deduction under Section 80C of the Income Tax Act.",
    },
    {
      question: "What is the tenure of an SSY account?",
      answer:
        "SSY has a maturity period of 21 years from the date of opening. Contributions are mandatory only for the first 14 years; the account continues to earn interest until maturity.",
    },
    {
      question: "Can I transfer my SSY account?",
      answer:
        "Yes, the SSY account can be transferred between post offices or authorized banks using a simple application form, maintaining the same account benefits.",
    },
    {
      question: "Can the SSY account be a joint account?",
      answer:
        "No, joint accounts are not allowed. SSY accounts are single-holder accounts opened in the name of the girl child and operated by a parent or guardian.",
    },
    {
      question: "What happens after SSY account maturity?",
      answer:
        "Upon maturity after 21 years, the account balance can be fully withdrawn by the account holder (the girl). The account can also remain open and earn interest without further deposits.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/ssy-calculator#faq",
          "name": "SSY FAQs",
          "headline": "SSY FAQs",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
              "dateCreated": "2025-04-01",
            },
          })),
        })}
      </script>

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

export default SSYFAQ;
