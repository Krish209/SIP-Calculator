import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";

const AllCalculator = () => {
  // Data for calculators
  const calculators = [
    {
      title: "PPF Calculator",
      description:
        "Calculate returns on your Public Provident Fund investments with tax benefits.",
      icon: <RiMoneyRupeeCircleLine className="w-8 h-8 text-indigo-500" />,
      category: "Tax-Saving",
      link: "/ppf-calculator",
    },
    {
      title: "NPS Calculator",
      description:
        "Plan your National Pension Scheme contributions for retirement.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      category: "Retirement",
      link: "/nps-calculator",
    },
    {
      title: "FD Calculator",
      description:
        "Calculate returns on Fixed Deposits with different interest rates.",
      icon: <AiOutlineStock className="w-8 h-8 text-indigo-500" />,    
      category: "Fixed Income",
      link: "/fd-calculator",
    },
    {
      title: "EMI Calculator",
      description:
        "Calculate your Equated Monthly Installments for loans and mortgages.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      category: "Loans",
      link: "/emi-calculator",
    },
    {
      title: "RD Calculator",
      description:
        "Calculate returns on your Recurring Deposits with monthly contributions.",
      icon: <AiOutlineStock className="w-8 h-8 text-indigo-500" />,
      category: "Fixed Income",
      link: "/rd-calculator",
    },
    {
      title: "SIP Calculator",
      description:
        "Calculate returns on your Systematic Investment Plans with compounding.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      category: "Mutual Funds",
      link: "/sip-calculator",
    },
    {
      title: "Lumpsum Calculator",
      description:
        "Calculate returns on one-time investments and compare with SIP.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      category: "Mutual Funds",
      link: "/lumpsum-calculator",
    },
    {
      title: "GST Calculator",
      description: "Easily calculate GST for any price with reverse option.",
      category: "Investment",
      link: "/gst-calculator",
      icon: <span className="text-2xl">💼</span>,
    },
    {
      title: "NSC Calculator",
      description:
        "Calculate returns on National Savings Certificates with tax implications.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      category: "Tax-Saving",
      link: "/nsc-calculator",
    },
    {
      title: "SSY Calculator",
      description:
        "Plan Sukanya Samriddhi Yojana investments for your girl child.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      category: "Savings",
      link: "/ssy-calculator",
    },
    {
      title: "Mutual Fund Returns",
      description: "Calculate returns from mutual fund investments with XIRR.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      category: "Mutual Funds",
      link: "/mutual-fund-returns",
    },
    {
      title: "Inflation Calculator",
      description: "See how inflation affects your money's purchasing power.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      category: "Planning",
      link: "/inflation-calculator",
    },

    // INTEREST CALCULATORS
  {
    title: "Simple Interest Calculator",
    description: "Calculate basic interest on principal and rate.",
    category: "Interest",
    link: "/simple-interest-calculator",
    icon: <span className="text-2xl">➕</span>,
  },
  {
    title: "Compound Interest Calculator",
    description: "See how compounding grows your wealth faster.",
    category: "Interest",
    link: "/compound-interest-calculator",
    icon: <span className="text-2xl">♾️</span>,
  },
  ];

  const categories = ["All", ...new Set(calculators.map((calc) => calc.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? calculators : calculators.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Calculator Categories */}
      <section className="py-12 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Explore Our Financial Calculators
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Tools for every stage of your financial journey
          </p>
        </div>

        {/* Categories Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((calc, i) => (
            <Link 
              to={calc.link} 
              key={i} 
              className="group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl"
            >
              <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-5 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg flex-shrink-0">
                      {calc.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                      {calc.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-grow">
                    {calc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {calc.category}
                    </span>
                    <span className="text-indigo-600 font-medium flex items-center">
                      Try Now
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCalculator;
