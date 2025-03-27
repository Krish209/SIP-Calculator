import React, { useState } from "react";

const FDFaq = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What are the benefits of investing in an FD?",
      answer:
        "The key benefits of an FD are safety of principal, guaranteed returns, and flexibility in terms of tenure and interest payout. Fixed deposits are low-risk investments backed by the government (in the case of banks and eligible financial institutions), offering predictable returns. The interest income is taxable, but tax-saving FDs provide tax benefits under Section 80C.",
    },
    {
      question: "What is the minimum and maximum tenure for an FD?",
      answer:
        "The minimum tenure for an FD is usually 7 days, and the maximum tenure is up to 10 years. The tenure can vary depending on the bank or financial institution. It’s important to choose a tenure based on your financial goals and liquidity requirements.",
    },
    
    {
      question: "Can I withdraw my FD before maturity?",
      answer:
        "Yes, you can withdraw your FD before maturity, but it usually comes with a penalty. The interest rate on premature withdrawals is typically lower than the originally agreed-upon rate, and the penalty amount can vary from bank to bank.",
    },
    {
      question: "Are there any tax benefits for FD investments?",
      answer:
        "Yes, tax-saving Fixed Deposits (with a lock-in period of 5 years) qualify for deductions under Section 80C of the Income Tax Act, up to ₹1.5 lakh per year. However, the interest earned on FDs is taxable as income, and tax will be deducted at source (TDS) if the interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year.",
    },
    {
      question: "What happens if I miss the interest payout on my FD?",
      answer:
        "If you miss the interest payout date on your FD, the bank will generally continue to credit the interest to your FD account. If the interest payout is due on maturity, the interest will be added to the principal and the maturity amount will include the interest accrued.",
    },
    {
      question: "Can I take a loan against my Fixed Deposit?",
      answer:
        "Yes, you can take a loan against your FD. Most banks offer loans up to 90% of the FD value. The loan interest rate is usually lower than personal loans because the FD acts as collateral. If the loan is not repaid, the bank can adjust the loan amount against your FD.",
    },
    {
      question: "How is FD interest paid?",
      answer:
        "The interest on an FD can be paid in various ways depending on the options you select at the time of investment. It can be paid monthly, quarterly, annually, or at maturity. If you opt for interest payout, it will be credited to your bank account. If you opt for reinvestment, the interest will be added to the principal and paid at maturity.",
    },
    {
      question: "Can I renew my FD after maturity?",
      answer:
        "Yes, you can choose to renew your FD after maturity. Banks offer the option of auto-renewal for FDs, where the principal and interest are reinvested for the same or a new tenure at the prevailing interest rates. You can also modify the tenure, the amount, and other details at the time of renewal.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - Fixed Deposit (FD)
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

export default FDFaq;
