import React, { useState } from "react";

const NPSFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "Who is eligible to open an NPS account?",
      answer:
        "Any Indian citizen between the ages of 18 and 60 is eligible to open an NPS account, including both salaried and self-employed individuals. NRIs (Non-Resident Indians) can also participate in NPS.",
    },
    {
      question: "Can I have more than one NPS account?",
      answer:
        "No, multiple NPS accounts for a single individual are not allowed and there is no necessity also as the NPS is fully portable across sectors and locations.",
    },
    {
      question:
        "Can I use more than 40% of my accumulated pension wealth to purchase the annuity at the time of exit from NPS upon attaining the age of 60 years?",
      answer:
        "Yes, a subscriber at the time of attaining the age of 60 years can purchase annuity up to 100% of his accumulated pension wealth.",
    },
    {
      question: "Can an NRI open an NPS account?",
      answer:
        "Yes, a NRI can open an NPS account. Contributions made by NRI are subject to regulatory requirements as prescribed by RBI and FEMA from time to time. If the subscriber's citizenship status changes, his/ her NPS account would be closed.",
    },

    {
      question: "What is the minimum contribution required for NPS?",
      answer:
        "For a Tier I account, the minimum contribution is ₹500 per month. For a Tier II account, the minimum contribution is ₹1,000 per year of account opening.",
    },
    {
      question: "How is the NPS corpus managed?",
      answer:
        "The NPS corpus is managed by professional Pension Fund Managers (PFMs). You can select an asset class based on your risk appetite: equity, corporate bonds, or government securities. The PFMs charge a nominal management fee for managing the fund.",
    },
    {
      question: "What are the tax benefits of NPS?",
      answer:
        "Contributions to NPS are eligible for tax deductions under Section 80C (up to ₹1.5 lakh) and Section 80CCD(1B) (additional ₹50,000). The maturity corpus is partially tax-free: 60% of the accumulated corpus can be withdrawn tax-free, while 40% must be used to purchase an annuity, which is taxed as per income tax slabs.",
    },
    {
      question: "Can I withdraw from NPS before the age of 60?",
      answer:
        "Partial withdrawals are allowed from the 3rd year under specific conditions such as for higher education, medical emergencies, or marriage. However, full withdrawal before the age of 60 is generally not allowed except in cases of permanent disability or death.",
    },
    {
      question: "How is the pension paid out in NPS?",
      answer:
        "Upon reaching the age of 60, you must withdraw at least 40% of the accumulated corpus as a lump sum. The remaining 60% must be used to purchase an annuity, which will provide a regular pension. The annuity options are offered by approved insurance companies.",
    },
    {
      question: "Can I take a loan against my NPS balance?",
      answer:
        "Yes, you can take a loan against your NPS balance from the 3rd year of your account. The loan amount can be up to 25% of the balance at the end of the previous year.",
    },
    {
      question: "What happens after the maturity period of NPS?",
      answer:
        "After the maturity period (typically 15 years), you can either withdraw the entire accumulated corpus or extend the account in blocks of 5 years with contributions. The extended period allows for further contributions and continues to earn returns based on the chosen asset classes.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - NPS
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

export default NPSFAQ;
