import React, { useState } from "react";
import heroimg from "../assets/icons/invest.svg";
import AllCalculator from "../pages/All Calculator";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.

const HomeLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Hero Section */}
      <Helmet>
        <title>SIPGo - Smart Financial Calculators for Investment Planning</title>
        <meta 
          name="description" 
          content="Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns, compare investments & plan your financial future with SIPGo's accurate tools." 
        />
        <meta
          name="keywords"
          content="SIP calculator, investment calculator, mutual fund calculator, financial planning tools, PPF calculator, FD calculator, retirement planning, wealth management"
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sipgo.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipgo.in/" />
        <meta property="og:title" content="SIPGo - Smart Financial Calculators for Investment Planning" />
        <meta property="og:description" content="Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns, compare investments & plan your financial future." />
        <meta property="og:image" content="https://www.sipgo.in/images/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIPGo - Smart Financial Calculators for Investment Planning" />
        <meta name="twitter:description" content="Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns with accuracy." />
        <meta name="twitter:image" content="https://www.sipgo.in/images/logo.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SIPGo - Smart Financial Calculators for Investment Planning",
            "description": "Free online financial calculators for SIP, mutual funds, PPF, FD & more",
            "url": "https://www.sipgo.in/",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sipgo.in/"
              }]
            }
          })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-2xl min-h-[300px] sm:min-h-[350px] z-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smart <span className="text-yellow-300">Financial</span> Planning
              Starts Here
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Empower your investment decisions with our comprehensive suite of
              financial calculators. Get accurate projections and personalized
              insights for all your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/calc">
                <button className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
                  Explore All Calculators
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center z-1">
            <img
              src={heroimg}
              alt="Financial investment calculators and planning tools illustration"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto object-contain"
              // loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-blue-600">SIPGo</span> Simplifies
              Investing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get accurate investment projections in minutes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Select Calculator",
                desc: "Choose from 12+ specialized tools for SIP, PPF, FD, NPS, and more.",
                border: "border-blue-500",
                bg: "bg-blue-100",
                iconColor: "text-blue-600",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                ),
              },
              {
                step: "2",
                title: "Enter Details",
                desc: "Input investment amount, duration, and expected returns.",
                border: "border-green-500",
                bg: "bg-green-100",
                iconColor: "text-green-600",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                ),
              },
              {
                step: "3",
                title: "Get Smart Insights",
                desc: "Receive detailed projections, charts, and comparison tools.",
                border: "border-purple-500",
                bg: "bg-purple-100",
                iconColor: "text-purple-600",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                ),
              },
            ].map(({ step, title, desc, border, bg, iconColor, icon }, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border-t-4 ${border} transform hover:-translate-y-2`}
              >
                <div
                  className={`w-14 h-14 ${bg} rounded-lg flex items-center justify-center mb-6`}
                >
                  <svg
                    className={`w-6 h-6 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <div className={`${iconColor} font-bold text-sm mb-2`}>
                  STEP {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Our Calculators Stand Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools designed to give you the clearest financial picture.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Accurate Projections",
                description:
                  "Our calculators use precise formulas to give you realistic return estimates based on current market rates.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Comparison Tools",
                description:
                  "Easily compare different investment vehicles side by side to find what works best for your financial goals.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                ),
              },
              {
                title: "Tax Insights",
                description:
                  "Understand the tax advantages of each investment option to maximize your savings and returns.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Instant Results",
                description:
                  "Get calculations in real-time without waiting or submitting forms.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Detailed Reports",
                description:
                  "View comprehensive year-by-year breakdowns of your investment growth and projected returns.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                ),
              },
              {
                title: "Secure & Private",
                description:
                  "All calculations happen in your browser — we never see or store your financial data.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Categories */}
      <div>
        <AllCalculator headingLevel="h2" headingLevel2="h3"/>
      </div>
    </div>
  );
};

export default HomeLanding;
