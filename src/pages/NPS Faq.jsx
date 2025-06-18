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
        "Any Indian citizen aged between 18 and 60 years can open an NPS account, including salaried employees, self-employed individuals, and NRIs (Non-Resident Indians).",
    },
    {
      question: "Can I have more than one NPS account?",
      answer:
        "No, an individual can only have one NPS account. However, the account is portable across sectors and locations.",
    },
    {
      question:
        "Can I use more than 40% of my accumulated pension wealth to purchase an annuity at age 60?",
      answer:
        "Yes, at age 60, subscribers can use up to 100% of their accumulated pension wealth to buy an annuity.",
    },
    {
      question: "Can an NRI open an NPS account?",
      answer:
        "Yes, NRIs can open an NPS account. Contributions are subject to RBI and FEMA regulations. The account will be closed if citizenship status changes.",
    },
    {
      question: "What is the minimum contribution required for NPS?",
      answer:
        "The minimum contribution for a Tier I account is ₹500 per month, and for a Tier II account, it is ₹1,000 per year.",
    },
    {
      question: "How is the NPS corpus managed?",
      answer:
        "Professional Pension Fund Managers (PFMs) manage the NPS corpus. Investors can choose asset classes such as equity, corporate bonds, or government securities based on risk preference. PFMs charge a nominal management fee.",
    },
    {
      question: "What are the tax benefits of NPS?",
      answer:
        "Contributions qualify for tax deductions under Section 80C (up to ₹1.5 lakh) and Section 80CCD(1B) (additional ₹50,000). At maturity, 60% of the corpus can be withdrawn tax-free, while 40% used for annuity purchase is taxable.",
    },
    {
      question: "Can I withdraw from NPS before age 60?",
      answer:
        "Partial withdrawals are allowed after 3 years for specific purposes like education, medical emergencies, or marriage. Full withdrawal before 60 is generally restricted except in cases of permanent disability or death.",
    },
    {
      question: "How is the pension paid out in NPS?",
      answer:
        "At 60, you must withdraw at least 40% of the corpus as a lump sum. The remaining 60% is used to purchase an annuity, which pays a regular pension from approved insurers.",
    },
    {
      question: "Can I take a loan against my NPS balance?",
      answer:
        "Yes, from the 3rd year onwards, loans up to 25% of the previous year’s balance are allowed.",
    },
    {
      question: "What happens after the maturity period of NPS?",
      answer:
        "After maturity (usually 15 years), you can withdraw the entire corpus or extend your account in 5-year blocks to continue contributing and earning returns.",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">

      {/* JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.sipgo.in/nps-calculator#faq",
          "name": "NPS FAQs",
          "headline": "NPS FAQs",
          "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer,
              "dateCreated": "2025-04-01",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".faq-answer"
              }
            },
          })),
        })}
      </script>

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
              <div className="faq-answer text-[14px] md:text-[15px] px-2 py-1 md:py-3">
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

export default NPSFAQ;
