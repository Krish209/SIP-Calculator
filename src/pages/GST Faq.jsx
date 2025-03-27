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
        "GST (Goods and Services Tax) is a single tax levied on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, Service Tax, and Excise Duty. GST is designed to streamline the tax structure and make the taxation system simpler and more transparent.",
    },
    {
      question: "What are the types of GST?",
      answer:
        "There are three main types of GST in India:\n\n1. **CGST (Central Goods and Services Tax)**: Collected by the central government on intra-state sales.\n2. **SGST (State Goods and Services Tax)**: Collected by the state government on intra-state sales.\n3. **IGST (Integrated Goods and Services Tax)**: Collected by the central government on inter-state sales, and distributed between the center and the state.",
    },
    {
      question: "Who needs to register for GST?",
      answer:
        "Businesses with a turnover exceeding ₹40 lakh (₹20 lakh for special category states) are required to register for GST. Additionally, businesses engaged in inter-state supply, e-commerce operators, or those receiving tax incentives may also need to register for GST.",
    },
    {
      question: "What is the GST rate in India?",
      answer:
        "GST rates in India vary depending on the type of goods and services. The tax rates are generally divided into the following slabs:\n\n1. **5%**: For essential goods and services.\n2. **12%**: For intermediate goods.\n3. **18%**: For standard goods and services.\n4. **28%**: For luxury and sin goods, such as tobacco and high-end cars.\n\nIn addition to these, some goods and services are exempt from GST or fall under special rates.",
    },
    {
      question: "What is GSTIN?",
      answer:
        "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit identification number assigned to businesses or entities registered under GST. This number is used to track the transactions and tax payments of the business.",
    },
    {
      question: "What is Input Tax Credit (ITC)?",
      answer:
        "Input Tax Credit (ITC) allows businesses to reduce the tax paid on their inputs (purchases) from the tax collected on their output (sales). This means that the tax you pay on the purchase of goods and services can be deducted from the tax you collect on sales, thus reducing the overall tax liability.",
    },
    {
      question: "What are the benefits of GST?",
      answer:
        "Some of the major benefits of GST are:\n\n1. Simplified tax structure with fewer taxes.\n2. Increased transparency in the taxation process.\n3. Reduced tax cascading (tax on tax).\n4. Boost to the economy by formalizing the business sector.\n5. Increased efficiency in the supply chain and reduction in logistics costs.\n6. Easier compliance with the help of GSTN (Goods and Services Tax Network).",
    },
    {
      question: "How is GST calculated?",
      answer:
        "GST is calculated as a percentage of the sale price of goods or services. The formula for GST calculation is:\n\nGST = Sale Price × GST Rate\n\nFor example, if a product is sold for ₹100 and the GST rate is 18%, the GST would be ₹100 × 18% = ₹18. The total sale price with GST would be ₹118.",
    },
    {
      question: "Is GST applicable on exports?",
      answer:
        "Exports are generally considered 'zero-rated' under GST, which means that exports are exempt from GST. However, businesses involved in exports can claim a refund on the input tax paid on purchases related to the exported goods or services. This is to ensure that exporters are not taxed on their exports.",
    },
    {
      question: "What happens if a business fails to comply with GST?",
      answer:
        "Failure to comply with GST regulations can result in penalties, interest on late payments, and potential legal action. Some common penalties include:\n\n1. Penalty for late filing of GST returns.\n2. Penalty for failure to pay GST.\n3. Penalty for incorrect or false information provided in GST returns.\n\nThe penalties vary depending on the nature of the violation.",
    },
    {
      question: "What are GST returns?",
      answer:
        "GST returns are the documents that businesses must file with the GST authorities to report their sales, purchases, and the amount of tax owed or refundable. Businesses must file monthly, quarterly, or annual GST returns depending on their turnover and type of registration. Some common GST returns are GST R-1 (sales return), GST R-3B (summary return), and GST R-9 (annual return).",
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
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GSTFAQ;
