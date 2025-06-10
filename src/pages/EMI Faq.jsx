import React, { useState } from "react";

const EMIFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is an EMI?",
      answer:
        "An EMI (Equated Monthly Installment) is a fixed monthly payment a borrower makes to a lender on a specific date. It includes both principal and interest and is used to repay a loan over a set period.",
    },
    {
      question: "What are the components of an EMI?",
      answer:
        "EMI consists of two parts: principal (the borrowed amount) and interest (the cost of borrowing). The EMI ensures both are paid off over the loan tenure.",
    },
    {
      question: "What factors affect the EMI amount?",
      answer:
        "1. Loan Amount\n2. Interest Rate\n3. Loan Tenure\n\nHigher loan amount, interest rate, or longer tenure increases the EMI.",
    },
    {
      question: "Can I prepay or make part payments to reduce my EMI?",
      answer:
        "Yes, many lenders allow prepayment or part payments which reduce the outstanding loan, lowering your EMI or loan tenure depending on lender terms.",
    },
    {
      question: "Is there a penalty for prepaying the EMI?",
      answer:
        "Some lenders may charge a prepayment penalty, while others don’t. Always check your loan agreement for prepayment terms.",
    },
    {
      question: "Can my EMI increase if interest rates rise?",
      answer:
        "For floating rate loans, EMI can increase if interest rates rise. For fixed-rate loans, EMI stays the same throughout the tenure.",
    },
    {
      question: "How does a longer loan tenure impact EMI?",
      answer:
        "Longer tenure lowers the EMI amount but increases total interest paid. Shorter tenure means higher EMI but less interest overall.",
    },
    {
      question: "Can I change the EMI amount during the loan tenure?",
      answer:
        "It depends on your lender. Some allow EMI changes through loan restructuring or refinancing. Check with your lender for options.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/emi-calculator#faq",
          "name": "EMI FAQs",
          "headline": "EMI FAQs",
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
        Frequently Asked Questions - EMI
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

export default EMIFAQ;
