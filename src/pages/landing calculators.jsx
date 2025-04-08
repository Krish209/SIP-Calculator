import React, { useState } from 'react';

const InvestmentLandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // Investment products data
  const investmentProducts = [
    {
      id: 'ppf',
      title: "Public Provident Fund (PPF)",
      description: "A long-term savings scheme with tax benefits under Section 80C.",
      features: [
        "15-year maturity period (extendable in blocks of 5 years)",
        "Current interest rate: 7.1% (compounded annually)",
        "Minimum deposit: ₹500 per year, Maximum: ₹1.5 lakh",
        "Tax-free returns at maturity",
        "Partial withdrawals allowed from 7th year"
      ],
      benefits: [
        "Eligible for tax deduction under Section 80C",
        "Risk-free government-backed investment",
        "Loan facility available between 3rd and 6th year"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'nps',
      title: "National Pension System (NPS)",
      description: "A voluntary retirement savings scheme that helps you save for retirement.",
      features: [
        "Two account types: Tier I (pension account) and Tier II (investment account)",
        "Choice of investment options (Equity, Corporate Bonds, Government Securities)",
        "Partial withdrawal allowed under specific conditions",
        "Mandatory annuity purchase (40%) at maturity"
      ],
      benefits: [
        "Additional tax benefit of ₹50,000 under Section 80CCD(1B)",
        "Low-cost pension scheme",
        "Portable across jobs and locations"
      ],
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'sip',
      title: "Systematic Investment Plan (SIP)",
      description: "Invest fixed amounts regularly in mutual funds to build wealth over time.",
      features: [
        "Invest as low as ₹500 per month",
        "Flexible frequency (monthly, quarterly, etc.)",
        "Rupee cost averaging reduces market timing risk",
        "Wide range of fund categories to choose from"
      ],
      benefits: [
        "Disciplined approach to investing",
        "Power of compounding over long term",
        "Flexibility to increase/decrease SIP amounts",
        "Option to pause or stop anytime"
      ],
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'lumpsum',
      title: "Lumpsum Investment",
      description: "One-time investment in mutual funds or other instruments.",
      features: [
        "Suitable when you have a large amount to invest",
        "Better returns when markets are low",
        "No commitment to regular investments",
        "Easier portfolio management"
      ],
      benefits: [
        "Potential for higher returns in rising markets",
        "No need to remember periodic investments",
        "Simplified tracking of investments"
      ],
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'nsc',
      title: "National Savings Certificate (NSC)",
      description: "Fixed income investment scheme backed by Government of India.",
      features: [
        "5-year maturity period",
        "Current interest rate: 6.8% (compounded annually but payable at maturity)",
        "Minimum investment: ₹1,000 (no maximum limit)",
        "Interest earned is reinvested and qualifies for Section 80C deduction"
      ],
      benefits: [
        "Government-backed, risk-free investment",
        "Tax benefits under Section 80C",
        "No TDS on interest earned"
      ],
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 'ssy',
      title: "Sukanya Samriddhi Yojana (SSY)",
      description: "Savings scheme exclusively for girl children below 10 years.",
      features: [
        "Account can be opened up to age 10 and operates until girl turns 21",
        "Current interest rate: 7.6% (compounded annually)",
        "Minimum deposit: ₹250 per year, Maximum: ₹1.5 lakh",
        "Partial withdrawal (50% of balance) allowed after girl turns 18 for education/marriage"
      ],
      benefits: [
        "Higher interest rate than most fixed-income instruments",
        "Tax benefits under Section 80C",
        "Complete tax exemption on maturity"
      ],
      icon: (
        <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do I choose between SIP and Lumpsum investment?",
      answer: "SIP is generally recommended for most investors as it averages out market volatility through rupee cost averaging. Lumpsum works better when you have a large amount to invest and market valuations are reasonable. Our calculators can help you compare potential returns from both approaches."
    },
    {
      question: "What is the tax treatment for these investment options?",
      answer: "Tax treatment varies: PPF, NPS (Tier I), SSY offer EEE (Exempt-Exempt-Exempt) status. SIP/lumpsum in ELSS funds qualify for Section 80C deduction. NSC interest is taxable but qualifies for 80C. Our calculators show post-tax returns for accurate comparisons."
    },
    {
      question: "How accurate are the calculator projections?",
      answer: "Our calculators use current interest rates and historical return patterns for market-linked instruments. While we can't predict future returns with certainty, we provide realistic projections based on available data and let you adjust assumptions to see different scenarios."
    },
    {
      question: "Can I use multiple investment options together?",
      answer: "Absolutely! A diversified portfolio combining PPF/NSC for safety, SIP for growth, and NPS for retirement is often recommended. Our comparison tools help you see how different combinations can work together to meet your financial goals."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The PPF calculator helped me realize I could reach my ₹50 lakh retirement goal by increasing my annual contribution by just ₹10,000. The detailed year-by-year breakdown was incredibly helpful.",
      name: "Rajesh Mehta",
      role: "IT Professional, 38"
    },
    {
      quote: "As a freelancer without employer PF, the NPS calculator showed me how much I need to invest monthly to maintain my lifestyle post-retirement. The tax benefit projections were a bonus!",
      name: "Priya Nair",
      role: "Graphic Designer, 32"
    },
    {
      quote: "Comparing SIP vs Lumpsum for my bonus payout using these calculators saved me from making an emotional decision during market highs. The data-driven approach gave me confidence in my investment strategy.",
      name: "Amit Sharma",
      role: "Bank Manager, 45"
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Investment Planning Made Simple</h1>
            <p className="text-xl mb-8">
              Make informed decisions with our comprehensive suite of calculators for PPF, NPS, SIP, Lumpsum, NSC, SSY and more. Understand each scheme's features, benefits and tax implications.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              Explore All Calculators
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Use Our Investment Calculators?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our tools go beyond basic calculations to provide actionable insights for your financial planning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-blue-600 text-3xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Detailed Projections</h3>
              <p className="text-gray-700">
                Get year-by-year breakdowns of your investments, including principal, interest earned, and maturity amounts.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl">
              <div className="text-indigo-600 text-3xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Tax Impact Analysis</h3>
              <p className="text-gray-700">
                Understand how different investments affect your tax liability with pre-tax and post-tax return comparisons.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="text-purple-600 text-3xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Goal Planning</h3>
              <p className="text-gray-700">
                Calculate how much you need to invest regularly to reach specific financial goals like retirement or education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Investment Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Detailed information about each investment scheme to help you make informed decisions.
            </p>
          </div>
          
          <div className="space-y-12">
            {investmentProducts.map((product) => (
              <div key={product.id} id={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <div className="text-center">
                      {product.icon}
                      <h3 className="text-2xl font-bold mt-4 text-gray-800">{product.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Try {product.title} Calculator
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investment Options Comparison</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how different investment options stack up against each other.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">PPF</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">NPS</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">SIP</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">NSC</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">SSY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700">Lock-in Period</td>
                  <td className="py-3 px-4">15 years</td>
                  <td className="py-3 px-4">Till retirement (60 years)</td>
                  <td className="py-3 px-4">3 years (ELSS)</td>
                  <td className="py-3 px-4">5 years</td>
                  <td className="py-3 px-4">21 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-700">Tax Benefit</td>
                  <td className="py-3 px-4">EEE (80C)</td>
                  <td className="py-3 px-4">EEE + additional ₹50k</td>
                  <td className="py-3 px-4">ELSS: 80C (₹1.5L)</td>
                  <td className="py-3 px-4">80C (interest taxable)</td>
                  <td className="py-3 px-4">EEE (80C)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700">Risk Level</td>
                  <td className="py-3 px-4">Risk-free</td>
                  <td className="py-3 px-4">Low to Moderate</td>
                  <td className="py-3 px-4">Moderate to High</td>
                  <td className="py-3 px-4">Risk-free</td>
                  <td className="py-3 px-4">Risk-free</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-700">Returns</td>
                  <td className="py-3 px-4">7.1% (fixed)</td>
                  <td className="py-3 px-4">8-12% (market-linked)</td>
                  <td className="py-3 px-4">10-15% (equities)</td>
                  <td className="py-3 px-4">6.8% (fixed)</td>
                  <td className="py-3 px-4">7.6% (fixed)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700">Best For</td>
                  <td className="py-3 px-4">Long-term safe savings</td>
                  <td className="py-3 px-4">Retirement planning</td>
                  <td className="py-3 px-4">Wealth creation</td>
                  <td className="py-3 px-4">Medium-term goals</td>
                  <td className="py-3 px-4">Girl child future</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Compare More Options
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Investors Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from people who used our calculators to make better investment decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about investment planning.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none py-3"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="mt-2 text-gray-600 pb-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use our calculators to create a personalized investment plan tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              Get Started with Calculators
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
              Learn Investment Basics
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Calculators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our tools give you accurate projections and comprehensive
              understanding of investments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Detailed Explanations
              </h3>
              <p className="text-gray-600">
                Understand each investment scheme thoroughly with our guides.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-indigo-600"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Comparison Tools
              </h3>
              <p className="text-gray-600">
                Compare different investment options side by side.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-indigo-600"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tax Implications
              </h3>
              <p className="text-gray-600">
                Learn about tax benefits for each investment option.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentLandingPage;