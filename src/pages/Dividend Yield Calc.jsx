import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import DividendYieldInfo from "./Dividend Yield Info";

function DividendYieldCalc() {
  const [annualDividend, setAnnualDividend] = useState(10); // Default ₹1,000
  const [sharePrice, setSharePrice] = useState(500); // Default ₹50
  const [dividendYield, setDividendYield] = useState(0); // Dividend Yield

  const maxAnnualDividend = 1000000; // Maximum for annual dividend
  const maxSharePrice = 1000000; // Maximum for share price

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    annualDividend: "",
    sharePrice: "",
  });

  useEffect(() => {
    if (annualDividend < 0) {
      setErrorMessages((prev) => ({
        ...prev,
        annualDividend: "Annual dividend must be greater than zero",
      }));
    } else if (sharePrice <= 0) {
      setErrorMessages((prev) => ({
        ...prev,
        sharePrice: "Share price must be greater than zero",
      }));
    } else {
      setErrorMessages({
        annualDividend: "",
        sharePrice: "",
      });

      // Calculate Dividend Yield
      const yieldValue = (annualDividend / sharePrice) * 100;
      setDividendYield(yieldValue);
    }
  }, [annualDividend, sharePrice]);

  // Handlers for inputs
  const handleAnnualDividendChange = (e) => {
    const value = Math.max(
      0,
      Math.min(Number(e.target.value), maxAnnualDividend)
    );
    setAnnualDividend(value);
  };

  const handleSharePriceChange = (e) => {
    const value = Math.max(0, Math.min(Number(e.target.value), maxSharePrice));
    setSharePrice(value);
  };

  // For Schema
  const pageTitle = "Dividend Calculator - Estimate Dividend Income & Yield";
  const pageDescription = "Calculate your expected dividend income and yield based on shares held and dividend declared. Plan your income from equity investments more effectively.";
  const canonicalUrl = "https://www.sipgo.in/dividend-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>Dividend Calculator - Estimate Earnings from Stocks</title>
        <meta name="description" content="Calculate your dividend income and yield with our dividend calculator. Useful for long-term investors and passive income seekers." />
        <meta name="keywords" content="Dividend Calculator, Dividend Income, Stock Yield, Passive Income, Dividend Yield Calculator" />
        <link rel="canonical" href="https://www.sipgo.in/dividend-calculator" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipgo.in/dividend-calculator" />
        <meta property="og:title" content="Dividend Calculator - Estimate Earnings from Stocks" />
        <meta property="og:description" content="Calculate your dividend income and yield with our dividend calculator. Useful for long-term investors and passive income seekers." />
        <meta property="og:image" content="https://www.sipgo.in/images/dividend-calculator-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dividend Calculator - Estimate Earnings from Stocks" />
        <meta name="twitter:description" content="Calculate your dividend income and yield with our dividend calculator. Useful for long-term investors and passive income seekers." />
        <meta name="twitter:image" content="https://www.sipgo.in/images/dividend-calculator-twitter.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dividend Calculator",
            description: "Calculate your dividend income and yield with our dividend calculator. Useful for long-term investors and passive income seekers.",
            url: "https://www.sipgo.in/dividend-calculator",
            "@id": "https://www.sipgo.in/dividend-calculator",
            hasPart: [
              { "@type": "FAQPage", "@id": "https://www.sipgo.in/dividend-calculator#faq" },
              { "@type": "Article", "@id": "https://www.sipgo.in/dividend-calculator#guide" }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/dividend-calculator#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sipgo.in/" },
              { "@type": "ListItem", position: 2, name: "Dividend Calculator", item: "https://www.sipgo.in/dividend-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 mb-4">
        Dividend Yield Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg rounded-xl py-4 lg:py-8 p-2 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Annual Dividend */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="flex justify-between items-center">
                <label id="annual-dividend-label" className="font-medium">
                  Annual Dividend (₹)
                </label>
                <div className="relative w-32">
                  <input
                    type="number"
                    value={annualDividend}
                    onChange={handleAnnualDividendChange}
                    className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                      errorMessages.annualDividend ? "border-red-500" : ""
                    }`}
                    placeholder="1000"
                  />
                  <span className="absolute left-4 top-2.5 text-gray-500">
                    ₹
                  </span>
                </div>
              </div>
              {errorMessages.annualDividend && (
                <p className="text-red-500 text-[13px]">
                  {errorMessages.annualDividend}
                </p>
              )}
              <input
                type="range"
                min="100"
                max={maxAnnualDividend}
                step="1000"
                value={annualDividend}
                onChange={handleAnnualDividendChange}
                className="w-full cursor-pointer"
                aria-labelledby="annual-dividend-label"
              />
            </div>

            {/* Share Price */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="flex justify-between items-center">
                <label id="share-price-label" className="font-medium">
                  Share Price (₹)
                </label>
                <div className="relative w-32">
                  <input
                    type="number"
                    value={sharePrice}
                    onChange={handleSharePriceChange}
                    className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                      errorMessages.sharePrice ? "border-red-500" : ""
                    }`}
                    placeholder="50"
                  />
                  <span className="absolute left-4 top-2.5 text-gray-500">
                    ₹
                  </span>
                </div>
              </div>
              {errorMessages.sharePrice && (
                <p className="text-red-500 text-[13px]">
                  {errorMessages.sharePrice}
                </p>
              )}
              <input
                type="range"
                min="100"
                max={maxSharePrice}
                step="100"
                value={sharePrice}
                onChange={handleSharePriceChange}
                className="w-full cursor-pointer"
                aria-labelledby="share-price-label"
              />
            </div>
          </div>

          {/* Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Dividend Yield Result */}
              <div className="m-auto text-left text-[13px] sm:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Dividend Yield
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      {dividendYield ? `${dividendYield.toFixed(2)}%` : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DividendYieldInfo />
        </div>
      </div>
    </div>
  );
}

export default DividendYieldCalc;
