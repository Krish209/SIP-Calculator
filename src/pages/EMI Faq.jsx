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
        "An EMI (Equated Monthly Installment) is a fixed monthly payment amount made by a borrower to a lender on a specific date each month. It is typically used to pay off a loan over a set period of time, which includes both principal and interest.",
    },
    {
      question: "How is EMI calculated?",
      answer:
        "EMI is calculated using a formula that factors in the loan amount, interest rate, and loan tenure. The formula for EMI is: \n\n EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1],\n where P = loan amount, r = monthly interest rate, and n = number of months.",
    },
    {
      question: "What are the components of an EMI?",
      answer:
        "An EMI consists of two components: the principal and the interest. The principal is the amount borrowed, while the interest is the charge for borrowing that amount. The EMI ensures that both the principal and interest are paid off over the loan tenure.",
    },
    {
      question: "What factors affect the EMI amount?",
      answer:
        "The EMI amount depends on the following factors:\n\n1. Loan Amount: The total amount you borrow.\n2. Interest Rate: The rate of interest charged by the lender.\n3. Loan Tenure: The duration over which the loan is to be repaid.\n\nA higher loan amount, higher interest rate, or longer loan tenure will lead to a higher EMI.",
    },
    {
      question: "Can I prepay my loan or make part payments to reduce the EMI?",
      answer:
        "Yes, most lenders allow borrowers to prepay or make part payments towards their loan. Prepayment can reduce the outstanding loan amount, which in turn reduces the EMI or the loan tenure, depending on the terms set by the lender.",
    },
    {
      question: "Is there any penalty for prepayment of EMI?",
      answer:
        "Some lenders may charge a penalty for prepayment or part payment, while others may allow it without any penalty. It is important to check the terms and conditions of the loan agreement with the lender before making any prepayments.",
    },
    {
      question: "Can my EMI be increased if the interest rate rises?",
      answer:
        "Yes, if the loan is on a floating interest rate, the EMI can increase if the interest rate goes up. However, if you have a fixed-rate loan, the EMI remains the same throughout the loan tenure, regardless of changes in interest rates.",
    },
    {
      question: "What is the impact of a longer loan tenure on EMI?",
      answer:
        "A longer loan tenure reduces the EMI amount because the loan amount is spread over a greater number of months. However, this means that you will pay more interest over the term of the loan. Conversely, a shorter loan tenure results in a higher EMI but lower overall interest payments.",
    },
    {
      question: "Can I change the EMI amount during the loan tenure?",
      answer:
        "It depends on the lender's policies. Some lenders allow modifications to the EMI amount during the loan tenure, usually through restructuring or refinancing options. It's best to consult with your lender to understand the available options.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EMIFAQ;
