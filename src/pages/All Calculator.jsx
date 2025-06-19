import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.

import { RiMoneyRupeeCircleLine, RiStockLine } from "react-icons/ri";
import {
  AiOutlineStock,
  AiOutlineHome,
  AiOutlineThunderbolt,
  AiOutlinePieChart,
} from "react-icons/ai";
import { ImInfinite } from "react-icons/im";
import { VscPercentage } from "react-icons/vsc";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { PiGraduationCap, PiStepsDuotone } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { FiClipboard } from "react-icons/fi";
import { FaChildDress } from "react-icons/fa6";
import { CgGirl } from "react-icons/cg";
import {
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { LuChartNoAxesCombined } from "react-icons/lu";

const AllCalculator = ({
  headingLevel: Heading = "h1",
  headingLevel2: Heading2 = "h2",
  isStandalonePage = false, // Add this prop when used as standalone page
}) => {
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
      icon: <HiOutlineUserGroup className="w-8 h-8 text-indigo-500" />,
      category: "Retirement",
      link: "/nps-calculator",
    },
    {
      title: "FD Calculator",
      description:
        "Calculate returns on Fixed Deposits with different interest rates.",
      icon: <AiOutlinePieChart className="w-8 h-8 text-indigo-500" />,
      category: "Fixed Income",
      link: "/fd-calculator",
    },
    {
      title: "EMI Calculator",
      description:
        "Calculate your Equated Monthly Installments for loans and mortgages.",
      icon: <FaRegCalendarAlt className="w-8 h-8 text-indigo-500" />,
      category: "Loans",
      link: "/emi-calculator",
    },
    {
      title: "Home Loan Calculator",
      description: "Plan your EMI and interest for buying your dream home.",
      category: "Loans",
      link: "/home-loan-calculator",
      icon: <AiOutlineHome className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Car Loan Calculator",
      description: "Calculate EMIs and total cost for your next car.",
      category: "Loans",
      link: "/car-loan-calculator",
      icon: <IoCarOutline className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Personal Loan Calculator",
      description: "Figure out monthly EMIs for your personal loan needs.",
      category: "Loans",
      link: "/personal-loan-calculator",
      icon: <TbPigMoney className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Education Loan Calculator",
      description: "Plan your education loan with repayment insights.",
      category: "Loans",
      link: "/education-loan-calculator",
      icon: <PiGraduationCap className="w-8 h-8 text-indigo-500" />,
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
      icon: <HiOutlineChartBar className="w-8 h-8 text-indigo-500" />,
      category: "Mutual Funds",
      link: "/sip-calculator",
    },
    {
      title: "Lumpsum Calculator",
      description:
        "Calculate returns on one-time investments and compare with SIP.",
      icon: <HiOutlineCalculator className="w-8 h-8 text-indigo-500" />,
      category: "Mutual Funds",
      link: "/lumpsum-calculator",
    },
    {
      title: "Step-Up SIP Calculator",
      description:
        "Estimate returns with annually increasing SIP contributions.",
      category: "Mutual Funds",
      link: "/step-up-sip-calculator",
      icon: <PiStepsDuotone className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "SWP Calculator",
      description:
        "Plan your Systematic Withdrawal Plan and see how long your money lasts.",
      icon: <GiReceiveMoney className="w-8 h-8 text-indigo-500" />,
      category: "Mutual Funds",
      link: "/swp-calculator",
    },
    {
      title: "GST Calculator",
      description: "Easily calculate GST for any price with reverse option.",
      category: "Investment",
      link: "/gst-calculator",
      icon: <GiTakeMyMoney className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "NSC Calculator",
      description:
        "Calculate returns on National Savings Certificates with tax implications.",
      icon: <FiClipboard className="w-8 h-8 text-indigo-500" />,
      category: "Tax-Saving",
      link: "/nsc-calculator",
    },
    {
      title: "SSY Calculator",
      description:
        "Plan Sukanya Samriddhi Yojana investments for your girl child.",
      icon: <FaChildDress className="w-8 h-8 text-indigo-500" />,
      category: "Savings",
      link: "/ssy-calculator",
    },
    {
      title: "Mutual Fund Returns",
      description: "Calculate returns from mutual fund investments with XIRR.",
      icon: <RiStockLine className="w-8 h-8 text-indigo-500" />,
      category: "Mutual Funds",
      link: "/mutual-fund-calculator",
    },
    {
      title: "Inflation Calculator",
      description: "See how inflation affects your money's purchasing power.",
      icon: <LuChartNoAxesCombined className="w-8 h-8 text-indigo-500" />,
      category: "Planning",
      link: "/inflation-calculator",
    },
    {
      title: "Simple Interest Calculator",
      description: "Calculate basic interest on principal and rate.",
      category: "Interest",
      link: "/simple-interest-calculator",
      icon: <VscPercentage className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Compound Interest Calculator",
      description: "See how compounding grows your wealth faster.",
      category: "Interest",
      link: "/compound-interest-calculator",
      icon: <ImInfinite className="w-8 h-8 text-indigo-500" />,
    },
  ];

  const categories = [
    "All",
    ...new Set(calculators.map((calc) => calc.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? calculators
      : calculators.filter((c) => c.category === activeCategory);

  // SEO Meta Variables (only for standalone)
  const pageTitle = "Financial Calculators - SIP, EMI, PPF, FD & More | SIPGo";
  const pageDescription =
    "Comprehensive suite of 20+ financial calculators for SIP, mutual funds, loans, tax-saving investments, and retirement planning. Compare returns instantly.";
  const canonicalUrl = "https://www.sipgo.in/calc";

  return (
    <div className="min-h-screen bg-gradient-to-br text-primary from-indigo-50 to-blue-50">
      {/* Conditional SEO Meta */}
      {isStandalonePage && (
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />

          {/* hreflang implementation */}
          <link rel="alternate" hreflang="en" href={canonicalUrl} />
          <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

          {/* Open Graph */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={canonicalUrl} />
          <meta
            property="og:image"
            content="https://www.sipgo.in/images/calculators-preview.jpg"
          />

          {/* Twitter */}
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />

          {/* Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Financial Calculators Collection",
              description: pageDescription,
              url: canonicalUrl,
              numberOfItems: calculators.length,
              itemListElement: calculators.slice(0, 5).map((calc, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "FinancialProduct",
                  name: calc.title,
                  description: calc.description,
                  url: `https://www.sipgo.in${calc.link}`,
                },
              })),
            })}
          </script>
        </Helmet>
      )}
      {/* Calculator Categories */}
      <section className="max-w-7xl mx-auto py-4 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-8 md:mb-10">
          <Heading className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Explore Our Financial Calculators
          </Heading>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Tools for every stage of your financial journey
          </p>
        </div>

        {/* Categories Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-8">
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
            <article
              key={i}
              className="group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl"
            >
              <Link
                to={calc.link}
                className="block h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-4 sm:p-5 h-full flex flex-col">
                  <div className="flex gap-3 mb-3 items-center">
                    <div
                      className="p-2 bg-indigo-50 rounded-lg flex-shrink-0 flex items-center justify-center"
                      aria-label={`${calc.title} icon`}
                    >
                      {calc.icon}
                    </div>
                    <div className="flex-1">
                      <Heading2 className="text-base sm:text-lg font-semibold leading-snug group-hover:text-indigo-600 transition">
                        {calc.title}
                      </Heading2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-grow">
                    {calc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {calc.category}
                    </span>
                    <span className="text-indigo-600 font-medium flex items-center">
                      Try Now
                      <GoArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCalculator;
