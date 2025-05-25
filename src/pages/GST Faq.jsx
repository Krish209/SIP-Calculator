import React, { useState } from "react";

const GSTFAQ = () => {
  // State to keep track of active/close state of each question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active/close for each question
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const questions = [
    {
      question: "What is GST?",
      answer:
        "GST (Goods and Services Tax) is a single tax levied on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, Service Tax, and Excise Duty, simplifying the tax system for better transparency and ease of compliance.",
    },
    {
      question: "Who needs to register for GST?",
      answer:
        "Businesses with an annual turnover exceeding ₹40 lakh (₹20 lakh for special category states) must register for GST. Additionally, businesses involved in inter-state supply, e-commerce operators, or those receiving tax incentives are also required to register.",
    },
    {
      question: "What is the GST rate in India?",
      answer:
        "GST rates vary by goods and services category:\n\n1. 5% – Essential goods and services\n2. 12% – Intermediate goods\n3. 18% – Standard goods and services\n4. 28% – Luxury and sin goods (e.g., tobacco, luxury cars)\n\nSome goods and services are exempt or have special rates.",
    },
    {
      question: "What is GSTIN?",
      answer:
        "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit number assigned to businesses registered under GST. It is used to track tax payments and compliance.",
    },
    {
      question: "What is Input Tax Credit (ITC)?",
      answer:
        "Input Tax Credit (ITC) allows businesses to offset the tax paid on purchases against the tax collected on sales, reducing the overall tax liability.",
    },
    {
      question: "Is GST applicable on exports?",
      answer:
        "Exports are zero-rated under GST, meaning they are exempt from GST. Exporters can claim refunds on input taxes paid on goods or services related to exports, ensuring exports are not taxed.",
    },
    {
      question: "What happens if a business fails to comply with GST?",
      answer:
        "Non-compliance can lead to penalties, interest on late payments, and legal action. Penalties include late filing of returns, failure to pay GST, and providing incorrect information in returns. The penalty amount varies based on the violation.",
    },
    {
      question: "What are GST returns?",
      answer:
        "GST returns are periodic filings businesses submit to report sales, purchases, and tax liabilities. Depending on turnover and registration type, returns can be monthly, quarterly, or annual. Common forms include GST R-1 (sales), GST R-3B (summary), and GST R-9 (annual).",
    },
  ];

  return (
    <div className="mx-auto mb-4 text-primary">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
        Frequently Asked Questions - GST
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

export default GSTFAQ;
