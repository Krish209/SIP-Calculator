import React, { useState } from "react";
import heroimg from "../assets/icons/invest.svg";
import AllCalculator from "./All Calculator";
import { Link } from "react-router-dom";

const InvestmentCalculatorsLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}

      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smart <span className="text-yellow-300">Financial</span> Planning Starts Here
            </h1>
            <p className="text-xl mb-8 text-blue-100">
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
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroimg}
              alt="Investment tools"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-2 md:px-4 lg:px-6">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              How <span className="text-blue-600">SIPGo</span> Simplifies
              Investing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get accurate investment projections in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <div className="text-blue-600 font-bold text-sm mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Select Calculator
              </h3>
              <p className="text-gray-600">
                Choose from 12+ specialized tools for SIP, PPF, FD, NPS, and
                more
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="text-green-600 font-bold text-sm mb-2">
                STEP 2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enter Details
              </h3>
              <p className="text-gray-600">
                Input investment amount, duration, and expected returns
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              </div>
              <div className="text-purple-600 font-bold text-sm mb-2">
                STEP 3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get Smart Insights
              </h3>
              <p className="text-gray-600">
                Receive detailed projections, charts, and comparison tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Our Calculators Stand Out
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tools designed to give you the clearest financial picture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Accurate Projections
              </h3>
              <p className="text-gray-600">
                Our calculators use precise formulas to give you realistic
                return estimates based on current market rates.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Comparison Tools
              </h3>
              <p className="text-gray-600">
                Easily compare different investment vehicles side by side to
                find what works best for your financial goals.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tax Insights
              </h3>
              <p className="text-gray-600">
                Understand the tax advantages of each investment option to
                maximize your savings and returns.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Instant Results
              </h3>
              <p className="text-gray-600">
                Get calculations in real-time without waiting or submitting
                forms.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Detailed Reports
              </h3>
              <p className="text-gray-600">
                View comprehensive year-by-year breakdowns of your investment
                growth and projected returns.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                All calculations happen in your browser - we never see or store
                your financial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Categories */}
      <div>
        <AllCalculator />
      </div>
    </div>
  );
};

export default InvestmentCalculatorsLanding;
