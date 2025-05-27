import { useState } from "react";
import {
  FiBookmark,
  FiShare2,
  FiMessageSquare,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaBitcoin,
  FaBookmark,
  FaEthereum,
  FaRegBookmark,
} from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const PremiumCryptocurrencyPost = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(142);
  const [comment, setComment] = useState("");
  const [activeTab, setActiveTab] = useState("article");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your comment submission logic here
    setComment("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-500 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                InvestWise Pro
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Research
              </a>
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Markets
              </a>
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Academy
              </a>
            </nav>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
              <span>Subscribe</span>
              <RiArrowRightUpLine className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Premium Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <a
            href="#"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Home
          </a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <a
            href="#"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Research
          </a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <a
            href="#"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Cryptocurrency
          </a>
          <FiChevronRight className="mx-2 w-4 h-4" />
          <span className="text-gray-400">Risk Analysis</span>
        </div>

        {/* Article Header */}
        <header className="mb-12 relative">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <span className="bg-indigo-100/80 text-indigo-800 text-xs px-3 py-1.5 rounded-full uppercase font-semibold tracking-wide border border-indigo-200/50">
                Premium Research
              </span>
              <span className="bg-emerald-100/80 text-emerald-800 text-xs px-3 py-1.5 rounded-full uppercase font-semibold tracking-wide border border-emerald-200/50">
                Updated Weekly
              </span>
            </div>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full ${
                isBookmarked
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-400 hover:bg-gray-100"
              } transition-colors duration-200`}
            >
              <FiBookmark
                className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
              />
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Cryptocurrency: Navigating Risk vs. Reward in 2024 Portfolios
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-inner">
                <span className="text-indigo-800 font-medium text-lg">MJ</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Michael Johnson</p>
                <p className="text-sm text-gray-500">Senior Crypto Analyst</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div>
                <p className="font-medium text-gray-700">Published</p>
                <p>April 15, 2024</p>
              </div>
              <div className="hidden md:block h-6 border-r border-gray-200"></div>
              <div>
                <p className="font-medium text-gray-700">Updated</p>
                <p>May 24, 2024</p>
              </div>
              <div className="hidden md:block h-6 border-r border-gray-200"></div>
              <div>
                <p className="font-medium text-gray-700">Reading Time</p>
                <p>9 min</p>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image with Crypto Badges */}
        <div className="mb-12 rounded-xl overflow-hidden relative group">
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-50 to-purple-50">
            <img
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
              alt="Cryptocurrency concept"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-6 left-6 flex space-x-3">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
              <FaBitcoin className="text-amber-500 w-5 h-5" />
              <span className="text-sm font-medium">Bitcoin</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-sm">
              <FaEthereum className="text-purple-500 w-5 h-5" />
              <span className="text-sm font-medium">Ethereum</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <p className="lead text-gray-700 font-medium text-xl">
            The cryptocurrency market has evolved from a niche interest to a
            mainstream asset class, presenting both unprecedented opportunities
            and significant risks for investors. Our 2024 analysis reveals key
            insights for portfolio allocation.
          </p>

          <div className="my-12 p-6 bg-gradient-to-br from-gray-900 to-indigo-900 rounded-xl text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-indigo-200">
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-indigo-400 mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Optimal crypto allocation ranges from 1-5% for balanced
                    portfolios
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-indigo-400 mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Dollar-cost averaging reduces volatility impact by 32%
                    compared to lump-sum
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-indigo-400 mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Institutional adoption driving correlation with traditional
                    assets to 0.46
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">
            Volatility Analysis: 2020-2024
          </h2>
          <p>
            Cryptocurrencies remain the most volatile mainstream asset class,
            with Bitcoin's 30-day volatility averaging 4.2% compared to 0.9% for
            the S&P 500. However, our research shows this volatility has
            decreased by 38% since 2020, signaling market maturation.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
            <p className="font-medium text-indigo-800">
              "The optimal cryptocurrency allocation for most investors is
              between 1-5% of total portfolio value—enough to participate in
              potential upside while limiting downside risk." — Global
              Investment Strategy Report, 2024
            </p>
          </div>

          {/* Interactive Chart Placeholder */}
          <div className="my-12 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">
                BTC vs S&P 500 Volatility (30-day)
              </h3>
              <div className="flex space-x-2">
                <button className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                  1Y
                </button>
                <button className="text-xs px-3 py-1 bg-indigo-600 text-white rounded-full">
                  3Y
                </button>
                <button className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                  5Y
                </button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-b from-indigo-50 to-white rounded-lg flex items-center justify-center text-gray-400">
              [Interactive Chart Placeholder]
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Hover over chart to explore volatility trends
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">
            Portfolio Construction Framework
          </h2>
          <p>
            Our proprietary framework evaluates crypto allocation across three
            dimensions: risk tolerance, investment horizon, and portfolio
            diversification needs.
          </p>

          {/* Premium Table */}
          <div className="my-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Risk Profile
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Allocation Range
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rebalancing
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Asset Mix
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Conservative
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">1-2%</td>
                  <td className="px-6 py-4 whitespace-nowrap">Quarterly</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    BTC 70%, ETH 30%
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Moderate
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">3-5%</td>
                  <td className="px-6 py-4 whitespace-nowrap">Monthly</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    BTC 50%, ETH 30%, Altcoins 20%
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Aggressive
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">5-10%</td>
                  <td className="px-6 py-4 whitespace-nowrap">Weekly</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    BTC 30%, ETH 30%, Altcoins 40%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Expert Quote */}
          <div className="my-12 bg-white border border-indigo-100 rounded-xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 bg-indigo-100 rounded-full opacity-20"></div>
            <div className="relative">
              <div className="text-5xl text-indigo-100 absolute -left-4 -top-4">
                "
              </div>
              <blockquote className="text-xl font-medium text-gray-700 mb-6 relative">
                The institutionalization of crypto markets is creating more
                stable valuation frameworks, but investors should maintain
                disciplined allocation strategies to manage tail risks.
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-800 font-medium">LT</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Lisa Thompson</p>
                  <p className="text-sm text-gray-500">
                    Chief Investment Officer, Digital Assets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Engagement Bar */}
        <div className="sticky bottom-6 mb-12 z-10">
          <div className="bg-white rounded-full shadow-lg p-3 max-w-max mx-auto border border-gray-200 backdrop-blur-sm bg-white/90">
            <div className="flex items-center space-x-4 px-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1.5 ${
                  isLiked
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-indigo-600"
                } transition-colors duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`}
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={isLiked ? 0 : 1.5}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span className="text-sm font-medium">{likes}</span>
              </button>

              <button className="flex items-center space-x-1.5 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <FiMessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">24</span>
              </button>

              <div className="h-5 border-r border-gray-200"></div>

              <button className="flex items-center space-x-1.5 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <FiShare2 className="w-5 h-5" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            #cryptocurrency
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            #portfolio-management
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            #risk-analysis
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            #digital-assets
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            #blockchain
          </span>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-inner">
                <span className="text-indigo-800 font-medium text-2xl">MJ</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                About the Author
              </h3>
              <p className="text-gray-700 mb-4">
                Michael Johnson is a Senior Crypto Analyst at InvestWise Pro
                with over 8 years of experience in digital asset research. He
                leads our cryptocurrency investment strategy and has been
                featured in CoinDesk, Bloomberg, and The Wall Street Journal.
              </p>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center space-x-1 transition-colors duration-200">
                <span>View all articles</span>
                <RiArrowRightUpLine className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Research */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Related Research
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-white text-xs px-2 py-1 rounded font-medium">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-3">
                    {item === 1 ? "Market Trends" : "Investment Strategies"}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {item === 1
                      ? "The Institutionalization of Crypto Markets"
                      : "Tax-Efficient Crypto Investing"}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {item === 1
                      ? "How hedge funds and corporations are changing the digital asset landscape"
                      : "Strategies to minimize tax liabilities while maximizing returns"}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>May {item === 1 ? "10" : "2"}, 2024</span>
                    <span className="mx-2">•</span>
                    <span>{item === 1 ? "11" : "8"} min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden relative mb-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 bg-indigo-700/20 rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Get Our Weekly Crypto Briefing
            </h3>
            <p className="text-indigo-200 mb-8">
              Join 25,000+ investors receiving our exclusive market analysis and
              portfolio strategies every Thursday.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 shadow-lg z-40">
        <div className="flex justify-between items-center">
          <button
            onClick={handleLike}
            className={`flex flex-col items-center ${
              isLiked ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isLiked ? "fill-current" : ""}`}
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={isLiked ? 0 : 1.5}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <span className="text-xs mt-1">{likes}</span>
          </button>

          <button className="flex flex-col items-center text-gray-500">
            <FiMessageSquare className="w-6 h-6" />
            <span className="text-xs mt-1">24</span>
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex flex-col items-center ${
              isBookmarked ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            {isBookmarked ? (
              <FaBookmark className="w-6 h-6 fill-current" />
            ) : (
              <FaRegBookmark className="w-6 h-6" />
            )}
            <span className="text-xs mt-1">Save</span>
          </button>

          <button
            onClick={() => shareArticle()}
            className="flex flex-col items-center text-gray-500"
          >
            <FiShare2 className="w-6 h-6" />
            <span className="text-xs mt-1">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumCryptocurrencyPost;
